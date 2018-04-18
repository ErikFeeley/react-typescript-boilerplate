import * as React from 'react';

export const {
  // tslint:disable-next-line:variable-name
  Consumer: CoolConsumer,
  // tslint:disable-next-line:variable-name
  Provider: CoolProvider
} = React.createContext<ICoolContext>({
  isCool: false,
  makeItCool: () => alert('not implemented!!!'),
  makeItUnCool: () => alert('not implemented!!!')
});

export interface ICoolContext {
  isCool: boolean;
  makeItCool: () => void;
  makeItUnCool: () => void;
}
