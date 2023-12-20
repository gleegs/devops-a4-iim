"use client"
import { Label } from "/app/components/ui/label"
import { Input } from "/app/components/ui/input"
import { Button } from "/app/components/ui/button"
import { Separator } from "/app/components/ui/separator"
import Link from "next/link"
import { useFormState, useFormStatus } from 'react-dom';
import { handleSignUpConfirmation } from "@/app/lib/confirmRegister"

export function FormRegisterConfirm({ username }) {
  const [errorMessage, dispatch] = useFormState(handleSignUpConfirmation, undefined);

  return (
    (<form action={dispatch} className="bg-slate-100 p-6 mx-auto max-w-[350px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-black text-3xl font-bold">Confirm email</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill in your details to create a new account</p>
      </div>
      <div>
        <div className="space-y-2 hidden">
          <Input id="username" name="username" value={username} type="text" readOnly />
        </div>
        <div className="space-y-2">
          <Label className="text-black" htmlFor="code">Vérification code</Label>
          <Input id="code" name="code" placeholder="456724" required type="text" />
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
    </form>)
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