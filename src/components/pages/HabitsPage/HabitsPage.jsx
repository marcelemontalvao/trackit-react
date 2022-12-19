import { useState } from "react";
import Footer from "../../Footer/Footer";
import Habit from "../../Habit/Habit";
import Header from "../../Header/Header";
import { HabitsPageStyle, MyHabits } from "./HabitsPageStyles.js"

const HabitsPage = () => {
    const [habitOpen, setHabitOpen] = useState(false)
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
                {habitOpen ? <Habit habitOpen={habitOpen} setHabitOpen={setHabitOpen} /> : ""}
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </HabitsPageStyle>
            <Footer/>
        </>  
    )
}

export default HabitsPage;