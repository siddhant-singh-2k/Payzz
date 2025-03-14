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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 min-h-screen bg-gray-950", className)} {...props}>
      <div className="fixed inset-0 bg-gray-950" />
      <div className="relative flex items-center justify-center min-h-screen w-full">
        <Card className="bg-gray-900 border-gray-800 w-full max-w-md mx-auto shadow-lg shadow-blue-900/10">
          <CardHeader>
            <CardTitle className="text-white">Login to your account</CardTitle>
            <CardDescription className="text-gray-400">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="text-gray-300">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0"
                  >
                    Login
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-400">
                Don&apos;t have an account?{" "}
                <NextLink href="/signup" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                  Sign up
                </NextLink>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}