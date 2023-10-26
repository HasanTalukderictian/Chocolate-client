import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const item = useLoaderData();
    const { _id, name, country, image, category, } = item;
   
    const handleUpdateform = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.Category.value;
        const image = form.image.value;

        const updatechocolate = {name, country, category,image};
        console.log(updatechocolate);

        fetch(`http://localhost:4000/chocolate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatechocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                form.reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div>
             <div className='mx-20 mt-8'>
            <div className='my-12 mx-8 px-8 text-center bg-[#DA8740]'>
                <h2 className='text-4xl p-4 font-semibold text-white text-center'>Chocolate Management System</h2>
                <Link to='/'><button className="btn btn-warning btn-sm my-4">Home</button></Link>
            </div>
            <div className='bg-white-200  mx-8 '>
                <div className='grid:justify-center my-4'>
                    <h2 className='text-center text-2xl font-semibold text-black my-4'>Update a Chocolates </h2>
                    <p className='text-black text-center'>Use the below form to create a new product</p>
                </div>
                <form onSubmit={handleUpdateform}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Hot Pink Chocolate" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Country</span>

                        </label>
                        <input type="text" name="country" defaultValue={country} placeholder="Enter Country Here" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                          
                        </label>
                        <input type="text" name="Category" defaultValue={category} placeholder="Write Category Here" className="input input-bordered w-full" />
                       
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                          
                        </label>
                        <input type="text" name="image" defaultValue={image} placeholder="Image Url" className="input input-bordered w-full" />
                       
                    </div>
                    <div className='form-control w-full my-4'>
                    <button className="btn btn-warning text-xl text-white">Update</button>
                    </div>
                </form>
            </div>



        </div>
        </div>
    );
};

export default Update;