import Link from "next/link";
import { Medal } from "lucide-react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { Button } from "../../components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/LibreFranklin-Medium.woff",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex item-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="w-6 h-6 mr-2" />
          No 1 Task managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Task APP
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 max-w-xs mt-4 md:max-w-2xl text-center mx-auto ",
          textFont.className
        )}
      >
        Colloborate, mange projects, and reach new productivity peaks. From high
        rises to the home office, the way your team works is unique - accomplish
        it all with Task APP
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Task APP get free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
