import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

// useReducer() format
// const [state, dispatchFn] = useReducer (reducerFn, initialState, initFn);
// state = latest state snapshot used in component re-render/re-eval cycle
// dispatchFn = function used to dispatch a new action (trigger an update of the state)
// reducerFn = a function that's triggered automatically once an action is dispatched (via dispatchFn()) - receives latest state snapshot and should return the new, updated state.
//   (prevState, action) => newState
// initialState = initialState
// initFn = function to set intial state programmatically

// When to use useState() vs useReducer() = Generally when useState() becomes to cumbersome, where too many different related states are causing bugs/unintended behavior

// useState()
// 1. Main state management "tool"
// 2. Great for independent pieces of state/data
// 3. Great for state updates that are easy and limited to few kinds of updates

// useEffect()
// 1. When you need "more power"
// 2. Should be considered if you have related pieces of state/data
// 3. Helpful if you have more complex state updates

// useContext() allows you to manage state in a larger sized app without having to write so many chains of prop passes from component to component that might be "far away from each other"
// you really only ever need to use useContext() if certain components have elements that serve a very specific purpose, like the "Logout" button.
// But you wouldn't want to use useContext() for EVERY button on your app since not EVERY button will be a logout button.
// So understand when to use Props and when to use useContext() for something.
// Most of the time, Props will still be used very often.
// useContext() will be needed when the situation calls for it.

// useContext() is NOT optimized for high frequency changes
// For example, this example App is not a Flux-like state proppogating app. Meaning it's not seeing many changes in such a short period of time.
// When building an App that will see many changes in a short period of time, useContext() would not be the optimal usage.
// REDUX will be needed for a BIG App that requires something like useContext() but also has high frequency changes.

// Even though useContext() can be seen as useful and more compact coding, using Props should still always be considered when coding in React and components should be still be
// configurable via props