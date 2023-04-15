import React, {useEffect, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import {useNavigate} from 'react-router-dom';

const RestaurantList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext) 
    let navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const response = await RestaurantFinder.delete(`/${id}`);
            console.log(response);
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id;
            }));
        }
        catch (err){
            console.log(`error: ${err}`)
        }
    }

    const handleUpdate = async (id) => {
        navigate(`/restaurants/${id}/update`); 
        // try {
        //     const response = await RestaurantFinder.post(`/${id}`);
        //     console.log(response);
        // }
        // catch (err) {
        //     console.log(`error: ${err}`)
        // }

    }

    useEffect(() => { 
        // moved code into fetchData func to avoid error from await implicit return in useEffect()
        const fetchData = async () =>{ 
            try{
                const response = await RestaurantFinder.get('/');
                setRestaurants(response.data.data.restaurants);
            }
            catch (err){
                console.log(`error ${err}`);
            }
        }

        fetchData();
    }, [])

  return (
    <div className='list-group'>
        <table className="table table-dark table-hover">
            <thead>
                <tr className='table-primary'>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {restaurants && restaurants.map((restaurant) =>{
                    return (
                        <tr key = {restaurant.id}>
                            <td>{restaurant.name.charAt(0).toUpperCase() + restaurant.name.substring(1)}</td>
                            <td>{restaurant.location.charAt(0).toUpperCase() + restaurant.location.substring(1)}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>reviews</td>
                            <td><button onClick={() => handleUpdate(restaurant.id)} className="btn btn-outline-warning">Update</button></td>
                            <td><button onClick={() => handleDelete(restaurant.id)} className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                    )
                })}

                {/* <tr>
                    <th scope="row">Velvet Taco</th>
                    <td>Dallas</td>
                    <td>$</td>
                    <td>3</td>
                    <td><button className="btn btn-outline-warning">Update</button></td>
                    <td><button className="btn btn-outline-danger">Delete</button></td>
                </tr>
                <tr>
                    <th scope="row">Dominos</th>
                    <td>Dallas</td>
                    <td>$</td>
                    <td>3</td>
                    <td><button className="btn btn-outline-warning">Update</button></td>
                    <td><button className="btn btn-outline-danger">Delete</button></td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantList