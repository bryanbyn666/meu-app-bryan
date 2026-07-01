import { useState, useEffect } from 'react';
import { data } from 'react-router-dom';
import axios from 'axios';

async function Buscar() {
const { data } = await axios.get('https://jsonplaceholder.typicode.com/users'
);
console.log(data);
}

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Erro ao buscar posts:', error));
    }, []);

    return (
        <ul>
            {posts.slice(0, 5).map(post => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}

export { Posts, Buscar };