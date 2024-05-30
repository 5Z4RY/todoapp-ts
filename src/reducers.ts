import { TaskActionTypes, ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actions';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  type: string;
}

export interface TasksState {
  dailyTasks: Task[];
  oneTimeTasks: Task[];
}

const initialState: TasksState = {
  dailyTasks: [],
  oneTimeTasks: [],
};

const tasksReducer = (state = initialState, action: TaskActionTypes): TasksState => {
  switch (action.type) {
    case ADD_TASK:
      const { type, ...newTask } = action.payload;
      return {
        ...state,
        [type === 'daily' ? 'dailyTasks' : 'oneTimeTasks']: [...state[type === 'daily' ? 'dailyTasks' : 'oneTimeTasks'], newTask],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        dailyTasks: state.dailyTasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
        oneTimeTasks: state.oneTimeTasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        dailyTasks: state.dailyTasks.filter(task => task.id !== action.payload),
        oneTimeTasks: state.oneTimeTasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default tasksReducer;
