import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post(
      "http://localhost:5000/api/register-user",
      data
    );
    if (response.status === 200) {
      console.log(response.data);
      navigate("/login");
    } else {
      alert("register failed");
    }
  };

  return (
    <div className="w-full h-dvh">
      <div className="w-10/12 md:w-8/12 lg:w-6/12 h-full mx-auto flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-10/12 lg:w-8/12 mx-auto h-full flex flex-col items-start justify-center space-y-4"
        >
          <div className="w-full flex justify-center">
            <p className="text-3xl font-montserrat">Register</p>
          </div>
          <div className="w-full">
            <label>First name</label>
            <input
              id="first_name"
              {...register("first_name", {
                maxLength: 20,
                minLength: 3,
                required: "fill this field",
              })}
              className="h-10 w-full bg-primary/10 focus:outline-none tracking-widest text-primary pl-2"
              type="text"
            />
            <p className="text-red bg-red/5 text-sm">
              {errors.first_name?.message}
            </p>
          </div>
          <div className="w-full">
            <label>Last name</label>
            <input
              id="last_name"
              {...register("last_name", {
                maxLength: 20,
                minLength: 3,
                required: "fill this field",
              })}
              className="h-10 w-full bg-primary/10 focus:outline-none tracking-widest text-primary pl-2"
              type="text"
            />
            <p className="text-red bg-red/5 text-sm">
              {errors.last_name?.message}
            </p>
          </div>
          <div className="w-full">
            <label>Username</label>
            <input
              id="username"
              {...register("username", {
                maxLength: 20,
                minLength: 3,
                required: "fill this field",
              })}
              className="h-10 w-full bg-primary/10 focus:outline-none tracking-widest text-primary pl-2"
              type="text"
            />
            <p className="text-red bg-red/5 text-sm">
              {errors.username?.message}
            </p>
          </div>
          <div className="w-full">
            <label>Password</label>
            <input
              id="password"
              type="password"
              {...register("password", {
                maxLength: 20,
                minLength: 3,
                required: "fill this field",
              })}
              className="pr-4 h-10 w-full bg-primary/10 focus:outline-none tracking-widest text-primary pl-2"
            />
            <p className="text-red bg-red/5 text-sm">
              {errors.password?.message}
            </p>
          </div>
          <div className="w-full mt-4">
            <button
              disabled={isSubmitting}
              type="submit"
              className={` ${
                isSubmitting && "bg-secondary/70"
              } w-full bg-secondary text-white  px-4 py-2 rounded`}
            >
              Submit
            </button>
          </div>
          <div className="mt-4 w-full flex justify-center">
            <Link className="text-primary underline" to="/login">
              Already have an account? Login.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
