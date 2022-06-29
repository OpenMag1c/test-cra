import { useToastService, ToastContainer } from "awesome-toast-library"
import './App.css'

function App() {
  const { info, warning, error, success } = useToastService();

  const warningClick = () => {
    warning("warning toast");
  };

  const infoClick = () => {
    info("info toast");
  };

  const errorClick = () => {
    error("error toast");
  };

  const successClick = () => {
    success("success toast");
  };

  return (
    <div className="App">
      <button type="button" onClick={infoClick}>
        Show info
      </button>
      <button type="button" onClick={warningClick}>
        Show warning
      </button>
      <button type="button" onClick={errorClick}>
        Show error
      </button>
      <button type="button" onClick={successClick}>
        Show success
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
