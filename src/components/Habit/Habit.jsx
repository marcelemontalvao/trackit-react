import { useContext, useState } from "react";
import DayButton from "../DayButton/DayButton";
import { FormStyle } from "./HabitStyles";
import SelectedDaysContext from "../Contexts/SelectedDaysContext";
import axios from "axios";
import { ThreeDots } from  "react-loader-spinner"

const Habit = ({habitOpen, setHabitOpen}) => {
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const {selectedDaysArray, setSelectedDaysArray} = useContext(SelectedDaysContext)
    const [name, setName] = useState("")
    const days = ["S", "T", "Q", "Q", "S", "S", "D"]
    const token = JSON.parse(localStorage.getItem("user")).token 

    const handleHabitBtnCancel = () => {
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
        const response = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habitObj, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }).then((response) => {
            const data = response.data
            console.log(data)
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
            <FormStyle onSubmit={formSubmit}>
                <div>
                    <input type="text" placeholder="nome do hábito" onChange={(e) => setName(e.target.value)} disabled={disabled}/>
                    <div>
                        {days.map((btn, index) => <DayButton id={index+1} text={btn} selectedDaysArray={selectedDaysArray} setSelectedDaysArray={setSelectedDaysArray} key={index} disabled={disabled}/>)}
                    </div>
                </div>
                <span>
                    <button disabled={disabled}>Cancelar</button>
                    <button type="submit" disabled={disabled}> 
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
            <FormStyle onSubmit={formSubmit}>
                <div>
                    <input type="text" placeholder="nome do hábito" onChange={(e) => setName(e.target.value)} />
                    <div>
                        {days.map((btn, index) => <DayButton id={index+1} text={btn} selectedDaysArray={selectedDaysArray} setSelectedDaysArray={setSelectedDaysArray} key={index}/>)}
                    </div>
                </div>
                <span>
                    <button onClick={handleHabitBtnCancel}>Cancelar</button>
                    <button type="submit">Salvar</button>
                </span>
            </FormStyle>
        )
    }
    
}

export default Habit;