import axios from "axios"
import { IoTrashOutline } from "react-icons/io5"
import { HabitStyle } from "./HabitStyles.js"


const Habit = ({habit, habits, setHabits}) => {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    const token = JSON.parse(localStorage.getItem("user")).token 

    const deleteHabit = () => {
        if(window.confirm(`Deletar o hábito ${habit.name}?`)) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            }).then((response) => {
                const habitsFiltered = habits.filter((item) => item.id !== habit.id)
                setHabits(habitsFiltered)
            }).catch((error) => {
                alert(error)
            })
        }
    }

    return (
        <HabitStyle data-test="habit-container">
            <div>
                <span data-test="habit-name">{habit.name}</span>
                <IoTrashOutline onClick={deleteHabit} data-test="habit-delete-btn"/>
            </div>
            <div>
                {week.map((day, index)=> <button  data-test="habit-day" key={index} className={habit.days.includes(index) ? "selected" : "notSelected"}>{day}</button> 
                )}
            </div>
        </HabitStyle>
    )
}

export default Habit;