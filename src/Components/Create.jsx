import { useState } from "react"
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";


const Create = () => {

    const [users, setUsers]= useState({ });

    const navigate= useNavigate();

    // getting data by using single state
   const getuserDate = (e)=> {
   setUsers({...users, [e.target.name] : e.target.value})
}

const dispatch =useDispatch();

//handing dispatch using submit button

const handleSubmit= (e)=>{
    e.preventDefault();
dispatch(createUser(users));
// alert("your data submitted successfully");
 navigate("/read")
}

  return (
    <form  className='w-50 mx-auto'>

<div className="mb-3">
  <label className="form-label">NAME</label>
  <input type="text" name="name" className="form-control" onChange={getuserDate} />
</div>
<div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" name="email" className="form-control" onChange={getuserDate} />
</div>
<div className="mb-3">
  <label className="form-label">AGE</label>
  <input type="number" name="age" className="form-control" onChange={getuserDate} />
</div>
<div className="mb-3">
  <input className="form-check-input"  name="gender" value="male" onChange={getuserDate} type="radio"  />
  <label className="form-check-label" >Male</label>
</div>
<div className="mb-3">
  <input className="form-check-input" name="gender" value="female" onChange={getuserDate} type="radio" />
  <label className="form-check-label"  >Female</label>
</div>
<div>
    <button className='btn btn-primary my-3 mx-3' onClick={handleSubmit}>SUBMIT</button>
    <button className='btn btn-danger my-3 mx-3'>CLEAR</button>
</div>
    </form>
  )
}

export default Create