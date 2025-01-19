import React from "react";
import ClientLayout from "@/Layouts/ClientLayout";
import Carousel from "./Partials/HeroCarousel";
import AboutSection from "./Partials/AboutSection";

const OPTIONS = { loop: true };
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
            <div className="h-screen bg-accent-primary"></div>
        </ClientLayout>
    );
};

export default Home;
