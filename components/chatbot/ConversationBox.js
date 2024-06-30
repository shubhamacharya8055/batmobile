"use client"

import React, { useState, useEffect, useRef } from 'react';
import { User, Bot } from 'lucide-react';
import { emailRegex, initialMessages } from '@/lib/constants';
import supabase from '@/services/supabase';


function ConversationBox({ isOpen, setIsOpen }) {
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState(initialMessages);
    const inputRef = useRef(null);
    const nameRegex = /^[a-zA-Z]+$/;

    useEffect(() => {
    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

    setChatMessages([{ from: 'bot', text: `${greeting}! What's your name?` }]);
        inputRef.current?.focus(); 
      }, [isOpen]); 


    // This code is only to ask username from user
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     if (!userInput.trim()) return; 
    
    //     setChatMessages([...chatMessages, { from: 'user', text: userInput }]);
    
    //     if (emailRegex.test(userInput)) {
    //       setTimeout(() => {
    //         setChatMessages([
    //           ...chatMessages,
    //           { from: 'user', text: userInput },
    //           { from: 'bot', text: 'Thank you for your email. Have a good day!' },
    //         ]);
    //         setTimeout(() => {
    //           setIsOpen(false); // Close after a delay
    //         }, 1500);
    //       }, 1000); // Delay before bot responds
    //     } else {
    //       setTimeout(() => {
    //         setChatMessages([
    //           ...chatMessages,
    //           { from: 'user', text: userInput },
    //           { from: 'bot', text: 'Incorrect email. Please provide a valid email.' },
    //         ]);
    //       }, 500); // Faster response for incorrect email
    //     }
    
    //     setUserInput(''); 
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!userInput.trim()) return; // Ignore empty input
    
        setChatMessages([...chatMessages, { from: 'user', text: userInput }]);
    
        const lastBotMessage = chatMessages.findLast(msg => msg.from === 'bot');
        const isAskingForEmail = lastBotMessage && lastBotMessage.text.includes('email');
    
        if (isAskingForEmail) {
          handleEmailInput();
        } else if (nameRegex.test(userInput)) {
          setTimeout(() => {
            setChatMessages([
              ...chatMessages,
              { from: 'user', text: userInput },
              { from: 'bot', text: `Hi ${userInput}! Please provide your email.` },
            ]);
          }, 1000); 
        } else {
          setTimeout(() => {
            setChatMessages([
              ...chatMessages,
              { from: 'user', text: userInput },
              { from: 'bot', text: 'Please enter a correct name with only alphabets.' },
            ]);
          }, 500); 
        }
    
        setUserInput('');
      };

      const handleEmailInput = async () => {

        if (emailRegex.test(userInput)) {
          // Get the name from previous messages
          const name = chatMessages.findLast(msg => msg.from === 'user' && nameRegex.test(msg.text))?.text;

          if (name) {
              try {
                  // Store the name and email in Supabase
                  const { error } = await supabase
                      .from('user_details')
                      .insert([{ name, email: userInput }]);

                  if (error) {
                      console.error('Error saving to Supabase:', error);
                      // Optionally, send a message to the user indicating the error
                  } else {
                      setTimeout(() => {
                          setChatMessages([
                              ...chatMessages,
                              { from: 'user', text: userInput },
                              { from: 'bot', text: 'Thank you for your email. Have a good day!' },
                          ]);
                          setTimeout(() => {
                              setIsOpen(false);
                          }, 1500);
                      }, 1000);
                  }

              } catch (error) {
                  console.error('Unexpected error:', error);
                 
              }
          } else {
              // Handle case where the name is not found
              setChatMessages([
                  ...chatMessages,
                  { from: 'bot', text: "I didn't catch your name. Please enter it again." },
              ]);
          }
      }

        // This code is only if you do not need username and email to been added to database
        // if (emailRegex.test(userInput)) {
        //   setTimeout(() => {
        //     setChatMessages([
        //       ...chatMessages,
        //       { from: 'user', text: userInput },
        //       { from: 'bot', text: 'Thank you for your email. Have a good day!' },
        //     ]);
        //     setTimeout(() => {
        //       setIsOpen(false);
        //     }, 1500);
        //   }, 1000);
        // } 
        else {
          setTimeout(() => {
            setChatMessages([
              ...chatMessages,
              { from: 'user', text: userInput },
              { from: 'bot', text: 'Incorrect email. Please provide a valid email.' },
            ]);
          }, 500);
        }
      };

  return (
    isOpen && (
      <div className="fixed bottom-24 right-24 bg-white p-4 z-[99999] rounded-md shadow-md max-w-sm w-full">
        <div className="overflow-y-auto max-h-96 mb-4">
          {chatMessages.map((message, index) => (
            <div key={index} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
              <div className={`${message.from === 'user' ? 'bg-blue-200' : 'bg-gray-200'} p-2 rounded-md flex items-center gap-x-2 justify-between`}>
                {message.from === 'user' ? <User size={12} /> : <Bot size={12} />}
                <span className="text-xs">{message.text}</span>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input 
            type="text" 
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-l-md focus:outline-none" 
          />
          <button type="submit" className="bg-darkBlue hover:bg-blue-700 text-white rounded-r-md p-2">
            Send
          </button>
        </form>
      </div>
    )
  );
}

export default ConversationBox;
