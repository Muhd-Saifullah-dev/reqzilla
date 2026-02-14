import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCollection,
  deleteCollection,
  editCollection,
  getCollections,
} from "../actions/index";

export function useCollections(workspaceId: string) {
  return useQuery({
    queryKey: ["collection", workspaceId],
    queryFn: async () => getCollections(workspaceId),
  });
}

export function useCreateCollection(workspaceId: string) {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: async (name: string) => createCollection(workspaceId, name),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["collection", workspaceId] });
    },
  });
}

export function useDeleteCollection(collectionId: string) {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: async () => deleteCollection(collectionId),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["collection"] });
    },
  });
}

export function useEditCollection(collectionId: string, name: string) {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: async () => editCollection(collectionId, name),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["collection"] });
    },
  });
}
