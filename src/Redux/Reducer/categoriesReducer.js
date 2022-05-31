const initalState = {
    categories: [
        {
            normalizedName: 'Electronics',
            dispalyName: 'Electronics',
            description: 'this category contains the electronics'
        },
        {
            normalizedName: 'Food',
            dispalyName: 'Food',
            description: 'this category contains the food'
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