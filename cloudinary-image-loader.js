// export default function cloudinaryLoader({ src, width, height }) {
//   const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

//   const isLocal = src.startsWith("/");
//   const isSupabaseURL = src.includes("supabase");
//   const isCloudinaryPath = !src.includes("http");

//   // Set default height if not provided (e.g., 77:128 aspect ratio for a logo)
//   const calculatedHeight = height || Math.round(width * (77 / 128));

//   const params = [
//     "f_auto",
//     "q_auto",
//     `w_${width}`,
//     `h_${calculatedHeight}`,
//     "c_fit",
//   ];

//   if (isLocal) return src;

//   if (isSupabaseURL) {
//     const encodedSrc = encodeURIComponent(src);
//     return `https://res.cloudinary.com/${cloudName}/image/fetch/${params.join(",")}/${encodedSrc}`;
//   }

//   if (isCloudinaryPath) {
//     return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(",")}/${src}`;
//   }

//   return src;
// }
