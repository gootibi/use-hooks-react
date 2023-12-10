import './App.css';
import DataFetchinTwo from './components/data-fetching/DataFetchinTwo';
//import DataFetchingOne from './components/data-fetching/DataFetchingOne';

//import React, { useReducer } from 'react';
//import CounterOne from './components/CounterOne';
//import CounterTree from './components/CounterTree';
//import CounterTwo from './components/CounterTwo';
//import ComponentA from './components/use-context-comp/ComponentA';
//import ComponentB from './components/use-context-comp/ComponentB';
//import ComponentC from './components/use-context-comp/ComponentC';
//import ComponentC from './components/use-context-comp/ComponentC';
//import DataFetchingTwo from './components/DataFetchingTwo';
//import IntervalHookCounter from './components/IntervalHookCounter';
//import IntervalClassCounter from './components/IntervalClassCounter';
//import HookMouse from './components/HookMouse';
//import MouseContainer from './components/MouseContainer';
//import ClassMouse from './components/ClassMouse';
//import HookCounterOne from './components/HookCounterOne';
//import ClassCounterOne from './components/ClassCounterOne';
//import HookCounterFour from './components/HookCounterFour';
//import HookCounterTwo from './HookCounterTwo';
//import HookCounterTree from './components/HookCounterTree';
//import DataFetching from './components/DataFetching';
//import ClassCounter from './components/ClassCounter';
//import HookCounter from './components/HookCounter';

/*
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
*/

function App() {
  //const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/* <UserContext.Provider value={'Tibi'}>
            <ChannelContext.Provider value={'CodeEvolution'}>
              <ComponentC />
            </ChannelContext.Provider>
         </UserContext.Provider>*/}

      { /*   <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
  

        Count: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />


      </div>
        </CountContext.Provider> */}

    <DataFetchinTwo />

    </div>
  );
}

export default App;
