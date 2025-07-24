import Header from "./Header"
import './Hello.css';
import wp from './whatsapp.png'
function Home() {
    var a = 10
    var b = 20
    var mycolor = { color: 'white', backgroundColor: 'green' }
    return (<>
        <h1>Home</h1>
        A Value is {a}  <br />
        B Value is {b}
        <p style={{ color: 'red', backgroundColor: 'black' }}>Hello I am P Tag</p>
        <p style={{ color: 'red', backgroundColor: 'black' }}>Hello I am P Tag</p>
        <p style={mycolor}>I am P again</p>
        <p style={mycolor}>I am P again</p>
        <p style={mycolor}>I am P again</p>
        <img src={wp}/>
    </>)
}
export default Home