import React from 'react';
import './App.css';
import CounterOne from './components/CounterOne';
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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'Tibi'}>
            <ChannelContext.Provider value={'CodeEvolution'}>
              <ComponentC />
            </ChannelContext.Provider>
         </UserContext.Provider>*/}
      <CounterOne />
    </div>
  );
}

export default App;
