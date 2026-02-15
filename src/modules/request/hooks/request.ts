import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addRequestTOCollection,
  type Request,
  getAllRequestFromCollection,
  saveRequest,
} from "../action/index";

export function useAddRequestToCollection(collectionId: string) {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: async (value: Request) =>
      addRequestTOCollection(collectionId, value),
    onSuccess: (data) => {
      queryclient.invalidateQueries({ queryKey: ["requests", collectionId] });
      console.log(data);
    },
  });
}

export function useGetAllRequestFromCollection(collectionId: string) {
  return useQuery({
    queryKey: ["requests", collectionId],
    queryFn: async () => getAllRequestFromCollection(collectionId),
  });
}

export function useSaveRequest(id: string) {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: async (value: Request) => saveRequest(id, value),
    onSuccess: (data) => {
      queryclient.invalidateQueries({ queryKey: ["request"] });
      console.log(data);
    },
  });
}
