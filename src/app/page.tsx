"use client";

import { Fieldset, Field, Label } from "../components/fieldset";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { useState } from "react";
import EmailPreviewModal from "../components/email-preview-modal";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const generateMailtoLink = () => {
    const to = "representative@example.com";
    const subject = "Support Science Budget Increase";
    const body = `Dear Representative,\n\nI urge you to vote in favor of increasing the science budget in Portugal.\n\nSincerely,\n${formData.name}\n${formData.email}`;
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          <Button type="button" onClick={generateMailtoLink}>
            Generate Email
          </Button>
          <Button type="button" onClick={openModal}>
            Preview Email
          </Button>
        </Fieldset>
      </form>
      <EmailPreviewModal
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={formData}
      />
    </div>
  );
}
