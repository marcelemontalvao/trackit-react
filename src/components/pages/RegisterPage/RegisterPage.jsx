import { useEffect, useState } from "react"
import logoTrackit from "../../../assets/logoTrackit.png"
import  {   RegisterPageContainer, 
            FormRegisterPage
        } from "./RegisterPageStyles.js"
import { api } from "../../../services/api"
import { useNavigate } from "react-router-dom"

export const RegisterPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [image, setImage] = useState(undefined)
    const [userInfo, setUserInfo] = useState({})
    const [user, setUser] = useState({})

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
            try {
                const response = await api.post("auth/sign-up", userInfo)
                console.log(response)
                response.statusText === "Created" ? navigate("/") : console.log("usuário não foi criado")
               localStorage.setItem("user", JSON.stringify(user))
            } catch (error) {
                console.log(error)
            }
        }
        newUser()
    }

    return (
        <RegisterPageContainer>
            <img src={logoTrackit} alt="Logo Trackit" />
            <FormRegisterPage method="POST" onSubmit={(e) => handleInputs(e)}>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="email" required />
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="senha" required />
                <input onChange={(e) => setName(e.target.value)}type="text" name="name" id="name" placeholder="nome" required />
                <input onChange={(e) => setImage(e.target.value)}type="text" name="photo" id="photo" placeholder="foto" required />
                <button type="submit">Cadastrar</button>
            </FormRegisterPage>
            <a>Já tem uma conta? Faça login!</a>
        </RegisterPageContainer>
    )
}