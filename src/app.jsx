import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import './app.css'
import 'animate.css/animate.min.css'

export default class Router4Transition extends Component {
  render() {
    return (
      <Router>
        <div className="router4-transition">
          <div className="nav">
            <NavLink to="/" exact className="nav-item" activeClassName="active">
              home
            </NavLink>
            <NavLink to="/page1" className="nav-item" activeClassName="active">
              page1
            </NavLink>
            <NavLink to="/page2" className="nav-item" activeClassName="active">
              page2
            </NavLink>
          </div>

          <div className="pages">
            <Route
              path="/"
              exact
              children={props => {
                return <Index {...props} />
              }}
            />
            <Route
              path="/page1"
              children={props => {
                return <Page1 {...props} />
              }}
            />
            <Route
              path="/page2"
              children={props => {
                return <Page2 {...props} />
              }}
            />
          </div>
        </div>
      </Router>
    )
  }
}

const Index = wrapAnimation(
  class Index extends Component {
    render() {
      return <div className="page index">index</div>
    }
  }
)

const Page1 = wrapAnimation(
  class Page1 extends Component {
    render() {
      return <div className="page page1">page1</div>
    }
  }
)

const Page2 = wrapAnimation(
  class Page2 extends Component {
    render() {
      return <div className="page page2">page2</div>
    }
  }
)

function wrapAnimation(WrappedComponent) {
  return class extends Component {
    render() {
      // debugger
      return (
        <CSSTransition
          in={this.props.match !== null}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeInDown',
            exit: 'animated',
            exitActive: 'fadeOutDown'
          }}
          timeout={1000}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComponent {...this.props} />
        </CSSTransition>
      )
    }
  }
}
