import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getListings } from "../services/apiListings";

function Listings() {
  useEffect(function () {
    getListings().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <p>TEST</p>
      <img src="https://uqyfzdetaexqcfhmeluc.supabase.co/storage/v1/object/public/asset-images/cabin_001.jpg" />
    </Row>
  );
}

export default Listings;
