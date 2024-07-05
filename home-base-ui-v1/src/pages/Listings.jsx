// import { useEffect } from "react";
import { useState } from "react";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import ListingTable from "../features/listings/ListingTable";
import ListingForm from "../features/listings/CreateListingForm";

function Listings() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Listings</Heading>
        <p>Filter/Sort</p>
        {/* <img src="https://uqyfzdetaexqcfhmeluc.supabase.co/storage/v1/object/public/asset-images/cabin_001.jpg" /> */}
      </Row>

      <Row>
        <ListingTable />
        <Button onClick={() => setShowForm(!showForm)}>Add new listing</Button>
        {showForm && <ListingForm />}
      </Row>
    </>
  );
}

export default Listings;
