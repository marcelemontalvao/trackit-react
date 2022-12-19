import styled from "styled-components";

export const FormStyle = styled.form`
    width: 100%;
    height: 160px;
    border-radius: 5px;
    padding: 20px 0;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & div:nth-child(1) {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    input {
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
        padding-left: 11px;
    }

    input::placeholder {
        color: #D4D4D4;
    }

    span {
        width: 90%;
        display: flex;
        justify-content: flex-end;
        gap: 23px;
    }

    & span button:nth-child(1) {
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    & span button:nth-child(2) {
        width: 84px;
        height: 35px;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #52B6FF;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`

