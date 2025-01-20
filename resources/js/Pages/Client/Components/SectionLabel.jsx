import React from "react";

const SectionLabel = ({ icon, label }) => {
    return (
        <div className="space-y-1">
            {icon}
            <p className="text-sm">{label}</p>
        </div>
    );
};

export default SectionLabel;
