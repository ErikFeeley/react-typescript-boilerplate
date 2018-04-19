import * as React from 'react';

export const {
  // tslint:disable-next-line:variable-name
  Consumer: CoolConsumer,
  // tslint:disable-next-line:variable-name
  Provider: CoolProvider
} = React.createContext<ICoolContext>({
  isCool: false,
  someStuff: 'stuuuf',
  setContextState: (state, callback) =>
    alert('how did this happen')
});

export interface ICoolContext extends ICoolState {
  setContextState: SetContextStateFunc<ICoolState>;
}

export interface ICoolState {
  isCool: boolean;
  someStuff: string;
}

export type SetContextStateFunc<T> = <K extends keyof T>(
  contextState: (Pick<T, K> | T),
  callback?: () => void
) => void;
