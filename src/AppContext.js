// React
import React, { useContext, useState, useEffect } from 'react';

// Third-party libraries
import axios from 'axios';

// Context
const AppContext = React.createContext();
const AppUpdateContext = React.createContext();

// Custom hooks
export function useApp() {
  return useContext(AppContext);
}

export function useAppUpdate() {
  return useContext(AppUpdateContext);
}

// Context wrapper
export function AppProvider({ children }) {
  // Application state variables
  const [state, setState] = useState({ });

  // Application Effects
  useEffect(() => {
    // Get list of todos
    (async function getTodos() {
        // Get list of users
        await axios.get(`/api/todos`).then((res) => (
          setState(prevState => ({
            ...prevState,
            todos: res.data.todos,
          }))
        ));
    })();

    // Get list of users
    (async function getUsers() {
      await axios.get(`/api/users`).then((res) => (
        setState(prevState => ({
          ...prevState,
          users: res.data.users,
        }))
      ));
    })();

  }, []);

  // Update state variables dynamically
  const updateFormValues = (e) => {
    let toggle = false;
    console.log(e.target.value);
    let { name, value, checked } = e.target;

    setState(prevState => ({
      ...prevState,
      [name]: (
        (name === 'completed') ? checked : value
      )
    }));
  };

  return (
    <AppContext.Provider value={state}>
      <AppUpdateContext.Provider value={updateFormValues}>
        { children }
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
