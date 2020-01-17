import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const appStyle = {
    maxWidth: '500px'
  };

  return (
    <div className='container mt-5' style={appStyle}>
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
