import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const State = () => useContext(StateContext)

export const StateProvider = ({children}) => {
    const [showCreatePost, setShowCreatePost] = useState(false)
    const [editingPost, setEditingPost] = useState(false)

    return (
        <StateContext.Provider value={{
            showCreatePost, 
            setShowCreatePost,
            editingPost,
            setEditingPost,
            }}>
            {children}
        </StateContext.Provider>
    )
}
