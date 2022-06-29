import { 
  useToastService, 
  ToastContainer, 
  IToastConfig, 
  ToastDuration, 
  ToastPosition, 
  ToastAnimation, 
  IToastStyle
} from "awesome-toast-library";
import './App.css';

const toastConfig: IToastConfig = {
  duration: ToastDuration.Medium,
  position: ToastPosition.BottomRight,
  animation: ToastAnimation.Movement,
  margin: 10,
  infoStyle: {
    backgroundColor: "#8a2be2",
    font: "Segoe Ui",
    textColor: "black",
  } as IToastStyle,
};

function App() {
  const { info, warning, error, success } = useToastService(toastConfig);

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
