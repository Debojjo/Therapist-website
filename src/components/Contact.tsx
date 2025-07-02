"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type FormData = {
  name: string;
  phone: string;
  email: string;
  reason: string;
  time: string;
  agree: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    reason: "",
    time: "",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!formData.phone) errs.phone = "Phone is required";
    if (!formData.reason) errs.reason = "Please tell us what brings you here";
    if (!formData.time) errs.time = "Preferred time is required";
    if (!formData.agree) errs.agree = "You must agree to be contacted";
    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);

      setFormData({
        name: "",
        phone: "",
        email: "",
        reason: "",
        time: "",
        agree: false,
      });

      setErrors({}); 
    } else {
      setErrors(errs);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <div className="w-[90%] h-[90%] sm:w-full sm:max-w-xl mx-auto px-10 sm:px-6 md:px-8 py-16 bg-[#f4f7f8] rounded-lg border">
      <h2 className="text-3xl text-center mb-6 font-serif text-emerald-950 font-semibold">
        Get In Touch
      </h2>
      <p className="font-serif text-sm text-center font-extralight mb-4">
        Simply fill out the brief fields below and Dr. Blake will be in touch
        with you soon, usually within one business day. This form is safe,
        private, and completely free.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <Label htmlFor="name" className="mb-2 block">
            Name
          </Label>
          <Input name="name" value={formData.name} onChange={handleChange} />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="mb-2 block">
            Phone
          </Label>
          <Input name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="mb-2 block">
            Email
          </Label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="reason" className="mb-2 block">
            What brings you here?
          </Label>
          <Textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          />
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
          )}
        </div>

        <div>
          <Label htmlFor="time" className="mb-2 block">
            Preferred time to reach you
          </Label>
          <Input name="time" value={formData.time} onChange={handleChange} />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="agree"
            name="agree"
            checked={formData.agree}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, agree: Boolean(checked) })
            }
          />
          <Label htmlFor="agree" className="text-sm">
            I agree to be contacted.
          </Label>
        </div>
        {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

        <Button
          type="submit"
          className="w-full bg-emerald-900 text-white hover:bg-emerald-800"
        >
          Submit
        </Button>
        <p className="font-serif text-sm text-center font-extralight ">
          ⓒ By clicking submit you consent to receive texts and emails from Dr.
          Serena Blake
        </p>
      </form>
    </div>
  );
}
