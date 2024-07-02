"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL_REGEX, FIRSTNAME_REGEX } from "@/lib/constants";
import { useForm } from "react-hook-form";
import {motion} from "framer-motion"
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

export default function Page() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function startConversation(name, email, message) {
    const encodedSubject = encodeURIComponent("Looking forward to get started with you").replace(/%20/g, '+'); 
    const encodedBody = encodeURIComponent(`Hi, I'm ${name}. ${message}`).replace(/%20/g, '+'); 
    const mailParams = new URLSearchParams({
      subject: encodedSubject,
      body: encodedBody,
    });
  
    const mailtoLink = `mailto:batMobile@gmail.com?${mailParams}`;
    window.location.href = mailtoLink;
  }
  

  const handleOnSubmit = ({name,email,message}) => {
    startConversation(name,email,message)
  }

  return (
    <div className="min-w-full min-h-full">
        <ProgressBar />
      <div className="w-full h-full px-16 py-10">
        <h1 className="xl:text-5xl text-4xl text-darkBlue font-semibold text-center">
          Get Started with us
        </h1>

        <form className="xl:w-1/2 mx-auto flex flex-col gap-y-5 mt-10"
        onSubmit={handleSubmit(handleOnSubmit)}
        >
          <div className="flex flex-col gap-y-2">
            <Label className="text-sm cursor-pointer" htmlFor="name">
                Name
            </Label>
            <Input
              name="name"
              id="name"
              {...register("name", {
                required: "The field is required",
                pattern: {
                  value: FIRSTNAME_REGEX,
                  message: "The name should not include digits or space",
                },
              })}
            />
            {errors?.name && (
              <p className="text-xs text-red-600">{errors?.name.message}</p>
            )}
          </div>
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
            <Label className="text-sm cursor-pointer" htmlFor="message">
                Message
            </Label>
            <Textarea
              name="message"
              id="message"
              {...register("message", {
                required: "The field is required",
              })}
            />
            {errors?.message && (
              <p className="text-xs text-red-600">{errors?.message.message}</p>
            )}
          </div>
          <motion.button
                            className="bg-gradient-to-r from-teal to-blue-500 text-white text-xs xl:text-sm font-bold py-2 px-4 rounded-md
                         shadow-lg shadow-teal-500/50 hover:shadow-xl hover:shadow-blue-500/70
                         transition duration-300 ease-in-out"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>Submit</motion.button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
