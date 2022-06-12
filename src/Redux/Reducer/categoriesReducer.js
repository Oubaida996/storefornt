import axios from "axios";
const initalState = {
    categories: [
        // {
        //     normalizedName: 'Electronics',
        //     dispalyName: 'Electronics',
        //     description: 'this category contains the electronics'
        // },
        // {
        //     normalizedName: "Food",
        //     dispalyName: "Food",
        //     description: "this category contains the food"
        // }

    ]
};

// 2-create reducer to set state and change it 
export const categoriesReducer = (state = initalState, action) => {
    if (action.type === 'CATVIEW') {
        console.log(action.data, 'action.data');
        return { categories: action.data }
    }
    return state;
}

let apiCategory = 'https://app-auth-obieda.herokuapp.com/api/v1/categories'
export const getCategories = () => {
    return async (dispatch) => {
        const res = await axios.get(apiCategory);
        console.log(res.data);
        dispatch({ type: 'CATVIEW', data: res.data });
    }
}