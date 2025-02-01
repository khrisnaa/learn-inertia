import React from "react";
import ClientLayout from "@/Layouts/ClientLayout";
import Carousel from "./Partials/HeroCarousel";
import AboutSection from "./Partials/AboutSection";
import RecomendedTourSection from "./Partials/RecomendedTourSection";
import ParallaxCarousel from "./Partials/ParallaxCarousel";
import TestimonialsSection from "./Partials/TestimonialsSection";
import FaqSection from "./Partials/FaqSection";
import ContactSection from "./Partials/ContactSection";
import packageTours from "@/data/package-tours.json";

const OPTIONS = { loop: true };
const OPTIONS2 = { loop: false };
const IMAGES = [
    "/assets/images/dummy_hero.jpg",
    "/assets/images/image_2.jpeg",
    "/assets/images/image_3.jpeg",
    "/assets/images/image_5.jpeg",
];

const Home = ({ highlightTours, recommendedTours }) => {
    console.log(recommendedTours);
    return (
        <ClientLayout>
            <Carousel slides={highlightTours} options={OPTIONS} />
            <AboutSection />
            <RecomendedTourSection recommendedTours={recommendedTours} />
            <TestimonialsSection />
            <FaqSection />
            <ContactSection />
        </ClientLayout>
    );
};

export default Home;
