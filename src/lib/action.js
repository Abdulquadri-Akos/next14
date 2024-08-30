"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Hospital, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const newHospital = async (previousState, formData) => {
  // Let use this method of destructuring the formData
  const { hospitalName, address, contact } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Hospital({
      hospitalName,
      address,
      contact,
    });

    await newPost.save();
    console.log("saved Hospital to database");
    // To update the blog page instantly after adding a new post
    // we can use the revalidate option
    revalidatePath("/hospitals");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  "use server";

  // await signIn("github", { redirectTo: "/" });

  await signIn("github");
};

export const handleGithubLogout = async () => {
  "use server";
  await signOut();
};

export const handleWithGoogle = async () => {
  "use server";

  await signIn("google", { redirectTo: "/" });
};

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doSocialLogin(formData) {
  "use server";
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/" });
}

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match!" };

    // throw new Error("Passwords do not match!");
  }
  try {
    connectToDB();
    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exist" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to database");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", {
      username,
      password,
    });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username and password!" };
    }
    throw error;
  }
};
