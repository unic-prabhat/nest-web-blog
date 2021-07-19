import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from './components/Body'

export class index extends Component {

  render(){

    return(
      <Body>

      </Body>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(index)