import * as React from 'react';

import { CoolProvider, ICoolContext, ICoolState } from './cool-context';

export class CoolParent extends React.Component<{}, ICoolContext> {
  state = {
    isCool: false,
    someStuff: 'watwat',
    setContextState: (state: ICoolState) =>
      this.setState(state)
  };

  render() {
    return (
      <div>
        <CoolProvider value={this.state}>
          {this.props.children}
        </CoolProvider>
      </div>
    );
  }
}
