'use server'
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-buttom";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Home() {
  const user =await currentUser()
  console.log("user",user)
  const sessionUser=await auth.api.getSession({
    headers:await headers()
  })
  console.log("session user",sessionUser?.user)
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <UserButton user={user}/>
    </div>
 
  );
}
