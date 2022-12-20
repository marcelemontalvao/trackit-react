const Habit = ({habit}) => {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    return (
        <div>
            <div>
                <span>{habit.name}</span>
            </div>
            {week.map((day, index)=> { 
                habit.days.map((dayId) => {
                    if(dayId === index) {
                        return <button key={index} className="selected">{day}</button>
                    } else {
                        return <button key={index} className="notSelected">{day}</button>
                    }
                })
            })}
            
        </div>
    )
}

export default Habit;