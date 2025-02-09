import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import ClientLayout from "@/Layouts/ClientLayout";
import OrderHistory from "./Partials/OrderHistory";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <ClientLayout>
            <Head title="Profile" />
            <div className="py-24">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-secondary p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="w-full"
                        />
                    </div>
                    <OrderHistory />
                </div>
            </div>
        </ClientLayout>
    );
}
