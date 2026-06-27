import { useState, useEffect } from 'react';
import api from '../services/api';

const { data } = await api.get('/posts');

const { data : novo } = await api.get('/posts', { title: 'Novo ' });

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <ul>
            {posts.slice(0, 5).map(post => (
                <li key={post.id}>
                    {post.title}
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}

export default Posts;