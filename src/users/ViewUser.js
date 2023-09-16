import React from "react";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ViewUser = () => {

    let {id} = useParams();
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    useEffect( () => {
       loadUser();
    })
    const loadUser = async () => {
       await axios.get(`http://localhost:8080/user/${id}`)
            .then((response) => {
                setUser(response.data);
            });
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                    <h2 className="text-center fw-bold text-decoration-underline mt-2" > View User</h2>
                    <div className="card">
                        <div className="card-header">
                            <b className="text-decoration-underline" style={{color:"red"}}>Details of User id : {user.id}</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name : {user.name}</b>
                                </li>
                                <li className="list-group-item">
                                    <b>UserName : {user.username}</b>
                                </li>
                                <li className="list-group-item">
                                    <b>E-mail : {user.email}</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;