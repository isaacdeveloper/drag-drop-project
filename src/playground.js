import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppLayout from './AppLayout'

var target = document.createElement('DIV')
document.body.appendChild(target)

class Playground extends React.Component {
 
  render() {
    return (
      <div>
        <AppLayout />
      </div>
    )
  }
}

ReactDOM.render(<Playground />, target)
