import ReactDOM from 'react-dom'
import React from 'react'
import {DragDropContext, DropTargetContainer, DragSourceElement} from '../build/DragDrop-React'

export default class DragDropDemo extends React.Component<any, any> {

  state = {
    targets: {}
  }

  consoleLogFunc(text) {
    console.log(text)
  }

  handleDrop(target, e) {
    if(!this.state.targets[target]) {
      this.setState({
        targets: Object.assign({}, this.state.targets, {[target]: []})
      })
    }

    let data = [...this.state.targets[target], e]
    this.setState({
      targets: Object.assign({}, this.state.targets, {[target]: data})
    })
  }

  handleRemove(target, i) {
    let secondData = this.state.targets[target].splice(i+1)
    let data =  [...this.state.targets[target].splice(0,i), ...secondData]
    this.setState({
      targets: Object.assign({}, this.state.targets, {[target]: data})
    })
  }

  getElement(idElement, target) {
    let data = this.state.targets[target]
    let e = data.map((e, i) => {
      return e.props.id == idElement
    })
    return e ? e : null
  }

  render() {
    const styleTarget = {
      cursor: 'pointer',
      border: 'dashed 5px #923222',
      margin: '15px 35px',
      padding: 10,
      minHeight: 100,
      minWidth: '95%',
      display: 'table'
    }
    const styleTarget2 = {
      cursor: 'pointer',
      border: 'dashed 5px #226493',
      margin: '15px 35px',
      padding: 10,
      minHeight: 100,
      minWidth: '95%',
      display: 'table'
    }
    return (
      <DragDropContext>
        <b>Container 1</b>
        <div>
          <DragSourceElement forTarget={['target1']} id='0'>
            <div>
              <img src='http://www.w3schools.com/tags/smiley.gif'/>
              Otro elemento
              <span>dos - Target 1</span>
            </div>
          </DragSourceElement>
          <DragSourceElement forTarget={['target1']} id='1'>
            <div style={{width: 64, marginRight: 10}}>
              <img src='https://cdn4.iconfinder.com/data/icons/CS5/512/ACP_PDF%202_file_document.png' width='64' />
              <div style={{textAlign: 'center'}}>{'File1'}</div>
            </div>
          </DragSourceElement>
          <DragSourceElement forTarget={['target1', 'target2']} id='2'>
            <div style={{width: 64, marginRight: 10}}>
              <img src='https://cdn4.iconfinder.com/data/icons/CS5/512/ACP_PDF%202_file_document.png' width='64' />
              <div style={{textAlign: 'center'}}>{'File2'}</div>
            </div>
          </DragSourceElement>
          <DragSourceElement forTarget={['target1', 'target2']}>
            <div>Elemento 2  - Target 1 + Target 2</div>
          </DragSourceElement>
        </div>
        <b>Container 2 - Target 1</b>
        <DropTargetContainer
          idTarget='target1'
          style={styleTarget}
          elements={this.state.targets['target1']}
          onDrop={this.handleDrop.bind(this)}
          onRemove={this.handleRemove.bind(this)}>
          <span style={{color: '#923222', display: 'table', fontSize: 18, width: '100%', lineHeight: '100px', textAlign: 'center'}}>
            Drag file here or click to choose file
          </span>
        </DropTargetContainer>
        <b>Container 3 - Target 2</b>
        <DropTargetContainer
          idTarget='target2'
          style={styleTarget2}
          elements={this.state.targets['target2']}
          onDrop={this.handleDrop.bind(this)}
          onRemove={this.handleRemove.bind(this)}
          reDrop>
          <span style={{color: '#226493', display: 'table', fontSize: 18, width: '100%', lineHeight: '100px', textAlign: 'center'}}>
            Drag file here or click to choose file
          </span>
        </DropTargetContainer>
      </DragDropContext>
    )
  }
}


document.addEventListener('DOMContentLoaded', function() {
    const target = document.getElementById('root')
    ReactDOM.render(
        <DragDropDemo />,
      target
    )
})
