import { Link } from "react-router-dom";
import { FooterStyles, TodayDiv } from "./FooterStyles.js"
import { CircularProgressbar } from 'react-circular-progressbar';


const Footer = ({progressBar}) => {
    return (
        <FooterStyles data-test="menu">
            <div className="footerContainer">
                <Link to="/habitos">
                    <span data-test="habit-link">Hábitos</span>
                </Link>
                <Link to="/hoje">
                    <TodayDiv data-test="today-link">
                        <CircularProgressbar
                            value={progressBar} 
                            text="Hoje"
                            background
                            backgroundPadding={6}
                            styles={{
                                background: {
                                    fill: "#3e98c7"
                                },
                                text: {
                                    fill: "#fff"
                                },
                                path: {
                                    stroke: "#fff"
                                },
                                trail: { stroke: "transparent" }
                            }}
                        />
                    </TodayDiv>
                </Link>
                <Link to="/historico">
                    <span data-test="history-link">Histórico</span>
                </Link>
            </div>
        </FooterStyles>
    )
}

export default Footer;