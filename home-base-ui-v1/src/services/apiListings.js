import supabase from "./supabase";

export async function getListings() {
  let { data, error } = await supabase.from("Listings").select("*");

  if (error) {
    console.log(error);
    throw new Error("Listings could not be loaded");
  }

  return data;
}
