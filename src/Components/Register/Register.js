import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.scss';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      Password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(10, 'Must be 15 characters or less')
      ,
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
      ,
      email: Yup.string().email('Invalid email address').required('Mailinizi düzgün daxil edin'),
      Password: Yup.string()
        .max(9, 'max 16?')
        .required(' Parolu düzgün daxil edin'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='FormContainer-register'>

      <form className='form-register' onSubmit={formik.handleSubmit}>
        <div className='form-text'>
          <h3><b>Create a new account</b></h3>
          <p>It’s quick and easy.</p>
        </div>
        <div className='hrregister'><hr /></div>
        <div className='first-last'>
          <label htmlFor="firstName"></label>
          <input
            className='first-last'
            placeholder='First Name'
            id="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName"></label>
          <input className='first-last' id="lastName" placeholder='Last Name' type="text" {...formik.getFieldProps('lastName')} />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={{ color: "red" }} >{formik.errors.lastName}</div>
          ) : null}
        </div>
        <label htmlFor="email"></label>
        <input id="email" placeholder='Mobile number or email' type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }} >{formik.errors.email}</div>
        ) : null}

        <label htmlFor="Password"></label>
        <input id="Password" placeholder=' New passsword' type="password" {...formik.getFieldProps('Password')} />
        {formik.touched.Password && formik.errors.Password ? (
          <div>
            <div style={{ color: "red" }}>{formik.errors.Password}</div>
          </div>
        ) : null}

        <div className='birthday-text'>
          <h5>Birthday</h5>
        </div>
        <div className='birthday'>
          <select aria-label="Month" name="birthday_month" id="month" title="Month" className='birthday-1' aria-describedby="js_146">
            <option value="1" selected="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>

          <select aria-label="Day" name="birthday_day" id="day" title="Day" className='birthday-1'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select aria-label="Year" name="birthday_year" id="year" title="Year" className='birthday-1'><option value="2023" selected="1">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
          </select>
        </div>
        <div className='birthday-text'>
          <h5>Gender</h5>
        </div>
        <div className='gender'>
          <form action="/action_page.php">
            <div>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">Male</label></div>
            <div>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="css">Female</label></div>
            <div>
              <input type="radio" id="javascript" name="fav_language" value="JavaScript" ></input>
              <label for="javascript">Custom</label>
            </div>


          </form>

        </div>
        <div className='text-submit-bottom'>
          <p>People who use our service may have uploaded your contact information to Facebook.<a href='32'>Learn more.</a>
          </p>

          <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.p</p>
        </div>

        <button className='button-register' type="submit">Sign Up</button>

        <NavLink to={"/"}>Already have an account?</NavLink>
      </form>
    </div>
  );
};
export default Register