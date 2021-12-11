import { prisma } from "../../lib/prisma";
import { MutationResolvers } from "../../types/generated/graphql";

export const updateTodo: MutationResolvers["updateTodo"] = async (
  parent,
  args,
  context,
  info
) => {
  const targetTodo = await prisma.todo.findUnique({
    where: {
      id: args.id,
    },
  });

  if (!targetTodo) {
    throw new Error("Not Found Error.");
  }

  if (targetTodo.userId !== args.userId) {
    throw new Error("Authorization Error.");
  }

  const updatedTodo = await prisma.todo.update({
    where: {
      id: args.id,
    },
    data: {
      title: args.input.title ?? undefined,
      status: args.input.status ?? undefined,
    },
    include: {
      user: true,
    },
  });
  return updatedTodo;
};
