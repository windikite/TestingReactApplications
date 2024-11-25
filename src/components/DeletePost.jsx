import React from "react";

const DeletePost = ({id}) => {

    const deletePost = async (postId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            })
            console.log('post deleted')
            return response.json()
        }catch (error){
            console.error('Error posting data:', error)
        }
    }

    const handleDelete = (e) => {
        console.log('attempting to delete')
        deletePost(id);
    }

    return (
        <button variant='danger' onClick={() => handleDelete()}>Delete</button>
    )
}

export default DeletePost;