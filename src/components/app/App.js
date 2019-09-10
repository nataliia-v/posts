import React from 'react';
import { Posts } from "../pages";
// import { Route, Switch } from 'react-router-dom';
// import Spinner from "../spinner";

function App() {


  return (
    <div className="App">
      <Posts/>

    </div>
  );
}

export default App;



// import { withPostsService } from '../hoc';
// // import Spinner from "../spinner";
//
// function App({ postsService }) {
//   console.log(postsService.getAllPosts());
//
//   return (
//       <div className="App">
//         {/*<Spinner/>*/}
//       </div>
//   );
// }
//
// export default withPostsService()(App);