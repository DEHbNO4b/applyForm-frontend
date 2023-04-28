import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs';
import ApplyForm from './components/ApplyForm'
import ApplyVew from './components/ApplyVew';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';


function App() {
  const url = "http://localhost:9090"
  //const url = "http://188.120.232.145:9090"
  return (
    <div className="App">
      <Container >
        <Row>
          <Header />
        </Row>
        <Row >
          <Col xs={4}>  <Sidebar url={url}/>  </Col>
          {/*  */}
          <Col >
            <Routes>
              <Route path='/apply_maker' element={<ApplyForm url={url} />} />
              <Route path='/apply/:applyId' element={<ApplyVew  url={url} />} />
              <Route path="/" element={<Home />} />
              <Route path="/about_us" element={<AboutUs />} />
            </Routes>
          </Col>
        </Row>
        <Row >
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
