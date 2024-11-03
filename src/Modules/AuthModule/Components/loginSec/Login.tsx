import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import {BASE_URLS} from "../../../../Constant/END_POINTS"
import { emailValidation } from "../../../../Constant/VALIDATION";
import { useContext } from "react";
import { AuthContext } from "../../../../Constant/Context/AuthContext";
// import toast from "react-hot-toast";
interface FormValues {
  password: string,
  email: string
}
export default function Login() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {saveUserData}:any =useContext(AuthContext)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ defaultValues: { email: "", password: "" } })

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(BASE_URLS.login, data);
      toast.success(`${response?.data?.message}`);
      Cookies.set('token', response?.data?.data?.accessToken)
      saveUserData()
      navigate('/dashboard/home');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
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
          Login To Your account
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
          {...register('email', emailValidation)}
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
        {/* password */}
        <TextField
          label='password'
          required
          fullWidth
          id="password"
          type="password"
          autoComplete="password"
          placeholder="******"
          error={!!errors?.password}
          helperText={errors?.password?.message}
          {...register('password', { required: 'password is required' })}
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
        {/* remember and Froget password */}
        <Grid container alignItems={'center'}>
          <Grid item xs>
            <FormControlLabel
              control={<Checkbox value={'remember'} color="primary" />}
              label="Remember Me"
              sx={{
                color: '#6251DD',
              }}
            />
          </Grid>
          <Grid item onClick={() => navigate('/forget-password')}>
            <Typography
              variant="body2"
              sx={{
                color: '#6251DD',
                cursor: 'pointer'
              }}
            >
              Forget Password?
            </Typography>
          </Grid>
        </Grid>
        {/* Actions */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontSize: '18px',
            py: '4px',
            my: '15px',
            textTransform: 'capitalize',
            backgroundColor: '#EF6B4A',
            border: '1px solid #EF6B4A',
            '&:hover': {
              backgroundColor: '#Ee6B4c'
            }
          }}
        >
          login
        </Button>
        <Button
          onClick={() => navigate('/register')}
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontSize: '18px',
            py: '4px',
            mt: '12px',
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
          register
        </Button>
      </Box>
    </>
  )
}
