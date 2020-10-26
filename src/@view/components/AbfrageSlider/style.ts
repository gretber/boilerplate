// Core
import styled from 'styled-components';

//****************************************//
//************* Slider Container *********//
//****************************************//

export const AbfrageSliderContainer = styled.section`
    margin-bottom: 150px;
    
    .custome-dots {
        position: relative;
        bottom: 2vw;
        display: flex !important;
        justify-content: center;
    }

    .custome-dots > li {
        width: 16px;

    }

    .custome-dots > li > button {
        padding: 0;
        width: 7px;
        height: 7px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #fff;
        font-size: 0;
        cursor: pointer;
        border: none;
    }

    .slick-active > button {
        background-color: #A9C0FF !important;
    }
`;

//****************************************//
//************* Slider Left **************//
//****************************************//

export const SliderLeft = styled.div`
    position: absolute;
    z-index:1;
    bottom: 10vw;
    left: 16%;
    color: #fff;

    .slide-left-container {
        display:flex;
        flex-direction: column;
        width: 50vw;
    }

    .slide-left-container > h2 {
        margin-bottom: 20px;
    }

    .slide-left-container > p {
        font-style: normal;
        font-weight: normal;
        font-size: 1vw;
        line-height: 1.5vw;
        margin-bottom: 3.6vw;
    }

    .slide-left-container > button {
        align-self: center;
        width: 25%;
        height: 3vw;
        font-size: 1vw;
    }
`;

//****************************************//
//************ Slider Right **************//
//****************************************//

export const SliderRight = styled.div`
    position: absolute;
    z-index:1;
    top: -33vw;
    right: 8%;

    .slide-right-container {
        display: flex;
        flex-direction: column;
    }

    div {
        cursor: pointer;
        display: flex;
        width: 20vw;
        height: 7vw;
        border-radius: 15px;
        margin-bottom: 2vw;
        background-color: #fff;
    }

    .slider-right-text {
        display: flex;
        flex-direction: column;
        background-color: inherit;
    }

    .slider-right-text > h4 {
        margin: 0.8vw 0 0.5vw;
    }

    .slider-right-text > p {
        font-size: 0.9vw;
        font-weight: 400;
        margin-right: 1vw;
    }

    img {
        width: 2vw;
        height: 2vw;
        margin: 15px 15px 0 20px;
    }

    .slick-active {
        background-color: #A9C0FF;
    }
`;
