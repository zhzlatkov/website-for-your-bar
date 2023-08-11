export default function normalizeCategory(category = null) {
  const sanitizedCategory = {
    id: category ? Number(category.id) : undefined,
    category_name: category ? String(category.name).trim().toLowerCase() : "",
    photo: category ? String(category.image).trim() : "",
    short_description: category ? String(category.shortDescription).trim() : "",
    status: category ? Boolean(category.status) : false,
  };
  return sanitizedCategory;
}
