import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import RestaurantFinder from '../apis/RestaurantFinder';
import {useNavigate} from 'react-router-dom';


const UpdateRestaurant = (props) => {
    const {id} = useParams();
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            const response = await RestaurantFinder.get(`/${id}`)
            // console.log(response)
            const n = response.data.data.restaurant.name;
            const l = response.data.data.restaurant.location;
            const pr = response.data.data.restaurant.price_range;
            setName(n);
            setLocation(l);
            setPriceRange(pr);
            // setName(n.charAt(0).toUpperCase() + n.substring(1));
            // setLocation(l.charAt(0).toUpperCase() + l.substring(1));
            // setPriceRange(pr.charAt(0).toUpperCase() + pr.substring(1));
        }
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
         event.preventDefault();
         const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
             name,
             location,
             price_range : priceRange
         });
         console.log(updatedRestaurant);
         navigate('/')
    }

    return (
    <div>
        <form action="">
            <div className='form-group mb-4'>
                <label htmlFor="restaurantName">Name</label>
                <input value = {name} onChange = {(event) => setName(event.target.value)} type="text" className="form-control" id="name" placeholder="Enter name"/>
            </div>
            <div className='form-group mb-4'>
                <label htmlFor ="restaurantLocation">Location</label>
                <input value = {location} onChange = {(event) => setLocation(event.target.value)} type="text" className="form-control" id="location" placeholder="Enter name"/>
            </div>
            <div className='form-group mb-4'>
                <label htmlFor ="priceRange">Price Range</label>
                <select value={priceRange} onChange={event =>  setPriceRange(event.target.value)}className="form-select mb-2" id="price_range">
                    <option disabled>Price Range</option>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                </select>
            </div>
            <button onClick = {handleSubmit} type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
    </div>
    )
}

export default UpdateRestaurant