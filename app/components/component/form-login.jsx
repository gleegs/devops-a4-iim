"use client"
import { Label } from "/app/components/ui/label"
import { Input } from "/app/components/ui/input"
import { Button } from "/app/components/ui/button"
import { Separator } from "/app/components/ui/separator"
import Link from "next/link"
import { useFormState, useFormStatus } from 'react-dom';
import { signIn } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import config from '/src/aws-exports.js';
import { useRouter } from "next/navigation"
Amplify.configure(config);

export function FormLogin() {
  const router = useRouter()

  const login = async (prevState, formData) => {
    console.log(formData.get('email'))
    console.log(formData)
    try {
      const { isSignedIn, nextStep } = await signIn({ username: formData.get('email'), password: formData.get('password') });
      if (nextStep.signInStep == "CONFIRM_SIGN_UP") {
        console.log('redirect')
        router.replace(`/confirmRegister?username=${formData.get('email')}`)
      }
      console.log('isSignedIn :', isSignedIn)
      console.log('next step :', nextStep)
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  const [errorMessage, dispatch] = useFormState(login, undefined);
  return (
    (<form action={dispatch} className="bg-slate-100 p-6 mx-auto max-w-[350px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-black text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill in your details to login to your account</p>
      </div>
      <div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-black" htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="john@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label className="text-black" htmlFor="password">Password</Label>
            <Input id="password" name="password" placeholder="*****" required type="password" />
          </div>
          <LoginButton />
        </div>
        <Separator className="my-8" />
        <div className="text-black mt-4 text-center text-sm">
          Doesnt have an account yet ?&nbsp;
          <Link className="underline" href="/register">
            Register
          </Link>
        </div>
      </div>
    </form>)
  );
}
function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" type="submit" aria-disabled={pending}>
      Login
    </Button>
  );
}