import { BrowserRouter as Router, Routes, Route, NavLink as Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'



export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li>
          <Link to="example1" activeClassName="active">Scenario 1</Link>
          </li>
          <li>
          <Link to="example2" activeClassName="active">Scenario 2</Link>
          </li>
          <li>
          <Link to="example3" activeClassName="active">Example 3</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="example1" element={<Example1/>} />
        <Route path="example2" element={<Example2/>} />
        <Route path="example3" element={<Example3/>} />
      </Routes>

    </div>
  )
}