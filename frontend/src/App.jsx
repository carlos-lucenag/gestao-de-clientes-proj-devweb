import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClientList from "./components/ClientList";
import ClientForm from "./components/ClientForm";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<ClientList />} />
            <Route path="/new" element={<ClientForm />} />
            <Route path="/edit/:id" element={<ClientForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
