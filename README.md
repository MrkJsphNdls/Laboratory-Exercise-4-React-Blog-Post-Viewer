# Blog Post Viewer

## Description
The Blog Post Viewer is a simple React application that fetches and displays a list of blog posts from the JSONPlaceholder API. The application demonstrates how to handle asynchronous data fetching, error handling, and component-based architecture in React. It also includes an error boundary to gracefully handle any errors that may occur during rendering.

## How Axios is Used to Fetch Data
Axios is a promise-based HTTP client for the browser and Node.js. In this project, Axios is used to make a GET request to the JSONPlaceholder API to fetch a list of blog posts. The API endpoint used is `https://jsonplaceholder.typicode.com/posts`.

### Example of Axios Usage
In the `App.js` file, the `fetchData` function is defined within a `useEffect` hook to fetch data when the component mounts:

```javascript
const fetchData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data); // Store the blog posts in state
    setLoading(false); // Stop loading
  } catch (err) {
    setError('Failed to fetch blog posts'); // Set error message
    setLoading(false); // Stop loading
  }
};
