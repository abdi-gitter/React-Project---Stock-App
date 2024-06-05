import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Stack,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material'
import mainImage from '../assets/result.svg'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const initialValues = { email: '', password: '' }

  const registerSchema = yup.object().shape({
    email: yup
      .string()
      .email('Valid email required')
      .required('Valid email required'),
    password: yup
      .string()
      .min(8, 'Password requires a minimum of 8 characters')
      .max(12)
      .matches(/\d+/, 'Password needs at least 1 number')
      .matches(/[a-z]+/, 'Password needs at least 1 lowercase letter')
      .matches(/[A-Z]+/, 'Password needs at least 1 uppercase letter')
      .required('Password is required'),
  })

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false)
    dispatch(login(values, navigate))
    actions.resetForm()
  }

  return (
    <Box sx={{ width: '100%', height: '100vh', bgcolor: '#052159' }}>
      <Typography variant="h2" color="white" align="center" component="h1">
        Stock Management App
      </Typography>
      <Grid container p={5} alignItems="center" justifyContent="center">
        <Grid item md={6} xl={8} display={{ xs: 'none', sm: 'block' }}>
          <img src={mainImage} alt="super productive office crew" />
        </Grid>
        <Grid item xl={4} xs={12} md={6}>
          <Card sx={{ maxWidth: '100%', padding: '2rem' }}>
            <CardContent>
              <Typography variant="h3" align="center" mb={3}>
                Login
              </Typography>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={registerSchema}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field
                      as={TextField}
                      type="email"
                      variant="outlined"
                      label="Email"
                      fullWidth
                      name="email"
                      margin="dense"
                      error={Boolean(errors.email) && Boolean(touched.email)}
                      helperText={Boolean(touched.email) ? errors.email : ''}
                    />

                    <Field
                      as={TextField}
                      type={showPassword ? 'text' : 'password'}
                      variant="outlined"
                      label="Password"
                      fullWidth
                      name="password"
                      margin="dense"
                      error={
                        Boolean(errors.password) && Boolean(touched.password)
                      }
                      helperText={
                        Boolean(touched.password) ? errors.password : ''
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" sx={{ pr: 2 }}>
                            <IconButton
                              edge="end"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Stack justifyContent="center" alignItems="center" mt={2}>
                      <Button variant="contained" type="submit" size="large">
                        Login
                      </Button>
                    </Stack>
                  </Form>
                )}
              </Formik>
              <Typography
                variant="subtitle2"
                align="center"
                component="div"
                sx={{ cursor: 'pointer', mt: 1, color: 'goldenrod' }}
                onClick={() => navigate('/register')}
              >
                Don't have an account?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login
