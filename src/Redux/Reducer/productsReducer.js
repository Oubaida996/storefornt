const initalState = {
    products: [
        {
            id: 1,
            proName: 'apple',
            catId: 2
        },
        {
            id: 2,
            proName: 'strawberry',
            catId: 2
        },
        {
            id: 3,
            proName: 'laptops',
            catId: 1
        },
        {
            id: 4,
            proName: 'phones',
            catId: 1
        }
    ]
};

// 2-create reducer to set state and change it 
export const productsReducer = (state = initalState, action) => {
    if (action.type === 'PROVIEW') {
        return { products: state.products }
    }
    return state;

}