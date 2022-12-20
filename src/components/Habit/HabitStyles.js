import styled from "styled-components";

export const HabitStyle = styled.div`
    width: 100%;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div {
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin-top: 13px;
    }

    span {
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    svg {
        width: 23px;
        height: 25px;
        color: #666666;
    }

    .selected {
        width: 30px;
        height: 30px;
        background-color: #CFCFCF;
        border: 1px solid #CFCFCF;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
        color: #FFFFFF;
    }

    .notSelected {
        width: 30px;
        height: 30px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`