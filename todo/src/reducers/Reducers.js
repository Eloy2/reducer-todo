export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_ITEM":
            return (
                state.map(item => {
                    if(action.payload === item.id){
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    };
                    return item;
                })
            )
        case "ADD_ITEM":
            return [ ...state, action.payload ];
        case "CLEAR":
            return (
                state.filter(item => item.completed === false)
            )
        default:
            return state;
    }
    
}