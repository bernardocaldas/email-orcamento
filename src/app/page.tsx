"use client";

import { Fieldset, Field, Label } from "../components/fieldset";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { useState } from "react";
import { EmailPreviewModal } from "../components/email-preview-modal";
import { ChangeEvent, FormEvent } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleEmailClick = () => {
    const recipient = "bernardo@caldas.pt";
    const subject = "Your Subject Here";
    const body = `Email: ${formData.email}`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.click();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <Fieldset>
          <Field>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Field>
          <Button type="button" onClick={handleEmailClick}>
            Generate Email
          </Button>
          <Button type="button" onClick={openModal}>
            Preview Email
          </Button>
        </Fieldset>
      </form>
      <EmailPreviewModal
        open={isModalOpen}
        onClose={closeModal}
        formData={formData}
      />
    </div>
  );
}