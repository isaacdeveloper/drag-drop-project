import * as React from 'react'
const Component = React.Component
const PropTypes = React.PropTypes
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

const cardSource = {
  beginDrag(props, monitor, component) {
    return {
      element: props.children,
      forTarget: props.forTarget
    }
  }
}

export interface DragSourceElementProps {
  forTarget: string[]
  isDragging?: any
  connectDragSource?: any
  children?: any
}

@(DragSource('element', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})) as any)
export default class DragSourceElement extends React.Component<DragSourceElementProps, any> {

  constructor() {
    super()
  }

  render() {
    const style = {
      border: '1px dashed gray',
      padding: '0.5rem 1rem',
      marginBottom: '.5rem',
      backgroundColor: 'white'
    }
    let isDragging = this.props.isDragging ? this.props.isDragging : false
    let connectDragSource = this.props.connectDragSource
    let opacity = isDragging ? 0 : 1

    return connectDragSource(
      <div style={Object.assign({}, style, {opacity})}>
        {this.props.children}
      </div>
    )
  }
}