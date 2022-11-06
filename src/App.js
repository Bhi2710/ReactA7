import './App.css';
import React from 'react';
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'


function App() {

  const [ markdown, setMarkDown ] = useState(
`# Markdown preview
# this is header 1
## this is header 2
### this is header 3

---

![alt](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEL7Rh5RgXb1jbeRx2tf-QQ9J70cwsTTMjeWX-m0M&s)

this is some image

---

- list 1
- list 2
- list 3

---

`
);

  return (
    <div className="Main">
      <div>
        <textarea 
        className="left_container" 
        value={markdown} 
        onChange={(e) => setMarkDown(e.target.value)}></textarea>
      </div>
      <div className="right_container">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
}

export default App;
