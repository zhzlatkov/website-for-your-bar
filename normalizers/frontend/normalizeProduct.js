export default function normalizeProduct(product = null) {
  const sanitizedProduct = {
    product_name: product ? String(product.name).trim().toLowerCase() : "",
    price: product ? Number(product.price) : 0,
    quantity: product ? Number(product.quantity) : 0,
    quantity_type: product
      ? String(product.quantityType).trim().toLowerCase()
      : "",
    short_description: product ? String(product.shortDesciption).trim() : "",
    long_description: product ? String(product.longDescription).trim() : "",
    category: product ? Number(product.categoryId) : 0,
    status: product ? Bolean(product.status) : false,
    photo: product ? String(product.photo).trim().toLowerCase() : "",
  };
  return sanitizedProduct;
}
