// Enables React 18.3 APIs (Next.js uses a canary version of React).
// These APIs are needed for React Server Components.
/// <reference types="react/canary" />

declare const UNDEFINED_VOID_ONLY: unique symbol;
declare namespace React {
  export type StatelessComponent<P> = React.FunctionComponent<P>;
  // This was removed from @types/react@18, but is still needed for legacy versions of react-mobx.
  export type RefForwardingComponent<
    T,
    P = object,
  > = React.ForwardRefRenderFunction<T, P>;

  // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/69341
  export type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

  // We can't upgrade to types/react 18.3 because react-router types not compatible
  // Workaround to fix act type to use in tests
  export function act(callback: () => VoidOrUndefinedOnly): void;
  export function act<T>(callback: () => T | Promise<T>): Promise<T>;
}
