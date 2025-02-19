"use client";
import { useState } from "react";
import { Heading } from "./Heading";
import clsx from "clsx";
import Button from "./Button";

type Props = {};

function ContactForm({}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = () => {
    const { name, email, message } = form;
    if (!name) {
      setError({ ...error, name: "Please enter your name" });
    }
    if (!email || /^\w+@\.\w{2,4}$/.test(email)) {
      setError({ ...error, email: "Please enter a valid email address" });
    }
    if (!message) {
      setError({ ...error, message: "Please enter a message" });
    }

    if (name && email && message) {
      // send form
      console.log(form);
      setSuccess(true);
    }
  };
  return (
    <form className="grid grid-cols-2 grid-rows-5 ~gap-3/4 ~mt-40/52 relative font-mono text-zinc-900">
      <div className="col-span-2 flex items-center justify-center">
        <Heading
          as="h3"
          size="md"
          className="input-cutout max-w-[360px] text-center text-brand-orange"
        >
          Let's get in touch
        </Heading>
      </div>
      {/* message input */}
      <div className="input-cutout mx-4 flex flex-col gap-2 items-center justify-center row-span-2 col-span-2 sm:col-span-1 sm:row-span-3 sm:row-start-2 bg-brand-gray flex-1 ~text-sm/lg ~px-2/3 ~py-3/4 transition-[filter,background-position] duration-300 hover:bg-bottom ">
        <textarea
          rows={7}
          placeholder="Your Message..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onFocus={() => setError({ ...error, message: "" })}
          className="w-full focus:border-0 focus:ring-0 focus:outline-none"
        />
        <div className="~h-[1rem]/[1.78rem]">
          <span
            className={clsx(
              "~text-xs/lg text-brand-orange font-semibold transition-opacity duration-300 ease-out",
              error.message ? "text-opacity-100" : "text-opacity-0"
            )}
          >
            {error.message}
          </span>
        </div>
      </div>
      {/* name input */}
      <div className="input-cutout mx-4 flex flex-col gap-y-1 items-center justify-center sm:row-start-2 ~h-12/16 bg-brand-gray transition-[filter,background-position] duration-300 hover:bg-bottom  ">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onFocus={() => setError({ ...error, name: "" })}
          className="w-full bg-brand-gray ~text-sm/lg px-1  focus:border-0 focus:ring-0 focus:outline-none"
        />
        <div className="~h-[1rem]/[1.78rem] absolute bottom-0 pointer-events-none">
          <span
            className={clsx(
              "~text-xs/md text-brand-orange font-semibold transition-opacity duration-300 ease-out",
              error.name ? "text-opacity-100" : "text-opacity-0"
            )}
          >
            {error.name}
          </span>
        </div>
      </div>
      {/* email input */}
      <div className="input-cutout mx-4 flex flex-col gap-y-1 items-center justify-center sm:col-start-2  sm:row-start-3 ~h-12/16 bg-brand-gray transition-[filter,background-position] duration-300 hover:bg-bottom  ">
        <input
          type="email"
          placeholder="name@exmaple.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onFocus={() => setError({ ...error, email: "" })}
          className="w-full bg-brand-gray ~text-sm/lg px-1  focus:border-0 focus:ring-0 focus:outline-none"
        />
        <div className="~h-[1rem]/[1.78rem] absolute bottom-0 pointer-events-none">
          <span
            className={clsx(
              "~text-xs/lg text-brand-orange font-semibold transition-opacity duration-300 ease-out",
              error.email ? "text-opacity-100" : "text-opacity-0"
            )}
          >
            {error.email}
          </span>
        </div>
      </div>
      {/* submit */}
      <Button
        className="col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-4 items-center justify-center max-h-fit -mt-32 sm:mt-0 w-full max-w-60 place-self-center"
        onClick={onSubmit}
        size="md"
        color="purple"
        type="button"
      >
        Send
      </Button>
    </form>
  );
}

export default ContactForm;
