"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface PopupFormProps {
    show: boolean;
    onClose: () => void;
}

export default function PopupForm({ show, onClose }: PopupFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        zip: "",
    });

    // Disable scroll when popup is open
    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "auto";
    }, [show]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!show) return null;

    // Handle input change
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit form
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.zip.trim()
        ) {
            Swal.fire({
                icon: "error",
                title: "Missing Fields",
                text: "Please fill all fields before submitting.",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Form Submitted!",
            text: "We have received your details.",
            heightAuto: false,
            didOpen: () => {
                const swal = document.querySelector('.swal2-container') as HTMLElement;
                if (swal) swal.style.zIndex = "100000";
            }
        });

        setFormData({ name: "", email: "", phone: "", zip: "" });
        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex justify-center items-center p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="bg-white w-full max-w-[540px] sm:max-w-[600px] md:max-w-[650px] rounded-2xl shadow-2xl p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto">

                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-2xl text-[#3eb000] hover:text-[#2e8a00] transition"
                    onClick={onClose}
                >
                    ✖
                </button>

                <h2 className="text-[22px] sm:text-[28px] lg:text-[30px] font-[700] text-center mb-3 text-[#09360c] leading-snug">
                    Hurry: Discover{" "}
                    <span className="text-[#3eb000]">Unbeatable Savings</span> on RV Extended Warranties!
                </h2>

                <p className="text-center text-[14px] sm:text-[16px] font-semibold mb-5 text-[#09360c]">
                    Just a few clicks away from exceptional coverage! 👇
                </p>

                {/* FORM */}
                <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] sm:text-[15px]"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] sm:text-[15px]"
                    />

                    <input
                        type="tel"
                        placeholder="Mobile Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] sm:text-[15px]"
                    />

                    <input
                        type="text"
                        placeholder="Zip Code"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] sm:text-[15px]"
                    />

                    <p className="text-[11px] sm:text-[12px] text-gray-700 leading-snug">
                        By submitting, you agree to receive automated follow-up messages. Msg & data rates may apply. See{" "}
                        <a
                            href="https://outdoorwarranty.com/terms/"
                            className="text-green-600 underline"
                        >
                            Terms of Service
                        </a>{" "}
                        &{" "}
                        <a
                            href="https://outdoorwarranty.com/privacy-policy/"
                            className="text-green-600 underline"
                        >
                            Privacy Policy
                        </a>.
                    </p>

                    <button
                        type="submit"   
                        className="w-full bg-[#48ac3f] hover:bg-[#3fa039] text-white py-3 rounded-full text-[15px] sm:text-[17px] font-semibold transition cursor-pointer"
                    >
                        Claim Your Savings Now! 👉
                    </button>
                </form>

                <p className="text-center text-[12px] sm:text-[13px] mt-4 text-[#09360c]">
                    Takes just a few minutes to get started! 👍
                </p>

                <p className="text-left text-[10px] sm:text-[11px] mt-4 text-[#09360c] leading-relaxed">
                    *We respect your privacy. We never sell or share your email.
                </p>
            </div>
        </div>
    );
}