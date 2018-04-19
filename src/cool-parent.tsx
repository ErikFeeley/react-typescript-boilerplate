import * as React from 'react';

import { CoolProvider, ICoolContext } from './cool-context';

export class CoolParent extends React.Component<{}, ICoolContext> {
  state = {
    isCool: false,
    setIsCool: (b: boolean) => this.setState({ isCool: b })
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
