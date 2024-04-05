#! /usr/bin/env node
import inquirer from "inquirer";
let todos : string[] = ["fahad","Ali"];

async function createTodo (todos: string[]){
    do{
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            choices: ["Add","Update","View","Delete","Exit"]
        });
        if (ans.select === "Add"){
            let addtodo = await inquirer.prompt({
            name : "a",
            type : "input",
            message : "Add items in the list"
        });
        todos.push(addtodo.a);
        console.log(todos);
    }

    
    
    if (ans.select === "Update"){
        let updateTodo = await inquirer.prompt({
            name : "b",
            type : "list",
            choices : todos.map(items => items),
            message : "Update items in the list."
        });
        let addtodo = await inquirer.prompt({
            name : "a",
            type : "input",
            message : "Add items in the list"
        });
        let newTodo = todos.filter(val=>val !== updateTodo.b)
        todos = [...newTodo, addtodo.a];
        console.log(todos);
    }
    
    
    
    if (ans.select === "View"){
        console.log(`^^^^^^^^^^^^^^^^^^^^^^^^`);
        console.log(todos);
        console.log(`^^^^^^^^^^^^^^^^^^^^^^^^`);
    }
    

    
    if (ans.select === "Delete"){
        let deleteTodo = await inquirer.prompt({
            name : "c",
            type : "list",
            choices : todos.map(val =>val),
            message : "Delete item in the list."
        });
        let newTodoo = todos.filter(val=>val !== deleteTodo.c);
        todos = [...newTodoo];
        console.log(todos);
    }


    if(ans.select === "Exit"){
        break
    }
} while(true)
}
 createTodo(todos);