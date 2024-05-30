import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import Home from './Home';
import DailyTasks from './DailyTasks';
import OneTimeTasks from './OneTimeTasks';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-tasks" element={<DailyTasks />} />
          <Route path="/one-time-tasks" element={<OneTimeTasks />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
