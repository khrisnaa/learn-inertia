import AvatarInput from "@/Components/AvatarInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, router, useForm, usePage } from "@inertiajs/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            avatar: null,
            country: user.country,
            city: user.city,
        });

    const submit = (e) => {
        e.preventDefault();

        router.post(route("profile.update"), {
            _method: "patch",
            ...data,
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form
                onSubmit={submit}
                className="mt-6 space-y-6 text-primary"
                encType="multipart/form-data"
            >
                <div className="flex items-start">
                    <AvatarInput
                        id="avatar"
                        name="avatar"
                        className="mt-1 block w-full"
                        defaultValue={user.avatar}
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            setData("avatar", file || null);
                        }}
                    />

                    <InputError className="mt-2" message={errors.avatar} />
                </div>

                <div className="flex gap-8">
                    <div className="w-full space-y-4">
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                className="mt-1 block w-full focus:border-primary"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                                autoComplete="name"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.name}
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                className="mt-1 block w-full focus:border-primary"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                                autoComplete="username"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.email}
                            />
                        </div>
                    </div>

                    <div className="w-full space-y-4">
                        <div>
                            <InputLabel htmlFor="country" value="Country" />

                            <TextInput
                                id="country"
                                className="mt-1 block w-full focus:border-primary"
                                value={data.country}
                                onChange={(e) =>
                                    setData("country", e.target.value)
                                }
                                required
                                autoComplete="off"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.country}
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="city" value="City" />

                            <TextInput
                                id="city"
                                className="mt-1 block w-full focus:border-primary"
                                value={data.city}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                                required
                                autoComplete="off"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.city}
                            />
                        </div>
                    </div>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
