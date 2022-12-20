import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { HistoryStyle } from "./HistoryPageStyles";

const HistoryPage = () => {
    return (
        <>
            <Header/>
            <HistoryStyle>
                <div>
                    <span>Histórico</span>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </div>
            </HistoryStyle>
            <Footer/>
        </>
       
    )
}

export default HistoryPage;