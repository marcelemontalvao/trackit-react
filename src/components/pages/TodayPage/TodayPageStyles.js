import styled from "styled-components";

export const TodayPageStyle = styled.main`
    min-height: 100vh;
    background-color: #f2f2f2;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    h1 {
        width: 90%;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
`

export const TitleTodayPage = styled.div`
    width: 90%;
    margin-bottom: 28px;
    
    p {
        margin-top: 3px;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
    }
`

export const DayHabit = styled.div`
    width: 80%;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    svg {
        width: 69px;
        height: 69px;
        color: #F2F2F2;
        border: 1px solid #F2F2F2;
        border-radius: 5px;
        cursor: pointer;
    }

    & div span:nth-child(1) {
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    & div span:nth-child(2) p {
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }
`