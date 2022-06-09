import "./App.css";
import Comment from "./components/Comment";
import { data } from "./data/data";

function App() {
    return (
        <div className="App">
            <Comment data={data} />
        </div>
    );
}

export default App;
