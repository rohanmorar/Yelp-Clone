import React, {useState, useContext} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
    const {addRestaurant} = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await RestaurantFinder.post('/', {
                name,
                location,
                price_range: priceRange
            });
            addRestaurant(response.data.data.restaurant)
            console.log(response);
        } 
        catch (err){
            console.log(err);
        }
    }

  return (
    <div className = 'mb-4'>
        <form action="">
            <div className="row justify-content-center">
                <div className="col-sm-4 my-1">
                    <input 
                    value={name} 
                    onChange={event =>  setName(event.target.value)} 
                    type="text" 
                    className="form-control mb-2"
                    placeholder="Name"
                    />
                </div>
                <div className="col-sm-4 my-1">
                    <input value={location} 
                    onChange={event =>  setLocation(event.target.value)} 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Location"
                    />
                </div>
                <div className="col-sm-2 my-1">
                    <select 
                    value={priceRange} 
                    onChange={event =>  setPriceRange(event.target.value)} 
                    className="form-select mb-2"
                    >
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                </div>
                <div className='col-auto my-1'>
                    <button onClick={handleSubmit} type= 'submit' className="btn btn-outline-primary mb-2">Add</button>
                </div>
            </div>
        </form>
    </div>

  );
}

export default AddRestaurant;