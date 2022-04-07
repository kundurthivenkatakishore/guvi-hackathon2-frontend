export const addToCart=(car,quantity,price)=>dispatch=>{
    var cartItems={
        name:car.Name,
        _id:car._id,
        img:car.img,
        price:car.Price
        
    }
    dispatch({type:'ADD_TO_CART',payload:cartItems}) 
}
