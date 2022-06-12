
import axios from "axios";

const initalState = {
    products: [
        // {
        //     categoryAssociation: "Electronics",
        //     displayName: "phones",
        //     description: "smart phone with 10 cameras",
        //     price: "15$",
        //     inventoryCount: 12,
        //     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&w=1000&q=80"

        // },
        // {
        //     categoryAssociation: "Electronics",
        //     displayName: "laptops",
        //     description: "laptops with 10 cameras",
        //     price: "15$",
        //     inventoryCount: 10,
        //     image: "https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg"

        // },
        // {
        //     categoryAssociation: "Electronics",
        //     displayName: "laptops",
        //     description: "laptops with 10 cameras",
        //     price: "15$",
        //     inventoryCount: 10,
        //     image: "https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg"

        // },
        // {
        //     categoryAssociation: "Food",
        //     displayName: "strawberry",
        //     description: "strawberry for eating",
        //     price: "15$",
        //     inventoryCount: 10,
        //     image: "https://img.lovepik.com/background/20211029/medium/lovepik-strawberry-mobile-phone-wallpaper-background-image_400297857.jpg"

        // },
    ]
};

// 2-create reducer to set state and change it 
export const productsReducer = (state = initalState, action) => {
    if (action.type === "PROVIEW") {
        return { products: action.data }
    }
    if (action.type === "STOCKCOUNTER") {
        // console.log(action.type);
        // console.log(action.payload);
        // console.log(state.products);
        let stock = state.products.map((item) => {
            // console.log(item);
            if (item.id === action.payload.id) {
                // console.log(item);
                item.inventoryCount = action.payload.inventoryCount;
            }
            return item;
        })
        // console.log(stock, "ssss");
        // let stock = [...state.products, action.payload];
        return { products: stock };
    }
    return state;

}


let apiProduct = 'https://app-auth-obieda.herokuapp.com/api/v1/products'
export const getProducts = () => {
    // let id = 2;
    // console.log(apiProduct + `/${id}`);
    return async (dispatch) => {
        const res = await axios.get(apiProduct);
        console.log(res.data);
        dispatch({ type: 'PROVIEW', data: res.data });
    }
}

export const updataProducts = (id, inventoryCount, type) => {
    let inventory = 0;
    console.log(type);
    if (type === 'DEC') {
        inventory = --inventoryCount;
    } else {
        inventory = ++inventoryCount;
    }

    return async (dispatch) => {
        const res = await axios.put(apiProduct + `/${id}`, {
            inventoryCount: inventory
        });
        console.log(apiProduct + `/${id}`)
        console.log(res.data);
        dispatch({ type: 'STOCKCOUNTER', payload: res.data });
    }
}