import { confirmSignUp } from 'aws-amplify/auth';

export async function handleSignUpConfirmation(prevState, formData) {
  console.log(formData.get('username'))
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username:formData.get('username'),
      confirmationCode:formData.get('code')
    });
    console.log('isSignUpComplete', isSignUpComplete)
    console.log('nextStep', nextStep)
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}