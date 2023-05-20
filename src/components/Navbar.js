import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LockIcon from '@mui/icons-material/Lock';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import comment from '../images/comment.png';
import Video from '../images/video.png';
import logo from '../images/logo.png';
import './Navbar.css';




export default function Navbars() {
  return (
    <div>



    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo}  alt='error' style={{height:'4.5rem'}}/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex "
            style={{ maxHeight: '100px',flexDirection:'column' }}
            navbarScroll
        
        
        >
        
            <div className='d-flex'> 
            <h2> Untitled Document</h2>
            <span style={{marginTop:'0.5rem',marginLeft:'0.8rem'}}><StarBorderIcon/></span>
          
            
            </div>
            <div className="d-flex" style={{color:'black',fontWeight:'bold'}}>
            <Nav.Link href="#action1">File</Nav.Link>
            <Nav.Link href="#action2">Edit</Nav.Link>
            <Nav.Link href="#action2">View</Nav.Link>
            <Nav.Link href="#action2">Insert</Nav.Link>
            <Nav.Link href="#action2">Format</Nav.Link>
            <Nav.Link href="#action2">Tools</Nav.Link>
            <Nav.Link href="#action2">Extensions</Nav.Link>
            <Nav.Link href="#action2">Help</Nav.Link>
       
            
            </div>
          </Nav>

         
          <div className='d-flex align-items-center' style={{gap:'1.5rem'}}>
          <span><img src={comment} style={{height:'2.2rem'}} alt='error'></img></span>
          <span><img src={Video} style={{height:'2.2rem'}} alt='error'></img></span>
          <Button  style={{backgroundColor:'rgb(194,231,254)',border:'none',color:'black',borderRadius:'2rem',cursor:'pointer'}}> <LockIcon/><span  >Share</span ></Button>
          <span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrcayxm7EZrNIkPciDCwVan0AnBMiWtxVwQ&usqp=CAU' alt='error ' style={{height:'35px',width
        :'35px',borderRadius:'50%'}}/></span>
          
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  


    </div>
  )
}
