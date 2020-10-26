// Core
import styled from 'styled-components';

//******************************************//
//*************Topbar Container*************//
//******************************************//
export const TopbarContainer = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 67px;
    box-sizing: border-box;
    padding: 13px 86px;
    justify-content: space-between;
    background-color: #fff;
`;

//******************************//
//*************Logo*************//
//******************************//
export const Logo = styled.img`
    width: 44px;
    height: 44px;
    cursor: pointer;
`;

//*************************************//
//*************Topbar Left*************//
//*************************************//
export const TopbarLeft = styled.div`
    display: flex;
    align-items: center;

    p {
        margin-left: 15px;        
    }
`;

//**************************************//
//*************Topbar Right*************//
//**************************************//
export const TopbarRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
`;