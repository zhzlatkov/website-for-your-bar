export default function generateProductPhotoUrl(photoPath) {
  return `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${photoPath}`;
}
