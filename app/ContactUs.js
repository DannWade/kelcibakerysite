import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactUs = () => {
  const form = useRef();
  const [isSent,setIsSent]= useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
  function handleSent(e){
        e.preventDefault();
        setIsSent(!isSent) 
       };

    emailjs.sendForm('danny_gmail', 'template_83bfeom', form.current, {
        publicKey: '6J5KWHLrTCorNhUW8',
      })
      .then(
        () => {
          handleSent(e)
          console.log('SUCCESS!');
          setTimeout(()=>{location.reload()},"3000")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} class="flex flex-col justify-center">
      <label class="mt-5">Name</label>
      <input class="h-9" type="text" name="user_name" />
      <label class="mt-5">Email</label>
      <input class="h-9" type="email" name="user_email" />
        <label class="mt-5">Message</label>
        <textarea class="h-9" name="message" />
        <div class="flex justify-center mt-7">
            <button class={!isSent ? "border-solid bg-miamiGreen border w-40 h-10 text-white rounded-md":"border-solid bg-lime-700 border w-40 h-10 text-white rounded-md" } type="submit" value="Send">{!isSent ? 'Send' : "Sent!"}</button>
        </div>
    </form>
  );
};