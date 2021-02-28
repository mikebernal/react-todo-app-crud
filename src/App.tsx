// React
import React from 'react';

// Context
import { AppProvider } from './AppContext';

// Components
import { TaskFilter } from './components/SearchFilters/TaskFilter';

// Styles
import './App.css';

function App() {
  return (
    <AppProvider>
        <TaskFilter />
    </AppProvider>
  );
}

export default App;
