import React from 'react';

const Footer = () => {
    const fooStyle={
        color:'rgb(75, 75, 75)'
    }

    return (
       <div className="main-footer">
        
			 <div  className="row">
                <p style={fooStyle}>
               <i> © All Copyrights Reserved 2020  |  ALL Rights Reserved | Terms of service | Privacy</i>
				</p>
               
			 </div>
		 </div>
       
     );
 }

 export default Footer;
