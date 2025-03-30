import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { set } from "../modules/searchText";

export default function useSearchText() {
    const searchText = useSelector((state: RootState) => state.searchText.text);
    const dispatch = useDispatch();

    const setSearchText = useCallback(
        (value: string) => dispatch(set(value)),
        [dispatch]
    );

    return {
        searchText,
        setSearchText
    };
}