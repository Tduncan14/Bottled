import { FETCH_ORDER, CREATE_ORDER, FETCH_ORDERS } from '../actions/types';

const initialState = {
  loading: false,
  currentOrders: {},
  currentOrder: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDER:
      return {
        ...state,
        currentOrders: action.payload,
        loading: false
      };
    case FETCH_ORDERS:
      return {
        ...state,
        currentOrders: action.payload,
        loading: false
      };
    case CREATE_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
