// React
import React, { useContext, useState } from 'react';

// Models
import UserModel from './models/UserModel';
import TodosModel from './models/TodosModel';

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
  const [completed, setCompleted] = useState(false);

  /**
   * Toggle completed filter switch button
   */
  function toggleCompleted() {
    setCompleted((prevCompleted) => (!prevCompleted));
  }

  return (
    <AppContext.Provider value={completed}>
      <AppUpdateContext.Provider value={toggleCompleted}>
        { children }
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
