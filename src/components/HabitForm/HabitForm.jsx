import { useContext, useEffect, useState } from "react";
import DayButton from "../DayButton/DayButton";
import { FormStyle } from "./HabitFormStyles";
import SelectedDaysContext from "../Contexts/SelectedDaysContext";
import axios from "axios";
import { ThreeDots } from  "react-loader-spinner"

const HabitForm = ({habitOpen, setHabitOpen}) => {
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const {selectedDaysArray, setSelectedDaysArray} = useContext(SelectedDaysContext)
    const [name, setName] = useState("")
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    const token = JSON.parse(localStorage.getItem("user")).token 

    const handleHabitBtnCancel = (e) => {
        e.preventDefault()
        setHabitOpen(false)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        const habitObj =  {
            name,
            days: selectedDaysArray,
        }
        setLoading(true)
        setDisabled(true)
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habitObj, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }).then((response) => {
            const data = response.data
            setLoading(false)
            setDisabled(false)
            setHabitOpen(false)
            setSelectedDaysArray([])
            setName("")
        }).catch((error) => {
            alert(error)
            setLoading(false)
            setDisabled(false)
        })
    }

    if(loading) {
        return (
            <FormStyle onSubmit={formSubmit} data-test="habit-create-container">
                <div>
                    <input type="text" placeholder="nome do hábito" onChange={(e) => setName(e.target.value)} disabled={disabled} data-test="habit-name-input"/>
                    <div>
                        {days.map((btn, index) => <DayButton  data-test="habit-day" id={index} text={btn} selectedDaysArray={selectedDaysArray} setSelectedDaysArray={setSelectedDaysArray} key={index} disabled={disabled}/>)}
                    </div>
                </div>
                <span>
                    <button disabled={disabled} data-test="habit-create-cancel-btn">Cancelar</button>
                    <button type="submit" disabled={disabled} data-test="habit-create-save-btn"> 
                        <ThreeDots 
                            height="60" 
                            width="60" 
                            radius="9"
                            color="#FFFFFF" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </button>
                </span>
            </FormStyle>
        )
    } else {
        return (
            <FormStyle onSubmit={formSubmit} data-test="habit-create-container">
                <div>
                    <input type="text" placeholder="nome do hábito" onChange={(e) => setName(e.target.value)} data-test="habit-name-input"/>
                    <div>
                        {days.map((btn, index) => <DayButton data-test="habit-day" id={index} text={btn} selectedDaysArray={selectedDaysArray} setSelectedDaysArray={setSelectedDaysArray} key={index}/>)}
                    </div>
                </div>
                <span>
                    <button type="button" onClick={handleHabitBtnCancel} data-test="habit-create-cancel-btn">Cancelar</button>
                    <button type="submit" data-test="habit-create-save-btn">Salvar</button>
                </span>
            </FormStyle>
        )
    }
    
}

export default HabitForm;