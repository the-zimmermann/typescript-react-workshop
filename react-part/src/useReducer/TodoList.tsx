import React, { useReducer, useState } from "react";

type Action =
  | { type: "ADD"; text: string }
  | { type: "COMPLETE"; id: number }
  | { type: "UNCOMPLETE"; id: number }
  | { type: "DELETE"; id: number };

type TodoType = {
  id: number;
  task: string;
  completed: boolean;
};

const initialState: TodoType[] = [
  {
    id: 1,
    task: "Learn React",
    completed: false,
  },
  {
    id: 2,
    task: "Learn Firebase",
    completed: false,
  },
];

const reducer = (state: TodoType[], action: Action): TodoType[] => {
  /**
   * Implement the reducer
   */
  return state;
};

export default function TodoList(): JSX.Element {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [addTodoText, setAddTodoText] = useState("");
  return (
    <>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} dispatch={dispatch} key={todo.id} />
        ))}
      </ul>
      <input
        type="text"
        value={addTodoText}
        placeholder="Add todo ..."
        onChange={e => setAddTodoText(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            dispatch({ type: "ADD", text: e.currentTarget.value });
            setAddTodoText("");
          }
        }}
      />
    </>
  );
}

export function Todo({
  todo,
  dispatch,
}: {
  todo: TodoType;
  dispatch: React.Dispatch<Action>;
}): JSX.Element {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          dispatch({ type: "COMPLETE", id: todo.id });
        }}
      />
      {todo.task}
    </li>
  );
}
