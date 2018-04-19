import * as React from 'react';

import { CoolConsumer } from './cool-context';

// tslint:disable-next-line:variable-name
export const CoolChild = () =>
  <CoolConsumer>
    {({ isCool, someStuff, setState }) =>
      <>
        <div>
          is it cool right now? {String(isCool)}
        </div>
        <div>
          what is teh stuff {someStuff}
        </div>
        <div>
          <button onClick={() => setIsCool(true)}>make it cool</button>
        </div>
        <div>
          <button onClick={() => setIsCool(false)}>make it not cool</button>
        </div>
      </>}
  </CoolConsumer>;
