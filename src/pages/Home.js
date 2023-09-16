import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link } from "react-router-dom";
const Home = () => {

    const [users,setUsers] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);


    const loadUser = async () => {
        await axios.get("http://localhost:8080/getUser").then((response)=>{
            setUsers(response.data);
        })
    }
    const deleteUser = async (id) => {
        if(window.confirm("are you sure you want to delete?")){
            await axios.delete(`http://localhost:8080/user/${id}`).then(res=> {
                loadUser();
            });
        }

    }
    return(
        <div className="container">
            <div className="py-4">
                <table className="table table-striped-columns table-warning table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">username</th>
                        <th scope="col">Email id</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,i)=>{
                            return(
                                <tr className="table-danger" key={i}>
                                    <th>{i+1}</th>
                                    <th>{user.name}</th>
                                    <th>{user.username}</th>
                                    <th>{user.email}</th>
                                    <th>
                                        <Link className="btn btn-primary mx-2" to={`/viewUser/${user.id}`} >View</Link>
                                        <Link className="btn btn-secondary mx-2" to={`/editUser/${user.id}`}>Edit</Link>
                                        <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                                        {/*<Link className="btn btn-danger" to={`/deleteUser/${user.id}`}>Delete</Link>*/}
                                    </th>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;