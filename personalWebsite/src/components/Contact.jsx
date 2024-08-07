import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d94ucwc', 'template_zbi299g', form.current, {
        publicKey: 'gDWhKSb43ooxB8T_g',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h2 className='mb-8 text-blue-500 font-semibold'>Contact</h2>
      <p>Message me if you would like to connect!</p>
        <div className="max-w-md w-full space-y-8">
          <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6 bg-white p-10 rounded-lg shadow-lg">
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2 mt-4">Message</label>
                <textarea
                  name="message"
                  required
                  className="py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Your message"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Contact;