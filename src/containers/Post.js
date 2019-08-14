import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from './Router'


export default function Post() {
    const { post } = useRouteData()
    return (
      <div>
        <Link to="/blog/">{'<'} Back</Link>
        <h3>Placeholder Title</h3>
        <p>Placeholder Paragraph</p>
      </div>
    )
}

export default Post;