### toDo_GraphQL

# FEW 2.9 Final Assessment

## Queries

1. Get all objects in todo list
#
    {
        getAllTodos{
            name
            completed
            date
            id
        }
    }
#
2. Gets todo item based on id

{
    getTodo(id:1){
        name
        completed
        date
        id
    }
}
#
3. All completed todos

{
    getCompletedTodos{
        name
        completed 
        date
        id
    }
}
#
4. Get all todo items that are not completed

{
    notCompletedTodos{
        name
        completed
        date
        id
    }
}
#
5. Add new todo

mutation{
    addTodo(name:"Final", completed:false, date:"5/11/21", id:4){
        name 
        completed
        date
        id
    }
}
#
6. Mark todo as complete

mutation{
    completeTodos(id:1, completed: true){
        name 
        completed
        date
        id
    }
}


