/**
 *
 * SignUp
 *
 */
import React, { useState } from 'react';

// components
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Privacy from '../Privacy';

// svg
import Facebook from '../svg/facebook.svg';
import Google from '../svg/google.svg';
import HiddenPass from '../svg/eye-slash-solid.svg';

// styles
import Styles from './styles/SignUp.module.scss';

export const SignUp: React.FunctionComponent = () => {
  const [showPrivacy, setShowPrivacy] = useState<Boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  return (
    <>
      {showPrivacy ? (
        <Privacy />
      ) : (
        <form>
          <p className={Styles.title}>Sign Up</p>
          <div className="mb-3">
            <Button hasIcon={<Facebook />} theme="default">
              Sign in with Facebook
            </Button>
          </div>
          <div className="mb-3">
            <Button hasIcon={<Google />} theme="default">
              Sign in with Google
            </Button>
          </div>

          <div className={Styles.divider}>or</div>
          <div className=" mb-5 mt-4">
            <Input value={name} change={setName} label="Full Name" type="text" id="name" />
          </div>
          <div className="mb-5 ">
            <Input value={email} change={setEmail} label="Email" type="text" id="email" />
          </div>
          <div className="mb-5 ">
            <Input
              value={password}
              change={setPassword}
              label="Password"
              type="Password"
              hasIcon={<HiddenPass />}
              id="pass"
            />
          </div>
          <div>
            <Input
              value={passwordConfirm}
              change={setPasswordConfirm}
              label="Confirm Password"
              type="Password"
              hasIcon={<HiddenPass />}
              id="confirmpass"
            />
          </div>
          <div className="mb-4 mt-4" onClick={() => setShowPrivacy(true)}>
            <Button theme="primary">Sign Up</Button>
          </div>
        </form>
      )}
    </>
  );
};

export default SignUp;
