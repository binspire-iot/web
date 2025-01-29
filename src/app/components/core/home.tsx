import Image from "next/image";
import Button from "../ui/button";
import Nav from "./nav";

export default function Home() {
  return (
    <main className="text-white p-4 flex flex-col w-full h-screen justify-between">
      <Nav />
      <div className="flex flex-col gap-4">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <p className="text-[3rem] w-full leading-[3rem]">
          A Pathway to Environmental Sustainability.
        </p>
        <div className="flex flex-row gap-3 items-center">
          <Button className="bg-accent py-4 px-8 rounded-md">Newsletter</Button>
          <Button className="glass py-4 px-8 rounded-md">About</Button>
        </div>
      </div>
      <div className="fixed left-0 z-0">
        <Image src="/gradient.png" alt="gradient" width={1000} height={1000} />
      </div>
    </main>
  );
}
