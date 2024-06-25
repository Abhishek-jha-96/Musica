import CardElm from "../shared/cardelm";
import NavBar from "@/components/NavBar";
import Cover from "@/components/Cover";


export default function Music() {
  return (
    <div className="w-full h-full px-5">
      <NavBar />
      <div>
        <div className="w-full px-8 ">
          <Cover />
        </div>
      </div>
      <h1 className="py-5 font-mono text-lg font-semibold">Top 3 Tracks</h1>
      <div className="w-full bg-white px-10 flex items-center py-2">
        <CardElm />
      </div>
    </div>
  );
}
