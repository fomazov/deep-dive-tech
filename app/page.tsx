import Image from "next/image";

export default function Home() {
  return (
    <div className="m-auto">
      <Image
        alt="Marine creatures and oceanic plants"
        className="max-w-full max-h-full"
        height={500}
        src="/marine-creatures-and-oceanic-plants.png"
        width={800}
      />
    </div>
  );
}
