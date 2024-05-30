import { Task } from './tasks';

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number;
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number;
}

export type TaskActionTypes = AddTaskAction | ToggleTaskAction | DeleteTaskAction;
