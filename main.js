#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = ["zona", "haram"];
console.log(chalk.magenta.bold("\n \tWelcome to Code With Rafia -  TodoList Application\n"));
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "update", "view", "delete"],
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update item in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log("**********TO DO LIST*********");
            console.log(todos);
            console.log("*****************************");
        }
        if (ans.select == "delete") {
            let deletTodo = await inquirer.prompt({
                type: "list",
                message: "delet item in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deletTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
    let ans = await inquirer.prompt({
        type: "list",
        message: "select an operation",
        name: "select",
        choices: ["Add", "update", "view", "delete"],
    });
    if (ans.select == "Add") {
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add item in the list",
            name: "todo",
        });
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (ans.select == "update") {
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "update item in the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add item in the list",
            name: "todo",
        });
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo, addTodo.todo];
        console.log(todos);
    }
    if (ans.select == "view") {
        console.log("**********TO DO LIST*********");
        console.log(todos);
        console.log("*****************************");
    }
    if (ans.select == "delete") {
        let deletTodo = await inquirer.prompt({
            type: "list",
            message: "delet item in the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val => val !== deletTodo.todo);
        todos = [...newTodo];
        console.log(todos);
    }
}
createTodo(todos);
