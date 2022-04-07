import React ,{ useState , useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from '../actions/equipmentActions';
export default function Filter() {
    const[searchkey , setsearchkey] = useState('')
    const[category , setcategory] = useState('all')
    const dispatch = useDispatch();
    function filter()
    {
        dispatch(filterEquipments(searchkey , category))
    }
    return (
        <div className='container'>
            <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
               <div className="col-md-3">
                   <input type="text" className="form-control m-1" value={searchkey} 
                   onChange={(e) => {setsearchkey(e.target.value)}}
                   placeholder='search equipments '
                   />
               </div>
               <div className="col-md-3">
                  <select className='form-control w-100 m-1' value={category} onChange={(e) => {setcategory(e.target.value)}}>
                      <option value="all">All</option>
                      <option value="veg">Veg</option>
                      <option value="nonveg">Non-Veg</option>
                  </select>
               </div>
               <div className="col-md-3">
                    <button className='btn w-100' onClick={filter}>FILTER</button>
               </div>
            </div>
        </div>
    )
    function filterEquipments(a,b){
            console.log('hi');
    }
}
