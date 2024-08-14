import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div>
        <Image
          className="bg-white rounded-full p-1 w-24 h-24 bg-gradient-to-r from-green-600 via-blu to-pink-500 "
          src="/logo.webp"
          width={96}
          height={96}
          alt="Logo"
        />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold text-gray-800">WhatsApp</p>
      </div>
    </div>
  );
}
