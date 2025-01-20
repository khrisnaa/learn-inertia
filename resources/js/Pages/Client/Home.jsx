import React from "react";
import ClientLayout from "@/Layouts/ClientLayout";
import Carousel from "./Partials/HeroCarousel";
import AboutSection from "./Partials/AboutSection";
import RecomendedTourSection from "./Partials/RecomendedTourSection";
import ParallaxCarousel from "./Partials/ParallaxCarousel";
import TestimonialsSection from "./Partials/TestimonialsSection";
import FaqSection from "./Partials/FaqSection";
import ContactSection from "./Partials/ContactSection";

const OPTIONS = { loop: true };
const OPTIONS2 = { loop: false };
const IMAGES = [
    "/assets/images/dummy_hero.jpg",
    "/assets/images/image_2.jpeg",
    "/assets/images/image_3.jpeg",
    "/assets/images/image_5.jpeg",
];

const Home = () => {
    return (
        <ClientLayout>
            <Carousel slides={IMAGES} options={OPTIONS} />
            <AboutSection />
            <RecomendedTourSection />
            <TestimonialsSection />
            <FaqSection />
            <ContactSection />
        </ClientLayout>
    );
};

export default Home;
