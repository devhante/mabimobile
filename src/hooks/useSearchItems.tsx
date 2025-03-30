import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { set } from "../modules/searchItems";
import { Item } from "../types";

export default function useSearchItems() {
    const searchItems: Item[] = useSelector((state: RootState) => state.searchItems.items);
    const dispatch = useDispatch();

    const setSearchItems = useCallback(
        (value: Item[]) => dispatch(set(value)),
        [dispatch]
    );

    return {
        searchItems,
        setSearchItems
    };
}