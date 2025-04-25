const JSONserver =require('json-server')
const MPserver =JSONserver.create()
const Router = JSONserver.router('db.json')
const middleware = JSONserver.defaults() 

const PORT =4000 || process.env.PORT

MPserver.use(middleware)
MPserver.use(Router)

MPserver.listen(PORT,() =>{
    console.log(`Media player Servr Started at PORT: ${PORT}...and waiting for the client request`);
        
})