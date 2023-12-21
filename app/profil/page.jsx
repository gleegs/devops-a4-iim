'use client'
import Image from "next/image"
import { useUser } from "../context/AuthContext"
import { Separator } from "@radix-ui/react-separator"
import Profil from "../components/component/Profil"
import { useEffect, useState } from "react"
import PopUp from "../components/component/PopUp"
import { EditForm } from "../components/component/form-edit-profile"

export default function Page() {
    const [isEdit, setIsEdit] = useState(false)
    const user = useUser().user
    console.log('User :', user)

    return (user &&
        <>
            <Profil imageUrl={user.imageHref} firstName={user.name} LastName={user.family_name} setEdit={setIsEdit} />
            <Separator className=" border-t border-gray-400"></Separator>
            <div className="px-12 py-12 flex min-h-full max-w-7xl mx-auto">
                <h2 className="text-black font-bold text-4xl">Favorite(s)</h2>
            </div>
            {isEdit && <PopUp setEdit={setIsEdit}><EditForm user={user}></EditForm></PopUp>}
        </>
    )
}
