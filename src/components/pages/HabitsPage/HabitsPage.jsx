import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import HabitForm from "../../HabitForm/HabitForm";
import Header from "../../Header/Header";
import Habit from "../../Habit/Habit";
import { HabitsPageStyle, MyHabits } from "./HabitsPageStyles.js"
import axios from "axios";

const HabitsPage = () => {
    const [habitOpen, setHabitOpen] = useState(false)
    const token = JSON.parse(localStorage.getItem("user")).token 
    const [habits, setHabits] = useState([])

    useEffect(()=> {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }).then((response) => {
            const data = response.data
            setHabits(data)
        }).catch((error) => {
            alert(error)
        })
    }, [habits])

    const handleHabitForm = () => {
        setHabitOpen(true)
    }
    return (
        <>
            <Header/>
            <HabitsPageStyle>
                <MyHabits>
                    <span>Meus hábitos</span>
                    <button onClick={handleHabitForm}>+</button>
                </MyHabits>
                {habitOpen ? <HabitForm habitOpen={habitOpen} setHabitOpen={setHabitOpen} /> : ""}
                {habits.length !== 0 ? habits.map((habit, index) => <Habit habit={habit} key={index} habits={habits} setHabits={setHabits}/>) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            </HabitsPageStyle>
            <Footer/>
        </>  
    )
}

export default HabitsPage;