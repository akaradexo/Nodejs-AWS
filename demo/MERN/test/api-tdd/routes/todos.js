var express = require('express');
var router = express.Router();
var createError =require("http-errors");

const todos = [{ 
    id:1,
    task: 'Do something ',
    isCompleted: false 
}]

// /todos
router.get('/', function(req, res, next) {
  res.json(todos);
});


router.get('/:id', function(req, res, next) {
    const foundtodo = todos.find(todo => todo.id === Number(req.params.id))
    if(!foundtodo) {
        return next(createError(404,'not found'));
    }
    res.json(foundtodo);
});


router.post('/', function(req, res, next) {
    const {body} =req;
    if(typeof body.task !== 'string'){
        return next(createError(422,'Validation error'));
    }
    const newTodo ={
        id: todos.length+1,
        task:body.task,
        isCompleted: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  });

module.exports = router;
