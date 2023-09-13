import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    console.log(bottle)
    const { name, brand, color, id, price } = bottle;
    return (
        <div className='bottle'>
            <p>Bottle: {id}</p>
            <h3>Bottle: {brand}</h3>
            <h3>Bottle: {name}</h3>
            <p> <small>Bottle: {color}</small></p>
            <h3>Bottle: {price}</h3>
            <button onClick={handleAddToCart}>Purchase</button>
        </div>
    );
};

export default Bottle;