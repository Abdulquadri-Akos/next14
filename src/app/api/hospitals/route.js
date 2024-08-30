import { connectToDB } from "@/lib/connectToDB";
import { Hospital } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDB();
    const hospital = await Hospital.find();
    return NextResponse.json(hospital);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Hospitals!");
  }
};
