import { Upload } from "lucide-react";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { Button } from "./ui/button";

const AvatarInput = forwardRef(
    (
        { className = "", isFocused = false, defaultValue, error, ...props },
        ref
    ) => {
        const inputRef = useRef(null);
        const [preview, setPreview] = useState(null);
        const [defaultPreview, setDefaultPreview] = useState(
            defaultValue ? `/storage/${defaultValue}` : null
        );

        useEffect(() => {
            setDefaultPreview(defaultValue ? `/storage/${defaultValue}` : null);
        }, [defaultValue]);

        useImperativeHandle(ref, () => ({
            focus: () => inputRef.current?.focus(),
        }));

        const handleChange = (event) => {
            const file = event.target.files?.[0];

            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => setPreview(reader.result);
                reader.readAsDataURL(file);
            } else {
                setPreview(null);
            }

            props.onChange?.(event);
        };

        return (
            <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                    {(preview || defaultPreview) && (
                        <img
                            src={preview || defaultPreview || ""}
                            alt="Avatar Preview"
                            className="h-24 w-24 rounded-full border border-gray-300 object-cover"
                        />
                    )}

                    {!preview && !defaultPreview && (
                        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-300 bg-none">
                            <span className="text-sm text-gray-500">
                                No Image
                            </span>
                        </div>
                    )}

                    {error && (
                        <div className="absolute -bottom-5 text-center text-sm text-red-600">
                            {error}
                        </div>
                    )}
                </div>

                <input
                    {...props}
                    type="file"
                    accept="image/*"
                    className={"hidden " + className}
                    ref={inputRef}
                    onChange={handleChange}
                />

                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        onClick={() => inputRef.current?.click()}
                        type="button"
                        className="py-2 px-4 text-xs"
                    >
                        <Upload /> {preview ? "Change" : "Upload"}
                    </Button>
                </div>
            </div>
        );
    }
);

export default AvatarInput;
