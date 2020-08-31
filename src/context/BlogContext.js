import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [...state,
      {
        id: `id:${state.length + 1}`,
        title: action.payload.title
      }];

    default:
      return state;
  }
};
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = (title) => {
    dispatch({ type: 'add_blogPost', payload: { title } });
  };

  return (
    <BlogContext.Provider value={{ data: state, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;