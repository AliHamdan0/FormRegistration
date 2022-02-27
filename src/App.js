import "./App.css";
import FormikContainer from "./components/Formikcontainer/formikcontainer.js";
function App() {
  return (
    <div>
      <h1 className="title title-firstWord">
        Seminar <span className="title-secondWord">Registratio</span>
      </h1>
      <FormikContainer />
    </div>
  );
}

export default App;
