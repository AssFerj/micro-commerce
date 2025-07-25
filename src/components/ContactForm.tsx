'use client'

import { ChevronRight } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from "react";

type FormInputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS Service ID, Template ID, or Public Key is not defined. Cannot send email.');
            alert('Configuration error: Unable to send message at this time.');
            setSending(false); // Ensure sending state is reset
            return;
        }

        try {
            setSending(true);
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: 'Nova mensagem de: ' + data.name + '\n\n' + 'Email: ' + data.email + '\n\n' + 'Assunto: ' + data.subject + '\n\n' + 'Mensagem: ' + '\n\n' + data.message,
                },
                publicKey
            );
            setSent(true);
            reset();
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
        } finally {
            setSending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
            {sent && (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
                    Mensagem enviada com sucesso!
                </div>
            )}
            
            <input
                {...register("name", { required: "Nome é obrigatório" })}
                type="text"
                placeholder="Nome"
                className="p-4 border border-gray-300 rounded-lg w-full"
            />
            {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}

            <input
                {...register("email", {
                    required: "Email é obrigatório",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido"
                    }
                })}
                type="email"
                placeholder="Email"
                className="p-4 border border-gray-300 rounded-lg w-full"
            />
            {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}

            <input
                {...register("subject", { required: "Assunto é obrigatório" })}
                type="text"
                placeholder="Assunto"
                className="p-4 border border-gray-300 rounded-lg w-full"
            />
            {errors.subject && (
                <span className="text-red-500 text-sm">{errors.subject.message}</span>
            )}

            <textarea
                {...register("message", { required: "Mensagem é obrigatória" })}
                placeholder="Mensagem"
                className="p-4 border border-gray-300 rounded-lg w-full"
            ></textarea>
            {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}

            <button
                type="submit"
                disabled={sending}
                className="bg-primary text-white px-8 py-3 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {sending ? "Enviando..." : "Enviar"} 
                {!sending && <ChevronRight size={20} className="ml-2" />}
            </button>
        </form>
    );
}