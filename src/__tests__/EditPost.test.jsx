import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import EditPost from '../components/EditPost';

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({success: true})
    })
)

beforeEach(() => {
    fetch.mockClear();
})

describe('Edit Post Component Integration Test', () => {
    test('submits the form data correctly', async () => {
        render(<EditPost oldData={{
            postId: "1",
            title: "foo",
            body: "bar",
            userId: "1"
        }} />)

        fireEvent.change(screen.getByLabelText(/Title:/i), {target: {value: 'fizz'}});
        fireEvent.change(screen.getByLabelText(/Body:/i), {target: {value: 'buzz'}});
        fireEvent.change(screen.getByLabelText(/User ID:/i), {target: {value: '1'}});

        fireEvent.click(screen.getByText(/Update Post/i));

        await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({title: 'fizz', body: 'buzz', userId: 1}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
    })
})