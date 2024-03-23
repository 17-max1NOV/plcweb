import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginFun } from "../../../service/auth/auth";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthLogin = ({ title, subtitle, subtext }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); // State để điều khiển việc ẩn/hiện mật khẩu

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Tên đăng nhập là bắt buộc'),
        password: Yup.string().required('Mật khẩu là bắt buộc'),
    });

    const handleLogin = (values, { setSubmitting }) => {
        dispatch(loginFun(values, navigate));
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >
            {({ isSubmitting }) => (
                <Form>
                    {title ? (
                        <Typography fontWeight="700" variant="h2" mb={1}>
                            {title}
                        </Typography>
                    ) : null}

                    {subtext}

                    <Stack>
                        <Box>
                            <div className='form-group'>
                                <input type='text' name='username' required />
                                <Typography variant="subtitle1"
                                    fontWeight={600} component="label" htmlFor='username' mb="5px">Tên đăng nhập</Typography>
                            </div>
                            <ErrorMessage name='username' component='div' className='error-message py-2' />
                        </Box>
                        <Box mt="25px">
                            <div className='form-group'>
                                <input type={showPassword ? 'text' : 'password'} name='password' required />
                                <Typography variant="subtitle1" className='lable-form'
                                    fontWeight={600} component="label" htmlFor='password' mb="5px" >Mật khẩu</Typography>
                                <i
                                    className={`fa-solid fa-eye${showPassword ? '-slash' : ''} icon-password-eye`}
                                    onClick={() => setShowPassword(!showPassword)} // Thay đổi trạng thái của state khi người dùng click
                                ></i>
                            </div>
                            <ErrorMessage name='password' component='div' className='error-message py-2' />
                        </Box>
                        <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                            <Typography
                                component={Link}
                                to="/"
                                fontWeight="500"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'primary.main',
                                }}
                            >
                                Quên mật khẩu ?
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                    {subtitle}
                </Form>
            )}
        </Formik>
    );
};

export default AuthLogin;
