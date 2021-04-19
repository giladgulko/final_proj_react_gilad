import React, { Component } from 'react'
import { coment } from '../class/coment'
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class CCComment extends Component {
    constructor(props) {
        super(props)
        
    
        this.state = {
         coment:this.props.coment
        
          
  

        }
    }
    render() {
        return (
            <div>
              {this.state.coment.map((com)=>
              <Alert variant='primary'>
              <b>{com.author}</b>- {com.text}, {com.time}
              </Alert>  
              )}
             
              
            </div>
        )
    }
}
