import {BrowserRouter,Route} from 'react-router-dom';
import {Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Mywork from './components/MyWork';
import './App.scss'
import Skill from './components/Skills';
import Signin from './components/SignIn/Signin';
import Welcome from './components/SignIn/Welcome';
import Crousel from './components/Crousel';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Welcome />}/>
          {/* <Route index element={<Home />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skill" element={<Skill/>} />
          <Route exact path="/mywork" element={<Mywork/>} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/crousel" element={<Crousel/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// //
// const github = {
//   userid: 'Yash-Sharma2002',
//   pass: '34bb59e3-78c6-4eb0-b289-659f62bce6ca',
// };
