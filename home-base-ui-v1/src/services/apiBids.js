import supabase from "./supabase";

export async function placeBid({ row_id }) {
  const { data, error } = await supabase
    .from("BidsPerListing")
    .insert([{ listing_row_id: row_id, bidInLakhs: "19000" }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Bid cannot be accepted for this listing.");
  }
  return data;
}
