import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Pagination from "../../../components/Pagination/Pagination";
import "./Registration.css";
import { auth, storage } from "../../../config/firbase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Registration = () => {
  const navigate = useNavigate();
  const [imgURL, setImgURL] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      img: Yup.mixed().required("Image is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        const user = userCredential.user;

        //resetting form
        resetForm();

        // Upload image
        if (values.img) {
          const storageRef = storage;
          const imageRef = ref(
            storageRef,
            `userImages/${user.uid}/profile${user.uid}.jpg`
          );

          // Uploading the image
          await uploadBytes(imageRef, values.img);

          // Getting the download URL
          const imgURL = await getDownloadURL(imageRef);
          console.log(imgURL);

          // Setting the download URL in state
          setImgURL(imgURL);
        }

        // Updating user profile
        await updateProfile(user, {
          displayName: values.username,
          photoURL: imgURL, // Use the obtained download URL
        });

        // Reloading the user to get the updated information
        await user.reload();
        const updatedUser = auth.currentUser;

        toast.success("Registration successful!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        navigate("/login");
      } catch (error) {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
  });

  return (
    <>
      <div className="registration-container">
        <form onSubmit={formik.handleSubmit} className="registration-form">
          <h1>Register</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <div style={{ color: "red" }}>{formik.errors.username}</div>
            )}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
          </div>

          <div>
            <label htmlFor="ConfirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="ConfirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            <input
              type="file"
              onChange={(event) => {
                formik.setFieldValue("img", event.currentTarget.files[0]);
              }}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div style={{ color: "red" }}>
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          <button type="submit">Register</button>
        </form>
        <div className="login_text">
          <p>Have an Account?</p>
          <a onClick={() => navigate("/login")}>Log In</a>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Registration;
