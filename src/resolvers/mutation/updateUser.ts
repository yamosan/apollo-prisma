import { prisma } from "../../lib/prisma";
import { MutationResolvers } from "../../types/generated/graphql";

export const updateUser: MutationResolvers["updateUser"] = async (
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

  if (!user) {
    throw new Error("Not Found Error.");
  }

  const updatedUser = await prisma.user.update({
    where: { id: args.id },
    data: { name: args.input.name ?? undefined },
  });
  return updatedUser;
};
