"use client";
import React from "react";
import { Unplug, Search } from "lucide-react";
import UserButton from "@/modules/authentication/components/user-buttom";
import { UserProps } from "../types";
import SearchBar from "./Search-bar";
import InviteMember from "./invite-member";
import Workspace from "./workspace";
interface Props {
  user: UserProps;
}
const Header = ({ user }: Props) => {
  return (
    <header className="grid grid-cols-3 items-center p-2 border">
      <div className="flex items-center ml-4">
        <Unplug size={28} className="text-indigo-400" />
      </div>

      <div className="flex justify-center">
        <div className="w-100 border-animation relative p-0.5 rounded overflow-hidden flex items-center justify-center">
          <SearchBar />
        </div>
      </div>

      <div className="flex  gap-1 justify-end">
        <InviteMember />
        <Workspace />
        <UserButton user={user} size="sm" />
      </div>
    </header>
  );
};

export default Header;
