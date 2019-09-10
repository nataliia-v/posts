export default class PostsService {

  _apiBase = 'https://bloggy-api.herokuapp.com';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + ` ,received ${res.status}`)
    }
    return await res.json();
  }


  async postResource(url, bodyy, method) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: bodyy
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + ` ,received ${res.status}`)
    }
    return await res.json()
  }

  async delResource(url) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + ` ,received ${res.status}`)
    }
    return await res.json()
  }

  async createComment(postId, body) {
    const bodyy = JSON.stringify({"postId" : `${postId}`, "body": `${body}`});
    const method = 'POST';

    const res = await this.postResource(`/comments`, bodyy, method);
    return res;
  }


  async createPost(title, body) {
    const bodyy = JSON.stringify({"title" : `${title}`, "body": `${body}`});
    const method = 'POST';
    const res = await this.postResource('/posts', bodyy, method);
    return res;
  }


  async getAllPosts() {
    const res = await this.getResource('/posts');
    return res;
  }

  async getPostAndComment(id) {

    const res = await this.getResource(`/posts/${id}?_embed=comments`);
    return res;
  }

  async updatePost(id, title, body) {
    const bodyy = JSON.stringify({"title" : `${title}`, "body": `${body}`});
    const method = 'PUT';
    const res = await this.postResource(`/posts/${id}`, bodyy, method);
    return res;
  }

  async delPost(id) {
    const res = await this.delResource(`/posts/${id}`);
    return res;
  }

}

// const posts = new PostsService();

// //// 1) Display a list of allPosts
// posts.getAllPosts().then((body) => {
//   body.forEach((post) => console.log(post.title))
// });

// //// 2) Display a specific Post and its comments
// posts.getPostAndComment(1).then((p)=> console.log(p
//     // p.comments.forEach((el)=> console.log(el))
// ));

// /// 3) Create a new Post
// const title = "Updated title";
// const body = "Updated body";

// posts.createPost(title, body).then((body)=>{
//   console.log(body);
// });

/// 4) Update Post's information – title and body
// posts.updatePost(6, title, body).then((body) => {
//   console.log(body);
// });

/// 5) Delete a Post
// posts.delPost(4).then((body)=> {
//   console.log(body)
// });


/// 6) Create a new Comment

// const postId = 6;
// const body = "Comment body";
//
// posts.createComment(postId, body).then((body)=> {
//   console.log(body)
// });