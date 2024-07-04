// import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ListingTable from "../features/listings/ListingTable";
// import { getListings } from "../services/apiListings";

function Listings() {
  // useEffect(function () {
  //   getListings().then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Options</Heading>
        <p>TEST</p>
        {/* <img src="https://uqyfzdetaexqcfhmeluc.supabase.co/storage/v1/object/public/asset-images/cabin_001.jpg" /> */}
      </Row>

      <Row>
        <ListingTable />
      </Row>
    </>
  );
}

export default Listings;
