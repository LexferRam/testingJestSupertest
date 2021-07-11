const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.use('/users', require('./routes/users'))

app.get('/posts', (req,res) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            res.status(200).json(json)
        })

    } catch (error) {
        console.log(error)
    }
})

app.get('/posts/:userId',async (req,res) => {
    const {userId} = req.params;
    try {
        // fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        // .then(response => response.json())
        // .then(json => {
        //     // console.log(json)
        //     res.status(200).json(json)
        // })
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        const data = await response.json()
        res.status(200).json(data)


    } catch (error) {
        console.log(error)
    }
})

const server = app.listen(3000);
console.log('Server on port 3000');

module.exports = {app,server};