/**
 *
 * SignIn
 *
 */
import React, { useState } from 'react';

// components
import Button from '../../../components/Button';
import Input from '../../../components/Input';

// svg
import Facebook from '../svg/facebook.svg';
import Google from '../svg/google.svg';
import HiddenPass from '../svg/eye-slash-solid.svg';

// styles
import Styles from './styles/SignIn.module.scss';

export const SignIn: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <form className={Styles.form}>
        <p className={Styles.title}>Sign In</p>
        <div className="mb-lg-3 mb-2">
          <Button hasIcon={<Facebook />} theme="default">
            Sign in with Facebook
          </Button>
        </div>
        <div className="mb-lg-3 mb-2">
          <Button hasIcon={<Google />} theme="default">
            Sign in with Google
          </Button>
        </div>

        <div className={Styles.divider}>or</div>
        <div className="mb-5 mt-5 ">
          <Input change={setEmail} value={email} label="Email Address" type="text" id="email" />
        </div>
        <div>
          <Input
            change={setPassword}
            value={password}
            label="Password"
            type="Password"
            hasIcon={<HiddenPass />}
            id="password"
          />
        </div>
        <div className="mb-lg-4 mt-lg-4 mb-1 mt-5 h-50 d-flex align-items-end">
          <Button theme="primary">Sign in</Button>
        </div>

        <a href="/forgotPassword" className={Styles.forgotPass}>
          Forgot Password?
        </a>
      </form>
    </>
  );
};
export default SignIn;
