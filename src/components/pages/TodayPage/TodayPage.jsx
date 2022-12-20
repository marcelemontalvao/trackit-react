import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { TodayPageStyle, DayHabit, TitleTodayPage } from "./TodayPageStyles";
import { BsCheckSquareFill } from "react-icons/bs"
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

const TodayPage = () => {
    const token = JSON.parse(localStorage.getItem("user")).token 
    const [todayHabits, setTodayHabits] = useState([])
    const today = dayjs().locale("pt-br").format("dddd, DD/MM");

    useEffect(()=> {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }).then((response) => {
            const data = response.data
            setTodayHabits(data)
        }).catch((error) => {
            alert(error)
        })
    }, [todayHabits])

    return (
        <>
            <Header/>
            <TodayPageStyle>
                <TitleTodayPage>
                    <h1>{today}</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </TitleTodayPage>
                {todayHabits.map((habit, index) => 
                    <DayHabit key={index}>
                        <div>
                            <span>{habit.name}</span>
                            <span>
                                <p>Sequência atual: {habit.currentSequence} dias</p>
                                <p>Seu recorde: {habit.highestSequence} dias</p>
                            </span> 
                        </div>
                        <BsCheckSquareFill/>
                    </DayHabit>
                )}
            </TodayPageStyle>
            <Footer/>
        </>
    )
}

export default TodayPage;