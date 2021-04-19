import React, { Component } from 'react'
import { report } from '../class/report'
import CCReport from './CCReport'
import axios from 'axios';
import { Button,Modal,InputGroup,FormControl,Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import CCcamera from './CCcamera';

const reportToRender1=new report(1,'19/04/2021','8:00','גלים של 60','צפון','IsZr07ntRpk',"avi","בננה ביץ")
const reportToRender2=new report(2,'19/04/2021','6:00','אחלה ים!עדיף ללכת כמה שיותר מוקדם לפני הרוח','חוף הכרמל','GXYpNLFuEnI','akon','עתלית')
const reportToRender3=new report(3,'19/04/2021','13:00','אחלה ים!עדיף ללכת כמה שיותר מוקדם לפני הרוח','צפון','q9j02idIX_c','akon','קריית ים')
const reportToRender4=new report(4,'19/04/2021','10:00','אחלה ים!עדיף ללכת כמה שיותר מוקדם לפני הרוח','מרכז','0soiRpqjnmk','akon','הילטון')
const reportToRender5=new report(5,'19/04/2021','13:30','אחלה ים!עדיף ללכת כמה שיותר מוקדם לפני הרוח','מרכז','GXYpNLFuEnI','akon','המערבי')
const reportToRender6=new report(6,'19/04/2021','9:00','אחלה ים!עדיף ללכת כמה שיותר מוקדם לפני הרוח111','דרום','GXYpNLFuEnI','akon','זיקים')
export default class CCmain extends Component {
    
    constructor(props) {
        super(props)
        
    
        this.state = {
         reportList:[ reportToRender1,reportToRender2,reportToRender3,reportToRender4,reportToRender5,reportToRender6],
        
         photos: [],
         showreports:false,
         showcamera:true,
         selectshow:false
  

        }
       
           
        this.getReports=()=>{
            const apiUrl = 'https://localhost:44331/api/report?date=2021/04/19';
            fetch(apiUrl,
           {
             method: 'GET',
             headers: new Headers({
               'Content-Type': 'application/json; charset=UTF-8',
               'Accept': 'application/json; charset=UTF-8'
             })
           })
           .then(res => {
             console.log('res=', res);
             console.log('res.status', res.status);
             console.log('res.ok', res.ok);
             return res.json()
           })
           .then(
               (result) => {
                   let arr=[]
                   result.map((res)=>{
                       let repo=new report(res.Report_num,res.Date,res.Time,res.Text,res.Area,res.Link,res.Author,res.Beach)
                       arr.push(repo)
                       console.log('arr-----',arr)
                      // localStorage['report']=JSON.stringify(arr) 
                       this.setState({reportToRender:arr})
                   })
                   console.log(123,this.state.reportToRender)

                   

                 });


                
                 console.log('------>',this.state.reportToRender)
        }      
                    
           this.addReportBTM=()=>{
            this.setState({modalShow:false})
            let time=new Date().toLocaleTimeString()
            let date=new Date()
            let currentDate=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getUTCFullYear()
            let newRep=new report(this.state.reportList.length+1,currentDate,time,this.state.text,this.state.selectArea,this.state.link,this.state.name,this.state.area)
            let lastRep=this.state.reportToRender;
            lastRep.push(newRep)
          
            this.setState({reportToRender:lastRep})
            const apiUrl2 = 'https://localhost:44331/api/report?date=2021/04/19';
            const repo={
                Date:currentDate,
                Time:time,
                
                Area:this.state.selectArea,
                Link:this.state.link,
                Text:this.state.text,
                Author:this.state.name,
                Beach:this.state.area


            }
            fetch('https://localhost:44331/api/report',
                {
                  method: 'POST',
                  body: JSON.stringify(repo),
                  headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                  })
                })
                .then(res => {
                  console.log('res=', res);
                  console.log('res.status', res.status);
                  if (res.status === 201) {
                    console.log('ing created:)');
                  }
                  console.log('res.ok', res.ok);
          
                  if (res.ok) {
                    console.log('post succeeded');
                  }
          
                  return res.json()
                })
                .then(
                  (result) => {
                    console.log("fetch btnFetchGetStudents= ", result);
                  },
                  (error) => {
                    console.log("err post=", error);
                  });
              console.log('end');
              this.getReports()
           } 

           this.handleClose=()=>{
            this.setState({modalShow:false})
           }
          this.handleShow=()=>{
            this.setState({modalShow:true})
            
            }
           
        this.getName=(e)=>{this.setState({ name: e.target.value })}
        this.gettext=(e)=>{this.setState({ text: e.target.value })}
        this.getlink=(e)=>{this.setState({ link: e.target.value })}
        this.getarea=(e)=>{this.setState({ area: e.target.value })}

        this.changemain=()=>{
            if(this.state.showcamera==true){
                this.setState({showcamera:false})
            this.setState({showreports:true})
            }
            else{
                this.setState({showcamera:true})
                this.setState({showreports:false})
                this.setState({selectshow:false})
            }
            
        }
        this.area=(e)=>{
            
            
            this.setState({selectArea:e.target.innerText})
            this.changemain()

        }
        this.show=()=>{
            alert("in")
            this.setState({selectshow:true})
            this.getReports()
        }

    }
        
       
    
   
    render() {
        return (
            <div>
                
                <div onClick={this.changemain} style={{border:"solid",width:"100%"}}>
                    <h1 style={{color:"white",fontSize:100}}>Surfing Israel</h1>
                </div>
               
                {this.state.showcamera?(
                     <div>
                         <Button variant="danger" style={{marginTop:40,width:300,height:50}} onClick={this.show}>צפה בדיווחים חיים</Button>
                         {this.state.selectshow?(

                                <Dropdown onChange={this.area}>
                                <Dropdown.Toggle  variant="danger" id="dropdown-basic">
                                    בחר איזור
                                </Dropdown.Toggle>

                                <Dropdown.Menu onClick={this.area}>
                                    <Dropdown.Item >צפון</Dropdown.Item>
                                    <Dropdown.Item >חוף הכרמל</Dropdown.Item>
                                    <Dropdown.Item >השרון</Dropdown.Item>
                                    <Dropdown.Item >מרכז</Dropdown.Item>
                                    <Dropdown.Item >דרום</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                         ):null}

                         
                     <CCcamera/>
                     
                     <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" /><div class="wf-width-cont surf-fc-widget"><div class="widget-container"><div class="external-cont"><iframe class="surf-fc-i" allowtransparency="true" src="//www.surf-forecast.com/breaks/Frishman/forecasts/widget/a" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"></iframe><div class="footer"><a class="logo" href="//www.surf-forecast.com/"><img src="//www.surf-forecast.com/images/widget.png" alt="Widget" width="1" height="1" /></a><div class="about" id="cmt">View detailed surf forecast for <a href="//www.surf-forecast.com/breaks/Frishman">Frishman</a>. Visit <a href="//www.surf-forecast.com/breaks/Frishman">surf-forecast.com</a> for more details, long range forecasts, surf reports, swell and weather maps.</div></div></div></div></div>
                     <a target="_blank" href="https://www.booked.net/weather/tel-aviv-18414"><img src="https://w.bookcdn.com/weather/picture/3_18414_1_1_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=82164"  alt="booked.net"/></a>
                 </div>


                ):null}
               


                {this.state.showreports?(
                    <div>
                    <Button variant="danger" onClick={this.handleShow}>הוסף דיווח חדש</Button>
                    

                    {this.state.reportToRender.map((rep)=>rep.area==this.state.selectArea?(
                        <CCReport report={rep}/>
                        //reportToRender       reportList
                    ):console.log(rep.area,"--",this.state.selectArea)

                    )}
    
                     
                    </div>
                ):null}
                    
                
                
                
              
              <Modal show={this.state.modalShow} onHide={this.handleClose}>
               <Modal.Header closeButton>
                 <Modal.Title>הוספת דיווח חדשה</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm" onChange={this.getName}>שם</InputGroup.Text>
                      </InputGroup.Prepend>
                   <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.getName}/>
                   </InputGroup>
                   <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm" onChange={this.getarea}>חוף</InputGroup.Text>
                      </InputGroup.Prepend>
                   <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.getarea}/>
                   </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm" onChange={this.getName}>https://www.youtube.com/embed/</InputGroup.Text>
                      </InputGroup.Prepend>
                   <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.getlink}/>
                   </InputGroup>
               <InputGroup>
                 <InputGroup.Prepend>
          
                   <InputGroup.Text>מצב הים</InputGroup.Text>
                     </InputGroup.Prepend>
                      <FormControl as="textarea" aria-label="With textarea" onChange={this.gettext} />
                      </InputGroup>
                   </Modal.Body>
               <Modal.Footer>
                 <Button variant="secondary" onClick={this.handleClose}>
                        סגור
                 </Button>
                  <Button variant="primary" onClick={this.addReportBTM}>
                     שמור
                  </Button>
                </Modal.Footer>
                  </Modal>
       
            </div>
        )
    }
}
