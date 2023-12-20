import { confirmSignUp } from 'aws-amplify/auth';

export async function handleSignUpConfirmation({ username, confirmationCode }) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode
    });
    console.log('isSignUpComplete', isSignUpComplete)
    console.log('nextStep', nextStep)
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}