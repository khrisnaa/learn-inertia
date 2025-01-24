import React from "react";
import ContactForm from "./Partials/ContactForm";
import ClientLayout from "@/Layouts/ClientLayout";
import ContactSection from "./Partials/ContactSection";

const Contact = () => {
    return (
        <ClientLayout>
            <ContactForm />
            <ContactSection />
        </ClientLayout>
    );
};

export default Contact;
