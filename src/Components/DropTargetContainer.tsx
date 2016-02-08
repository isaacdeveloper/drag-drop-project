import * as React from 'react'
var ReactDOMServer = require('react-dom/server')
var ReactDOM = require('react-dom')
var update = require('react/lib/update')
const PropTypes = React.PropTypes
import { findDOMNode } from 'react-dom'
import { DragDropContext, DropTarget } from 'react-dnd'
var HTML5Backend = require('react-dnd-html5-backend')

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem()
    component.moveElement(item.element, item.forTarget)
  }
}

export interface DropTargetContainerProps {
  children?: any
  connectDropTarget?: any
  idTarget: string
}

@(DropTarget('element', boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
})) as any)
export default class DropTargetContainer extends React.Component<DropTargetContainerProps, any> {

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired
  }

  state = {
    movedElements: []
  }

  constructor(props) {
    super(props)
  }

  moveElement(element, forTarget) {
    if(forTarget.indexOf(this.props.idTarget) == -1 ||
        this.state.movedElements.indexOf(element) > -1){
          console.log(this.state.movedElements.indexOf(element))
      return false
    }
    this.setState(
      update(this.state, {
        movedElements: {
          $push: [element]
        }
      })
    )
  }

  removeElement(i) {
    this.setState(
      update(this.state, {
        movedElements: {
          $splice: [
            [i, 1]
          ]
        }
      })
    )
  }

  render() {
    let connectDropTarget = this.props.connectDropTarget
    const style = {
      border: '1px dashed gray',
      padding: '0.5rem 1rem',
      marginBottom: '.5rem',
      backgroundColor: 'white'
    }
    const removeBtn = {
      padding: 2,
      float: 'right',
      cursor: 'pointer',
      fontSize: 12
    }
    return (
      <div>
      {
        connectDropTarget(
          <div style={{minHeight: 200, border: '1px solid #999'}}>
            {
              this.state.movedElements.map((e, i) => {
                return (
                  <div style={style} key={i}>
                    <div style={{display: 'inline-block'}}>{e}</div>
                    <span style={removeBtn} onClick={this.removeElement.bind(this, i)}>X</span>
                  </div>
                )
              })
            }
          </div>
        )
      }
      </div>
    )
  }
}
