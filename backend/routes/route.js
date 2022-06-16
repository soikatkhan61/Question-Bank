const userRoute = require('./userRoute')
const adminRoute = require('./adminRoute')

const routes =[
    {
        path:'/user',
        handler: userRoute
    },
    {
        path:'/admin',
        handler: adminRoute
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