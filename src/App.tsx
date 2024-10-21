import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Like from "./components/like"

function App() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center py-4">
          <Like onClick={() => console.log("clicked")}></Like>
        </div>
      </div>
    </section>
  );
}

export default App;
