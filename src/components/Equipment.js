import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
export default function Equipment({ car }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    function addtocart(){
        dispatch(addToCart(car));
    }
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{car.Name}</h1>
                <img src={car.img} className="img-fluid" style={{ height: '200px', width: '300px' }} />
            </div>

            <div className="flex-container">
                <div className="m-2">
                    <h1 className="mt-1">{car.Price}/<sub>FOR A DAY</sub></h1>
                </div>
                <div className="m-2">
                    <button className="btn" onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{car.Name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={car.img} style={{height:'200px',width:'300px'}}/>
                    <p>{car.Description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>



    )
}