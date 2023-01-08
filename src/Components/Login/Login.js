import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import { NavLink } from 'react-router-dom';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            Password: '',
            email: '',
        },
        validationSchema: Yup.object({

            Password: Yup.string()
                .max(9, 'The password you’ve entered is incorrect. Forgot Password?')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='FormContainer'>

            <form className='Form' onSubmit={formik.handleSubmit}>
                <h3>Log Into Facebook</h3>




                <label htmlFor="email"></label>
                <input id="email" placeholder='Email or phone number' type="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}


                <label htmlFor="Password"></label>
                <input id="Password" placeholder='Passsword' type="password" {...formik.getFieldProps('Password')} />
                {formik.touched.Password && formik.errors.Password ? (
                    <div>
                        <div style={{ color: "red" }}>{formik.errors.Password}</div>
                    </div>
                ) : null}
                <button type="submit">Log In</button>

                <div className='forgot-div'>
                    <p><a href='#'>Forgot account? </a></p>
                    <p><NavLink to={"/register"}>Sign up for Facebook</NavLink></p>
                </div>
            </form>
        </div>
    );
};
export default Login