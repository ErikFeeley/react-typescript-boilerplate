import * as React from 'react';

import { CoolProvider, ICoolContext } from './cool-context';

export class CoolParent extends React.Component<{}, ICoolContext> {
  state = {
    isCool: false,
    makeItCool: () => this.setState({ isCool: true }),
    makeItUnCool: () => this.setState({ isCool: false })
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
