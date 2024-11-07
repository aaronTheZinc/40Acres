import { getAllProperties } from "@/server/db/property";
import PropertiesSearchView from "../components/views/listings/explore";

export default async function ExplorePage() {
  const properties = await getAllProperties();
  return (
    <main>
      <PropertiesSearchView properties={properties} />
    </main>
  );
}
