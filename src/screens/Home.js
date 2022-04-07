import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { getAllEquipments } from "../actions/equipmentAction";
import Equipment from "../components/Equipment";
import cars from '../data';
import { Route,Routes } from "react-router-dom";

export default function Home(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllEquipments)
    },[])
    return(
        <div>
            
            <div className="row">
                {cars.map(car=>{
                    return <div className="col-md-4 p-3" key={car._id}>
                        <div className="m-3">
                            <Equipment car={car}/>
                        </div>
                    </div>
                })}
            </div>
            <cart/>
        </div>
    )
}