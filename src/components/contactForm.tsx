"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {Spinner} from "@nextui-org/react";
import '@/app/fonts.css';

export function EmployeeForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [formState, setFormState] = useState("");
  async function submitForm(event: { preventDefault: () => void; currentTarget: any; stopPropagation: () => void; }) {
    setFormState("Sending");
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const formData = new FormData();
      try {
        formData.append("Email", email);
        formData.append("Job", jobTitle);
        formData.append("Name", name);
        formData.append("Contact", mobile);
        formData.append("Location", location);
        await fetch(
            "https://script.google.com/macros/s/AKfycbwaNUjmeP0GPpVkCIwbGN2w2P8Far0DEvVtGUlf8GezZ3uOvK3o-aP5SNbuLIqZtW_lvw/exec",
            {
                method: "POST",
                body: formData,
              }
            );
        setFormState("Sent");
        setTimeout(() => {
          setName("");
          setJobTitle("");
          setEmail("");
          setMobile("");
          setLocation("");
          setFormState("");
        }, 5000);
      } catch (error) {
        console.error("Error:", error);
        setFormState("Error");
        setTimeout(() => {
          setFormState("");
        }, 5000);
      }
  }

  return (
    <div className="w-full lg:w-auto rounded-none md:rounded-2xl">
      <form className="py-8" onSubmit={submitForm}>
        <LabelInputContainer>
          <Label className="text-white font-primary" htmlFor="name">Name</Label>
          <Input id="name" name="Name" placeholder="Tyler Durden" type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label className="text-white font-primary" htmlFor="job">Job Title</Label>
          <Input id="job" name="Job Title" placeholder="Admin, HR, CTO..." type="text" value={jobTitle} onChange={(e)=>setJobTitle(e.target.value)} required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white font-primary" htmlFor="email">Email Address</Label>
          <Input id="email" name="Email" placeholder="hello@plateup.com" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white font-primary" htmlFor="mobile">Contact No.</Label>
          <Input id="mobile" name="Mobile" placeholder="+91 9876543210" type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white font-primary" htmlFor="location">Address</Label>
          <Input id="location" name="Location" placeholder="Mumbai, India" type="text" value={location} onChange={(e)=>setLocation(e.target.value)} required/>
        </LabelInputContainer>
        
        <button
          className="bg-gradient-to-br align-middle relative text-lg mx-auto block w-full px-8 text-white rounded-md h-12 font-medium hover:scale-110 transition-transform"
          type="submit"
          style={{background: "linear-gradient(90deg, #FFC700 0%, #FF5107 117.18%)"}}
        >
          {(formState === "") && "Send Response →"}
          {(formState === "Sending") &&  <Spinner color="default" className="font-bold"/>}
          {(formState === "Sent") && "Message Sent"}
          {(formState === "Error") && "Message can't be sent. Try Again!"}

        </button>
          <BottomGradient />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4 h-[1px] w-full" />
      </form>
    </div>
  );
}
export function CorporateForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState("");
  async function submitForm(event: { preventDefault: () => void; currentTarget: any; stopPropagation: () => void; }) {
    setFormState("Sending");
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const formData = new FormData();
      try {
        formData.append("Email", email);
        formData.append("Name", name);
        formData.append("Contact", mobile);
        formData.append("Location", location);
        formData.append("Message", message);
        await fetch(
            "https://script.google.com/macros/s/AKfycbwBfgjSKcj4S3713-DnJu8DGlyzdVrmMQxnJcecAvL1fU7otJWf5HXfkrWdla3NhNpXUg/exec",
            {
                method: "POST",
                body: formData,
              }
            );
            
        setFormState("Sent");
        setTimeout(() => {
          setName("");
          setEmail("");
          setMobile("");
          setLocation("");
          setMessage("");
          setFormState("");
        }, 5000);
      } catch (error) {
        console.error("Error:", error);
        setFormState("Error");
        setTimeout(() => {
          setFormState("");
        }, 5000);
      }
  }

  return (
    <div className="w-full lg:w-auto rounded-none md:rounded-2xl">
      <form className="py-8" onSubmit={submitForm}>
        <LabelInputContainer>
          <Label className="text-white font-primary" htmlFor="name">Name of an Organization</Label>
          <Input id="name" placeholder="Ambit Capital" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="my-3">
          <Label className="text-white font-primary" htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="hello@plateup.com" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="my-3">
          <Label className="text-white font-primary" htmlFor="mobile">Contact No.</Label>
          <Input id="mobile" placeholder="+91 9876543210" type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="my-3">
          <Label className="text-white font-primary" htmlFor="location">Location</Label>
          <Input id="location" placeholder="Mumbai, India" type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="my-3">
          <Label className="text-white font-primary" htmlFor="message">Enter your Message</Label>
          <Input id="message" placeholder="Type your message you want convey to Plateup" type="textarea" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br align-middle relative text-lg mx-auto block w-full px-8 text-white rounded-md h-12 font-medium hover:scale-110 transition-transform"
          type="submit"
          style={{background: "linear-gradient(90deg, #FFC700 0%, #FF5107 117.18%)"}}
        >
          {(formState === "") && "Send Response →"}
          {(formState === "Sending") &&  <Spinner color="default" className="font-bold"/>}
          {(formState === "Sent") && "Message Sent"}
          {(formState === "Error") && "Message can't be sent. Try Again!"}

        </button>
          <BottomGradient />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4 h-[1px] w-full" />
      </form>
    </div>
  );
}
export function MerchantForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState("");
  async function submitForm(event: { preventDefault: () => void; currentTarget: any; stopPropagation: () => void; }) {
    setFormState("Sending");
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const formData = new FormData();
      try {
        formData.append("Email", email);
        formData.append("Name", name);
        formData.append("Contact", mobile);
        formData.append("Location", location);
        formData.append("Message", message);
        await fetch(
            "https://script.google.com/macros/s/AKfycbyT1Zn9TPmNzXuWTtg2Ovr9Tds5xNd8MMPE5fWi50kplIOzu8EGdi6XV62N6-sDRiJUVQ/exec",
            {
                method: "POST",
                body: formData,
              }
            );
        setFormState("Sent");
        setTimeout(() => {
          setName("");
          setMessage("");
          setEmail("");
          setMobile("");
          setLocation("");
          setFormState("");
        }, 5000);
      } catch (error) {
        console.error("Error:", error);
        setFormState("Error");
        setTimeout(() => {
          setFormState("");
        }, 5000);
      }
  }

  return (
    <div className="w-full lg:w-auto rounded-none md:rounded-2xl">
      <form className="py-8" onSubmit={submitForm}>
        <LabelInputContainer>
          <Label className="text-white font-primary" htmlFor="name">Name of an Merchant</Label>
          <Input id="name" placeholder="Mumbai Zaikaa Restaurant" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white font-primary" htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="hello@plateup.com" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white font-primary" htmlFor="mobile">Contact No.</Label>
          <Input id="mobile" placeholder="+91 9876543210" type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white font-primary" htmlFor="location">Location</Label>
          <Input id="location" placeholder="Mumbai, India" type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white font-primary" htmlFor="message">Enter your Message</Label>
          <Input id="message" placeholder="Type your message you want convey to Plateup" type="textarea" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br align-middle relative text-lg mx-auto block w-full px-8 text-white rounded-md h-12 font-medium hover:scale-110 transition-transform"
          type="submit"
          style={{background: "linear-gradient(90deg, #FFC700 0%, #FF5107 117.18%)"}}
        >
          {(formState === "") && "Send Response →"}
          {(formState === "Sending") &&  <Spinner color="default" className="font-bold"/>}
          {(formState === "Sent") && "Message Sent"}
          {(formState === "Error") && "Message can't be sent. Try Again!"}

        </button>
          <BottomGradient />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
    </>
  );
};

type LabelInputContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const LabelInputContainer = ({
  children,
  className,
}: LabelInputContainerProps) => {
  return (
    <div className={cn("flex flex-col mb-1 w-full", className)}>
      {children}
    </div>
  );
};
