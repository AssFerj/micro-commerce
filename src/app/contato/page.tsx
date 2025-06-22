"use client";
    
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contato () {
    return (
        <div>
            {/* Contact Section */}
            <section id="contact" className="p-4 md:p-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl text-secondary font-bold text-center mb-16">Entre em Contato</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="flex flex-1 flex-col items-start gap-2 md:gap-4">
                            <p className="text-gray-600 mb-4 max-w-[300px]">Se você precisa de produtos de qualidade e com ótimo custo benefício, entre em contato conosco.</p>
                            <a href="https://wa.me/5588997856905" className="flex items-center gap-2 hover:text-secondary transition" target="_blank" rel="noopener noreferrer">
                                <Phone size={18} />
                                <span className="text-sm md:text-base">(88) 99785-6905</span>
                            </a>
                            <a href="mailto:microcommerce@mail.com" className="flex items-center gap-2 hover:text-secondary transition" target="_blank" rel="noopener noreferrer">
                                <Mail size={18} />
                                <span className="text-sm md:text-base">microcommerce@mail.com</span>
                            </a>
                            <div className="flex items-center gap-2">
                                <MapPin size={18} />
                                <span className="text-sm md:text-base">Rua Antonio Zeferino veras 1685, Centro, Camocim, CE</span>
                            </div>
                        </div>
                        <div className="flex flex-1">
                            <ContactForm />
                        </div>
                    </div>
                </div>  
            </section>

            {/* Location Section */}
            <section id="location">
                <div>
                    <div className="flex justify-center">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.7006091472012!2d-40.85364592514752!3d-2.9023206395276264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ebdbdb372030b9%3A0x5dfecb807f64b67b!2sRua%20Ant%C3%B4nio%20Zeferino%20Veras%2C%201685%20-%20Centro%2C%20Camocim%20-%20CE%2C%2062400-000!5e0!3m2!1spt-PT!2sbr!4v1748185128012!5m2!1spt-PT!2sbr" 
                            width="600" 
                            height="450" 
                            style={{ border: 0, width: '100%' }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe> 
                    </div>
                </div>
            </section>
        </div>
    )
}   