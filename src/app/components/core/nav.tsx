import Link from "next/link";
import Badge from "../ui/badge";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between items-center w-full z-50">
      <Link href="/" className="text-[2rem]">
        Binspire
      </Link>
      <Badge className="p-4 glass rounded-md flex flex-row items-center gap-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
        </span>
        Still on development
      </Badge>
    </nav>
  );
}
