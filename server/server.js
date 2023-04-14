require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const db = require('./db')
const app = express();

// takes JSON object in the body of client's request and attaches it the req object under 'body'
app.use(express.json())

// Get all restaurants
app.get('/api/v1/restaurants', async (req, res) =>{
    try{
        const results = await db.query('SELECT * FROM restaurants');
        res.status(200).json({
            status : 'success',
            results : results.rows.length,
            data : {
                restaurants: results.rows
            }
        });
    }
    catch (err){
        console.log(`error occured: ${err}`)
    }
})

// Get a specific restaurant (By database ID)
app.get('/api/v1/restaurants/:id', async (req, res) =>{
    try{
        const results = await db.query(`SELECT * FROM restaurants WHERE id = $1 `, [req.params.id]);
        res.status(200).json({
            status : 'success',
            results : results.rows.lenght,
            data : {
                restaurant: results.rows[0]
            }
        });
    }
    catch (err){
        console.log(`error occured: ${err}`)
    }
})

// Create a new restaurant
app.post('/api/v1/restaurants', async (req, res) =>{
    try{
        const new_restaurant = req.body;
        const results = await db.query(`INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3)returning *`, [new_restaurant.name, new_restaurant.location, new_restaurant.price_range])
        res.status(201).json({
            status : 'success',
            data : {
                restaurant: results.rows[0]
            }
        });
    }
    catch (err){
        console.log(`error occured: ${err}`)
    }
})

// Update a specific restaurant (By database ID)
app.put('/api/v1/restaurants/:id', async (req, res) =>{
    try{
        const new_restaurant = req.body;
        const results = await db.query(`UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *`, [new_restaurant.name, new_restaurant.location, new_restaurant.price_range, req.params.id])
        res.status(200).json({
            status : 'success',
            data : {
                restaurants: results.rows[0]
            }
        });
    }
    catch (err){
        console.log(`error occured: ${err}`)
    }
})

// Delete a specific restaurant (By database ID)
app.delete('/api/v1/restaurants/:id', async (req, res) =>{
    try{
        const results = await db.query(`DELETE FROM restaurants WHERE id = $1`, [req.params.id])
        res.status(204).json({
            status : 'success',
        });
    }
    catch (err){
        console.log(`error occured: ${err}`)
    }
})

const port = process.env.PORT || 3001;
 
app.listen(port, () =>{
    console.log(`server is up and listening on port ${port}`);

});