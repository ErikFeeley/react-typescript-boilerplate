import * as React from 'react';

import { CoolConsumer } from './cool-context';

// tslint:disable-next-line:variable-name
export const CoolChild: React.SFC = () =>
  <CoolConsumer>
    {({ isCool, someStuff, setContextState }) =>
      <>
        <div>
          is it cool right now? {String(isCool)}
        </div>
        <div>
          what is teh stuff {someStuff}
        </div>
        <div>
          <button onClick={() => setContextState({ isCool: true })}>make it cool</button>
        </div>
        <div>
          <button onClick={() => setContextState({ isCool: false })}>make it not cool</button>
        </div>
        <div>
          <button onClick={() => setContextState({ someStuff: 'dude wat' })}>dude wat</button>
        </div>
      </>}
  </CoolConsumer>;
