// import { useState, useEffect } from "react";
// import './App.css';
// import { db } from "./firebase-config";
// import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

// function App() {
//   const [newName, setNewName] = useState("");
//   const [newEmail, setNewEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");


//   const [users, setUser] = useState([]);
//   const [specUsers, setSpecUsers] = useState([]);
//   const usersCollectionRef = collection(db, "user");

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     }

//     const getSpecUsers = async () => {
//       const q = query(usersCollectionRef, where('email', '==', 'limzifeng0903@gmail.com'));

//       const data = await getDocs(q);
//       setSpecUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     }

//     getUsers();
//     getSpecUsers();
//   }, []);

//   const createUser = async () => {
//     await addDoc(usersCollectionRef, { name: newName, email: newEmail, password: newPassword })
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline text-gray-300">
//         Hello world!
//       </h1>
//       <input
//         placeholder="Name..."
//         onChange={(event) => {
//           setNewName(event.target.value);
//         }}
//       />
//       <input
//         placeholder="Email..."
//         onChange={(event) => {
//           setNewEmail(event.target.value);
//         }}
//       />
//       <input
//         placeholder="Password..."
//         onChange={(event) => {
//           setNewPassword(event.target.value);
//         }}
//       />
//       <button type="button" onClick={() => createUser()}>
//         create new user
//       </button>
//       {users.map(user => (
//         <>
//           <div>
//             Name: {user.name}
//           </div>
//           <div>
//             Email: {user.email}
//           </div>
//         </>
//       ))}
//       {specUsers.map(user => (
//         <>
//           <div>
//             Name: {user.name}
//           </div>
//           <div>
//             Email: {user.email}
//           </div>
//         </>
//       ))}
//     </div>

//   );
// }

// export default App;
