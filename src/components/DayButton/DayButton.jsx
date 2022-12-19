import { useState } from "react";
import { ButtonStyle } from "./DayButtonStyles";

const DayButton = ({id, text, selectedDaysArray, setSelectedDaysArray}) => {
    const [isSelected, setIsSelected] = useState(false)
    const selectedDays = (e) => {
        e.preventDefault()
        setIsSelected(!isSelected)
        if(!selectedDaysArray.includes(e.target.id)) {
            setSelectedDaysArray([...selectedDaysArray, e.target.id])
        } else {
            const removeItemArray = selectedDaysArray.filter(item => item !== e.target.id);
            setSelectedDaysArray(removeItemArray);
        }
    }
    
    return (
        <ButtonStyle id={id} isSelected={isSelected} onClick={(e) => selectedDays(e)}>{text}</ButtonStyle>
    )
}

export default DayButton;