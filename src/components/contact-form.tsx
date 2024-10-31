"use client";

import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to send message");

      // Reset form using ref
      if (formRef.current) {
        formRef.current.reset();
      }

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato!",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Erro ao enviar mensagem.",
        description: "Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 uppercase text-sm text-stone-500"
    >
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          required
          className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-[160px] px-4 py-2 uppercase font-medium bg-stone-800 text-white hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
