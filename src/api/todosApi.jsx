import axios from "./defaultClient";

export const addTodo = (content) => {
  return axios.post("todos", { content }, { withCredentials: true });
};
export const getTodos = () => {
  return axios.get("/todos", { withCredentials: true });
};

export const deleteTodo = (todoId) => {
  return axios.delete(`/todos/${todoId}`, { withCredentials: true });
};

export const toggleTodo = (todoId) => {
  return axios.patch(`/todos/${todoId}`, {}, { withCredentials: true });
};
