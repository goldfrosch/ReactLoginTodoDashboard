import { Route } from "react-router-dom";

import LoginContainer from "./containers/auth/loginContainer";
import SignIn from "./containers/auth/signinContainer";
import TodoContainers from "./containers/todos/todosContainer";
import MainComponent from "./styles/globalStyle";

function App() {
  return (
    <>
      <MainComponent />
      <Route exact path="/" component={LoginContainer} />
      <Route path="/todos" component={TodoContainers} />
      <Route path="/signin" component={SignIn} />
    </>
  );
}

export default App;
