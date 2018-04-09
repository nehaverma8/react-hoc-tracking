import React from 'react'
import {Button as RawButton} from 'react-bootstrap'

class Button extends React.Component {
    render() {
      return(<RawButton>{this.props.label}</RawButton>);
    }
}
const ButtonHOC = iiHOC(Button)

export default  ButtonHOC

function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
      render() {
        this.props.onDebounce();
        this.props.onRender();
        this.props.onThrottle();
        return super.render()
      }
    }
  }
