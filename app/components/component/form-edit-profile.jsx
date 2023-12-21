"use client"
import { Label } from "/app/components/ui/label"
import { Input } from "/app/components/ui/input"
import { Button } from "/app/components/ui/button"
import { useFormState, useFormStatus } from 'react-dom';



export function EditForm({ user }) {

  const edit = async (prevState, formData) => {
    console.log(formData.get('image'))
  }

  const [errorMessage, dispatch] = useFormState(edit, undefined);
  return (user &&
    (<form action={dispatch} className="bg-slate-100 p-6 mx-auto max-w-[350px] space-y-6 rounded-lg">
      <div className="space-y-2 text-center">
        <h1 className="text-black text-3xl font-bold">Edit profile</h1>
        <p className="text-gray-500 dark:text-gray-400">Edit your profile as you want</p>
      </div>
      <div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-black" htmlFor="name">Firstname</Label>
            <Input id="name" name="name" placeholder="John" required type="text" defaultValue={user.name} />
          </div>
          <div className="space-y-2">
            <Label className="text-black" htmlFor="lastname">Lastname</Label>
            <Input id="lastname" name="lastname" placeholder="Doe" required type="text" defaultValue={user.family_name} />
          </div>
          <div className="space-y-2">
            <Label className="text-black" htmlFor="image">Images</Label>
            <Input id="image" name="image" placeholder="Doe" required type="file" />
          </div>
          <LoginButton />
        </div>
      </div>
    </form>)
  );
}
function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full text-secondary" type="submit" aria-disabled={pending}>
      Login
    </Button>
  );
}