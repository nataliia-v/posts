import React from 'react';
import { Posts } from "../pages";
import routes from "../../views/routes";
import { Redirect, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "../../views/Main";
// import { Route, Switch } from 'react-router-dom';
// import Spinner from "../spinner";

function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Main />
      </BrowserRouter>

      {/*<Posts/>*/}
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