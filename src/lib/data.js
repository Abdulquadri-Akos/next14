// TEMPORARY DATA

import { Hospital } from "./models";
import { connectToDB } from "./connectToDB";
import { unstable_noStore as noStore } from "next/cache";

export const getHospitals = async () => {
  try {
    await connectToDB();
    const hospital = await Hospital.find();

    return hospital;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch hospital!");
  }
};
