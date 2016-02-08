import * as React from 'react'
const PropTypes = React.PropTypes
var update = require('react/lib/update')
import { findDOMNode } from 'react-dom'
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
