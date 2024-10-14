import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'dne38mnjz',
  api_key: '412794596396593',
  api_secret: 'SyoRXUsUvEs1tEc4O4U2hrJGovc',
});

export const GET = async () => {
  try {
    // Fetch all subfolders under the 'anime' folder
    const folders = await cloudinary.v2.api.sub_folders('anime_cover');

    // Fetch anime data for each folder
    const animeDataPromises = folders.folders.map(async (folder) => {
      try {
        const animeTitle = folder.name;

        // Fetch cover image and its description
        const coverImageRes = await cloudinary.v2.api.resources({
          type: 'upload',
          prefix: `anime_cover/${animeTitle}/cover`,
          resource_type: 'image',
          max_results: 1,
          context: true, // Ensure context is fetched
        });

        const coverImage = coverImageRes.resources[0]?.secure_url || '';
        const coverImageDescription = coverImageRes.resources[0]?.context?.custom?.description || 'No description available';

        // Fetch all video episodes and their descriptions
        const resources = await cloudinary.v2.api.resources({
          type: 'upload',
          prefix: `anime_cover/${animeTitle}`,
          resource_type: 'video',
          context: true, // Ensure context is fetched
        });

        const episodes = resources.resources
          .filter((ep) => !ep.public_id.includes('cover'))
          .map((ep) => ({
            title: ep.public_id.split('/').pop(),
            url: ep.secure_url,
            episodeDescription: ep.context?.custom?.description || 'No description available',
          }));

        return {
          animeTitle,
          coverImage,
          coverImageDescription,
          episodes,
        };
      } catch (error) {
        console.error(`Error processing folder ${folder.name}:`, error);
        return null; // Skip on error
      }
    });

    const animeData = (await Promise.all(animeDataPromises)).filter(Boolean);

    return new Response(JSON.stringify({ success: true, data: animeData }), { status: 200 });
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to fetch anime data' }),
      { status: 500 }
    );
  }
};
