// import React, { useState } from "react";
// import "./profile.css";

// function ProfileForm({ user }) {
//   // Define state variables to store the updated user details
//   const [firstName, setFirstName] = useState(user.firstname);
//   const [lastName, setLastName] = useState(user.lastname);
//   const [email, setEmail] = useState(user.email);
//   const [password, setPassword] = useState(user.password);

//   // Event handler to update first name
//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   // Event handler to update last name
//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   // Event handler to update email
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   // Event handler to update password
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   // Event handler for form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send updated user details to backend or perform necessary actions
//     console.log("Updated user details:", {
//       firstName,
//       lastName,
//       email,
//       password,
//     });
//   };

//   return (
//     <>
//       <h1>Update your account</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="input-block">
//           <label htmlFor="firstname">First Name:</label>
//           <input
//             type="text"
//             id="firstname"
//             placeholder="First Name"
//             value={firstName}
//             onChange={handleFirstNameChange}
//           />
//         </div>
//         <div className="input-block">
//           <label htmlFor="lastname">Last Name:</label>
//           <input
//             type="text"
//             id="lastname"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={handleLastNameChange}
//           />
//         </div>
//         <div className="input-block">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="input-block">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Confirm</button>
//       </form>
//     </>
//   );
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_USER } from "../actions/types"; // Importer le type d'action UPDATE_USER
import "./profile.css";

function ProfileForm({ user }) {
  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirmClick = (e) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_USER,
      payload: formData,
    });
  };

  return (
    <>
      <h1>Update your account</h1>
      <form>
        <div className="input-block">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-block">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-block">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-block">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={handleConfirmClick}>
          Confirm
        </button>
      </form>
    </>
  );
}

export default ProfileForm;
