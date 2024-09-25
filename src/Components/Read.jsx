import React, { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import {showUser,deleteUser }  from "../features/userDetailSlice"
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch= useDispatch();
  const {users, loading} = useSelector((state)=>state.app)

  useEffect(()=>{
   dispatch(showUser());
  },[])

  // if(loading){
  //   return <h2>Loading</h2>
  // }

  return (
    <div>
      <table className="table">
    <thead>
      <tr scope="row">
        <th scope="col">id </th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Gender</th>
        <th scope="col">age</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
{users && users.map((dt)=>(
  <tbody key={dt.id}>
  <tr key={dt.id}>
  <td>{dt.id}</td>
  <td>{dt.name}</td>
  <td>{dt.email}</td>
  <td>{dt.gender}</td>
  <td>{dt.age}</td>
  <td>
  <Link to={`/edit/${dt.id}`} className="btn btn-success my-3 mx-3">EDIT</Link></td>
  <td>
   
  <Link className="btn btn-danger my-3 mx-3" onClick={()=>dispatch(deleteUser(dt.id))}>Delete</Link>
  </td>
  </tr>
  </tbody>
  ))}
  </table>
    </div>
  )
}

export default Read