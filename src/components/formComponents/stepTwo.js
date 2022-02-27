import { useEffect, useState } from "react";
import { Field, ErrorMessage, FieldArray } from "formik";
import "./style.css";
function StepTwoSection(props) {
  const { Name, checkName, options, formik, question, showStep, ...rest } =
    props;
  return (
    <div className="stepTwo">
      {showStep && <span className="step">Step 2</span>}

      <div>
        <p className="text">{question}</p>
        <div className="choiceCont">
          <Field name={checkName} {...rest}>
            {(props) => {
              const { field, form, meta } = props;
              return options.map((option) => {
                return (
                  <div key={option.key}>
                    <input
                      type="radio"
                      className="radio"
                      autoComplete="off"
                      {...field}
                      value={option.value}
                      ischecked={field.value === option.value ? "checked" : ""}
                    />
                    <label className="text">{option.key}</label>
                  </div>
                );
              });
            }}
          </Field>
        </div>
      </div>
      <ErrorMessage
        name={checkName}
        component="span"
        style={{ color: "red" }}
      />
      {formik.values[checkName] == "Yes" ? (
        <div style={{ margin: "15px 0px" }}>
          <span
            className="text"
            style={{ fontSize: "16px", marginRight: "10px" }}
          >
            {showStep == true ? "Company name:" : "Person name:"}
          </span>
          <Field name={Name} {...rest} />{" "}
          <ErrorMessage name={Name} component="span" style={{ color: "red" }} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default StepTwoSection;
