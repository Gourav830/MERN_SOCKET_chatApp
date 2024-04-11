import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/chats" component={ChatPage} />
          <Route path="/" component={HomePage} />
          {/* Add other Switch as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;