import { Item } from "../types";

const SET = 'searchItems/SET' as const;

export const set = (value: Item[]) => ({
    type: SET,
    payload: value
});

type SearchItemsAction =
    | ReturnType<typeof set>;

type SearchItemsState = {
    items: Item[];
}

const initialState: SearchItemsState = {
    items: []
};

function searchItems(state: SearchItemsState = initialState, action: SearchItemsAction) {
    switch (action.type) {
        case SET:
            return { items: action.payload };
            default:
                return state;
    }
}


export default searchItems;