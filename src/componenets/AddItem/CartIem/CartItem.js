import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartItem = ({ item }) => {

   

    const { _id, name, country, category, image } = item;


    const handleItemDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/chocolate/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Chocolate has been deleted.',
                                'success'

                            )
                           
                        }

                    })
            }

        })




    }



    return (
        <div>
            <div className=' card bg-white shadow-lg rounded-lg overflow-hidden my-8 mx-5'>
                <div className='flex my-4 mx-4'>
                    <div className='my-3 mx-4'>
                        <h2 className='text-xl text-center font-bold my-3 '>Image</h2>
                        <img className='w-[100px]' src={image} alt="" />
                    </div>
                    <div className='my-3 mx-4'>
                        <h2 className='text-xl  text-center  font-bold my-3 '>Name</h2>
                        <p>Name : {name}</p>
                    </div>
                    <div className='my-3 mx-4'>
                        <h2 className='text-xl  text-center  font-bold my-3 '>Country</h2>
                        <p>Country : {country}</p>
                    </div>
                    <div className='my-3 mx-4'>
                        <h2 className='text-xl  text-center  font-bold my-3 '>Category</h2>
                        <p>Category : {category}</p>
                    </div>
                    <div className='my-3 mx-4 space-x-4'>
                        <h2 className='text-xl  text-center  font-bold my-3 '>Action</h2>
                         <Link to={`updateItem/${_id}`}><button className="btn btn-outline btn-primary">Update</button></Link>
                        <button onClick={() => handleItemDelete(_id)} className="btn btn-outline btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;