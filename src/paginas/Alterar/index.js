import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Alterar.css"

export default function Alterar() {
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
            setValues({ nome: '', ano: '', genero: '' });
            setError('Filme não encontrado');
            return;
        }

        axios.get(`https://6720221de7a5792f05309440.mockapi.io/filmes/${id}`)
            .then(res => {
                setValues(res.data);
                if(res.data){
                    setValues(res.data);
                }else{
                    setValues({ nome: '', ano: '', genero: '' });
                    setError('Filme não encontrado');
                }
            })
            .catch(() => {
                setValues({ nome: '', ano: '', genero: '' });
                setError('Filme não encontrado');
            });
    };

    const handleAlterar = (e) => {
        e.preventDefault();
        axios.put(`https://6720221de7a5792f05309440.mockapi.io/filmes/${id}`, values)
            .then(() => {
                navigate('/');
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container-alterar">
            <h1>Alterar Filme</h1>
            <form onSubmit={handleBuscar}>
                <label htmlFor="id">ID do Filme:</label>
                <input type="text" id="id" value={id} onChange={e => setId(e.target.value)}
                />
                <div className="div-form">
                    <button className="button">Buscar</button>
                    <Link to="/">Voltar</Link>
                </div>
            </form>

            {values.nome ? (

                <form onSubmit={handleAlterar}>

                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" value={values.nome} required onChange={e => setValues({ ...values, nome: e.target.value })}/><br />

                <label htmlFor="ano">Ano:</label>
                <input type="number" id="ano" value={values.ano} required onChange={e => setValues({ ...values, ano: e.target.value })}/><br />

                <label htmlFor="genero">Gênero:</label>
                <input type="text" id="genero" value={values.genero} required onChange={e => setValues({ ...values, genero: e.target.value })}/><br />
                
                <div className="div-form">
                    <button className="button" type="submit">Salvar Alterações</button>
                    <Link to="/">Cancelar</Link>
                </div>
                </form>

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