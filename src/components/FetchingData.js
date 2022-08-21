import React, {useEffect, useState} from 'react';
import axios from 'axios';

const FetchingData = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
      setPosts(res.data)

      // if data fetched stop loading
      setLoading(false)
    })

    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <div>
        <h1>Data displayed</h1>

         {loading ? (<h1>Loading...</h1>) : (<ul>
            {posts.map(post => <li key={post.id}> {post.title} </li>)}
        </ul>)}
        
        
    </div>
  )
}

export default FetchingData;