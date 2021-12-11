import { prisma } from "../../lib/prisma";
import { MutationResolvers } from "../../types/generated/graphql";

export const deleteTodo: MutationResolvers["deleteTodo"] = async (
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

  const deletedTodo = await prisma.todo.delete({
    where: {
      id: args.id,
    },
    include: {
      user: true,
    },
  });

  return deletedTodo;
};
