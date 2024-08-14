import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="bg-purple-700 text-green-50 h-full">Hello whatsapp</h1>
      <Button variant={"ghost"}>Send</Button>
    </div>
  );
}
