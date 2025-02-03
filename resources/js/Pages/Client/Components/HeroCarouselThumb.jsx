import React from "react";

export const Thumb = (props) => {
    const { selected, index, onClick, image, title, desc } = props;

    return (
        <div
            onClick={onClick}
            type="button"
            className={`cursor-pointer relative overflow-hidden select-none space-y-8 ${
                selected ? "" : ""
            }`}
        >
            <div className="w-full absolute text-sm top-0 left-0 font-grotesk before:content-[''] before:absolute before:-translate-y-1/2 before:top-1/2 before:left-0 before:ml-8 before:mr-2 before:right-0 before:h-1 before:bg-secondary before:rounded-full">
                {(index + 1).toString().padStart(2, "0")}
            </div>

            <div
                className={`bg-white/30 backdrop-blur-md rounded-xl transition-all duration-500 h-32 md:h-36 ${
                    selected ? "w-32 md:w-96" : "w-16 md:w-16 "
                }`}
            >
                <div className="inline-flex h-full gap-4 p-3 w-full">
                    <div className="aspect-square rounded-lg relative overflow-hidden">
                        <img
                            src={image}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div
                        className={`flex-1 flex-col justify-between ${
                            selected ? "hidden md:flex" : "hidden  "
                        }`}
                    >
                        <h3 className="text-xl tracking-custom line-clamp-2 custom-spacing">
                            {title}
                        </h3>
                        <p className="line-clamp-1">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
