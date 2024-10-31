import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Remover.css"


export default function Remover() {

    const [id, setId] = useState('');
    const [values, setValues] = useState({
        nome: '',
        ano: '',
        genero: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleBuscar = (e) => {

        e.preventDefault();
        setError('');

        if (id.trim() === '') {
            setError('Filme não encontrado');
            return;
        }

        axios.get(`https://6720221de7a5792f05309440.mockapi.io/filmes/${id}`)
            .then(res => {
                if(res.data){
                    setValues(res.data);
                }else{
                    setError('Filme não encontrado');
                }
            })
            .catch(() => {
                setValues({ nome: '', ano: '', genero: '' });
                setError('Filme não encontrado');
            });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`https://6720221de7a5792f05309440.mockapi.io/filmes/${id}`)
            .then(() => {
                setValues(v => v.filter(movie => movie.id !== id));
                setId('');
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='container-remove'>
            <h1>Remover Filme</h1>
            <form onSubmit={handleBuscar}>
                <label>ID do Filme:</label>
                <input type="number" required value={id} onChange={e => setId(e.target.value)}
                />
                <div className="div-form">
                    <button className="button" type="submit">Remover</button>
                    <Link to="/">Voltar</Link>
                </div>
            </form>
            {values.nome ? (

                <div>

                    <h1>Detalhes do Filme</h1>

                    <div>
                    <p><b>Nome:</b> {values.nome}</p>
                    </div>
                    <div>
                        <p><b>Genero:</b> {values.genero}</p>
                    </div>
                    <div>
                        <p><b>Ano:</b> {values.ano}</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                            <div className="div-form">
                                <button type="submit" className="button" >Apagar</button>
                                <Link to="/">Voltar</Link>
                            </div>
                    </form>

                </div>
            ) : (
                error &&
                <div className="div-voltar">
                    <p>{error}</p>
                    <Link to="/">Voltar</Link>
                </div>
            )}
        </div>
    );
}