import * as React from 'react'
import { DragDropContext } from 'react-dnd'
var HTML5Backend = require('react-dnd-html5-backend')

@(DragDropContext(HTML5Backend) as any)
export default class Containers extends React.Component<any, any> {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
