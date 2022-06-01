
const initalState = {
    cartProducts: [],
    counter: 0
};


export const cartReducer = (state = initalState, action) => {
    if (action.type === "addProductToCart") {
        console.log(action.payload);
        const cart = [...state.cartProducts, action.payload];
        const counter = state.counter + 1;
        return { cartProducts: cart, counter }

    }
    if (action.type === "removeProuctFromCart") {
        let counterItem = state.cartProducts.map((item) => {
            if (item.displayName === action.payload.displayName) {
                return item;
            }
        }

        );
        const cartFilter = state.cartProducts.filter((item) => item.displayName !== action.payload.displayName);
        console.log('remove', cartFilter);
        const counter = state.counter - counterItem.length;
        return { cartProducts: cartFilter, counter }

    }
    return state;
}