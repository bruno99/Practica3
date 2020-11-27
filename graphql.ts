mutation {
   addTask(input: { id: "Hacer practica  3", state: "DOING", date: "2020-11-27"}){
     _id,
     state,
     date,
     }
 }
{
  gettask(_id: "Hacer practica  3") {
     id,
     state,
     date,
  }
}
   {
     getTaskByDate(_date: "2020-11-27") {
     id,
     state,
     date,
  }
}
         {
     getTaskByState(_date: "DOING") {
     id,
     state,
     date,
  }
}
              {
     startTask(_id: "Hacer practica 3") {
     id,
     state: "DOING",
     date,
  }
}
                               {
     completeTask(_id: "Hacer practica 3") {
     id,
     state: "DONE",
     date,
  }
}
                                 {
     updateTask(_id: "Hacer practica 3") {
     id: "Practica 3 hecha",
     state: "DONE",
     date,
  }
}                                
          
   
 mutation {
 remove_task  (
    id: "Practica 3 hecha"
  ) {
    _id
    sate
    date
  }
}

