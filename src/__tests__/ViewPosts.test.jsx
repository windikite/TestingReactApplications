import React from "react";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import ViewPosts from "../components/ViewPosts";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve([
            {id: 101, title: 'foo', body: 'bar', userId: 1},
            {id: 102, title: 'fizz', body: 'buzz', userId: 2}
        ])
    })
)

beforeEach(() => {
    fetch.mockClear();
})

describe('ViewPosts Integration Test', () => {
    test('fetches posts successfully', async () => {
        render(<ViewPosts />)

        await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

        expect(await screen.findByText(/foo/i)).toBeInTheDocument()
        expect(await screen.findByText(/fizz/i)).toBeInTheDocument()
    })
})