
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Componet/reducer/reducer'
import Todo from './Componet/Todo/Todo';
import Login from './Componet/Login/Login';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

const initState={
  todo:[
    {
      todolist:'',compeleted:'false'
    },
  ]
}
const store = createStore(reducer,initState)

function App() {
  return (
    <div className="App">
      
      
      <Provider store={store}>
        <Todo/>       
      </Provider>
      
     
    </div>
  );
}

export default App;
