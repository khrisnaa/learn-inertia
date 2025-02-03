import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { cn } from "@/lib/utils";

const ExploreZoomParallax = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const opacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
    const borderRadius = useTransform(scrollYProgress, [0.2, 1], [8, 0]);

    const pictures = [
        {
            src: "/assets/images/dummy_hero.jpg",
            scale: scale4,
        },
        {
            src: "/assets/images/image_3.jpeg",
            scale: scale6,
        },
        {
            src: "/assets/images/image_3.jpeg",
            scale: scale6,
        },
        {
            src: "/assets/images/image_3.jpeg",
            scale: scale5,
        },
        {
            src: "/assets/images/image_3.jpeg",
            scale: scale6,
        },
        {
            src: "/assets/images/image_3.jpeg",
            scale: scale8,
        },
        {
            src: "/assets/images/image_3.jpeg",
            scale: scale8,
        },
    ];

    return (
        <div ref={container} className="h-[300vh] hidden md:block relative">
            <div className="sticky top-0 h-screen flex justify-center items-center overflow-hidden p-4">
                <motion.p
                    style={{ opacity }}
                    className="z-10 text-5xl font-semibold"
                >
                    Keep scrolling for more adventures!
                </motion.p>
                {pictures.map(({ src, scale }, i) => {
                    return (
                        <motion.div
                            key={i}
                            className="w-full h-full absolute top-0 flex items-center justify-center"
                            style={{ scale }}
                        >
                            <motion.div
                                style={{ borderRadius }}
                                className={cn(
                                    "h-[25vh] w-[25vw] overflow-hidden relative",
                                    i == 1 &&
                                        "-top-[33vh] right-[5vw] h-[30vh] w-[35vw]",
                                    i == 2 &&
                                        "-top-[16vh] left-[25vw] h-[60vh] w-[20vw]",
                                    i == 3 && "-left-[27vw] h-[28vh] w-[25vw] ",
                                    i == 4 &&
                                        "-top-[28vh] -left-[32vw] h-[18vh] w-[15vw]",
                                    i == 5 &&
                                        "-bottom-[30vh] -right-[15vw]  h-[25vh] w-[30vw] ",
                                    i == 6 &&
                                        "-bottom-[30vh]  -left-[15vw] h-[25vh] w-[25vw]"
                                )}
                            >
                                <img
                                    src={src}
                                    alt="image"
                                    className="object-cover w-full h-full "
                                />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ExploreZoomParallax;
