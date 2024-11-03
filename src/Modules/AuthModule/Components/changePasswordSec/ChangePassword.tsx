import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URLS } from "../../../../Constant/END_POINTS";
interface FormValues {
  password: string,
  password_new: string
}
export default function ChangePassword() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ defaultValues: {password: "", password_new: ""  } })

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(BASE_URLS.changePassword, data);
      toast.success(`${response?.data?.message}`);
      navigate('/login');
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
        
        {/* password */}
        <TextField
          label='Old Password'
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

        {/*new password */}
        <TextField
          label='New Password'
          required
          fullWidth
          id="password_new"
          type="password"
          autoComplete="new password"
          placeholder="******"
          error={!!errors?.password_new}
          helperText={errors?.password_new?.message}
          {...register('password_new', { required: 'password is required' })}
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
          Save
        </Button>
        
      </Box>
    </>
  )
}
