const userRoute = require('./userRoute')

const routes =[
    {
        path:'/user',
        handler: userRoute
    } 
]

module.exports = app =>{
    routes.forEach(r =>{
        if(r.path === '/'){
            app.get('/',r.handler)
        }else{
            app.use(r.path, r.handler)
        }
    })
}