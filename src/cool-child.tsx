import * as React from 'react';

import { CoolConsumer } from './cool-context';

// tslint:disable-next-line:variable-name
export const CoolChild = () =>
  <CoolConsumer>
    {({ isCool, makeItCool, makeItUnCool }) =>
      <>
        <div>
          is it cool right now? {String(isCool)}
        </div>
        <div>
          <button onClick={makeItCool}>make it cool</button>
        </div>
        <div>
          <button onClick={makeItUnCool}>make it not cool</button>
        </div>
      </>}
  </CoolConsumer>;
