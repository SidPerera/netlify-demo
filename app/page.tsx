import Banner from "./components/Banner";
import ImageSlider from "./components/ImageSlider";
import { createClient } from "contentful";

export default async function Home() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const response = await client.getEntries({ content_type: "mediaImage" });
  const items = response.items;
  const imageUrls: string[] = response.items
  .map(item => item.fields.imageUrl)
  .filter((url): url is string => typeof url === 'string');

  console.log(JSON.stringify(imageUrls, null, 2));

  return (
    <main>
      <Banner />
      <ImageSlider imageUrls= {imageUrls}/>
    </main>
  );
}
