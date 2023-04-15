import React from 'react'

const AddRestaurant = () => {
  return (

    <div className = 'mb-4'>
        <form action="">
            <div className="row justify-content-center">
                <div className="col-sm-4 my-1">
                    <input type="text" className="form-control mb-2" placeholder="Name"/>
                </div>
                <div className="col-sm-4 my-1">
                    <input type="text" className="form-control mb-2" placeholder="Location" />
                </div>
                <div className="col-sm-2 my-1">
                    <select className="form-select mb-2">
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                </div>
                <div className='col-auto my-1'>
                    <button className="btn btn-outline-primary mb-2">Add</button>
                </div>
            </div>
        </form>
    </div>

  );
}

export default AddRestaurant;