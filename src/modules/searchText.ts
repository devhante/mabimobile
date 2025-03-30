const SET = 'searchText/SET' as const;

export const set = (value: string) => ({
    type: SET,
    payload: value
});

type SearchTextAction =
    | ReturnType<typeof set>;

type SearchTextState = {
    text: string;
}

const initialState: SearchTextState = {
    text: ""
};

function searchText(state: SearchTextState = initialState, action: SearchTextAction) {
    switch (action.type) {
        case SET:
            return { text: action.payload };
            default:
                return state;
    }
}


export default searchText;