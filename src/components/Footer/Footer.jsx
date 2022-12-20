import { Link } from "react-router-dom";
import { FooterStyles, TodayDiv } from "./FooterStyles.js"
import { CircularProgressbar } from 'react-circular-progressbar';


const Footer = ({progressBar}) => {
    return (
        <FooterStyles>
            <div className="footerContainer">
                <Link to="/habitos">
                    <span>Hábitos</span>
                </Link>
                <Link to="/hoje">
                    <TodayDiv>
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
                    <span>Histórico</span>
                </Link>
            </div>
        </FooterStyles>
    )
}

export default Footer;