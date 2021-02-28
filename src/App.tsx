// Context
import { AppProvider } from './AppContext';

// Components
import { TaskFilter } from './components/SearchFilters/TaskFilter';
import { UserFilter } from './components/SearchFilters/UserFilter';
import { IsCompleteFilter } from './components/SearchFilters/IsCompleteFilter';
import { SearchResults } from './components/SearchResults';

// Styles
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="searchFilter">
        <TaskFilter />
        <UserFilter />
        <IsCompleteFilter />
      </div>
      <SearchResults />
    </AppProvider>
  );
}

export default App;
