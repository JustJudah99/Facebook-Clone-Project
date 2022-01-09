import userResolvers from "./users.js";

const resolvers = {
    Mutation: {
        ...userResolvers.Mutation
    }
}

export default resolvers;