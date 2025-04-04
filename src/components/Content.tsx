import useSearchItems from "../hooks/useSearchItems";
import { Item } from "../types";
import "./Content.css"
import React from 'react';
import SearchItem from "./SearchItem";
import { Route, Routes } from "react-router-dom";
import ItemInfo from "./ItemInfo";
import NyangGacha from "./NyangGacha";


function Content() {
    const { searchItems } = useSearchItems();
    return (
        <div className="Content">
            <div className="container">
                <div className="search-items-container">
                    {searchItems?.map((item: Item) => <SearchItem item={item} key={item.itemId} />)}
                </div>
                <Routes>
                    <Route path="/:itemId" element={<ItemInfo />} />
                    <Route path="/nyangGacha" element={<NyangGacha />} />
                </Routes>
            </div>
        </div>
    );
}

export default Content;