import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";
import { Category } from "@prisma/client";
import prisma from "../../../shared/prisma";

const categoryList = async (): Promise<Partial<Category>[] | null> => {
  const cts = await prisma.category.findMany({});
  return cts;
};

const ctDetails = async (id: string): Promise<Partial<Category> | null> => {
  const ct = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });
  return ct;
};

const createCategory = async (
  ct_data: Category
): Promise<Partial<Category> | null> => {
  const ct = await prisma.category.create({
    data: ct_data,
  });
  return ct;
};
const updateCategory = async (
  id: string,
  ct_data: Category
): Promise<Partial<Category> | null> => {
  const ct = await prisma.category.update({
    where: {
      id,
    },

    data: ct_data,
  });
  return ct;
};

//   delete
const ctDelete = async (id: string): Promise<Partial<Category> | null> => {
  const ct = await prisma.category.delete({
    where: {
      id,
    },
  });
  return ct;
};

export const CategoryServices = {
  ctDetails,
  ctDelete,
  categoryList,
  updateCategory,
  createCategory,
};
