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
   
 mutation {
 remove_task  (
    id: "Hacer practica  3"
  ) {
    _id
    sate
    date
  }
}

