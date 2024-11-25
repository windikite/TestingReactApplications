import React from "react";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import DeletePost from "../components/DeletePost";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({success: true})
    })
)

describe('DeleteExercise Component', () => {
    
    it('deletes post with the correct id', async () => {

        const {getByText} = render(
            <DeletePost id='1' />
        )
        //checks if an element named delete (case insensitive) was clicked
        fireEvent.click(getByText(/delete/i));
        //check to see if the action is dispatched
        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))

        await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        }))
    })
})