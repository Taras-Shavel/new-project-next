import { Header, NavBar, Overview } from "@/components";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[220px]  hidden lg:block">
        <NavBar />
      </div>
      <div className="flex-grow w-full lg:w-auto relative ">
        <Header />
        <Overview />
      </div>
    </div>

  );
}
