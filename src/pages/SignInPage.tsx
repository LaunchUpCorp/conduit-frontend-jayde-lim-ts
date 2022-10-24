import React from 'react';
import NavBar from '../components/NavBar';
import AuthForm from '../components/AuthForm';

const SignInPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <AuthForm
        title="Sign In"
        subtitle="Need an account?" 
        fields={['Email', 'Password']}
        buttonText="Sign In"
      />
    </div>
  )
}

export default SignInPage;