import AvatarInput from "@/Components/AvatarInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        avatar: "",
        country: "",
        city: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="space-y-6"
            >
                <h4 className="font-light text-3xl uppercase text-secondary">
                    Sign up
                </h4>
                <Separator />
                <div className="flex gap-4 items-end">
                    <div>
                        <AvatarInput
                            id="avatar"
                            name="avatar"
                            className="mt-1 block w-full"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                setData("avatar", file || null);
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="off"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="off"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex gap-4">
                    <div className="mt-4 w-full">
                        <InputLabel htmlFor="city" value="City" />

                        <TextInput
                            id="city"
                            type="text"
                            name="city"
                            value={data.city}
                            className="mt-1 block w-full"
                            autoComplete="off"
                            onChange={(e) => setData("city", e.target.value)}
                            required
                        />

                        <InputError message={errors.city} className="mt-2" />
                    </div>
                    <div className="mt-4 w-full">
                        <InputLabel htmlFor="country" value="Country" />

                        <TextInput
                            id="country"
                            type="text"
                            name="country"
                            value={data.country}
                            className="mt-1 block w-full"
                            autoComplete="off"
                            onChange={(e) => setData("country", e.target.value)}
                            required
                        />

                        <InputError message={errors.country} className="mt-2" />
                    </div>
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="off"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="off"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route("login")}
                        className="rounded-md text-sm text-secondary underline hover:text-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <Button
                        variant="secondary"
                        className="ms-4"
                        disabled={processing}
                    >
                        Register
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
