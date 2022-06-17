const express = require('express')


const middleware =[
    express.urlencoded({extended:true}),
    express.json(),
]

module.exports = app =>{
    middleware.forEach(m =>{
        app.use(m)
    })
}