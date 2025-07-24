import About from './About'
import Home from './Home' 
import Contact from './Contact'
import EventDemo from './EventDemo'
import Counter from './Counter'
import Sumdemo from './Sumdemo'
import ReactFragement from './ReactFragement'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (<>
    <h1>Hello_React</h1>
    <p>This is a simple React application.</p>
     <Router>
      <Link to="/">Home</Link>|
      <Link to="/about">About</Link>|
      <Link to="/Contact">Contact</Link>|
      <Link to="/EventDemo">EventDemo</Link>|
      <Link to="/Counter">Counter</Link>|
      <Link to="/Sumdemo">Sum</Link>|
      <Link to="/ReactFragement">React Fragement</Link>|
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path='/eventdemo' element={<EventDemo />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/sumdemo' element={<Sumdemo />} />
        <Route path='/reactfragement' element={<ReactFragement />} />
        <Route path='/cake/ahmedabad' element={<h1>Cake Ahmedabad</h1>} />
        <Route path='/cake/rajkot' element={<h1>Cake Rajkot</h1>} />
        <Route path='/cake/surat' element={<h1>Cake Surat</h1>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
     </Router>
  </>);
}

export default App;