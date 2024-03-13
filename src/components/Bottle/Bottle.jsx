import './Bottle.css'

import PropTypes from 'prop-types'


const Bottle = ({bottle, handleAddToCart}) => {
    return (
        <div className='bottle'>

            <h3>  {bottle.name} </h3>
            <img src={bottle.img} alt="" />
            <p> Price : ${bottle.price} </p>

            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>

        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;