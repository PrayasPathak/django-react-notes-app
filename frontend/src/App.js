import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <NotesListPage />
      </header>
    </div>
  );
}

export default App;
