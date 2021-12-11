import * as query from "./query";
import * as mutation from "./mutation";
import { dateScalar } from "./scalar";

const resolvers = {
  Query: query,
  Mutation: mutation,
  Date: dateScalar,
};

export default resolvers;
