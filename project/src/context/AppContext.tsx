import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { AppState, UserData } from '../types';

type Action = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET_USER_DATA'; payload: UserData }
  | { type: 'SET_EDITOR_CONTENT'; payload: string };

const initialState: AppState = {
  counter: 0,
  userData: null,
  editorContent: '',
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'RESET':
      return { ...state, counter: 0 };
    case 'SET_USER_DATA':
      return { ...state, userData: action.payload };
    case 'SET_EDITOR_CONTENT':
      return { ...state, editorContent: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      Object.entries(parsedState).forEach(([key, value]) => {
        if (key in initialState) {
          dispatch({ type: 'SET_USER_DATA', payload: value as UserData });
        }
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);