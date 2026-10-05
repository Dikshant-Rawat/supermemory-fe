import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }

        try {
            setLoading(true);
            await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
            });
            alert("You have signed up successfully!");
            navigate("/signin");
        
        } catch (error: any) {
            console.error("Signup error:", error);
            alert(error.response?.data?.message || "Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8 shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Account</h2>
                <Input reference={usernameRef} placeholder="Username" />
                <div className="mt-4">
                    <Input reference={passwordRef} placeholder="Password" />
                </div>
                <div className="flex justify-center pt-6">
                    <Button onClick={signup} loading={loading} variant="primary" text="Signup" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}