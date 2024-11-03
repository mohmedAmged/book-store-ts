import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URLS } from "../../../../Constant/END_POINTS";
import { emailValidation } from "../../../../Constant/VALIDATION";

interface FormValues {
  email: string
}
export default function ForgetPassword() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ defaultValues: { email: "" } })

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(BASE_URLS.forgotPassword, data);
      toast.success(`${response?.data?.message}`);
      console.log(response?.data);
      navigate('/reset-password');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      const errorMessage = error?.response?.data?.message || 'An error occurred';
      toast.error(errorMessage);
    }
  }

  return (
    <>
      <Grid sx={{ width: '100%' }}>
        <Typography
          component='p'
          variant="subtitle1"
          sx={{ mt: 2, color: '#09093799', textTransform: 'capitalize' }}
        >
          Welcome Back!
        </Typography>
        <Typography
          component='h1'
          variant="h5"
          fontWeight='bold'
          sx={{ color: '#090937', textTransform: 'capitalize' }}
        >
          Forget Password!!
        </Typography>
      </Grid>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component='form'
        noValidate
        sx={{ mt: 2, width: '100%' }}
      >
        {/* email */}
        <TextField
          label='Email'
          required
          fullWidth
          id="email"
          type="email"
          autoComplete="email"
          placeholder="example@example.com"
          error={!!errors?.email}
          helperText={errors?.email?.message}
          {...register('email',emailValidation)}
          sx={{
            mt: 2
          }}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: '#757575'
          }}
        ></Typography>
        {/* Actions */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontSize: '18px',
            py: '4px',
            mt: '40px',
            textTransform: 'capitalize',
            color: '#6251DD',
            backgroundColor: '#FFFFFF',
            border: '1px solid #6251DD',
            '&:hover': {
              backgroundColor: '#6251DD',
              color: '#FFFFFF',
            }
          }}
        >
          send
        </Button>
      </Box>
    </>
  )
}
