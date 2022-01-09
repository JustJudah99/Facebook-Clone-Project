import { v1 as uuid } from "uuid";

const User = [
  {
    name: "Robert",
    email: "robert@admin.com",
    password: "12345678"
  },
  {
    name: "Brian",
    email: "brian@admin.com",
    password: "12345678"
  },
]

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
        return Users.name;
      },
      login: async(root, args) => {
        const {email} = args;
        return User.find(User => User.email === email)
      }
    }
};

export default resolvers