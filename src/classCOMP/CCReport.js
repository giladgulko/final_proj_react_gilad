import React, { Component } from 'react'
import { coment } from '../class/coment'
import CCComment from './CCComment'
import { Button,Modal,InputGroup,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { findByLabelText } from '@testing-library/dom';



export default class CCReport extends Component {
    constructor(props) {
        super(props)
        
    
        this.state = {
            comentList:[],
          report:this.props.report,
          
  

        }
        this.getName=(e)=>{this.setState({ name: e.target.value })}
        this.gettext=(e)=>{this.setState({ text: e.target.value })}
        this.addToList=()=>{
            alert("in")
        }
        this.handleClose=()=>{
            this.setState({modalShow:false})
        }
        this.handleShow=()=>{
            this.setState({modalShow:true})
        }
        this.addNewComent=()=>{
            this.setState({modalShow:false})
           let time=new Date().toLocaleTimeString()
           let date=new Date()
           let currentDate=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getUTCFullYear()
            
            let newComent=new coment(this.state.comentList.length+1,currentDate,time,this.state.text,this.state.name)
            let newlist=this.state.comentList;
            console.log(this.state.comentList)
            newlist.push(newComent)
            this.setState({comentList:newlist})
            console.log(this.state.comentList)
        }
    
    

    }

   
    
    render() {
        return (
            <div>
                <h1>דיווח מספר: {this.state.report.reportNum}, חוף: {this.state.report.baech}</h1>
                <p><b>{this.state.report.author}</b>-{this.state.report.text},{this.state.report.time.split('T')[1]}</p>
                 <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+this.state.report.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>
            <h1>תגובות:</h1> 
            
          <Button onClick={this.handleShow}>הוסף תגובה</Button>
            </div>
           
          <CCComment coment={this.state.comentList}/>
            

            <Modal show={this.state.modalShow} onHide={this.handleClose}>
               <Modal.Header closeButton>
                 <Modal.Title>הוספת תגובה חדשה</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm" onChange={this.getName}>שם</InputGroup.Text>
                      </InputGroup.Prepend>
                   <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.getName}/>
                   </InputGroup>
               <InputGroup>
                 <InputGroup.Prepend>
          
                   <InputGroup.Text>תגובה</InputGroup.Text>
                     </InputGroup.Prepend>
                      <FormControl as="textarea" aria-label="With textarea" onChange={this.gettext} />
                      </InputGroup>
                   </Modal.Body>
               <Modal.Footer>
                 <Button variant="secondary" onClick={this.handleClose}>
                        סגור
                 </Button>
                  <Button variant="primary" onClick={this.addNewComent}>
                     שמור
                  </Button>
                </Modal.Footer>
                  </Modal>
            </div>

            
        )
    }
}
