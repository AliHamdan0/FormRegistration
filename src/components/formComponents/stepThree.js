import { useEffect, useState } from "react";
import { Field, ErrorMessage, FieldArray } from "formik";
import "./style.css";
function StepThree(props) {
  const { name, ...rest } = props;
  return (
    <div className="stepThree">
      <span className="step">Step 3</span>
      <Field name={name} {...rest}>
        {(props) => {
          const { field, form, meta } = props;
          return (
            <div style={{ marginBottom: "20px" }}>
              <label className="text">Are you ready to rock ?</label>
              <input type="checkbox" {...field} className="check" />
            </div>
          );
        }}
      </Field>
    </div>
  );
}
export default StepThree;
