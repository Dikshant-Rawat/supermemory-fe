import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert("Please enter both username and password");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password
            });
            
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/dashboard");
        } catch (error: any) {
            console.error("Signin error:", error);
            alert(error.response?.data?.message || "Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8 shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
                <Input reference={usernameRef} placeholder="Username" />
                <div className="mt-4">
                    <Input reference={passwordRef} placeholder="Password" />
                </div>
                <div className="flex justify-center pt-6">
                    <Button onClick={signin} loading={loading} variant="primary" text="Signin" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}