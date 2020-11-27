const app = new Application();
const types = gql

  typeTask {
       name: String
       state: String
       date: Date
  }
  input TaskInput {
       name: String
       state: String
       date: Date
  }
  type ResolveType {
       done: Boolean
  }
  type Query {
       getTask(name:String): Task //no hay exclamacion porque puede no estar definido
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
          date: 
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


export const TaskResolvers = {
    Query: {
        getTask: async (parent: any, { _name }: any, context: any, info: any) => {
            const taskSelect  = await task.findOne({
                _name: {
                  $oid:_name,
                },
              });
            const taskSelect  = await task.find({ taskName: { $eq: _name } });
            let allTask = await taskSelect.map((task : any)  => { return {
                 ...task, _name:  task._name.$oid
            } })
            taskSelect._name = _name;
            taskSelect.task = allTask;
            return taskSelect;
        },
      
      
      

  },

    Mutation: {
      addTask: async (parent: any, { input: { name, state, date } }: any, context: any, info: any) => {
        const insertTask = await task.insertOne({
            name,
            state,
            date,
          });
          const taskelect  = await task.findOne({
            _name: {
              $oid: insertTask.$oid,
            },
          });
          taskSelect._name = insertTask.$oid;
         return taskSelect;
      },

  };
    
