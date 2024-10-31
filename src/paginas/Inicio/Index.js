import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Inicio.module.css';
import { Link } from 'react-router-dom';

export default function Inicio() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://6720221de7a5792f05309440.mockapi.io/filmes')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th className="table-header">ID</th>
                        <th className="table-header">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((movie, i) => (
                        <tr key={i}>
                            <Link to={`/filmes/${movie.id}`} className="link" style={{ display: 'contents' }}>
                                <td className="table-cell">
                                    {movie.id}
                                </td>
                                <td className="table-cell">
                                    {movie.nome}
                                </td>
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
