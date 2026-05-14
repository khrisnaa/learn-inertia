import React from "react";
import { Marquee } from "@/Components/ui/marquee";
import { motion } from "motion/react";
const CategoryScroll = ({ categories }) => {
    const xx = "data";
    return (
        <div className="h-full overflow-hidden relative">
            <div className="flex flex-col z-[1] relative items-end gap-4 p-4 px-8">
                <Marquee vertical className="[--duration:20s]">
                    {categories.map((category, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            className="text-3xl text-end"
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                            }}
                        >
                            {category.name}
                        </motion.a>
                    ))}
                </Marquee>
            </div>
            <div className="bg-gradient-to-t z-[2] cursor-pointer from-accent-primary/80 via-accent-primary/60 to-transparent w-full h-1/4 absolute bottom-0 right-0" />
        </div>
    );
};

export default CategoryScroll;
