import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    
    let history = useNavigate();
    const[credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""});
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/CreateUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.sucess){
            localStorage.setItem("token",json.authtoken);
            history('/');
        }else{
            alert("Invalid ceadentials");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp"onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}/>
                    
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="cpassword" onChange={onChange} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="cpassword" className="form-control" id="cpassword" name="password" onChange={onChange} minLength={5} required/>
            </div>
         
            <button type="submit"  className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Signup
