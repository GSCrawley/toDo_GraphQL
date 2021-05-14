const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');



const schema = buildSchema(`
    type Todo {
        name: String!
        completed: Boolean!
        date: String!
        id: ID!
    }
    type Query {
        getAllTodos: [Todo!]!
        getTodo(id: ID!): [Todo]!
        getCompletedTodos: [Todo!]!
        notCompletedTodos: [Todo]
    }
    type Mutation {
        addTodo(name: String!, completed: Boolean!, date: String!, id:Int!): Todo
        completeTodo( id: Int!, completed: Boolean!): Todo
    }
    `);


const todoList = [ 
    {
        name :'laundry', 
        completed : false, 
        date:"5/14/21", 
        id:1 
    },
    { 
        name : 'finish S&L project',
        completed: true,
        date:"5/13/21", 
        id:2 
    },
    { 
        name: 'hand in Data Viz project',
        completed: false,
        date:"5/17/21", 
        id:3,  
    }
]

const root = {
    getAllTodos: () => {
        return todoList;
    },
    getTodo: ({ id }) => {
        return todoList.filter(item => item.id == id)
    },

    getCompletedTodos: () => {
        return todoList.filter(item => item.completed == true )
    }, 

    notCompletedTodos: () => {
        return todoList.filter(item => item.completed == false )
    },

    addTodo: ({ name, completed, date, id}) => {
        const newTodo = { name, completed, date, id}
        todoList.push(newTodo)
        return newTodo
    },

    completeTodos: ({ id, completed }) => {
        const completeList = todoList.filter(item => item.id == id)
        if(completeList.length === 0){
            return null
        }
        completeList[0].completed = completed
        return completeList[0]
    },
    
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

const port = 4000;
app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})

