import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";

import Spinner from "../../ui/Spinner";
import { getListings } from "../../services/apiListings";
import ListingRow from "./ListingRow";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function ListingTable() {
  const { isLoading, data: listings } = useQuery({
    queryKey: ["listing"],
    queryFn: getListings,
  });
  console.log(listings);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Option</div>
        <div>Size (sqft.)</div>
        <div>
          Ask <HiOutlineCurrencyRupee />
        </div>
        <div>
          Value <HiOutlineCurrencyRupee />
        </div>
      </TableHeader>
      {listings.map((listing) => (
        <ListingRow listing={listing} key={listing.id} />
      ))}
    </Table>
  );
}

export default ListingTable;
