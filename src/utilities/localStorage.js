

const getStoredCart = () =>{

    const storedStringFromCart = localStorage.getItem('cart')

    if(storedStringFromCart){
        return JSON.parse(storedStringFromCart)
    }

    return []
}

const saveToLS = cart =>{
    
    localStorage.setItem('cart', JSON.stringify(cart))
}


const addToLS = id => {
    const cart = getStoredCart()

    cart.push(id)
    saveToLS(cart)

}

// remove from local Storage

const removeFromLs = id => {
    const cart = getStoredCart()

    const remaining = cart.filter(idx => idx !== id)

    saveToLS(remaining)
}




export {addToLS, getStoredCart , removeFromLs}