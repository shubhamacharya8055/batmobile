"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  EMAIL_REGEX,
  FIRSTNAME_REGEX,
  LASTNAME_REGEX,
  PHONE_REGEX,
} from "@/lib/constants";
import { useState } from "react";
import supabase from "@/services/supabase";
import { useToast } from "@/components/ui/use-toast";

export default function ApplyForm({ job }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const { toast } = useToast()

  const handleOnSubmit = async (formData) => {
      try {
      setIsSubmitting(true)
      const resumeFile = formData.resume[0];

      if (resumeFile.type !== "application/pdf") {
        console.error("Please upload a PDF file for your resume.");
        return;
      }

      const fileExt = resumeFile.name.split(".").pop();
      const resumeFileName = `${job.keyword}_${formData.firstName}_${formData.lastName}.${fileExt}`;
        const imagePath = `https://fzieeqwjktjculuyfweg.supabase.co/storage/v1/object/public/resumes/${resumeFileName}`;

      const { error: resumeError } = await supabase.storage
        .from("resumes")
        .upload(resumeFileName, resumeFile, {
          contentType: "application/pdf", // Set the content type explicitly
        });

      if (resumeError) {
          console.error("Resume upload failed. Please try again."); // Display error toast
        return;
      }

      const { error: applicantError } = await supabase
      .from("job_seekers")
      .insert({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        role: job.keyword,
        resume: imagePath, // Store the public resume URL
      });

    if (applicantError) {
      console.error("Error submitting application:", applicantError);
      return;
    }

    reset()
    } catch (error) {
        console.log(error)
        toast({
            variant: "destructive",
            title: "Something went wrong.",
            description: "Please Apply Again",
        })
    } finally {
        toast({
            title: "Congrats",
            description: "You have successfully applied for the job",
            variant:"default",
            duration: 2000,
            swipeDirection: "up"
        })
        setIsSubmitting(false)
        reset()

    }
  };

  return (
    <div className="flex flex-col gap-y-5 w-full">
      <h1 className="text-center text-3xl text-darkBlue font-semibold">
        Apply Now
      </h1>

      <form
        className="mx-auto h-fit flex flex-col gap-y-4 text-darkBlue w-3/4"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex gap-x-3">
          <div className="flex flex-col gap-y-2">
            <Label className="text-sm cursor-pointer" htmlFor="firstName">
              First Name
            </Label>
            <Input
              name="firstName"
              id="firstName"
              {...register("firstName", {
                required: "The field is required",
                pattern: {
                  value: FIRSTNAME_REGEX,
                  message: "The firstName should not include digits or space",
                },
              })}
            />
            {errors?.firstName && (
              <p className="text-xs text-red-600">
                {errors?.firstName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <Label className="text-sm cursor-pointer" htmlFor="lastName">
              Last Name
            </Label>
            <Input
              name="lastname"
              id="lastname"
              {...register("lastName", {
                required: "The field is required",
                pattern: {
                  value: LASTNAME_REGEX,
                  message: "The lastName should not include digits or space",
                },
              })}
            />
            {errors?.lastName && (
              <p className="text-xs text-red-600">{errors?.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="flex flex-col gap-y-2">
            <Label className="text-sm cursor-pointer" htmlFor="email">
              Email
            </Label>
            <Input
              name="email"
              id="email"
              {...register("email", {
                required: "The field is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Please enter the valid email",
                },
              })}
            />
            {errors?.email && (
              <p className="text-xs text-red-600">{errors?.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <Label className="text-sm cursor-pointer" htmlFor="phoneNumber">
              Phone Number
            </Label>
            <Input
              name="phoneNumber"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "The field is required",
                pattern: {
                  value: PHONE_REGEX,
                  message: "Please enter the 10 digits",
                },
              })}
            />
            {errors?.phoneNumber && (
              <p className="text-xs text-red-600">
                {errors?.phoneNumber.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <Label className="text-sm cursor-pointer" htmlFor="role">
            Role
          </Label>
          <Input
            name="role"
            id="role"
            className="text-black"
            value={job.keyword}
            disabled
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label className="text-sm cursor-pointer" htmlFor="resume">
            Resume
          </Label>
          <Input
            name="resume"
            id="resume"
            type="file"
            {...register("resume", {
              required: "The field is required",
            })}
          />
          {errors?.resume && (
            <p className="text-xs text-red-600">{errors?.resume.message}</p>
          )}
        </div>

        <button
        disabled={isSubmitting}
        type="submit" className={`${isSubmitting && "cursor-not-allowed bg-teal/55"} bg-teal text-white font-semibold py-2`}>
          Apply
        </button>
      </form>
    </div>
  );
}
