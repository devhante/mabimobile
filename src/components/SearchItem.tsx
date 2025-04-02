import React from 'react';
import { Item } from '../types';
import "./SearchItem.css"
import { useNavigate } from 'react-router-dom';
import useSearchText from '../hooks/useSearchText';

interface SearchItemProps {
    item: Item;
}

function SearchItem(props: SearchItemProps) {
    const { setSearchText } = useSearchText();
    const navigate = useNavigate();
    const handleClick = () => {
        setSearchText("");
        navigate(`/${props.item.itemId}`);
    };

    return (
        <div className="SearchItem" onClick={handleClick}>
            <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/temp.png`} />
            </div>
            <div className="data">
                <div className="name">
                    <div>{props.item.itemName}</div>
                </div>
                <div className="tag">
                    <div>{props.item.itemKind}</div>
                    {props.item.itemRarity ? <div>{props.item.itemRarity}</div> : <></>}
                </div>
            </div>
        </div>
    );
}

export default SearchItem;