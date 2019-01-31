import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const About = props => (
  <div>
    <h1>About Page</h1>
    <p>Count: {props.count}</p>
    <p>Did you get here via Redux?</p>
    <span>This is steve code</span>
  </div>
)


const mapStateToProps = ({ counter }) => ({
  count: counter.count,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)


