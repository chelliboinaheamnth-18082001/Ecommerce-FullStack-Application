import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductsListing";
export default function Home() {
  return (
    <div className="home-container">
      <PageHeading title="Explore The Latest Mobiles">
        One Stop Shop For All Your Mobile Needs AND Gadgets Make Your Life
        Easier
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
