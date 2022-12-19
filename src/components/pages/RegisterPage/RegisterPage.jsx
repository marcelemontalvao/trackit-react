import { useEffect, useState } from "react"
import logoTrackit from "../../../assets/logoTrackit.png"
import  {   RegisterPageContainer, 
            FormRegisterPage
        } from "./RegisterPageStyles.js"
import { api } from "../../../services/api"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from  "react-loader-spinner"


const RegisterPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [image, setImage] = useState(undefined)
    const [userInfo, setUserInfo] = useState({})
    const [user, setUser] = useState({})
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setUserInfo({
            email: email,
            name: name,
            image: image,
            password: password 
        })
        setUser({
            email: email,
            name: name,
            image: image,
        })
    }, [email, password, name, image])

    const handleInputs = (e) => {
        e.preventDefault();

        async function newUser() {
            setLoading(true)
            setDisabled(true)
            try {
                const response = await api.post("auth/sign-up", userInfo)
                console.log(response)
                if(response.statusText === "Created") {
                    setLoading(false)
                    setDisabled(false)
                    navigate("/") 
                }
               localStorage.setItem("user", JSON.stringify(user))
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
            <RegisterPageContainer>
                <img src={logoTrackit} alt="Logo Trackit" />
                <FormRegisterPage method="POST" onSubmit={(e) => handleInputs(e)}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="email" required disabled={disabled} />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="senha" required disabled={disabled} />
                    <input onChange={(e) => setName(e.target.value)}type="text" name="name" id="name" placeholder="nome" required disabled={disabled}/>
                    <input onChange={(e) => setImage(e.target.value)} type="text" name="photo" id="photo" placeholder="foto" required disabled={disabled} />
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
                </FormRegisterPage>
                <Link to={"/"}>
                    <a>Já tem uma conta? Faça login!</a>
                </Link>
            </RegisterPageContainer>
        )
    } else {
        return (
            <RegisterPageContainer>
                <img src={logoTrackit} alt="Logo Trackit" />
                <FormRegisterPage method="POST" onSubmit={(e) => handleInputs(e)}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="email" required />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="senha" required />
                    <input onChange={(e) => setName(e.target.value)}type="text" name="name" id="name" placeholder="nome" required />
                    <input onChange={(e) => setImage(e.target.value)}type="text" name="photo" id="photo" placeholder="foto" required />
                    <button type="submit" disabled={disabled}>Cadastrar</button>
                </FormRegisterPage>
                <Link to={"/"}>
                    <a>Já tem uma conta? Faça login!</a>
                </Link>
            </RegisterPageContainer>
        )
    } 
}

export default RegisterPage;