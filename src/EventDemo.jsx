function EventDemo(){

    const demo=()=>{
        alert("Welcome to ReactJS")
    }
    const printdata=(event)=>{
             console.log("Type is" + event.type)
             console.warn("Name is" + event.target.name)
             console.error("Value is" + event.target.value)
             console.log(event.target.value)
    }
        return(<>
        <br/><br/>
        <input type="button" onClick={demo} value="Click me"/>  
        <input type="button" onClick={() => alert("Inline")} value="Inline"/>
        <input type="button" name="btn1" value="btn1" onClick={printdata} />
        Text1 <input type="text" name="txt1" onChange={printdata} />
        Text2 <innput type="text" name="txt2" onChange={printdata}/>      
        
        </>)

}
export default EventDemo