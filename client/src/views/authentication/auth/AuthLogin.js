import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
const AuthLogin = ({ title, subtitle, subtext }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [username,setUserName]=useState('')
    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <Stack>
                <Box>
                    <div className='form-group'>
                        <input type='text' required />
                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='username' mb="5px">Tên đăng nhập</Typography>
                    </div>
                </Box>
                <Box mt="25px">
                    <div className='form-group'>
                        <input type={showPassword ? 'text' : 'password'} required />
                        <Typography variant="subtitle1" className='lable-form'
                            fontWeight={600} component="label" htmlFor='password' mb="5px" >Mật khẩu</Typography>
                        <i
                            className={`fa-solid fa-eye${showPassword ? '-slash' : ''} icon-password-eye`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>
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
                    component={Link}
                    to="/"
                    type="submit"
                >
                    Đăng nhập
                </Button>
            </Box>
            {subtitle}
        </>
    );
}

export default AuthLogin;
