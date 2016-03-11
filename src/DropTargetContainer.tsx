import * as React from 'react'
import { DragSource, DragDropContext, DropTarget } from 'react-dnd'
import DragSourceElement from './DragSourceElement'

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem()
    component.moveElement(item.element, item.forTarget, item.id)
  }
}

export interface DropTargetContainerProps {
  children?: any
  idTarget: string
  connectDropTarget?: any
  style?: any
  elements: any[]
  onDrop: Function
  onRemove: Function
  reDrop?: boolean
}

@(DropTarget('element', boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
})) as any)
export default class DropTargetContainer extends React.Component<DropTargetContainerProps, any> {

  state = {
    elementHover: -1
  }

  constructor(props) {
    super(props)
  }

  moveElement(element, forTarget, idElement) {
    if(forTarget.indexOf(this.props.idTarget) == -1 ||
      this.getElement(idElement)){
        return false
    }

    if(this.props.onDrop){
      this.props.onDrop(this.props.idTarget, element)
    }
  }

  removeElement(i) {
    this.props.onRemove(this.props.idTarget, i)
  }

  getElement(id) {
    let data = this.props.elements
    if (data) {
      let exist = false
      let e = data.map((e, i) => {
        exist = e.id == id ? e : exist
      })
      return exist
    }
    return false
  }

  onMouseOver(i) {
    this.setState({
      elementHover: i
    })
  }

  onMouseLeave() {
    this.setState({
      elementHover: -1
    })
  }

  render() {
    let connectDropTarget = this.props.connectDropTarget
    const style = {
      padding: '7px 7px 4px 4px',
      display: 'table',
      float: 'left',
      position: 'relative'
    }

    const removeBtn = {
      padding: '3px 3px',
      fontSize: 10,
      border: '1px solid',
      borderRadius: '50%',
      background: 'transparent',
      color: '#fff',
      position: 'absolute',
      right: -10,
      top: 0
    }
    let elements = this.props.elements ? this.props.elements : []
    return (
      <div>
      {
        connectDropTarget(
          <div style={this.props.style ? this.props.style : null}>
            {
              elements.length > 0 ?
                elements.map((e, i) => {
                  return (
                    <div key={i} style={{display: 'table', float: 'left'}}>
                    {this.props.reDrop ?
                        <DragSourceElement forTarget={[]}>
                          <div
                            style={style}
                            onMouseOver={this.onMouseOver.bind(this, i)}
                            onMouseLeave={this.onMouseLeave.bind(this)}>
                            <div style={{display: 'inline-block'}}>{e}</div>
                            {
                              this.state.elementHover == i ?
                                <span style={removeBtn} onClick={this.removeElement.bind(this, i)}>X</span>
                              : null
                            }
                          </div>
                        </DragSourceElement>
                      :
                      <div
                        style={style}
                        key={i}
                        onMouseOver={this.onMouseOver.bind(this, i)}
                        onMouseLeave={this.onMouseLeave.bind(this)}>
                        <div style={{display: 'inline-block'}}>{e}</div>
                        {
                          this.state.elementHover == i ?
                            <span style={removeBtn} onClick={this.removeElement.bind(this, i)}>X</span>
                          : null
                        }
                      </div>
                    }
                    </div>
                  )
                })
              :
              (this.props.children ? this.props.children : null)
            }
          </div>
        )
      }
      </div>
    )
  }
}
