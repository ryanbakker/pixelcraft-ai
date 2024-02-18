import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return <SignIn afterSignInUrl="/dashboard" />;
};

export default SignInPage;
