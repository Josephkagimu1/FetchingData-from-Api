import React, {useEffect, useState} from 'react';
import axios from 'axios';

const FetchingData = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })

    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <div>
        <h1>Data from an Api</h1>
        <ul>
            {posts.map(post => <li key={post.id}> {post.title} </li>)}
        </ul>
    </div>
  )
}

export default FetchingData;