
export const initialState = {
    basket: [],
};



// selector
export const getBasketTotal = (basket) => {
    return basket?.reduce((total, item) => total + item.price, 0);
}


export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => {
                    console.log(`trying to remove ${action.item.id} from ${basketItem.id}`);
                    return basketItem.id === action.item.id
                }
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`item that you are trying to delete cannot be found : ${action.id} `);
            }
            return {
                ...state,
                basket: newBasket,
            }

        default:
            return state;
    }

}