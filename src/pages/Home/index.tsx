import { FC } from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"
import { FaTwitterSquare, FaFacebookSquare, FaBan } from 'react-icons/fa'

export const Home: FC = () => {
    return (
        <Container>
            <div className="titleContainer">
                <h1>Fui Cancelado</h1>
                <FaBan/>
            </div>
            <Link className="socialMediaButton" to="/Twitter">
                <FaTwitterSquare/>
                <span>Twitter</span>
            </Link>
            <Link className="socialMediaButton" to="/Facebook">
                <FaFacebookSquare/>
                <span>Facebook</span>
            </Link>
        </Container>
    )
}