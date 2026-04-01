import { ToastContainer } from "react-toastify";
import "./App.css";
import Root from "./components/Root/Root";

function App() {
  return (
    <div className="">
      <Root></Root>
      <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;
