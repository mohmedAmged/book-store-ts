import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URLS } from "../../../../Constant/END_POINTS";
import { emailValidation } from "../../../../Constant/VALIDATION";
interface FormValues {
  first_name: string,
  last_name: string,
  password: string,
  email: string,
  role: string,
}
export default function Register() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, setValue  } = useForm<FormValues>({ defaultValues: {first_name: "", last_name: "",  password: "", email: "", role: "" } })

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("role", data.role);
    try {
      const response = await axios.post(BASE_URLS.register, formData, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
      toast.success(`${response?.data?.message}`);
      
      navigate('/login');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error);
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
          Create New Account
        </Typography>
        <Typography
          component='h1'
          variant="h5"
          fontWeight='bold'
          sx={{ color: '#090937', textTransform: 'capitalize' }}
        >
          Register
        </Typography>
      </Grid>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component='form'
        noValidate
        sx={{ mt: 2, width: '100%', }}
      >
        {/* first name and last name */}
        <Grid container spacing={{ xs: 0, md: 3 }} alignItems={'center'}>
          {/* first name */}
          <Grid item md={6} xs={12}>
            <TextField
              label='first name'
              fullWidth
              required
              id="first_name"
              type="text"
              autoComplete="first name"
              placeholder="Jhon"
              error={!!errors?.first_name}
              helperText={errors?.first_name?.message}
              {...register('first_name', {
                required: 'first name is required',
              })}
              sx={{
                mt: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: '#757575'
              }}
            ></Typography>
          </Grid>
          {/* last name */}
          <Grid item md={6} xs={12}>
            <TextField
              label='last name'
              required
              fullWidth
              id="last_name"
              type="text"
              autoComplete="last name"
              placeholder="johan"
              error={!!errors?.last_name}
              helperText={errors?.last_name?.message}
              {...register('last_name', {
                required: 'last name is required',
              })}
              sx={{
                mt: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: '#757575'
              }}
            ></Typography>
          </Grid>
        </Grid>

        {/* email */}
        <TextField
              label='Email'
              fullWidth
              required
              id="email"
              type="email"
              autoComplete="email"
              placeholder="example@example.com"
              error={!!errors?.email}
              helperText={errors?.email?.message}
              {...register('email', emailValidation)}
              sx={{
                mt: 3

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
              mt: 3
            }}
          />
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: '#757575'
            }}
          ></Typography>

          {/* role */}
          <FormControl fullWidth>
            <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              id="role"
              defaultValue=''
              label="role"
              {...register('role', { required: 'Role is required' })}
              onChange={(e) => setValue('role', e.target.value)}
            >
              <MenuItem value="" disabled>Select Role</MenuItem>
              <MenuItem value="Customer">Customer</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
            {errors.role && <Typography color="error">{errors.role.message}</Typography>}
          </FormControl>

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
          Register
        </Button>
        <Button
          onClick={() => navigate('/login')}
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
          login
        </Button>
      </Box>
    </>
  )
}
