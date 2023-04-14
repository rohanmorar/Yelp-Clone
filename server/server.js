require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const app = express();

// takes JSON object in the body of client's request and attaches it the req object under 'body'
app.use(express.json())

// Get all restaurants
app.get('/api/v1/restaurants', (req, res) =>{
    console.log("inside my get method son.");
    res.status(200).json({
        status : 'success',
        data : {
            restaurants: ['mcdonalds', 'taco bell', 'dominos'] 
        }
    });
})

// Get a specific restaurant (By database ID)
app.get('/api/v1/restaurants/:id', (req, res) =>{
    console.log(req.params);

    res.status(200).json({
        status : 'success',
        data : {
            restaurants: 'dominos'
        }
    });
})

// Create a new restaurant
app.post('/api/v1/restaurants', (req, res) =>{
    console.log(req.body);

    res.status(201).json({
        status : 'success',
        data : {
            restaurants: 'dominos'
        }
    });
})

// Update a specific restaurant (By database ID)
app.put('/api/v1/restaurants/:id', (req, res) =>{
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status : 'success',
        data : {
            restaurants: 'dominos'
        }
    });
})

// Delete a specific restaurant (By database ID)
app.delete('/api/v1/restaurants/:id', (req, res) =>{
    res.status(204).json({
        status : 'success'
    });
})

const port = process.env.PORT || 3001;
 
app.listen(port, () =>{
    console.log(`server is up and listening on port ${port}`);

});