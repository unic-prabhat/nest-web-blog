import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'


export class Body extends Component {

    render(){
        return(

            <>
            Body
            </>
        )
    }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)