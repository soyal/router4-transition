/**
 * react router4 过场动画
 */
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'
import 'animate.css/animate.min.css'

class CSSTransitionDemo extends Component {
  state = {
    show: false
  }

  toggleState = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleState}>click</button>

        {/*第一个例子*/}
        <CSSTransition
          in={this.state.show}
          classNames={{
            enter: 'animated',
            enterActive: 'bounceIn',
            exit: 'animated',
            exitActive: 'bounceOut'
          }}
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <div className="box" />
        </CSSTransition>
      </div>
    )
  }
}

export default CSSTransitionDemo
