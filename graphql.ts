mutation {
   addTask(input: { id: "Hacer practica  3", state: "DOING", date: "2020-11-27"}){
     _id,
     state,
     date,
     }
 }
 
 
 
 mutation 
 remove_task { (
    id: "Hacer practica  3"
  ) {
    _id
    sate
    date
  }
}
