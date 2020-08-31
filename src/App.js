import React, { useContext, useState } from 'react';
import BlogContext from './context/BlogContext';

const App = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  const [inputText, setInputText] = useState();
   
  
  return (
    <div >
      <h1>{data.length}</h1>
      <h2>{data.length ? data.map((val) => <div><p>{val.title}</p><br /></div>) : null}</h2>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        style={{ width: '100px', height: '100px' }}
        onClick={() => addBlogPost(inputText)} >
         Hello
         </button>
    </div>
  );
}

export default App;
