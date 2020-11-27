const app = new Application();
const types = gql

  typeTask {
       name: String
       state: String
  }
  input TaskInput {
       name: String
       state: String
  }
  type ResolveType {
       done: Boolean
  }
  type Query {
       getTask(id:String): Task //no hay exclamacion porque puede no estar definido
  }
  type Mutation {
       setTask(input: TaskInput!): ResolveType! //tiene que devolver objeto si o si
  }      
  const resolvers = {
    Query: {
      getTask: (parent: any, args: {id:string}, context: any, info: any) => {
        return {
          name: "Hacer Practica",
          state: "DOING",
        }
      },
    },
    Mutation: {
      setTask: (
        parent: any,
        args: any,
        context: {task: ITask[]},
        info: any
        ) => {
        const tasks: ITask[] = context.tasks;
        tasks.push(args.input);
        return {
          done: true,
        };
      },
    };
    
 const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers: resolvers,
  context: (ctx: RouterContext) => {
    return { task: "Hacer Practica" };
  }
})


app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log("Server start at http://localhost:8000");
await app.listen({ port: 8000 });
    
