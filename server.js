const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

let todos =[
    {id: 1, description:'Dont forget your laundry', owner: 'Gideon Crawley', completed: false, active: true}
];

const typeDefs = `
    type Query{
        info: String!
        allToDos: [ToDo!]!
    }
    type Mutation{
        createToDo(description: String!, owner: String!,  completed: Boolean!, active: Boolean!): ToDo!
        updateToDo(id: Int!, description: String!, owner: String!, completed: Boolean!, active: Boolean!): ToDo!
        deleteToDo(id: Int!): ToDo!
    }
    type ToDo{
        id: Int!
        description: String! 
        owner: String! 
        completed: Boolean!
        active: Boolean!
    }
`;
