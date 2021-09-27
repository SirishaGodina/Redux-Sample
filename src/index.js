import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import Counter from './Counter';
const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Counter/>
  </Provider>,
document.getElementById('root')
)