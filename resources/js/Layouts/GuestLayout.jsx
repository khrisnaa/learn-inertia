import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-accent-primary pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden bg-primary shadow-xl backdrop-blur-lg p-6 sm:max-w-lg sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
