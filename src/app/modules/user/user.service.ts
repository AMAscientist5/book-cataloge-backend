import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";
import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { JwtPayload } from "jsonwebtoken";

//list
const usersList = async (): Promise<Partial<User>[] | null> => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return users;
};

// details
const usersDetails = async (id: string): Promise<Partial<User> | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return user;
};

//details
const usersProfile = async (
  user_data: JwtPayload
): Promise<Partial<User> | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id: user_data.userId,
      email: user_data.email,
    },
  });
  return user;
};

//update
const usersUpdate = async (
  id: string,
  user_data: User
): Promise<Partial<User> | null> => {
  const user = await prisma.user.update({
    where: {
      id,
    },

    data: user_data,
  });
  return user;
};
//  delete
const usersDelete = async (id: string): Promise<Partial<User> | null> => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};

export const UserServices = {
  usersDetails,
  usersList,
  usersDelete,
  usersUpdate,
  usersProfile,
};
