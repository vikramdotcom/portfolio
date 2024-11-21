import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xpwzljbl");
  if (state.succeeded) {
    return <p>Message sent successfully. Thank You!😎</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Name</label> <br />
      <input id="text" type="text" name="Name" className="text-zinc-800 w-80 h-8 rounded-sm " required/> <br /> <br />
      <label htmlFor="email">Email Address</label> <br />
      <input id="email" type="email" name="Email" className="text-zinc-800 w-80 h-8 rounded-sm " required />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />{" "}
      <br /> <br /> <br />
      
      <textarea id="message" name="message" className="text-zinc-800 w-80 h-40 rounded-sm " required placeholder="message" />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />{" "}
      <br /> <br /> 
      <button type="submit" disabled={state.submitting} className="bg-[#FF74FD] text-zinc-700 p-3 rounded-3xl tracking-wider">
        Submit
      </button>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
