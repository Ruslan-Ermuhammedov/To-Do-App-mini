export const taskInitialState={
    task:[]
}

export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            return (state = {
                task:[...state.task, action.payload]
            });
        }
        case "DELETE_TASK": {
            const filtered = state.task.filter((item) => item.id !== action.payload.id)
            return state = {
                task: filtered
            }
        }
        case 'TOGGLE_TASK':
            return {
                task: state.task.map(task =>
                    task.id === action.payload.id ? { ...task, completed: !task.completed } : task
                )
            };
        default:
            return state
    }
}
