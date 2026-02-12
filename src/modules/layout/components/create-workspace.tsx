"use client";

import Modal from "@/components/ui/modal";

import { useCreateWorkspace } from "@/modules/workspace/hooks/workspace";

import { toast } from "sonner";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

function CreateWorkspace({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}) {
  const [name, setName] = useState<string>("");
  const { mutateAsync, isPending } = useCreateWorkspace();
  const handleSubmit = async () => {
    if (!name.trim()) return;
    try {
      await mutateAsync(name);
      toast.success("workspace created successfully");
      setName("");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to create workspace");
      console.error("Failed to create workspace ", error);
    }
  };
  return (
    <Modal
      title="Add new Workspace"
      description="Create a new workspace to organize your project"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      submitText={isPending ? "Creating..." : "Create Workspace"}
      submitVariant="default"
    >
      <div className="space-y-4 ">
        <Input
          className="w-full p-2 border rounded-sm"
          placeholder="workspace name "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </Modal>
  );
}

export default CreateWorkspace;
