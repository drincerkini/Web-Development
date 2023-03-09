import {
  createUserWithEmailAndPassword,
  getAuth,
  // signOut,
  updateProfile,
} from "firebase/auth";

async function signupUser(payload) {
  const { name, surname, address, email, password } = payload;
  const auth = getAuth();
  const result = await createUserWithEmailAndPassword(
    auth,
    // name,
    // surname,
    // address,
    email,
    password
  );

  await updateProfile(result.user, {
    displayName: `${name} ${surname}`,
    address: address,
  });
  // await signOut(auth);
}

export default signupUser;
