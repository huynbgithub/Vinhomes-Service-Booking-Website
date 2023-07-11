import { createStore } from 'redux';

// Actions
export const connectStomp = (stompClient) => ({
  type: 'CONNECT_STOMP',
  payload: stompClient,
});

export const disconnectStomp = () => ({
  type: 'DISCONNECT_STOMP',
});

// Reducer
const initialState = {
  stompClient: null,
};

const stompReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONNECT_STOMP':
      return {
        ...state,
        stompClient: action.payload,
      };
    case 'DISCONNECT_STOMP':
      return {
        ...state,
        stompClient: null,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(stompReducer);

export default store;