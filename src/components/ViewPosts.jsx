import React, { useEffect, useState } from 'react';
import DeletePost from './DeletePost';

const ViewPosts = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            setPosts(data)
        }catch (error){
            console.error('Error posting data:', error)
        }
    }

    useEffect(() => {
        fetchPosts();
        console.log(posts)
    }, [])

    const memoizedPostList = React.useMemo(() => posts.map((post) => (
        <li key={post.id}>
            {post.title} - {post.body} <DeletePost id={post.id} />
        </li>
    )), [posts])

    return <ul>{memoizedPostList}</ul>
}

export default ViewPosts;