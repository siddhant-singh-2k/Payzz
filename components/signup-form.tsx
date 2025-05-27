"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import NextLink from "next/link";
import { AwardIcon } from "lucide-react"




export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await axios.post("/auth/signup", {
        email,
        password,
      });

      const data = res.data;

      setMessage(data.message || "Signup successfull");
      setTimeout(()=>{
        router.push("/signin");
      },2000);
    
    }

    catch (err: any) {
      setError(err.response?.data?.error || "signup failed");
    }

  };



  return (
    <div className={cn("flex flex-col gap-6 min-h-screen bg-gray-950", className)} {...props}>
      <div className="fixed inset-0 bg-gray-950" />
      <div className="relative flex items-center justify-center min-h-screen w-full">
        <Card className="bg-gray-900 border-gray-800 w-full max-w-md mx-auto shadow-lg shadow-blue-900/10">
          <CardHeader>
            <CardTitle className="text-white">Sign up to your account</CardTitle>
            <CardDescription className="text-gray-400">
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="siddhant@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="grid gap-3">

                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0"
                  >
                    Signup
                  </Button>
                  {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                  {message && <p className="text-green-400 text-sm mt-2">{message}</p>}
                </div>
              </div>

            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}