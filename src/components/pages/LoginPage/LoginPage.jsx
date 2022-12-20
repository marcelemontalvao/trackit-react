import { useContext, useState } from "react"
import logoTrackit from "../../../assets/logoTrackit.png"
import { LoginPageContainer, FormLoginPage } from "./LoginPageStyles.js"
import { api } from "../../../services/api"
import { Link, useNavigate } from "react-router-dom"
import UserInfoContext from '../../Contexts/UserInfoContext.jsx';
import { ThreeDots } from  "react-loader-spinner"

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const {setUserInfoContext} = useContext(UserInfoContext)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleInputs = (e) => {
        e.preventDefault();

        async function newUser() {
            setLoading(true)
            setDisabled(true)
            try {
                const response = await api.post("auth/login", {email, password})
                if(response.status === 200) {
                    setLoading(false)
                    setDisabled(false)
                    navigate("/hoje")
                }
                setUserInfoContext({
                    userInfo: response.data
                })
                localStorage.setItem("user", JSON.stringify(response.data))
            } catch (error) {
                alert("Erro: " + error)
                setLoading(false)
                setDisabled(false)
            }
        }
        newUser()
    }

    if(loading) {
        return (
            <LoginPageContainer>
                <img src={logoTrackit} alt="Logo Trackit" />
                <FormLoginPage method="POST" onSubmit={(e) => handleInputs(e)}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="email" required disabled={disabled} />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="senha" required disabled={disabled} />
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
                </FormLoginPage>
                <Link to="/cadastro">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </LoginPageContainer>
        )
    } else {
        return (
            <LoginPageContainer>
                <img src={logoTrackit} alt="Logo Trackit" />
                <FormLoginPage method="POST" onSubmit={(e) => handleInputs(e)}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="email" required  data-test="email-input" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="senha" required data-test="password-input" />
                    <button type="submit" disabled={disabled} data-test="login-btn">Entrar</button>
                </FormLoginPage>
                <Link to="/cadastro">
                    <p data-test="signup-link">Não tem uma conta? Cadastre-se!</p>
                </Link>
            </LoginPageContainer>
        )
    } 
}

export default LoginPage;