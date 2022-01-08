import { v1 as uuid } from "uuid";

const resolvers = {
    Query: {
      userCount: () => User.length,
      allUsers: () => User,
      findUser: (root, args) => {
        const {name} = args;
        return User.find(User => User.name === name)
      }
    },
    Mutation: {
      addUser: (root, args) => {
        if (args.name=="") {
          throw new UserInputError("Name is empty",{
            invalidArgs: args.name
          })
        }
        const Users = {...args, id: uuid()}
        User.push(Users)
        return Users;
      }
    }
};

export default resolvers