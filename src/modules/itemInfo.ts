const CHANGE = 'itemInfo/CHANGE' as const;

export const change = (value: number) => ({
    type: CHANGE,
    payload: value
});

type ItemInfoAction =
    | ReturnType<typeof change>;

type ItemInfoState = {
    itemInfo: number;
}

const initialState: ItemInfoState = {
    itemInfo: 0
};

function itemInfo(state: ItemInfoState = initialState, action: ItemInfoAction) {
    switch (action.type) {
        case CHANGE:
            return { itemInfo: state.itemInfo + action.payload };
        default:
            return state;
    }
}


export default itemInfo;