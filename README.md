My 52nd assignment! In this project, I created a simplified version of the data fetching blog to explore the testing functionality of react-testing-library and jest.  

This application has components that can view, create, update or delete posts. More interestingly, they can be verified to work via the tests I have made. These can be run all at once via the 'npm test' command. 

Each test runs on its respective component, simulating whatever is necessary and intercepting api calls to verify that it is affecting the dom in the way we want. 

As a note, while viewing the posts is fairly apparent, creating a post and deleting a post will output into the console when they have received a successful response from the api. Editing, however, cannot be tested on the site.

Running this application is easy, just install dependencies and then 'npm run dev' in the terminal. 