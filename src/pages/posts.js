import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown';
import { Link } from './Router'

export default withRouteData(({post}) => (
    <React.Fragment>
        <div className="blog-content">
        <Link to="/">{'<'} Back</Link>
        </div>
    <article>
      <h1>{post.metadata.title}</h1>
      <div>
        <img
            alt="Title"
            src="https://placeimg.com/640/480/any"
        />
      </div>
      <Markdown source={post.metadata.content} />
    </article>
    </React.Fragment>
))
