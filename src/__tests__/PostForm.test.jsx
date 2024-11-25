import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import PostForm from '../components/PostForm';


global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({id: 101, title: 'foo', body: 'bar', userId: 1})
    })
)

beforeEach(() => {
    fetch.mockClear();
})

describe('PostForm Component Integration Test', () => {
    test('submits the form data correctly', async () => {
        render(<PostForm />)

        fireEvent.change(screen.getByLabelText(/Title:/i), {target: {value: 'foo'}});
        fireEvent.change(screen.getByLabelText(/Body:/i), {target: {value: 'bar'}});
        fireEvent.change(screen.getByLabelText(/User ID:/i), {target: {value: '1'}});

        fireEvent.click(screen.getByText(/Submit Post/i));

        await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({title: 'foo', body: 'bar', userId: 1}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
    })
})