export default function generateProductPhotoUrl(product) {
  return `https://s3-${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_BUCKET}/${product.photoPath}`;
}
