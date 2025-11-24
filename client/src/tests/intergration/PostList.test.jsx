import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

// --- Mock Component ---
const PostList = () => {
    const [posts, setPosts] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading posts...</div>;
    return (
        <div data-testid="post-list">
            {posts.map(p => <div key={p._id}>{p.title}</div>)}
        </div>
    );
};
// --- End Mock Component ---

const server = setupServer(
  rest.get('/api/posts', (req, res, ctx) => {
    return res(ctx.json([{ _id: '1', title: 'Test Post from Mock API' }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PostList Integration Test', () => {
  it('should fetch and display posts on successful API call', async () => {
    render(<PostList />);
    
    expect(screen.getByText(/loading posts/i)).toBeInTheDocument();

    await waitFor(() => {
      // Assert that the data from the mock response is rendered
      expect(screen.getByText('Test Post from Mock API')).toBeInTheDocument();
    });
  });
});