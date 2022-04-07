export const getAllEquipmentsReducer=(state={pizzas:[]},action)=>{

    switch(action.type)
    {
        case 'GET_ALL_EQUIPMENTS_REQUEST' : return{
            ...state,
            loading : true,
            
        }
        case 'GET_ALL_EQUIPMENTS_SUCCESS' : return{
         
            loading : false,
            pizzas:action.payload
        }
        case 'GET_ALL_EQUIPMENTS_FAILED' : return{
        
            loading : false,
            error:action.payload
        }
        default: return state
    }

}
