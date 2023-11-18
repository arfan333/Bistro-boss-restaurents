/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../PROVIDERS/AUTH/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../customsHooks/useAxiosInPublic/useAxiosPublic";
import SocialLogin from "../../components/SocialLoginPage/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          // console.log("user profile updated");
          // create user entry in database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added in database");
              reset();
              Swal.fire({
                title: "Reset form",
                width: 400,
                padding: "2em",
                color: "#716add",
                backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat
              `,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  //   console.log(watch("example"))
  return (
    <>
      <Helmet>
        <title>BistroBoss...|| SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#151515]">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-[#D1A054]">This field is required</span>
                )}
              </div>
              {/* add photo url part in form section */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  {...register("photoUrl", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-[#D1A054]">Upload Valid Url</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here email"
                  {...register("email", { required: true })}
                  name="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-[#D1A054]">This email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                  })}
                  name="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-[#D1A054]">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-[#D1A054]">
                    Password must be 6 Characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-[#D1A054]">Password have20 Characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-[#D1A054]">
                    Password haveat least one digit,one lowercase & uppercase
                    letter
                  </p>
                )}
                {/* {errors.password && <span className="text-[#D1A054]">Password must be 6 required</span>} */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-[#D1A054] text-[20px] font-medium text-center px-6 mb-2">
              Already registered? <Link to={"/login"}>Go to log in</Link>
            </p>
            <div className="divider divider-warning"></div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
