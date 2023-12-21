"use client"

import { FormRegisterConfirm } from "@/app/components/component/form-registerConfirm"
import { useSearchParams } from "next/navigation";

export default function Component() {
  const searchParams = useSearchParams()

  const username = searchParams.get('username')
  console.log(username)
  // console.log(slug)
  // const username = query.username;
  return (
    <FormRegisterConfirm username={username}></FormRegisterConfirm>
  )
}