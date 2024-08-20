import React from 'react'

const useCartCount = () => {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // We want to see how many items are in the cart for a specific user 
    // Where we normally fetch to a database or our backend service,  we will be using fakestore API 

    fetchCartCount(); 
  }, [])

  const fetchCartCount = async () => {
    const response = await fetch('https://fakestoreapi.com/carts/5');
    const data = await response.json(); 

    console.log(data); 
  }
  
  return (
    <div>useCartCount</div>
  )
}

export default useCartCount