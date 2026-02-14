import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getworkspace, createWorkspaces, getWorkspaceById } from "../actions";

export function useGetWorkspaces() {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => getworkspace(),
  });
}

export function useCreateWorkspace() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (name: string) => createWorkspaces(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
    },
  });
}

export function useGetWorkspaceById(id: string) {
  return useQuery({
    queryKey: ["workspace", id],
    queryFn: async () => getWorkspaceById(id),
    enabled: !!id,
  });
}
