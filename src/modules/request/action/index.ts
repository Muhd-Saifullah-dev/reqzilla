"use server";
import db from "@/lib/db";
import { REQUEST_METHOD } from "@prisma/client";

export type Request = {
  name: string;
  method: REQUEST_METHOD;
  url: string;
  body?: string;
  headers?: string;
  parameter?: string;
};

export const addRequestTOCollection = async (
  collectionId: string,
  value: Request,
) => {
  const request = await db.request.create({
    data: {
      collectionId: collectionId,
      name: value.name,
      method: value.method,
      url: value.url,
      body: value.body,
      headers: value.headers,
      parameters: value.parameter,
    },
  });

  return request;
};

export const saveRequest = async (id: string, value: Request) => {
  const request = await db.request.update({
    where: {
      id: id,
    },
    data: {
      name: value.name,
      method: value.method,
      url: value.url,
      body: value.body,
      headers: value.headers,
      parameters: value.parameter,
    },
  });
  return request;
};

export const getAllRequestFromCollection = async (collectionId: string) => {
  const requests = await db.request.findMany({
    where: {
      collectionId: collectionId,
    },
  });
  return requests;
};
