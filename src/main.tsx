import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CoolChild } from './cool-child';
import { CoolParent } from './cool-parent';

class Main extends React.Component {
  render() {
    return (
      <>
        <div>gonna try some cool stuff</div>
        <CoolParent>
          <CoolChild />
        </CoolParent>
      </>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root'));
