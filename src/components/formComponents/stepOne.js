import { useEffect, useState } from "react";
import { Field, ErrorMessage, FieldArray } from "formik";
import CheckIcon from "@mui/icons-material/Check";
import "./style.css";
function StepOne(props) {
  const { name, label, options, numberPeople, formik, ...rest } = props;
  const [reset, setReset] = useState(false);
  useEffect(() => {
    setReset(false);
  }, [formik.values.numberPeople]);
  return (
    <div className="stepOne">
      <span className="step">Step 1</span>
      <div className="widthP">
        <p className="text">How many people will be attending ?</p>
        <Field
          name={numberPeople}
          as="select"
          className="select"
          onClick={(e) => {
            setReset(true);
          }}
        >
          {options.map((option, index) => {
            return (
              <option
                key={option.key}
                value={option.value}
                disabled={index == 0 && formik.values.numberPeople > 0}
              >
                {option.key}
              </option>
            );
          })}
        </Field>
      </div>
      {Number(formik.values.numberPeople) > 0 && (
        <div className={reset == true ? "stepOneAnimate" : ""}>
          <h4 className="selectText">Please provide full names :</h4>
          <FieldArray id={name} name={name} {...rest}>
            {(props) => {
              const { form } = props;
              const { values } = form;
              const { PeopleAttending } = values;
              return (
                <div>
                  {[...Array(Number(formik.values.numberPeople)).keys()].map(
                    (item, index) => {
                      return (
                        <div key={index} style={{ marginBottom: "10px" }}>
                          <label
                            htmlFor={`PeopleAttending[${index}]`}
                            className="text"
                            style={{ fontSize: "16px", marginRight: "10px" }}
                          >
                            Attendee {index + 1} Name:
                          </label>
                          <Field
                            name={`PeopleAttending[${index}]`}
                            id={`PeopleAttending[${index}]`}
                            autoComplete="off"
                            validate={(value) => {
                              if (!value) return "requier";
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              );
            }}
          </FieldArray>
        </div>
      )}
      {Number(formik.values.numberPeople) > 0 &&
      formik.values.PeopleAttending.filter(
        (item, index) =>
          index < Number(formik.values.numberPeople) && item == ""
      ).length == 0 ? (
        <div className="iconCont">
          <CheckIcon className="icon iconAnimate" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default StepOne;
