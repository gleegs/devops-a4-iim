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
          <div className="space-y-2">
            <Label className="text-black" htmlFor="number">Vérification code</Label>
            <Input id="number" placeholder="456724" required type="text" />
          </div>
          <ConfirmButton />
        </div>
        <Separator className="my-8" />
        <div className="text-black mt-4 text-center text-sm">
          Already have an account ?&nbsp;
          <Link className="underline" href="/login">
             Login
          </Link>
        </div>
      </div>)
  );
}

 
function ConfirmButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button className="w-full" type="submit" aria-disabled={pending}>
      Confirmer
    </Button>
  );
}