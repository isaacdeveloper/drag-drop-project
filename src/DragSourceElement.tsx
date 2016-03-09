import * as React from 'react'
import { DragSource, DropTarget } from 'react-dnd'

const cardSource = {
  beginDrag(props, monitor, component) {
    let e = Object.assign({}, props.children, {id: props.id})
    return {
      element: e,
      forTarget: props.forTarget,
      id: props.id
    }
  }
}

export interface DragSourceElementProps {
  forTarget: string[]
  isDragging?: any
  connectDragSource?: any
  children?: any
  id?: string
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
      backgroundColor: 'white',
      display: 'table'
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
