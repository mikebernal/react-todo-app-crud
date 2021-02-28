// Context
import { AppProvider } from './AppContext';

// Components
import { TaskFilter } from './components/SearchFilters/TaskFilter';
import { UserFilter } from './components/SearchFilters/UserFilter';
import { IsCompleteFilter } from './components/SearchFilters/IsCompleteFilter';

// Styles
import './App.css';

function App() {
  return (
    <AppProvider>
      <TaskFilter />
      <UserFilter />
      <IsCompleteFilter />
    </AppProvider>
  );
}

export default App;
