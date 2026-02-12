"use server";

import { auth } from "@/lib/auth";
import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-buttom";
import { headers } from "next/headers";

export default async function Home() {
  const user = await currentUser();
  
  const sessionUser = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <UserButton user={user} />
    </div>
  );
}
