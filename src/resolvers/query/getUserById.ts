import { prisma } from "../../../src/lib/prisma";
import { QueryResolvers } from "../../types/generated/graphql";

export const getUserById: QueryResolvers["getUserById"] = async (
  parent,
  args,
  context,
  info
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: args.id,
    },
  });
  return user;
};
