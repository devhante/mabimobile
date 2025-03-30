import React from 'react';
import "./ItemInfo.css"
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getItemCraftById, getItemInfoById } from '../apis';
import { ItemCraftIngredient } from '../types';

function ItemInfo() {
    const { itemId } = useParams();
    const parsedItemId = itemId ? parseInt(itemId, 10) : null;

    const { data: infoData } = useQuery(
        ['getItemInfoById', parsedItemId],
        () => (parsedItemId ? getItemInfoById(parsedItemId) : Promise.reject("잘못된 ID")),
        { enabled: !!parsedItemId }
    );
    const { data: craftData } = useQuery(
        ['getItemCraftById', parsedItemId],
        () => (parsedItemId ? getItemCraftById(parsedItemId) : Promise.reject("잘못된 ID")),
        { enabled: !!parsedItemId }
    );
    
    const formatTime = (sec: number): string => {
        let s = sec;
        const h = s / 3600;
        s = s % 3600;
        const m = s / 60;
        s = s % 60;
        let result = "";
        if (h > 0) {
            result += `${h}시간 `;
        }
        if (m > 0) {
            result += `${h}분 `;
        }
        if (s > 0) {
            result += `${h}초 `;
        }
        return result;
    }
    
    return infoData ? (
        <div className="ItemInfo">
            <div className="top">
                <div className="image-container">
                    <img src={`/Fleta_00.png`} />
                </div>
                <div className="data">
                    <div className="name">
                        <div>{infoData?.itemName}</div>
                    </div>
                    <div className="tag">
                        <div>{infoData?.itemKind}</div>
                        {infoData?.itemRarity ? <div>{infoData.itemRarity}</div> : <></>}
                    </div>
                </div>
            </div>
            <div className="bottom">
                {craftData ?
                    <div className="craft-card">
                        <div className="craft-title">제작 방법</div>
                        <div className="craft-location">{craftData.location}</div>
                        <div className="craft-time">제작 시간 : {formatTime(craftData.time)}</div>
                        <div className="craft-ingredient-title">재료 </div>
                        <div className="craft-ingredients">
                            {craftData.ingredients?.map((item: ItemCraftIngredient) => <div key={item.ingredientId}><Link to={`/${item.ingredientId}`}>{item.itemName}</Link>  {item.quantity}</div>)}
                        </div>
                    </div>
                : <></> }
            </div>
        </div>
    ) : <></>;
}

export default ItemInfo;