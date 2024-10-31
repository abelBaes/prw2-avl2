import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './LerFilme.css'

export default function LerFilme() {
    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect( () => {
        axios.get('https://6720221de7a5792f05309440.mockapi.io/filmes/' + id)
            .then( res => setData(res.data) )
            .catch( err => console.log(err) );
    }, [] );
    return (
        <div>
            
            <div className='container-ler'>

                <h1>Detalhes do Filme</h1>

                <div>
                    <p><b>Nome:</b> {data.nome}</p>
                </div>
                <div>
                    <p><b>Genero:</b> {data.genero}</p>
                </div>
                <div>
                    <p><b>Ano:</b> {data.ano}</p>
                </div>

                <Link to="/">Voltar ao Inicio</Link>

            </div>
        </div>
    )
}
