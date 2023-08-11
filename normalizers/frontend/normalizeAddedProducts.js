import normalizeProduct from "../backend/normalizeProduct";

export default function normalizeAddedProducts(addedProducts = []) {
  const sanitizedAddedProducts = addedProducts.map((product) =>
    normalizeProduct(product)
  );
  return sanitizedAddedProducts;
}
