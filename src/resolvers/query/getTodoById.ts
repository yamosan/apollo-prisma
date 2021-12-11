import { prisma } from "../../../src/lib/prisma";
import { QueryResolvers } from "../../types/generated/graphql";

export const getTodoById: QueryResolvers["getTodoById"] = async (
  parent,
  args,
  context,
  info
) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: args.id,
    },
  });

  if (todo && todo.userId !== args.userId) {
    return null;
  }

  return todo;
};
