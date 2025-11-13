import React from 'react'

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&blur=20'

const FoodItem = ({ item, addToCart }) => {
  const handleImageError = (event) => {
    if (event.target.src === FALLBACK_IMAGE) return
    event.target.src = FALLBACK_IMAGE
  }

  return (
    <div className="food-item">
      <div className="food-item-image">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onError={handleImageError}
        />
      </div>
      <div className="food-item-content">
        <h3 className="food-item-name">{item.name}</h3>
        <p className="food-item-description">{item.description}</p>
        <div className="food-item-footer">
          <span className="food-item-price">${item.price.toFixed(2)}</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodItem





