import TodoItem from "./TodoItem"

export default function TodoList({ todos, toggleTodo, deleteTodo }) {

    return (
        <ul className='list'>
            {todos.length === 0 && 'No Todos'}
            {
                todos.map(todo => {
                    return (
                        <TodoItem
                            {...todo}
                            key={todo.key}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
                })
            }
        </ul>)

}