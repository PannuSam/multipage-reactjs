import React from 'react';

var footerStyle = {
    backgroundColor: "black",
    color: "#D6F5FC",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var style = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

class Footer extends React.Component {
    render(){
    return (
        <div>
            <div style={style} />
            <div style={footerStyle}>
            <p> ©My Adventures 2022. Made by Samanpreet Kaur Pannu.All rights reserved </p>
            </div>
        </div>
    )
    }
}

export default Footer