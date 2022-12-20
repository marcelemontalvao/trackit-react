import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { TodayPageStyle, DayHabit, TitleTodayPage } from "./TodayPageStyles";
import { BsCheckSquareFill } from "react-icons/bs"
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import ProgressBarContext from "../../Contexts/ProgressBarContext";

const TodayPage = () => {
    const token = JSON.parse(localStorage.getItem("user")).token 
    const [todayHabits, setTodayHabits] = useState([])
    const today = dayjs().locale("pt-br").format("dddd, DD/MM");
    const [check, setCheck] = useState(false)
    const [reload, setReload] = useState(false)
    const {progressBar, setProgressBar} = useContext(ProgressBarContext)
    const [count, setCount] = useState(0)

    const toggleCheck = (habit) => {
        if(check === true) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
            }).then((response) => {
                console.log(response)
                setCheck(false)
                setReload(!reload)
                setCount(count--)
            }).catch((error) => {
                alert(error)
            })
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
            }).then((response) => {
                console.log(response)
                setCheck(true)
                setReload(!reload)
                setCount(count+1)
            }).catch((error) => {
                alert(error)
            })
        }
    }
    

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

    setTimeout(() => {
       setReload(!reload) 
    }, 50);

    return (
        <>
            <Header/>
            <TodayPageStyle>
                <TitleTodayPage>
                    <h1 data-test="today">{today}</h1>
                    {progressBar.length ? <span data-test="today-counter">{progressBar}% dos hábitos concluídos</span> : <p data-test="today-counter">Nenhum hábito concluído ainda</p>}
                </TitleTodayPage>
                {todayHabits.map((habit, index) => 
                    <DayHabit data-test="today-habit-container" habitDone={habit.done} sequence={habit.currentSequence == habit.highestSequence} key={index}>
                        <div>
                            <span data-test="today-habit-name">{habit.name}</span>
                            <span data-test="today-habit-sequence"><span>Sequência atual:</span> <span>{habit.currentSequence} dias</span> </span> 
                            <span data-test="today-habit-record"><span>Seu recorde:</span> <span>{habit.highestSequence} dias</span></span>
                        </div>
                        <BsCheckSquareFill onClick={() => toggleCheck(habit)} color={habit.done ? "#8FC549" : "#F2F2F2"} data-test="today-habit-check-btn"/>
                    </DayHabit>
                )}
            </TodayPageStyle>
            <Footer progressBar={progressBar}/>
        </>
    )
}

export default TodayPage;