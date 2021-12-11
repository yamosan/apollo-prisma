import { prisma } from "../../lib/prisma";
import { MutationResolvers } from "../../types/generated/graphql";

export const createTodo: MutationResolvers["createTodo"] = async (
  parent,
  args,
  context,
  info
) => {
  const todo = await prisma.todo.create({
    data: {
      title: args.input.title,
      status: "pending",
      userId: args.userId,
    },
    include: {
      user: true,
    },
  });
  return todo;
};
