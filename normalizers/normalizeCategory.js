export default function normalizeCategory(category) {
  let sanitizedCategory = {
    category: {
      name: String(category.category.name).trim().toLowerCase(),
      shortDescription: String(category.category.shortDescription).trim(),
      status: Boolean(category.category.status),
      photoPath: String(category.category.photoPath).trim().toLowerCase(),
    },
    image: category.image,
  };
  if (category.image) {
    sanitizedCategory.image = String(category.image).trim();
  }
  return sanitizedCategory;
}
