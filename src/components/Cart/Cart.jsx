import './Cart.css'
import PropTypes from 'prop-types'


const Cart = ({cart, handleRemove}) => {

console.log(cart)
    return (
        <div>

        
            <div  className={'cart-bottle'}>
                {
                    cart.map((bottle,index) => <div style={{display:'grid', gridTemplateColumns:"repeat(1, fr) ", alignItems: 'center', justifyContent: 'center'}} key={index}>
                         <img  src={bottle.img}></img> 
                         <button onClick={()=> handleRemove(bottle.id)}> Remove </button>
                 </div> )
                }
            </div>
            
        </div>
    );
};

Cart.propTypes = {
    cart : PropTypes.array.isRequired,
    handleRemove : PropTypes.func.isRequired
}

export default Cart;