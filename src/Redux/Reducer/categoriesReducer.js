const initalState = {
    categories: [
        {
            id: 1,
            catName: 'Electronics'
        },
        {
            id: 2,
            catName: 'Food'
        }
    ]
};

// 2-create reducer to set state and change it 
export const categoriesReducer = (state = initalState, action) => {
    if (action.type === 'CATVIEW') {
        return { categories: state.categories }
    }
    return state;
}