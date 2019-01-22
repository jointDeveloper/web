import React from 'react';
import './Blog.css';
import Feed from 'rss-to-json';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.fetchPosts(this.setPosts);
  }

  componentWillUnmount() {
    this.setState({ posts: [] });
  }

  fetchPosts = (callback) => {
    let url = 'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@jointdeveloper';
    Feed.load(url, (err, rss) => {
      this.setPosts(rss.items);
    });
  }

  setPosts = (response) => {
    this.setState({
      posts: response
    });
  }

  render() {

    let items = this.state.posts.map((post, index) => {
      return (
        <div key={index + "post"} className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title font-quote">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-navy font-weight-bold">Leer</a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="Blog bg-navy">
        <div className="row d-flex justify-content-center">
          <h1 className="font-title text-white">Blog</h1>
        </div>
        <div className="row d-flex justify-content-center">
          {items}
        </div>
      </div>
    );
  }
}

export default Blog;
