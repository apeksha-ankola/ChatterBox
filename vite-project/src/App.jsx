import { useState } from "react";
import "./App.css";
// 2 pages, auth page, chat window page.
import AuthPage from "./Authpage";
import ChatsPage from "./Chatpage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    // if user doesnt exists, then this..
    return <AuthPage onAuth={(user) => {
      console.log("Auth user not found:", user);
      setUser(user)
    }} />;
  } else {
    // if user exists, then chat window
    return <ChatsPage user={user} />;
  }
}

export default App;