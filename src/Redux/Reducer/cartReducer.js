
const initalState = {
    cartProducts: [],
    counter: 0
};


export const cartReducer = (state = initalState, action) => {
    if (action.type === "addProductToCart") {
        let findItem = state.cartProducts.find(item => item.id === action.payload.id);
        let cart = [];
        if (findItem) {
            // findItem.noOfItem = findItem.noOfItem + 1;
            cart = state.cartProducts.map(item => {
                if (item.id === findItem.id) {
                    item.noOfItem = item.noOfItem + 1;
                }
                return item;
            })
        } else {
            action.payload['noOfItem'] = 1;
            cart = [...state.cartProducts, action.payload];
        }
        const counter = state.counter + 1;
        // console.log(action.payload);
        // console.log(cart);
        return { cartProducts: cart, counter }

    }
    if (action.type === "removeProuctFromCart") {
        let counterItem = 0;
        state.cartProducts.map((item) => {
            if (item.id === action.payload.id) {
                console.log(action.payload.displayName);
                counterItem = item.noOfItem;

            }
        });

        console.log('counterItem', counterItem);
        const cartFilter = state.cartProducts.filter((item) => item.id !== action.payload.id);
        console.log('cartFilter', cartFilter);
        const counter = state.counter - counterItem;
        return { cartProducts: cartFilter, counter }

    }
    if (action.type === 'decreaseItem') {
        const cart = state.cartProducts.map((item) => {
            if (item.id === action.payload.id) {
                console.log(action.payload.displayName);
                item.noOfItem = item.noOfItem - 1;

            }
            return item;
        });
        console.log(cart);
        const counter = state.counter - 1;
        return { cartProducts: cart, counter }
    }
    if (action.type === 'increaseItem') {

        const cart = state.cartProducts.map((item) => {
            if (item.id === action.payload.id) {
                console.log(action.payload.displayName);
                item.noOfItem = item.noOfItem + 1;
            }
            return item;
        });
        console.log(cart);
        const counter = state.counter + 1;
        return { cartProducts: cart, counter }
    }
    return state;
}