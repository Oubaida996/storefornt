
const initalState = {
    cartProducts: [],
    counter: 0
};


export const cartReducer = (state = initalState, action) => {
    if (action.type === "addProductToCart") {
        const cart = [...state.cartProducts, action.payload];
        const counter = state.counter + 1;
        console.log(cart);
        return { cartProducts: cart, counter }

    }
    if (action.type === "removeProuctFromCart") {
        let counterItem = 0;
        state.cartProducts.map((item) => {
            if (item.displayName === action.payload.displayName) {
                console.log(action.payload.displayName);
                counterItem++;

            }
        });

        console.log('counterItem', counterItem);
        const cartFilter = state.cartProducts.filter((item) => item.displayName !== action.payload.displayName);
        console.log('cartFilter', cartFilter);
        const counter = state.counter - counterItem;
        return { cartProducts: cartFilter, counter }

    }
    return state;
}