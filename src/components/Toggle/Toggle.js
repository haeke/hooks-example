import React from "react";
// this switch implements a checkbox input and is not relevant for this example
import Switch from "../Switch/Switch";

// The Toggle component should serve as an example of how to use the compound component pattern where we use components together such that they share an implicit state that lets them communicate with each other.

const ToggleContext = React.createContext();

function useEffectAfterMount(cb, dependencies) {
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  const justMounted = React.useRef(true);
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, dependencies);
}

function Toggle(props) {
  const [on, setOn] = React.useState(false);
  //   useCallback returns a memoized function - Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
  const toggle = React.useCallback(() => setOn(oldOn => !oldOn), []);
  useEffectAfterMount(() => {
    props.onToggle(on);
  }, [on]);
  //   useMemo returns a memoized value.
  const value = React.useMemo(() => ({ on, toggle }), [on]);
  return (
    <ToggleContext.Provider value={value}>
      {props.children}
    </ToggleContext.Provider>
  );
}

function useToggleContext() {
  const context = React.useContext(ToggleContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
}

function On({ children }) {
  const { on } = useToggleContext();
  return on ? children : null;
}

function Off({ children }) {
  const { on } = useToggleContext();
  return on ? null : children;
}

function Button(props) {
  const { on, toggle } = useToggleContext();
  return <Switch on={on} onClick={toggle} {...props} />;
}

// for convenience, but totally not required...
Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

export default Toggle;
