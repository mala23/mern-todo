import express from 'express'
import path from 'path'
import bodyparser from 'bodyparser'
import logger from 'morgan'
import mongoose from 'mongoose'
import bb from 'express-busboy'

import todoRoutes from './routes/todo.server.route'

const app = express()

bb.extend(app)

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3001

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern-todo-app', {
    useMongoClient: true,
})

app.use('/api', todoRoutes)

app.get('/', (req,res) => {
    return res.end('api working')
})

 catch 404
 app.use((req, res, next) => {
   res.status(404).send('<h2 align=center>Page Not Found!</h2>')
})

// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`)
});
