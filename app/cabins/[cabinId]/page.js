import Spinner from "@/app/_components/Spinner";
import Test from "@/app/_components/Test";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Cabin from "@/app/_components/Cabin";
import { Suspense } from "react";

// PLACEHOLDER DATA

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return {
    title: `Cabin ${name}`,
  };
}
export async function generateStaticParams() {
  const cabins = await getCabins();
  const id = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return id;
}
export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <>
      <div className="xl:max-w-6xl mx-auto mt-8">
        <Cabin cabin={cabin} />
        <div>
          <h2 className="text-4xl xl:text-5xl font-semibold text-center mb-7">
            Reserve {cabin.name} today. Pay on arrival.
          </h2>
          <Suspense fallback={<Spinner />}>
            <Test cabin={cabin} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
