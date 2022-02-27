import StepOne from "./stepOne.js";
import StepThree from "./stepThree.js";
import StepTwoSection from "./stepTwo";
function FormikControll(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "stepOne":
      return <StepOne {...rest} />;
    case "StepTwoSection":
      return <StepTwoSection {...rest} />;
    case "StepThree":
      return <StepThree {...rest} />;
    default:
      return null;
  }
}

export default FormikControll;
