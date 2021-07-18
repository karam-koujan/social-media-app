import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import {Explore,Login,NewsFeed,PostPage,SignUp,Profile,Chat} from "./pages";
import  NoMatch  from "./pages/404Page";
function App() {

  return (
    <Router>
      {!localStorage.getItem("token")?<Redirect to="/login"/>:null}
      <Switch>
      <Route  path="/" component={NewsFeed} exact/>
      <Route  path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/explore"  component={Explore} />
       <Route path="/chat" component={Chat} />
      <Route path="/profile/:userName" component={Profile} />
      <Route path="/post/:id" component={PostPage} />
      <Route path="/404"  component={NoMatch} />
      <Redirect to="/404" />
      </Switch>
    </Router>
    
  );
}

export default App;
