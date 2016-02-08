import * as React from 'react'
import DragDropContext from './DragDropContext'
import DropTargetContainer from './DropTargetContainer'
import DragSourceElement from './DragSourceElement'
export default class Inicial extends React.Component<any, any> {

  consoleLogFunc(text) {
    console.log(text)
  }

  render() {
    return (
      <DragDropContext>
        <b>Container 1</b>
        <div>
          <DragSourceElement forTarget={['target1']}>
            <div><img src='http://www.w3schools.com/tags/smiley.gif'/>Otro elemento <span>dos - Target 1</span></div>
          </DragSourceElement>
          <DragSourceElement forTarget={['target1', 'target2']}>
            Elemento 2  - Target 1 + Target 2
          </DragSourceElement>
          <DragSourceElement forTarget={['target2']}>
            gg  - Target 2
          </DragSourceElement>
        </div>
        <b>Container 2 - Target 1</b>
        <DropTargetContainer idTarget='target1' />
        <b>Container 3 - Target 2</b>
        <DropTargetContainer idTarget='target2' />
      </DragDropContext>
    )
  }
}
