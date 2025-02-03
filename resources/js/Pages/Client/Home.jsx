import React from "react";
import ClientLayout from "@/Layouts/ClientLayout";
import Carousel from "./Partials/HeroCarousel";
import AboutSection from "./Partials/AboutSection";
import RecomendedTourSection from "./Partials/RecomendedTourSection";
import TestimonialsSection from "./Partials/TestimonialsSection";
import FaqSection from "./Partials/FaqSection";
import ContactSection from "./Partials/ContactSection";

const OPTIONS = { loop: true };

const Home = ({ highlightTours, recommendedTours, faqs, categories, auth }) => {
    const tours = highlightTours.map((highlightTour) => highlightTour.tour);
    return (
        <ClientLayout>
            <Carousel slides={tours} options={OPTIONS} />
            <AboutSection />
            <RecomendedTourSection
                categories={categories}
                recommendedTours={recommendedTours}
            />
            <TestimonialsSection />
            <FaqSection faqs={faqs} />
            {/* <ContactSection /> */}
        </ClientLayout>
    );
};

export default Home;
