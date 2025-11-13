import React from 'react'
import FoodItem from './FoodItem'

const Menu = ({ addToCart }) => {
  const menuItems = [
    {
      id: 1,
      name: 'Classic Burger',
      description: 'Juicy beef patty with fresh lettuce, tomato, and special sauce',
      price: 12.99,
      image: 'https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Burgers'
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      description: 'Fresh mozzarella, tomato sauce, and basil',
      price: 15.99,
      image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Pizza'
    },
    {
      id: 3,
      name: 'Chicken Tacos',
      description: 'Three soft tacos with grilled chicken, salsa, and guacamole',
      price: 11.99,
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mexican'
    },
    {
      id: 4,
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with caesar dressing and croutons',
      price: 9.99,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Salads'
    },
    {
      id: 5,
      name: 'Sushi Platter',
      description: 'Assorted sushi rolls with soy sauce and wasabi',
      price: 18.99,
      image: 'https://images.pexels.com/photos/3296399/pexels-photo-3296399.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Japanese'
    },
    {
      id: 6,
      name: 'Fish & Chips',
      description: 'Beer-battered fish with crispy fries and tartar sauce',
      price: 14.99,
      image: 'https://images.pexels.com/photos/3338530/pexels-photo-3338530.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Seafood'
    },
    {
      id: 7,
      name: 'Pad Thai',
      description: 'Stir-fried noodles with shrimp, peanuts, and vegetables',
      price: 13.99,
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Asian'
    },
    {
      id: 8,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with vanilla ice cream',
      price: 7.99,
      image: 'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Desserts'
    },
    {
      id: 9,
      name: 'Grilled Salmon Bowl',
      description: 'Glazed salmon served with quinoa, greens, and roasted veggies',
      price: 16.99,
      image: 'https://images.pexels.com/photos/3297365/pexels-photo-3297365.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Bowls'
    }
  ]

  return (
    <div className="menu">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <FoodItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default Menu



