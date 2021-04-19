import { Button } from 'react-bootstrap'
import React from 'react'


export default function CCcamera() {
    let haifaBTN=()=>{
        
        var URL = "https://www.surfclub.co.il/%D7%9E%D7%A6%D7%9C%D7%9E%D7%AA-%D7%92%D7%9C%D7%99%D7%9D-%D7%91%D7%A1%D7%A8%D7%A3-%D7%A7%D7%9C%D7%90%D7%91-%D7%97%D7%99%D7%A4%D7%94/";
        var win = window.open(URL, "_blank").focus();
    }
    let telavivBTN=()=>{
        
        var URL = "http://intersurf.co.il/he/content/31-HiltonBeach-Camera";
        var win = window.open(URL, "_blank").focus();
    }
    let ashkelonBTN=()=>{
        
        var URL = "http://intersurf.co.il/he/content/34-Ashkelon-surfline-Camera";
        var win = window.open(URL, "_blank").focus();
    }
    let erzeliaBTN=()=>{
        
        var URL = "https://beachcam.co.il/marina.html";
        var win = window.open(URL, "_blank").focus();
    }
    return (
        <div>
             
             <br/>
             <div style={{marginTop:20}}>
             <Button style={{margin:15}} onClick={telavivBTN}>מצלמת חוף תל אביב</Button>
             <Button style={{margin:15}} onClick={haifaBTN}>מצלמת חוף חיפה</Button>
              <Button style={{margin:15}} onClick={ashkelonBTN}>מצלמת חוף אשקלון</Button>
            <Button style={{margin:15}} onClick={erzeliaBTN}>מצלמת חוף הרצליה</Button>
             </div>
            
        </div>
    )
}
