let cors = require('cors')
let express = require('express')
let bodyParser = require('body-parser')
const Pool = require('pg').Pool
let app = express()

const pool = new Pool({
    user:'chadgolden',
    host: 'localhost',
    database: 'reddit',
    password: 'password',
    port: 5432
})

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
    
}

app.use(cors(corsOptions))
app.use(bodyParser.json())



app.get('/reddit', function(req,res){
   
    pool.query('SELECT * FROM users', function(error, results){
        if(error){
            throw error
        }
        res.send(results.rows)
    })
    
})

app.post('/addPost', function(req, res){
    let votes = req.body.votes
    let image = req.body.image
    let title = req.body.title
    let author = req.body.author
    let subreddit = req.body.subreddit

    pool.query('INSERT INTO users (votes, image, title, author, subreddit) VALUES ($1, $2, $3, $4, $5)'[votes, image, title, author, subreddit], function(error, results){
        if(error) {
            console.log(error)
            throw error
        }
        res.send(req.body)
    })
})



app.put('/reddit/:id,'), (req,res) => {
let id = req.params.id
let votes = req.body.votes

pool.query('UPDATE users SET votes = $1 WHERE id = $2 RETURNING *', [votes, id]), (error, results) => {
    if(error){
        console.log(error);
        res.status(500).send('Error updating votes');
    } else {
        res.status(200).json(results.rows[0]);
        }
}}







app.listen(3000)