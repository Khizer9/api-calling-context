import React from 'react'
import { useProducts } from '../context/ProductContext'

const Home = () => {

    const {products, loading} = useProducts()   

    const handleClick = () => {
      console.log('clicked')
    }

  return (
    <div className='main-container'>
        <div className='product-list'>
      {loading ? <div className="lds-ripple"><div></div><div></div></div> : products.map((product) => (
        <div className='product-card' key={product.id}>
          <img className='product-img' src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button className='product-btn' onClick={handleClick}>Add to cart</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Home
