import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  type: string;
}

interface TodoAppProps {
  type: string;
}

const TodoApp: React.FC<TodoAppProps> = ({ type }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks');
      const tasks: Task[] = response.data;
      setTasks(tasks.filter(task => task.type === type));
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleTaskInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.target.value);
  };

  const addTask = async () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        text: taskInput,
        completed: false,
        type: type,
      };
      try {
        const response = await axios.post('http://localhost:3001/tasks', newTask);
        const addedTask: Task = response.data;
        setTasks([...tasks, addedTask]);
        setTaskInput('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  const toggleTaskCompletion = async (taskId: number) => {
    const updatedTask = tasks.find(task => task.id === taskId);
    if (updatedTask) {
      try {
        const response = await axios.put(`http://localhost:3001/tasks/${taskId}`, {
          completed: !updatedTask.completed,
        });
        if (response.status === 200) {
          updatedTask.completed = !updatedTask.completed;
          setTasks([...tasks]);
        }
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      const response = await axios.delete(`http://localhost:3001/tasks/${taskId}`);
      if (response.status === 200) {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <TextField 
        type="text" 
        placeholder="Enter a task" 
        value={taskInput} 
        onChange={handleTaskInputChange} 
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <Button 
        variant="contained" 
        onClick={addTask} 
        style={{ display: 'block', width: '100%', marginBottom: '20px' }}
      >
        Add Task
      </Button>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            <FormControlLabel
              control={<Checkbox checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />}
              label={task.text}
            />
            <Button 
              variant="outlined" 
              onClick={() => deleteTask(task.id)} 
              style={{ marginLeft: '10px' }}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
