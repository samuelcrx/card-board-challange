import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;
