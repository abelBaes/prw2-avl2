import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./Adicionar.css"

export default function Adicionar() {

  const[movies, setMovies] = useState([]);
  const [values, setValues] = useState({
    nome: '',
    ano: '',
    genero: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
      
    e.preventDefault();
    axios.post('https://6720221de7a5792f05309440.mockapi.io/filmes', values)
    .then(res => {
      setMovies([...movies, res.data]);
      setValues({ nome: '', ano: '', genero: '' });
      navigate('/');
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
  }

  useEffect(() => {
      axios.get('https://6720221de7a5792f05309440.mockapi.io/filmes')
          .then( res => setMovies(res.data))
          .catch( err => console.log(err));
  }, []);

  return (
    <div className='container-add'>
      <h1>Adicionar Filme</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" placeholder="Nome do Filme" id="nome" required
          onChange={e => setValues({...values, nome: e.target.value})}/><br/>

        <label htmlFor="ano">Ano: </label>
        <input type="number" placeholder="Ano de Lançamento" id="ano" required
          onChange={e => setValues({...values, ano: e.target.value})}/><br />

        <label htmlFor="genero">Gênero:  </label>
        <input type="text" placeholder="Gênero do Filme" id="genero" required
          onChange={e => setValues({...values, genero: e.target.value})}/>
        
        <div className='div-form'>
        <button className='button' type="submit">Adicionar</button>
        
        <Link to="/">Voltar</Link>
        </div>
      </form>
    </div>
  );
}
