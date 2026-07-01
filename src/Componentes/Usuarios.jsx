import { useState, useEffect } from 'react';
import api from '../services/api';

const { data } = await api.get('/posts');
const { data: novo } = await api.post('/posts', {
  title: 'Novo Post',
  body: 'Conteúdo',
  userId: 1,
});  

function usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/usuarios')
        .then(({ data }) => {
          setUsuarios(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
  }, []);

 if (loading) {
          return <p>Carregando...</p>;
 }
 if (error) {
          return <p>Erro: {error}</p>;
        }

return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>   
            <strong>{usuario.email}</strong>
            <br />
            {usuario.email}
        </li>
      ))}
    </ul>
    );
 }

export { usuarios }