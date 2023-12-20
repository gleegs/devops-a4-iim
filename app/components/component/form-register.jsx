"use client"
import { Label } from "/app/components/ui/label"
import { Input } from "/app/components/ui/input"
import { Button } from "/app/components/ui/button"
import { Separator } from "/app/components/ui/separator"
import Link from "next/link"
import { useFormState, useFormStatus } from 'react-dom';

export function FormRegister() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);


  return (
    (<div className="bg-slate-100 p-6 mx-auto max-w-[350px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-black text-3xl font-bold">Register</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill in your details to create a new account</p>
      </div>
      <div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-black" htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label className="text-black" htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-black" htmlFor="email">Email</Label>
            <Input id="email" placeholder="john@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label className="text-black" htmlFor="password">Password</Label>
            <Input id="password" placeholder="*****" equired type="password" />
          </div>
          <RegisterButton />
        </div>
        <Separator className="my-8" />
        <div className="text-black mt-4 text-center text-sm">
          Already have an account ?&nbsp;
          <Link className="underline" href="/login">
             Login
          </Link>
        </div>
      </div>
    </div>)
  );
}

 
function RegisterButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button className="w-full" type="submit" aria-disabled={pending}>
      Register
    </Button>
  );
}