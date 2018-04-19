import * as React from 'react';

import { CoolConsumer } from './cool-context';

// tslint:disable-next-line:variable-name
export const CoolChild = () =>
  <CoolConsumer>
    {({ isCool, setIsCool }) =>
      <>
        <div>
          is it cool right now? {String(isCool)}
        </div>
        <div>
          <button onClick={() => setIsCool(true)}>make it cool</button>
        </div>
        <div>
          <button onClick={() => setIsCool(false)}>make it not cool</button>
        </div>
      </>}
  </CoolConsumer>;
