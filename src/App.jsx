import Editor from './components/Editor';
import Trs from './components/Trs';
import './App.css'; // Import CSS for layout and styles

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <Trs />
      </aside>
      <main className="editor-container">
        <Editor />
      </main>
    </div>
  );
}

export default App;
