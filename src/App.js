import './App.css';
import React from "react";

import Home from './componenets/mysite/Home';
import About from './componenets/mysite/About';
import Contact from './componenets/mysite/Contact';
import Gallery from './componenets/mysite/Gallery';
import Services from './componenets/mysite/Services';

// import { Col, Container, Row } from 'reactstrap';
import NavBar from './componenets/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import useFetch from './componenets/useFetch';


//we are importing angular website now
// import './angular/runtime';
// import './angular/polyfills';
// import './angular/vendor';
// import './angular/main';
// import './angular/styles'; // if styles.js exists
// import './angular/styles.css';

function App() {
  // const [data, setData] = useState(null);
  
  // const [data1]=useFetch("https://jsonplaceholder.typicode.com/todos")
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => { 
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);
  return (
    <>
      {/* <Component1 /> */}
      {/* <Header/> */}

      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />

          <Route exact path="/gallery" element={<Gallery />} />

          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/services" element={<Services />} />

        </Routes>
      </Router>

      {/* <Container>
    <Row>
      <Col md={4}><h2>This is menu side</h2>
      </Col>
      <Col md={8}><h3>This is contaent side</h3></Col>
    </Row>
   </Container> */}

    </>
  );
}

export default App;
// const UserContext = createContext()

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");
//   const [num1,setNum1]=useState(0);
//   const [num2,setNum2]=useState(0);
//   const [sum,setSum]=useState(0);

//  useEffect(()=>{
//   //e.preventdefault();
//   setSum(parseInt(num1)+parseInt(num2));
// });
  //const sum=setNum1+setNum2;
//   const inputElement = useRef()

//   const inputElement1 = useRef(0); const inputElement2 = useRef(0);
//   const val1 = parseInt(inputElement1.current.value);
//   const val2 = parseInt(inputElement2.current.value);
//   const val = val1 + val2;
//   const focusInput = () => {
//     return inputElement.current.value = val;
//   };
//   return (
//     <>
//       <div style={{ marginTop: 150 }}></div>
//       <input type="text"  onChange={(e)=>setNum1(e.target.value)} />
//       <input type="text"  onChange={(e)=>setNum2(e.target.value)} />
//        {sum}
//       <input type="text" ref={inputElement2} />

//       <button type="button" onClick={focusInput}></button>
//       <UserContext.Provider value={user}>
//         <h1>{`Hello ${user}!`}</h1>
//         {/* <Component5 value={user} /> */}
//         <Component5 />
//       </UserContext.Provider>
//     </>
//   );
// }
// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//             <Component3 user={user} />

//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(UserContext);
//   return (
//     <>
//       <h1>Component 5</h1>
//       {/* <h2>{`Hello ${user} again!`}</h2>      template literal */}
//       <h2>Hello {user} again!</h2>
//     </>
//   );
// }