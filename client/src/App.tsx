import { ConnectKitButton } from "connectkit";
import "cal-sans";
import { Route } from "wouter";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ConnectKitButton />

      <div className="mt-[80px]">
      <Navbar
      />
        <Route path="/">
          <Home />
        </Route>
      </div>
    </div>
  );
}

export default App;
