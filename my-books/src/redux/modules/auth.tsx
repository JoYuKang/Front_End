import { Action } from "redux";
import { createAction, createActions, handleActions } from "redux-actions";

interface AuthState{
  token: String | null;
  loading: boolean;
  error: Error | null;
}

const initialState: AuthState ={
  token: null,
  loading: false,
  error: null
};
const prefix = 'my-books/auth';

export const{pending, success,fail} = createActions("PENDING","SUCCESS","FAIL",{prefix});
// string 사용 이유는 token과 error둘다 받아야 하기 때문에 
const reducer = handleActions<AuthState,string>({
  PENDING: (state) =>({
    ...state,
    loading: true,
    error: null,
  }),
  SUCCESS: (state, action) =>({
    token: action.payload,
    loading: false,
    error: null,
  }),
  FAIL: (state, action: any) =>({
    ...state,
    loading: false,
    error: action.payload,
  }),
},initialState,{prefix});

export default reducer;


//saga

export function* authSaga(){
  
}