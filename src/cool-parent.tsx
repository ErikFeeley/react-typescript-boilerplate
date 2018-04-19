import * as React from 'react';

import { CoolProvider, ICoolContext, SetStateProps } from './cool-context';

export class CoolParent extends React.Component<{}, ICoolContext> {
  state: ICoolContext = {
    isCool: false,
    someStuff: 'watwat',
    // tslint:disable-next-line:object-literal-sort-keys
    setState: (s: SetStateProps) => this.setState({ ...s })
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
