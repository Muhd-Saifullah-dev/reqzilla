"use client";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useWorkspaceStore } from "@/modules/layout/store";
import { useGetWorkspaces } from "@/modules/workspace/hooks/workspace";
import { Loader } from "lucide-react";
import TabbedSidebar from "@/modules/collections/components/Sidebar";
function page() {
const { selectedWorkspace }=useWorkspaceStore()
  const {data:currentWorkspace,isPending }=useGetWorkspaces()
  if(isPending){
    return (
    <div className="flex flex-col items-center justify-center h-full">
      <Loader className="animate-spin h-6 w-6 text-indigo-500"/>
    </div>
    )
  }
  return (
    <ResizablePanelGroup   orientation="horizontal">
      <ResizablePanel defaultSize="65">
        <h1>Request Playground</h1>
      </ResizablePanel>
      <ResizableHandle withHandle/>
      <ResizablePanel defaultSize="35" maxSize="40" minSize="25" className="flex">
        <div className="flex-1">
          <TabbedSidebar  currentWorkspace={selectedWorkspace!}/>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default page;
