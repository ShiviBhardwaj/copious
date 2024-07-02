# Home Base requirements

- Authentication

  - Customer and staff facing application.
  - Customers need to be able to login and authorized to view content based on the profile.
  - Staff need to be able to login to perform admin access.
    - Staff member should be able to impersonate any customer or colleague.
  - Customers should be able to browse application as GUEST or USER.

- Customer Preferences

  - Customer should be able to select the location which they are interested in to explore.
  - Landing page should provide options to select location as the location is the primary context which will drive entire application.
  - User preferences can be captured as the time of signing up.

- Customer Dashboard

  - Home page will display home buy options to Customer based on demand of that particular property.
  - Home page will also display charts to show the property trends citywise.
  - Home page should display charts to show property trends for top 10 properties as a carousel and option to view more.
  - Home page should display navigation bar with links for subpages based on user preferences.
  - Recent activity
  - Any macro level news for that area driving property valuation

- Add property Customer/Staff

  - Users should be able to add property for sale.
  - User should be able to request valuation of their property.
  - User should be able to schedule the onsite property visit for more accurate valuation.
  - User should be able to provide all property details along with asking price.
  - Asking price is different than valuation price.
  - Provide bid

- Valuation Calculator

  - Ability to select your property and valuate and see trend of your property in real time

- Search
  - Property cards with Photo/Basic details/Rating/Valuation price/Add to fav/Bid/View Details button
  - Show property status - View/On Sale/Sold/Ready to bid/Bid closed/Bid open
  - Show property demand (recent bids)
  - Search based on pincode on the map

## Pages (Customer)

| Page Title                           | URL Path   |
| ------------------------------------ | ---------- |
| Landing                              | /locations |
| Dashboard (Logged-in/Guest)          | /dashboard |
| Login page                           | /login     |
| Signup page                          | /users     |
| Listing/Search page - Property cards | /listings  |
| Add property                         | /assets    |
| Valuate property                     | /valuation |
| View property details                | /listing   |

## Pages (Staff)

| Page Title                                         | URL Path         |
| -------------------------------------------------- | ---------------- |
| Login page                                         | /login           |
| Search page                                        | /listings        |
| Manage home-base dashboard                         | /dashboard/admin |
| Manage Valuation criteria                          | /valuation/admin |
| Manage location/city/sector and valuation criteria | /location/admin  |
| Manage listing                                     | /listings/admin  |
| Analytics on location/property/customer activity   | /analytics       |

## Domains/Tables

| Table              | URL                                |
| ------------------ | ---------------------------------- |
| Location           | /locations                         |
| Listings           | /listings                          |
| ListingPerLocation | /listings/:location                |
| ListingPerUser     | /listings/:userId                  |
| RegionPerLocation  | /locations/:location/admin         |
| RegionMetaData     | /valuation/:location/:region/admin |
| ValuationPerRegion | /valuation                         |
| Settings           | /settings                          |
| Users              | /users                             |

## Technology decisions

| Topic                   | Technology        |
| ----------------------- | ----------------- |
| Routing                 | React Router      |
| Styling                 | Styled components |
| Remote state management | React Query       |
| UI state management     | Context API       |
| Form management         | React Hook Form   |

Supabase
shivibh@gmail.com
9MI2Oa8hhqfwQ7qr
