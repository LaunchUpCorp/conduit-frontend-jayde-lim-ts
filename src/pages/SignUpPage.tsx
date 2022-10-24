import React from 'react';
import NavBar from '../components/NavBar';
import AuthForm from '../components/AuthForm';

const SignUpPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <AuthForm
        title="Sign Up"
        subtitle="Have an account?"
        fields={["Username", "Email", "Password"]}
        buttonText="Sign Up"
      />
    </div>
  )
}

export default SignUpPage;