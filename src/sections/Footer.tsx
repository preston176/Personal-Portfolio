import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
export const Footer = () => {


  return <footer>

    <div className="container">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center">
        <div className="text-white/90">&copy;{new Date().getFullYear()}. Have a nice {days[new Date().getUTCDay()]} {":)"}</div>
        <div>
          <nav>
            <Link className="inline-flex items-center gap-1.5" href={"https://codewithpres.hashnode.dev/"}><span>Hashnode</span> <ArrowUpRightIcon /></Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
          </nav>
        </div>
      </div>
    </div>
  </footer>;
};
