import { SignUpForm } from '../../components/SignUpForm';

const SignUp = ({}) => {
  return (
    <div className="my-5 flex flex-col justify-center items-center">
      <h1 className="scroll-m-20 text-5xl font-semibold tracking-tight text-center">Registrace</h1>
      <div className="mt-10">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
