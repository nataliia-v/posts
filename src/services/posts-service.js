class PostsService {

  _apiBase = 'https://bloggy-api.herokuapp.com';

  async getResource(url) {
    const res = await fetch(`${ this._apiBase }${ url }`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
    }
    return await res.json();
  }


  async postResource(url, body, method) {
    const res = await fetch(`${ this._apiBase }${ url }`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
    }
    return await res.json()
  }

  async delResource(url) {
    const res = await fetch(`${ this._apiBase }${ url }`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
    }
    return await res.json()
  }

  async createComment(postId, body) {
    return await this.postResource(`/comments`, JSON.stringify({postId, body}), 'POST');
  }

  async createPost(title, body) {
    const bodyItem = JSON.stringify({"title": `${ title }`, "body": `${ body }`});
    const method = 'POST';
    const res = await this.postResource('/posts', bodyItem, method);
    return res;
  }

  async getAllPosts() {
    const res = await this.getResource('/posts');
    return res;
  }

  async getAllPostsWithComments() {
    const res = await this.getResource('/posts?_embed=comments');
    return res;
  }

  async getPostAndComment(id) {

    const res = await this.getResource(`/posts/${ id }?_embed=comments`);
    return res;
  }

  async updatePost(id, title, body) {
    const bodyy = JSON.stringify({"title": `${ title }`, "body": `${ body }`});
    const method = 'PUT';
    const res = await this.postResource(`/posts/${ id }`, bodyy, method);
    return res;
  }

  async delPost(id) {
    const res = await this.delResource(`/posts/${ id }`);
    return res;
  }

}

const posts = new PostsService();

export default posts;