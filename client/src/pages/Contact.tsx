import image4 from '../assets/4.jpg';
import { useState, useRef, RefObject } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form: RefObject<HTMLFormElement> = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        'service_lj3kjle',
        'template_i5g5pyk',
        form.current!,
        'eMS9W8yTfjLEFmLDT'
      )
      .then(
        (result) => {
          notify();
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      );
  };

  const notify = () =>
    toast.success('Email sent successfully!', {
      position: 'top-center',
      theme: 'light',
      autoClose: 3000,
    });

  const HandleClick = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 pt-10 pb-10 pl-10 pr-10 smm:flex-row ">
      <ToastContainer />
      <div className=" w-[95%] border-[1px] border-solid pb-8 pl-6 pr-6 ss:w-[70%] smm:w-[30%]">
        <form className="mt-10 space-y-6" ref={form} onSubmit={sendEmail}>
          <div className="form-group required">
            <label htmlFor="email">First and last name</label>
            <input
              name="user_name"
              type="text"
              placeholder="Jhon Doe"
              className="form-control mt-1"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group required">
            <label htmlFor="email">Email</label>
            <input
              name="user_email"
              type="email"
              placeholder="johndoe@example.com"
              className="form-control mt-1"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group required">
            <label htmlFor="email">How can we help ?</label>
            <textarea
              name="message"
              placeholder="White down your request"
              className="form-control mt-1 h-[200px]"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className=" flex items-center justify-center pt-8">
            <button
              type="submit"
              className=" rounded-sm bg-gray-900 pl-6 pr-6 pt-2 pb-2 text-sm font-medium text-white"
              value="Send"
              onClick={HandleClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <img
        src={image4}
        alt="Contact"
        className=" [95%] opacity-[0.8] ss:w-[70%] smm:w-[60%]"
      />
    </section>
  );
}
