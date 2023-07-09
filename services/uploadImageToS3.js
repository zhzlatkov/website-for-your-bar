import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export default async function uploadImageToS3(image, productName) {
  const splitedBase64Image = image.split(";base64,");
  const fileExtension = splitedBase64Image[0].split("/").pop();
  const imageType = splitedBase64Image[0].split(":").pop();
  const buffer = Buffer.from(splitedBase64Image.pop(), "base64");
  productName.trim().replace(" ", "%");
  const imagePath = `products/photos/${productName}-${Date.now()}.${fileExtension}`;

  try {
    await upload(buffer, process.env.AWS_BUCKET, imagePath, imageType);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
    console.error(err);
  }
  return "/" + imagePath;
}

async function upload(buffer, bucket, path, contentType) {
  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_REGION,
  });

  const putObject = new PutObjectCommand({
    Bucket: bucket,
    Key: path,
    Body: buffer,
    ContentType: contentType,
  });

  await s3.send(putObject);
}
