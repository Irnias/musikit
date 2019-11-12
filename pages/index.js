import React from 'react'
import Login from '../components/Login'

class Index extends React.Component {
  render(){
    return <React.Fragment>
    <Login/>

    <style jsx global>{`
      body {
        background-color: #1C2833;
        padding: 0px;
        margin: 0px;
        padding-bottom: 120px;
        min-height: 100%;
        min-height: 100vh;
        position: relative;
      }
    `}</style>
 </React.Fragment>
  }
}

export default Index