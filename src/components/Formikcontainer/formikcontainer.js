import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControll from "../formComponents/formikControll";
import { Grid, Container } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
function FormikContainer() {
  const options = [
    { key: "Please choose", value: "" },
    { key: "1", value: 1 },
    { key: "2", value: 2 },
    { key: "3", value: 3 },
    { key: "4", value: 4 },
    { key: "5", value: 5 },
  ];
  const radiooptions = [
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];
  const initialValues = {
    numberPeople: 0,
    PeopleAttending: ["", "", "", "", ""],
    companyOnBadget: "",
    companyName: "",
    specialAccomodaton: "",
    nameForSpecialAccomodation: "",
    readyRock: "",
  };
  const onSubmit = (values) => {
    values.PeopleAttending = values.PeopleAttending.filter(
      (item) => item != ""
    );
    console.log("values", values);
  };
  const validationSchema = Yup.object({
    companyOnBadget: Yup.string().required("required !"),
    companyName: Yup.string().when("companyOnBadget", {
      is: "Yes",
      then: Yup.string().required("required !"),
    }),
    specialAccomodaton: Yup.string().required("required !"),
    nameForSpecialAccomodation: Yup.string().when("specialAccomodaton", {
      is: "Yes",
      then: Yup.string().required("required !"),
    }),
  });
  return (
    <Container maxWidth="xl">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <Grid
              container
              spacing={4}
              sx={{
                mt: { xs: "8vh", md: "15vh" },
                gap: { xs: "45px", md: "0px" },
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  ml: "10px",
                  background: "#51d7ed91",
                  height: "fit-content",
                  pb: "10px",
                }}
              >
                <FormControll
                  control="stepOne"
                  name="PeopleAttending"
                  numberPeople="numberPeople"
                  label="select option"
                  options={options}
                  formik={formik}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  ml: "10px",
                  background: "#51ede6cc",
                  height: "fit-content",
                  pb: "10px",
                  position: "relative",
                }}
              >
                <div className="StepTwo">
                  {/* Adding overlay condition */}
                  {formik.values.PeopleAttending.filter(
                    (item, index) =>
                      index < Number(formik.values.numberPeople) && item == ""
                  ).length > 0 && <div className="overlay"></div>}
                  {Number(formik.values.numberPeople) == 0 && (
                    <div className="overlay"></div>
                  )}
                  {/* End overlay */}
                  <FormControll
                    control="StepTwoSection"
                    Name="companyName"
                    checkName="companyOnBadget"
                    question="Would you like your company name on your badges ?"
                    showStep={true}
                    options={radiooptions}
                    formik={formik}
                  />
                  <FormControll
                    control="StepTwoSection"
                    Name="nameForSpecialAccomodation"
                    checkName="specialAccomodaton"
                    question="Will anyone in your group require special accommodation ?"
                    showStep={false}
                    options={radiooptions}
                    formik={formik}
                  />
                  {formik.isValid == true &&
                  formik.values.companyOnBadget != "" &&
                  formik.values.specialAccomodaton != "" ? (
                    <div className="iconCont">
                      <CheckIcon className="icon iconAnimate" />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  ml: "10px",
                  mb: "20px",
                  background: "#51d7ed91",
                  height: "fit-content",
                  pb: "10px",
                  position: "relative",
                }}
              >
                <div>
                  {formik.isValid != true &&
                    (formik.values.companyOnBadget == "" ||
                      formik.values.specialAccomodaton == "") && (
                      <div className="overlay"></div>
                    )}
                  {Number(formik.values.numberPeople) == 0 && (
                    <div className="overlay"></div>
                  )}

                  {formik.values.companyOnBadget == "Yes" &&
                    formik.values.companyName == "" && (
                      <div className="overlay"></div>
                    )}
                  {formik.values.specialAccomodaton == "Yes" &&
                    formik.values.nameForSpecialAccomodation == "" && (
                      <div className="overlay"></div>
                    )}

                  <FormControll control="StepThree" name="readyRock" />

                  <button
                    type="submit"
                    className="submit"
                    disabled={!formik.values.readyRock != ""}
                  >
                    Complete registration
                  </button>
                </div>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
export default FormikContainer;
