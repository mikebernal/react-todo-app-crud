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
      // Get list of todos
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

  // Global functions
  let fn = {
    updateFormValues: async function (e) {
      let { name, value, checked } = e.target;

      await setState(prevState => ({
        ...prevState,
        [name]: (
          (name === 'completed') ? checked : value
        )
      }));

      applyFilters(name, value);
    },
    deleteTask: async function (todo) {
      await axios.delete(`/api/todo/${todo.id}/delete`).then((res) => (
        setState(prevState => ({
          ...prevState,
          todos: res.data.todos.models
        }))
      ));
    }
  };

  // Update todo list by filters
  const applyFilters = async (name, value) => {
    switch(name) {
      case 'task':
        // Filter by task name
        if (value.length !== 0) {
          await axios.get(`/api/todo/${value}`).then((res) => (
            setState(prevState => ({
              ...prevState,
              todos: res.data.todo.models
            }))
          ));
        } else {
          await axios.get(`/api/todos`).then((res) => (
            setState(prevState => ({
              ...prevState,
              todos: res.data.todos,
            }))
          ));
        }
        break;
      case 'user':
        // Filter by user name
        if (value !== 'All') {
          await axios.get(`/api/user/${value}/todos`).then((res) => (
            setState(prevState => ({
              ...prevState,
              todos: res.data.todos.models
            }))
          ));
        } else {
          await axios.get(`/api/todos`).then((res) => (
            setState(prevState => ({
              ...prevState,
              todos: res.data.todos,
            }))
          ));
        }
        break;

      default:
        console.log('error');
    }
  };

  return (
    <AppContext.Provider value={state}>
      <AppUpdateContext.Provider value={fn}>
        { children }
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
