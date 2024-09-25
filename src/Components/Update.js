import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/userDetailSlice';

const Update = () => {

    const { id } = useParams();
    const disptach = useDispatch();
    const [updatedData, setUPdatedData] = useState();
    const { users } = useSelector((state) => state.app);
    const navigate= useNavigate()


    useEffect(() => {
        if (id) {
            const singleUser = users.filter((dt) => dt.id == id);
            setUPdatedData(singleUser[0]);
        }
    }, [])

    const handleChange = (e) => {
        setUPdatedData({ ...updatedData, [e.target.name]: [e.target.value] })
    }

    //submitting updated data
    const handleSubmit = (e) => {
        e.preventDefault();
        disptach(updateUser(updatedData));
        navigate("/read");
    }

    return (
        <div>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input type="text" name="name" onChange={handleChange} value={updatedData && updatedData.name} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" onChange={handleChange} name="email" value={updatedData && updatedData.email} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">AGE</label>
                    <input type="number" onChange={handleChange} name="age" value={updatedData && updatedData.age} className="form-control" />
                </div>
                <div className="mb-3">
                    <input className="form-check-input" name="gender" value="male" onChange={handleChange} checked={updatedData && updatedData.gender == "male"} type="radio" />
                    <label className="form-check-label" >Male</label>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" name="gender" onChange={handleChange} checked={updatedData && updatedData.gender == "female"} value="female" type="radio" />
                    <label className="form-check-label" >Female</label>
                </div>
                <div>
                    <button className='btn btn-primary my-3 mx-3' onClick={handleSubmit}>UPDATE</button>
                </div>
            </form>
        </div>
    )
}

export default Update