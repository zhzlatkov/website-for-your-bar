export default function generatePhotoUrl(image) {
  return `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${image}`;
}
