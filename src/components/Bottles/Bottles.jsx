import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

import './Bottles.css'
import { addToLS, getStoredCart, removeFromLs } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";





const Bottles = () => {

    // useState 
  const [bottles, setBottles] = useState([])
  const [cart , setCart] = useState([])


    // useEffect

    useEffect(()=>{

        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
        
    },[])

    useEffect(()=>{

        console.log(bottles.length)

        const savedCart = []

     
       if(bottles.length > 0){
        const storedCart = getStoredCart()

        console.log(storedCart.length)
    

        for(const id of storedCart){
            console.log(id)

            const bottle = bottles.find(bottle => bottle.id === id)

            if(bottle){
                savedCart.push(bottle)
            }

        }

        console.log(savedCart)

        setCart(savedCart)

        console.log(cart)
       }

       

        
    }, [bottles])

    // handleEvent

    const handleAddToCart = (bottle) =>{

        const newBottle = [...cart , bottle]      

        setCart(newBottle)

        addToLS(bottle.id)

        

    }

    const handleRemove = (id) =>{

        console.log(id)

        removeFromLs(id)

        const remaining = cart.filter(bottle => bottle.id !== id)

        setCart(remaining)



    }


    return (
        <div>

            <h5>Bottles are Available : {bottles.length} </h5>

            <h3> Cart : {cart.length} </h3>

           <Cart cart={cart} handleRemove ={handleRemove} ></Cart>

       



           <div className="bottles-container">
           {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} ></Bottle>)
            }
           </div>
            
        </div>
    );
};

export default Bottles;