import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  FormControl
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import React, {  useState } from "react";
// import * as Yup from "yup";
import PropTypes from "prop-types";
import Divider from '@mui/material/Divider';
const useStyle = makeStyles(() => {
  return {
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  };
});
function Products({handleBack}) {
  const { formContainer } = useStyle();
  // const [validationObj] = useState({
  //   item: Yup.string().required("Please Enter Organization item"),
  //   price: Yup.string()
  //     .required("Please Enter price"),
  // });
  // const initialValues = {
  //   item: "",
  //   price: "",
  //   organization: "",
  //   email: "",
  // };
  const [product, setproduct] = useState([]);
  console.log(product);
  const handleAddContactField = () => {
    setproduct([...product, { item: "", price: "",quantity: "", amount: "", }]);
  };
  const handleSubmit = async (values,) => {
    const obj = { ...values };
    console.log(obj);

  };
  const handleNavigate = () => {
    handleBack();
  };
  // const ValidationSchema = Yup.object().shape(validationObj);
  const formik = useFormik({
    // initialValues: initialValues,
    // validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      handleSubmit(values, resetForm, setSubmitting);
    },
  });
  const handleChang=(e,i)=>{

    let value = JSON.parse(JSON.stringify(product));
    value[i].item = e.target.value;
    setproduct(value);
  };
  return (
    <Paper elevation={3} sx={{ padding: "20px" }}>
      <form onSubmit={formik.handleSubmit}>
        <Box className={formContainer}>
          {
            product && product?.map((prod,i)=>{
              return(
                <Box key={i} sx={{display:"flex",flexDirection:"column",gap:"15px"}}>
           <FormControl fullWidth>
            <Typography>Item</Typography>
            <TextField
              name="item"
              value={prod?.item}
              size={"small"}
              fullWidth
              onChange={(e)=>{handleChang(e,i);}}
              // error={Boolean(formik.errors.item) && Boolean(formik.touched.item)}
              // helperText={Boolean(formik.errors.item) && formik.errors.item}
            />
          </FormControl>
          <Box sx={{display:"flex",gap:"10px"}}>
          <FormControl fullWidth>
            <Typography>Price</Typography>
            <TextField
              name="price"
              value={prod?.price}
              size={"small"}
              type={"number"}

              fullWidth
              onChange={(e)=>{    let value = JSON.parse(JSON.stringify(product));
                value[i].price = e.target.value;
                setproduct(value);}}

              // error={Boolean(formik.errors.item) && Boolean(formik.touched.item)}
              // helperText={Boolean(formik.errors.item) && formik.errors.item}
            />
          </FormControl>
          <FormControl fullWidth>
            <Typography>Quantity</Typography>
            <TextField
              name="quantity"
              type={"number"}

              value={prod?.quantity}
              size={"small"}
              fullWidth
              onChange={(e)=>{    let value = JSON.parse(JSON.stringify(product));
                value[i].quantity = e.target.value;
                setproduct(value);}}

              // error={Boolean(formik.errors.item) && Boolean(formik.touched.item)}
              // helperText={Boolean(formik.errors.item) && formik.errors.item}
            />
          </FormControl>
          <FormControl fullWidth>
            <Typography>Amount</Typography>
            <TextField
              name="amount"
              type={"number"}
              value={prod?.amount}
              size={"small"}
              disabled
              fullWidth
              onChange={(e)=>{    let value = JSON.parse(JSON.stringify(product));
                value[i].amount = e.target.value;
                setproduct(value);}}

              // error={Boolean(formik.errors.item) && Boolean(formik.touched.item)}
              // helperText={Boolean(formik.errors.item) && formik.errors.item}
            />
          </FormControl>

            </Box>
            <Divider sx={{width:"100%",backgroundColor:"#c1c2c3",marginTop:"10px"}}/>

                  </Box>
              );
            })
          }
          <Box sx={{ width: "fit-content" }}>
            <Typography
              onClick={handleAddContactField}
              sx={{ cursor: "pointer",color:(theme)=>theme.palette.primary.main }}
            >
              + Add More
            </Typography>
          </Box>

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
                  <Typography sx={{ fontWeight: "bold" }}>
                    Back
                  </Typography>
                </Button>
              </Box>
              <Box>

                <Button type='submit' sx={{ backgroundColor: (theme) => theme.palette.primary.main, color: (theme) => theme.palette.white.main }}>
                  Save
                </Button>

              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </Paper>
  );
}

export default Products;
Products.propTypes = {
  handleBack: PropTypes.any,
};