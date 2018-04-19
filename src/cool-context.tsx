import * as React from 'react';

export const {
  // tslint:disable-next-line:variable-name
  Consumer: CoolConsumer,
  // tslint:disable-next-line:variable-name
  Provider: CoolProvider
} = React.createContext<ICoolContext>({
  isCool: false,
  someStuff: 'stuuuf',
  // tslint:disable-next-line:object-literal-sort-keys
  setState: (s: SetStateProps) => alert('weeeee')
});

export interface ICoolContext extends ICoolState {
  setState: (s: SetStateProps) => void;
}

export interface ICoolState {
  isCool: boolean;
  someStuff: string;
}

export type SetStateProps = Partial<ICoolState>;
