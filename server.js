const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');



const schema = buildSchema(`
    type Todo {

        name: String!
        completed: Boolean!
        date: String!
        id: Int!
    }
    type Query {
        getAllTodos: [Todo!]!
        getTodo(id: Int!): Todo!
        getCompletedTodos: [Todo!]!
    }
    type Mutation {
        addTodo(name: String!): Todo!
        completeTodo(id: Int!): Todo!
    }
`)

const toDoList = [];

const resolvers ={
    Query:{
        info: ()=> `Todays Tasks`,
        allToDos: async(parent, args,context)=>{            
            return context.prisma.toDo.findMany();
        }
    },