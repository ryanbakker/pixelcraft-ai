import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return <SignUp afterSignUpUrl="/dashboard" />;
};

export default SignUpPage;
