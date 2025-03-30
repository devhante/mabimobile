import "./Header.css";
import React, { ChangeEvent, useEffect } from 'react';
import logo from '../resources/logo.svg';
import search from '../resources/search.png';
import useSearchText from "../hooks/useSearchText";
import useSearchItems from "../hooks/useSearchItems";
import { getItemsByQuery } from "../apis";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function Header() {
    const { searchText, setSearchText } = useSearchText();
    const { setSearchItems } = useSearchItems();
    const { data } = useQuery(['getItemsByQuery', searchText], () => getItemsByQuery(searchText.trim()), {
        enabled: !!searchText
    });

    useEffect(() => {
        if (data) {
            setSearchItems(data);
        }
    }, [data, setSearchItems]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        if (searchText.trim() === "") {
            setSearchItems([]);
        }
    }, [searchText, setSearchItems]);

    return (
        <div className="Header">
            <div className="container">
                <div className="logo-title">
                    <img className="logo" src={logo} width={24} height={24} />
                    <div className="title"><Link to="/">마비노기 모바일 데이터베이스</Link></div>
                </div>
                <div className="input-container">
                    <img className="search-logo" src={search} width={16} height={16} />
                    <input
                        value={searchText}
                        onChange={handleChange}
                    />
                </div> 
            </div>
        </div>
    );
}

export default Header;