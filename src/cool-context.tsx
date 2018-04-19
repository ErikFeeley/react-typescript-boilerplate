import * as React from 'react';

export const {
  // tslint:disable-next-line:variable-name
  Consumer: CoolConsumer,
  // tslint:disable-next-line:variable-name
  Provider: CoolProvider
} = React.createContext<ICoolContext>({
  isCool: false,
  // tslint:disable-next-line:no-console
  setIsCool: (b: boolean) => console.log('not implemented')
});

export interface ICoolContext {
  isCool: boolean;
  setIsCool: (b: boolean) => void;
}
