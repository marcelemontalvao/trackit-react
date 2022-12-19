import styled from "styled-components";

export const FooterStyles = styled.footer`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footerContainer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;       
        align-items: center;
        padding: 0 20px;
    }

    p {
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
    }

    span {
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }

    a {
        text-decoration: none;
    }
`

export const TodayDiv = styled.div`
    width: 100px;
    margin-bottom: 40px;
    /* height: 91px;
    background-color: #52B6FF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    */
`

