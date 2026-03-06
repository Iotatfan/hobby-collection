// cloudinary.ts

export function transformCloudinaryUrl(
  url: string,
  transformations: string
): string {
  if (!url.includes("/upload/")) return url

  return url.replace("/upload/", `/upload/${transformations}/`)
}

export function cloudinarySizes(url: string) {
  return {
    thumb: transformCloudinaryUrl(
      url,
      "w_200,c_limit,c_fill,q_auto,f_auto"
    ),
    cover: transformCloudinaryUrl(
      url,
      "w_480,c_limit,c_fill,q_auto,f_auto"
    ),
    preview: transformCloudinaryUrl(
      url,
      "w_800,c_limit,q_auto,f_auto"
    ),
  }
}