import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  // InputBase,
  Autocomplete,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import React, {  useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import * as Yup from "yup";
import PropTypes from "prop-types";

const useStyle = makeStyles(() => {
  return {
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  };
});
function ContactPerson({handleNext,handleBack}) {


  const { formContainer } = useStyle();
  const [validationObj] = useState({
    name: Yup.string().required("Please Enter Organization Name"),
    email: Yup.string()
      .email("Please Enter A Valid Email Address")
      .required("Please Enter Email"),
  });
  const initialValues = {
    name: "",
    contact: "",
    organization: "",
    email: "",
  };
  const [contact, setcontact] = useState([{ contact: "", desc: "", }]);
  const handleAddContactField = () => {
    setcontact([...contact, { contact: "", desc: "", }]);
  };

  const handleSubmit = async (values,) => {
    const obj = { ...values };
    console.log(obj);
    handleNext();

  };
  const handleNavigate = () => {
    handleBack();
  };
  const ValidationSchema = Yup.object().shape(validationObj);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      handleSubmit(values, resetForm, setSubmitting);
    },
  });
  const handleDel = (contct, i) => {
    console.log(contct);
    console.log(i);
    let value = JSON.parse(JSON.stringify(contact));

    console.log(value);
    value.splice(i, 1);
    console.log(value);
    // let value = contact.filter((cont)=>cont.id!==contct.id);
    // console.log(value);
    setcontact(value);
  };
  // useEffect(() => {
  //   contact.map((m, i) => {
  //     setvalidationObj({
  //       ...validationObj,
  //       [`contact`]: Yup.string().required(
  //         "Please Enter Organization Name"
  //       ),
  //       [`desc${i}`]: Yup.string().required(
  //         "Enter Desc"
  //       ),
  //     });
  //   });
  //   console.log(validationObj);
  // }, [contact]);
  return (
    <Paper elevation={3} sx={{ padding: "20px" }}>
    <form onSubmit={formik.handleSubmit}>
      <Box className={formContainer}>
        <FormControl fullWidth>
          <Typography>Name</Typography>
          <Autocomplete
            options={top100Films.map((option) => option.label)}

            name="name"
            renderInput={(params) => <TextField {...params}   placeholder="type to search records"          error={
              Boolean(formik.errors.name) && Boolean(formik.touched.name)
            }
            helperText={Boolean(formik.errors.name) && formik.errors.name} />}
            value={formik.values?.name}
            size={"small"}
            fullWidth
            onChange={(__, value) => {
              console.log(value);
              formik.setFieldValue("name", value);
              // formik.values?.date=e.target.value
          }}

          />
        </FormControl>
        <FormControl fullWidth>
          <Typography>Email</Typography>
          <TextField
            name="email"
            value={formik.values?.email}
            size={"small"}
            fullWidth
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.email) &&
              Boolean(formik.touched.email)
            }
            helperText={
              Boolean(formik.errors.email) && formik.errors.email
            }
          />
        </FormControl>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Typography>Contact Number</Typography>
          {contact?.map((contct, i) => {
            console.log(contct);
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  // justifyContent:"center"
                }}
              >
                <Box
                  sx={{
                    // border: "1px solid rgba(200,200,200,0.9)",
                    width: "100%",
                    // padding: "3px",
                  }}
                >
                  <FormControl fullWidth>
                    <TextField
                    
                      key={i}
                      size="small"
                      value={contct?.contact}
                      onChange={(e) => {
                        let value = JSON.parse(JSON.stringify(contact));
                        value[i].contact = e.target.value;
                        setcontact(value);

                      }}
                      // variant="standard"
                      name={`contact`}
                      fullWidth
                      // onChange={formik.handleChange}
                      sx={{ borderRadius: "none", }}
                      // error={
                      //   Boolean(formik.errors[`contact${i}`]) && Boolean(formik.errors[`contact${i}`])
                      // }
                      // helperText={
                      //   Boolean(formik.errors[`contact${i}`]) && 
                      //   formik.errors[`contact${i}`]
                      // }
                    />
                           {/* {formik.errors[`contact`] && formik.touched[`contact`] ? (
          <div>{formik.errors[`contact`]}</div>
        ) : null} */}

                  </FormControl>
                </Box>
                <Box sx={{ width: "150px" }}>
                  <TextField
                    key={i}
                    name={`desc`}
                    value={contct?.desc}

                    select
                    fullWidth
                    size="small"
                    // onChange={formik.handleChange}
                    onChange={(e) => {
                      let value = JSON.parse(JSON.stringify(contact));
                      value[i].desc = e.target.value;
                      setcontact(value);

                    }}
                    // error={
                    //   Boolean(formik.errors[`desc${i}`]) &&
                    //   Boolean(formik.touched[`desc${i}`])
                    // }
                    // helperText={
                    //   Boolean(formik.errors[`desc${i}`]) &&
                    //   formik.errors[`desc${i}`]
                    // }

                  >
                    <MenuItem value="Home">Home</MenuItem>
                    <MenuItem value="Work">Work</MenuItem>
                  </TextField>
                </Box>
                {/* <Box > */}

                {contact?.length > 1 ? <DeleteIcon sx={{marginBottom:formik.errors[`desc${i}`]?"25px":"0px"}} onClick={() => handleDel(contct, i)} /> : null}
                {/* </Box> */}
              </Box>
            );
          })}
          <Box sx={{ width: "fit-content" }}>
            <Typography
              onClick={handleAddContactField}
              sx={{ cursor: "pointer" }}
            >
              + Add More
            </Typography>
          </Box>
        </Box>

        <FormControl fullWidth>
          <Typography>Organization</Typography>
          <Autocomplete
            name="organization"
            options={top100Films.map((option) => option.label)}
            renderInput={(params) => <TextField {...params}   placeholder="type to search records"             error={
              Boolean(formik.errors.organization) &&
              Boolean(formik.touched.organization)
            }
            helperText={
              Boolean(formik.errors.organization) &&
              formik.errors.organization
            } />}
            value={formik.values?.organization}
            size={"small"}
            fullWidth
            onChange={(__, value) => {
              console.log(value);
              formik.setFieldValue("organization", value);
              // formik.values?.date=e.target.value
          }}

          />
        </FormControl>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Box>
              <Button onClick={handleNavigate}>
                <Typography sx={{ fontWeight: "bold" }}>Back</Typography>
              </Button>
            </Box>
            <Box>
              {formik.isSubmitting ? (
                <Box>
                  <CircularProgress />
                </Box>
              ) : (
                <Button variant="contained" type="submit">
                  <Typography sx={{ fontWeight: "bold" }}>
                    Next
                  </Typography>
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  </Paper>
  );
}

export default ContactPerson;
ContactPerson.propTypes = {

  handleNext: PropTypes.any,
  handleBack: PropTypes.any,


};
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];