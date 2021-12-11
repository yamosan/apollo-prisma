import { prisma } from "../../../src/lib/prisma";
import { QueryResolvers } from "../../types/generated/graphql";

export const getTodos: QueryResolvers["getTodos"] = async (
  parent,
  args,
  context,
  info
) => {
  const todos = await prisma.todo.findMany({
    where: {
      userId: args.userId,
    },
  });
  return todos;
};
