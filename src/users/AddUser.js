import React from "react";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddUser = () => {

    let navigate = useNavigate();
    const [users,setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const {name,username,email} = users;

    const onInputChange = (e) =>{
        setUser({...users,[e.target.name] : e.target.value});
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/addUser",users)
        navigate("/");
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center fw-bold text-decoration-underline">Register User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label my-2">Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" name="name" id="name" value={name}
                            onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label my-2">Username</label>
                            <input type="text" className="form-control" placeholder="Enter your username" name="username" id="username" value={username}
                                   onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label my-2">E-mail</label>
                            <input type="text" className="form-control" placeholder="Enter your email id" name="email" id="email" value={email}
                                   onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary mx-2" >Submit</button>
                        <button type="submit" className="btn btn-outline-danger">Cancel</button>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default AddUser;