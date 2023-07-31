export default function normalizeCategory(category = null) {
  const sanitizedCategory = {
    category_name: category ? String(category.name).trim().toLowerCase() : "",
    photo: category ? String(category.image).trim() : "",
    short_description: category ? String(category.shortDescription).trim() : "",
    status: category ? Boolean(category.status) : false,
  };
  return sanitizedCategory;
}
