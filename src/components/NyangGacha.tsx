import React, { ChangeEvent, useEffect, useState } from 'react';
import "./NyangGacha.css"
import { postNyangGacha } from '../apis';

function NyangGacha() {
    const [slot, setSlot] = useState("");
    const [number, setNumber] = useState(1);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [third, setThird] = useState(0);
    const [fourth, setFourth] = useState(0);
    const [fifth, setFifth] = useState(0);

    const setNumberState = (n: number, m: number) => {
        switch (n) {
            case 1:
                setFirst(m);
                break;
            case 2:
                setSecond(m);
                break;
            case 3:
                setThird(m);
                break;
            case 4:
                setFourth(m);
                break;
            case 5:
                setFifth(m);
                break;
        }
        setNumber(number + 1);
    }

    const handleClick11 = () => {
        setNumberState(number, 11);
    }

    const handleClick12 = () => {
        setNumberState(number, 12);
    }

    const handleClick13 = () => {
        setNumberState(number, 13);
    }

    const handleClick14 = () => {
        setNumberState(number, 14);
    }

    const handleClick21 = () => {
        setNumberState(number, 21);
    }

    const handleClick22 = () => {
        setNumberState(number, 22);
    }

    const handleClick23 = () => {
        setNumberState(number, 23);
    }

    const handleClick24 = () => {
        setNumberState(number, 24);
    }

    const handleClick25 = () => {
        setNumberState(number, 25);
    }

    const handleClick26 = () => {
        setNumberState(number, 26);
    }

    const handleClick31 = () => {
        setNumberState(number, 31);
    }

    const handleClick32 = () => {
        setNumberState(number, 32);
    }

    const handleClick33 = () => {
        setNumberState(number, 33);
    }

    const handleClick34 = () => {
        setNumberState(number, 34);
    }

    const handleClick35 = () => {
        setNumberState(number, 35);
    }

    const handleStateChange = () => {
        
    }

    useEffect(() => {
        handleStateChange();
      }, [first]);
    
    useEffect(() => {
    handleStateChange();
    }, [second]);

    useEffect(() => {
    handleStateChange();
    }, [third]);

    useEffect(() => {
    handleStateChange();
    }, [fourth]);

    useEffect(() => {
    handleStateChange();
    }, [fifth]);

    const handleClickSubmit = () => {
        postNyangGacha(parseInt(slot[0]), first, parseInt(slot[1]), second, parseInt(slot[2]), third, parseInt(slot[3]), fourth, parseInt(slot[3]), fifth);
        setNumber(1);
        setFirst(0);
        setSecond(0);
        setThird(0);
        setFourth(0);
        setFifth(0);
    }

    const handleClickCancel = () => {
        setNumber(1);
        setFirst(0);
        setSecond(0);
        setThird(0);
        setFourth(0);
        setFifth(0);
    }

    const handleChangeOrder = (e: ChangeEvent<HTMLInputElement>) => {
        setSlot(e.target.value);
    }

    return (
        <div className="NyangGacha">
            순서: <input className="order" value={slot} onChange={handleChangeOrder} />
            <div className="images">
                <div className="image1">
                    <img className="11" onClick={handleClick11} src={`${process.env.PUBLIC_URL}/items/조로.png`} />
                    <img className="12" onClick={handleClick12} src={`${process.env.PUBLIC_URL}/items/실버.png`} />
                    <img className="13" onClick={handleClick13} src={`${process.env.PUBLIC_URL}/items/러스트.png`} />
                    <img className="14" onClick={handleClick14} src={`${process.env.PUBLIC_URL}/items/패치.png`} />
                </div>
                <div className="image2">
                    <img className="21" onClick={handleClick21} src={`${process.env.PUBLIC_URL}/items/광석.png`} />
                    <img className="22" onClick={handleClick22} src={`${process.env.PUBLIC_URL}/items/붕대.png`} />
                    <img className="23" onClick={handleClick23} src={`${process.env.PUBLIC_URL}/items/블러디허브.png`} />
                    <img className="24" onClick={handleClick24} src={`${process.env.PUBLIC_URL}/items/생가죽.png`} />
                    <img className="25" onClick={handleClick25} src={`${process.env.PUBLIC_URL}/items/여행자간식.png`} />
                    <img className="26" onClick={handleClick26} src={`${process.env.PUBLIC_URL}/items/회복물약.png`} />
                </div>
                <div className="image3">
                    <img className="31" onClick={handleClick31} src={`${process.env.PUBLIC_URL}/items/강화재연소촉매조각.png`} />
                    <img className="32" onClick={handleClick32} src={`${process.env.PUBLIC_URL}/items/고급연금술재연소촉매.png`} />
                    <img className="33" onClick={handleClick33} src={`${process.env.PUBLIC_URL}/items/불사의가루.png`} />
                    <img className="34" onClick={handleClick34} src={`${process.env.PUBLIC_URL}/items/성수.png`} />
                    <img className="35" onClick={handleClick35} src={`${process.env.PUBLIC_URL}/items/염색약베이스.png`} />
                </div>
            </div>
            <button onClick={handleClickSubmit}>확인</button>
            <button onClick={handleClickCancel}>취소</button>
        </div>
    );
}

export default NyangGacha;