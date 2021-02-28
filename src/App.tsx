// React
import React from 'react';

// Context
import { AppProvider } from './AppContext';

// Components
import { TaskFilter } from './components/SearchFilters/TaskFilter';
import { UserFilter } from './components/SearchFilters/UserFilter';

// Styles
import './App.css';

function App() {
  return (
    <AppProvider>
        <TaskFilter />
        <UserFilter />
    </AppProvider>
  );
}

export default App;
