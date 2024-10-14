import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const videoFile = formData.get('video');
    const coverImage = formData.get('coverImage');
    const animeTitle = formData.get('animeTitle').trim();
    const episodeTitle = formData.get('episodeTitle').trim();
    const episodeDescription = formData.get('episodeDescription').trim();
    const coverImageDescription = formData.get('coverImageDescription')?.trim(); // Added cover image description

    // Convert Blobs to Buffers
    const videoBuffer = new Uint8Array(await videoFile.arrayBuffer());
    const coverBuffer = coverImage ? new Uint8Array(await coverImage.arrayBuffer()) : null;

    const folderPath = `anime/${animeTitle}`;

    // Upload cover image if provided
    if (coverBuffer) {
      await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload_stream(
          {
            resource_type: 'image',
            folder: folderPath,
            public_id:'cover',
            context: coverImageDescription ? `description=${coverImageDescription}` : '', // Adding cover image description
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        ).end(coverBuffer);
      });
    }

    // Upload video file
    const videoResult = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream(
        {
          resource_type: 'video',
          folder: folderPath,
          public_id: episodeTitle, // Use episode title as public ID
          context: `description=${episodeDescription}`, // Adding the episode description
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      ).end(videoBuffer);
    });

    return new Response(JSON.stringify({ success: true, data: videoResult }), { status: 200 });
  } catch (error) {
    console.error('Error uploading files:', error);
    return new Response(JSON.stringify({ success: false, message: 'Video upload failed' }), { status: 500 });
  }
};