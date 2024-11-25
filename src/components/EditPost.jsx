import React, {useState} from 'react';

const EditPost = ({oldData}) => {
    const [title, setTitle] = useState(oldData.title);
    const [body, setBody] = useState(oldData.body);
    const [userId, setUserId] = useState(oldData.userId);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            title,
            body,
            userId: parseInt(userId, 10)
        }

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${oldData.postId}`, {
                method: 'PUT',
                body: JSON.stringify(postData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const data = await response.json();
            console.log(postData, data);
        }catch (error){
            console.error('Error updating data:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title:</label>
            <input id='title' value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor='body'>Body:</label>
            <input id='body' value={body} onChange={(e) => setBody(e.target.value)} />

            <label htmlFor='userId'>User ID:</label>
            <input id='userId' value={userId} type='number' onChange={(e) => setUserId(e.target.value)} />

            <button type='submit'>Update Post</button>
        </form>
    )
}

export default EditPost;