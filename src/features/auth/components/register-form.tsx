"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import googleIcon from "../../../../public/google-icon.svg";
import { Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schema/auth";
import { z } from "zod";

export default function RegisterForm({ isScrolled }: { isScrolled: boolean }) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof registerSchema>) {}
  return (
    <Dialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className={`${
                isScrolled
                  ? "font-montserrat bg-white text-[#3B82F6] border-2 border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white p-4"
                  : "font-montserrat text-white border border-white hover:bg-[#3B82F6] hover:text-white p-4"
              } cursor-pointer`}
            >
              Register
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] h-auto bg-[#252525] border-none p-8 rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-[#f4f4f4] text-center font-montserrat font-semibold text-4xl">
                Sign Up for FREE
              </DialogTitle>
              <DialogDescription className="text-center text-[#f4f4f4] font-montserrat font-normal text-sm mt-2">
                Already have an account?{" "}
                <span className="text-[#3B82F6] font-bold cursor-pointer">
                  Log in
                </span>
              </DialogDescription>

              <Button
                type="button"
                variant="ghost"
                className="flex items-center justify-center hover:bg-white/80 bg-white rounded-full mt-1 w-full h-12 px-4 cursor-pointer"
              >
                <Image src={googleIcon} alt="google-icon" />
                <span className="font-montserrat text-sm text-[#929292] font-semibold -translate-x-1/6">
                  Google
                </span>
              </Button>

              <p className="text-center text-[#929292] font-montserrat text-xs my-2">
                or sign up with email
              </p>
            </DialogHeader>

            <div className="grid gap-3">
              <div className="grid gap-1.5">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field: { onChange, value, ref } }) => (
                    <FormItem>
                      <FormLabel className="text-[#929292] font-montserrat text-xs font-normal font-montserrat mx-auto lg:mx-0">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your name here"
                          className="bg-[#333] border-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] text-[#f4f4f4] placeholder:text-[#929292] font-montserrat text-sm rounded-xs"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-1.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field: { onChange, value, ref } }) => (
                    <FormItem>
                      <FormLabel className="text-[#929292] font-montserrat text-xs font-normal font-montserrat mx-auto lg:mx-0">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="yourname@gmail.com"
                          className="bg-[#333] border-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] text-[#f4f4f4] placeholder:text-[#929292] font-montserrat text-sm rounded-xs"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-1.5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field: { onChange, value, ref } }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-[#929292] font-montserrat text-xs font-normal">
                          Password ( minimum 8 characters )
                        </FormLabel>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="flex items-center gap-1 text-[#929292] hover:text-[#f4f4f4] text-xs font-montserrat"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                          <span>{showPassword ? "Hide" : "Show"}</span>
                        </button>
                      </div>
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="*********"
                          className="bg-[#333] border-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] text-[#f4f4f4] placeholder:text-[#929292] font-montserrat text-sm rounded-xs"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <p className="text-[#929292] font-montserrat font-normal text-xs text-start">
              By Signing up you agree to our{" "}
              <span className="text-white font-bold cursor-pointer">
                Terms of Service
              </span>
            </p>

            <DialogFooter className="mt-2">
              <Button
                type="submit"
                className="w-full h-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1B3A6F] hover:opacity-80 text-[#f4f4f4] font-montserrat font-bold text-sm tracking-wide cursor-pointer"
              >
                CREATE MY FREE ACCOUNT
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}
