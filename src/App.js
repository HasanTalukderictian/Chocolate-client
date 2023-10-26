import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./componenets/AddItem/CartIem/CartItem";




function App() {

  const loadedChocolate = useLoaderData();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-transparent " >
      <div className="text-center my-6  py-4"> 
       <h2 className='text-4xl font-semibold my-4'>Chocolate Management System</h2>
        <div className="my-4 mx-3">
           <Link to='/AddItem'> <button className="btn btn-outline btn-sm btn-secondary">Add a Chocolate</button></Link>
        </div>
        
      </div>
      <div className="card bg-white shadow-lg rounded-lg mx-4 my-4">
      {
          loadedChocolate.map(item => <CartItem key={item._id}
          item={item}></CartItem>)
         }
      </div>
        
    </div>
  );
}

export default App;
