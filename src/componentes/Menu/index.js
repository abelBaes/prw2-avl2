import { Link } from "react-router-dom"
import './Menu.module.css';


export default function Menu() {
    return (
        <header>
            <h1>CATALOGO DE FILMES</h1>
            <nav>
                <Link to="/">
                        INICIO
                </Link>
                <Link to="/adicionar">
                        ADICIONAR
                </Link>
                <Link to="/alterar">
                        ALTERAR
                </Link>
                <Link to="/remover">
                        REMOVER
                </Link>
            </nav>
        </header>
    )
    }