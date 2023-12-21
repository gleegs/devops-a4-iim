"use client"
import { Label } from "/app/components/ui/label"
import { Input } from "/app/components/ui/input"
import { Button } from "/app/components/ui/button"
import { useFormState, useFormStatus } from 'react-dom';
import { uploadData } from 'aws-amplify/storage';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { post } from "aws-amplify/api";

export function EditForm({ user }) {
  const router = useRouter()
  const [message, setMessage] = useState(null)

  const edit = async (prevState, formData) => {
    const file = formData.get('image')
    updateProfilePicture(file)
    // const result = await post({
    //   apiName: 'users',
    //   path: '/updateTest',
    //   options: {
    //     body: formData, // Optional, JSON object or FormData
    //   }
    // }).response;
    // const body = result.body.json()
    console.log(body)
    console.log(file)
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
            <Input id="image" name="image" placeholder="Doe" type="file" accept="image/png" />
          </div>
          <EditButton />
        </div>
      </div>
    </form>)
  );
}
function EditButton() {
  const { pending } = useFormStatus();
  console.log('pending :', pending)
  return (
    <Button className="w-full text-secondary" type="submit" aria-disabled={pending}>
      Confirm
    </Button>
  );
}

async function updateProfilePicture(file) {
  if (!file.name == '') {
    console.log('il y a un fichier')
    if (file.type == "image/png") {
      try {
        const result = await uploadData({
          key: `${user.id}_profil.png`,
          data: file,
          options: {
            accessLevel: 'public', // defaults to `guest` but can be 'private' | 'protected' | 'guest'
            // onProgress // Optional progress callback.
          }
        }).result;
        console.log('Succeeded: ', result);
        router.replace('#')
      } catch (error) {
        console.log('Error : ', error);
      }
    } else {
      setMessage('PNG only accepted')
    }
  }
}