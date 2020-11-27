const app = new Application();
const types = gql

  typeTask {
       id: String
       state: String
       date: Date
  }
  input TaskInput {
       id: String
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
          id: "Hacer Practica",
          state: "DOING",
          date: "27/11/2020"
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
        getTask: async (parent: any, { _id }: any, context: any, info: any) => {
            const taskSelect  = await task.findOne({
                _id: {
                  $oid:_id,
                },
              });
            const taskSelect  = await task.find({ taskId: { $eq: _id } });
            let allTask = await taskSelect.map((task : any)  => { return {
                 ...task, _id:  task._id.$oid
            } })
            taskSelect._id = _id;
            taskSelect.task = allTask;
            return taskSelect;
        },
      
      
      getTaskByState: async (parent: any, { _state }: any, context: any, info: any) => {
            const taskSelect  = await task.findOne({
                _state: {
                  $oid:_state,
                },
              });
            const taskSelect  = await task.find({ taskState: { $eq: _state } });
            let allTask = await taskSelect.map((task : any)  => { return {
                 ...task, _state:  task._state.$oid
            } })
            taskSelect._state = _state;
            taskSelect.task = allTask;
            return taskSelect;
        },
            getTaskByDate: async (parent: any, { _date }: any, context: any, info: any) => {
            const taskSelect  = await task.findOne({
                _date: {
                  $oid:_date,
                },
              });
            const taskSelect  = await task.find({ taskDate: { $eq: _date } });
            let allTask = await taskDate.map((task : any)  => { return {
                 ...task, _date:  task._date.$oid
            } })
            taskSelect._date = _date;
            taskSelect.task = allTask;
            return taskSelect;
        },
      

  },
  {
        startTask: async (parent: any, { _id }: any, context: any, info: any) => {
            const taskSelect  = await task.findOne({
                _id: {
                  $oid:_id,
                },
              });
            const taskSelect  = await task.find({ taskId: { $eq: _id } });
            let allTask = await taskSelect.map((task : any)  => { return {
                 ...task, _id:  task._id.$oid
            } })
            taskSelect._id = _id;
            taskSelect.task = allTask;
            taskSelect.state = "DOING";
            return { "Task started" };
        },
          
        completeTask: async (parent: any, { _id }: any, context: any, info: any) => {
            const taskSelect  = await task.findOne({
                _id: {
                  $oid:_id,
                },
              });
            const taskSelect  = await task.find({ taskId: { $eq: _id } });
            let allTask = await taskSelect.map((task : any)  => { return {
                 ...task, _id:  task._id.$oid
            } })
            taskSelect._id = _id;
            taskSelect.task = allTask;
            taskSelect.state = "DONE";
            return { "Task completed" };
        },

    Mutation: {
      addTask: async (parent: any, { input: { id, state, date } }: any, context: any, info: any) => {
        const insertTask = await task.insertOne({
            id,
            state,
            date,
          });
          const taskSelect  = await task.findOne({
            _id: {
              $oid: insertTask.$oid,
            },
          });
          taskSelect._id = insertTask.$oid;
         return taskSelect;
      },
      upadteTask: async (parent: any, { input: { id!, state!, date! } }: any, context: any, info: any) => {
            const taskSelect  = await task.findOne({
            _id: {
              $oid: selectTask.$oid,
            },
          });
          taskSelect._id = updateTask.$oid;
         return { "Updated" };
      },
      removeTask: async (parent: any, { input: { id, state, date } }: any, context: any, info: any) => {
            const taskSelect  = await task.findOne({
            _id: {
              $oid: selectTask.$oid,
            },
          });
          taskSelect._id = removeTask.$oid;
         return { "Removed" };
      },

  };
    
