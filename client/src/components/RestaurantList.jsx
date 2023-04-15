import React from 'react';

export const RestaurantList = () => {
  return (
    <div className='list-group'>
        <table class="table table-dark table-hover">
            <thead>
                <tr class='table-primary'>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Velvet Taco</th>
                    <td>Dallas</td>
                    <td>$$</td>
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
                </tr>
            </tbody>
        </table>
    </div>
  )
};

export default RestaurantList;