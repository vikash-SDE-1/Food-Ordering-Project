import React, { useState } from 'react'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Footer from './components/Footer'
import './styles.css'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false)

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemId)
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
      return prevItems.filter((item) => item.id !== itemId)
    })
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const clearCart = () => {
    setCartItems([])
  }

  const handleCheckout = () => {
    setShowOrderConfirmation(true)
    clearCart()
    setIsCartOpen(false)
  }

  const closeOrderConfirmation = () => {
    setShowOrderConfirmation(false)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">🍔 FoodHub</h1>
          <button 
            className="cart-button" 
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            🛒 Cart ({getTotalItems()})
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <Menu addToCart={addToCart} />
        </div>
      </main>

      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          totalPrice={getTotalPrice()}
          onClose={() => setIsCartOpen(false)}
          clearCart={clearCart}
          onCheckout={handleCheckout}
        />
      )}

      <Footer />

      {showOrderConfirmation && (
        <div
          className="overlay"
          role="dialog"
          aria-modal="true"
          onClick={closeOrderConfirmation}
        >
          <div
            className="order-confirmation"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Order Placed!</h3>
            <p>Your delicious meal is on its way. Thank you for choosing FoodHub.</p>
            <button className="primary-btn" onClick={closeOrderConfirmation}>
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App



