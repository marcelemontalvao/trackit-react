import { useContext } from "react"
import UserInfoContext from '../Contexts/UserInfoContext.jsx';
import {HeaderStyles} from "./HeaderStyles.js"

const Header = () => {
    const {userInfoContext} = useContext(UserInfoContext)
    return (
        <HeaderStyles>
            <div>
                <span>TrackIt</span>
                <img src={userInfoContext.userInfo.image} alt="" />
            </div>
        </HeaderStyles>
    )
}

export default Header; 