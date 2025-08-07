import React, { useState } from "react";

function Form()
{
    const [formdata,setformdata]=useState({
        name: "",
        email: "",
        mobile: "",
        semester: "",
        gender: "",
        message: "",
        password: "",
        confirmpassword: "",
        termsAccepted: false
    })

    const [error,setError] = useState({})

    const handleChanges =(e)=>{
        const{name, value, type, checked} = e.target
        setformdata((prev)=>({
            ...prev,
            [name]: type=="checkbox"?checked: value,
        }))
    }

    const validData=()=>{
        const newError={}

        if(!formdata.name){
            newError.name="Please, Enter name"
        }else if(formdata.name.length<2 ||formdata.name.length>10){
            newError.name ="Name must be 2 to 10 charactes long"
        }else if(!/^[A-Za-z\s]+$/.test(formdata.name)){
            newError.name="Name must contain only character"
        }

        if(!formdata.email){
            newError.email="Please , Enter email"
        }else if(!formdata.email.includes("@") || !formdata.email.includes("."))
        {
            newError.email="Enter valid email"
        }

        if(!formdata.mobile){
            newError.mobile="please, Enter moblie number"
        }else if(!/^[0-9]{10}$/.test(formdata.mobile)){
            newError.mobile="Mobile number contain only 10 digits"
        }

        if(!formdata.semester){
            newError.semester="Please select semester"
        }

        if(!formdata.gender)
        {
            newError.gender="please selecte gender"
        }

        if(!formdata.message)
        {
            newError.message="please enter message"
        }
        if(!formdata.password){
            newError.password="Please enter password"
        }

        if(!formdata.confirmpassword){
            newError.confirmpassword="Please enter confirm password"
        }else if(formdata.password != formdata.confirmpassword){
            newError.confirmpassword="Password do not match"
        }

        if(!formdata.termsAccepted){
            formdata.termsAccepted="You must accept terms and conditions"
        }

        setError(newError)
        return Object.keys(newError).length==0

        

    }
    const handleSubmit=()=>{
        if(validData())
        {
            alert("Form submitted successfully")
            console.log(formdata)
        }
    }
    return(
        <>
            <h1>Register</h1>
            Name: <input type="text" name="name" value={formdata.name} onChange={handleChanges} placeholder="Enter Name"/>
            <br/>
            <span style={{ color: "red" }}>{error.name}</span>
            <br/>
            Email: <input type="text" name="email" value={formdata.email} onChange={handleChanges} placeholder="Enter Email"/>
            <br/>
            <span style={{ color: "red" }}>{error.email}</span>
            <br/>
            Mobile: <input type="text" name="mobile" value={formdata.mobile} onChange={handleChanges} placeholder="Enter Mobile No"/>
            <br/>
            <span style={{ color: "red" }}>{error.mobile}</span>
            <br/>
            Semester: <select name="semester" value={formdata.semester} onChange={handleChanges}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            <br/>
            <span style={{ color: "red" }}>{error.semester}</span>
            <br/>
            Gender: 
            Male
            <input type="radio" name="gender" value="Male" checked={formdata.gender=="Male"} onChange={handleChanges}/>
            Female
            <input type="radio" name="gender" value="Female" checked={formdata.gender=="Female"} onChange={handleChanges}/>
            <br/>
            <span style={{ color: "red" }}>{error.gender}</span>
            <br/>
            Message: <input type="text" name="message" value={formdata.message} onChange={handleChanges} placeholder="Enter Message"/>
            <br/>
            <span style={{ color: "red" }}>{error.message}</span>
            <br/>
            Password: <input type="password" name="password" value={formdata.password} onChange={handleChanges} placeholder="enter Password"/>
            <br/>
            <span style={{ color: "red" }}>{error.password}</span>
            <br/>
            conform Password: <input type="password" name="confirmpassword" value={formdata.confirmpassword} onChange={handleChanges} placeholder="enter conform Password"/>
            <br/>
            <span style={{ color: "red" }}>{error.confirmpassword}</span>
            <br/>
            <p>I Acept Terms & conditions</p>
            <input type="checkbox" name="termsAccepted" checked={formdata.termsAccepted} onChange={handleChanges}/>
            <br/>
            <input type="button" value="Submit" onClick={handleSubmit}/>
        </>
    )
}

export default Form