import styled from "styled-components";

export const HabitsPageStyle = styled.main`
    padding: 0 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    background-color: #f2f2f2;
    padding-bottom: 120px;

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`

export const MyHabits = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;

    span {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        font-size: 27px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
    }
`
