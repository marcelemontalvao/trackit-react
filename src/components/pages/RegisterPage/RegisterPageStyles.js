import styled from "styled-components";

export const RegisterPageContainer = styled.div`
    max-width: 414px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    
    img {
        width: 180px;
        height: 180px;
    }

    a {
        margin-bottom: 7px;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        cursor: pointer;
    }

`

export const FormRegisterPage = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    input {
        width: 80%;
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    input::placeholder {
        font-size: 19px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 11px;
    }

    input:active {
        padding-left: 11px;
    }

    input:disabled {
        background-color: #F2F2F2;
        border: 1px solid #D5D5D5;
    }

    button {
        width: 81.5%;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 4px;
        font-size: 21px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }
    
    button:disabled {
        background: #52B6FF;
        opacity: 0.7;
    }

`