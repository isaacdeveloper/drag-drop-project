import * as React from 'react'
import * as ReactMDL from 'react-mdl'
import Inicial from './Components/Inicial';

export default class AppLayout extends React.Component<any, any> {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Inicial />
      </div>
    )
  }
}
