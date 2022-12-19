import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { HabitsPageStyle, MyHabits } from "./HabitsPageStyles.js"

const HabitsPage = () => {
    return (
        <>
            <Header/>
            <HabitsPageStyle>
                <MyHabits>
                    <span>Meus hábitos</span>
                    <button>+</button>
                </MyHabits>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </HabitsPageStyle>
            <Footer/>
        </>  
    )
}

export default HabitsPage;