import Image from "next/image";

export default function Index() {
  return (
    <main className="flex flex-1 flex-col m-auto max-w-2xl w-full items-left">
      <div className="m-auto">
        <Image
          alt="Marine creatures"
          className="max-w-full max-h-full"
          height={500}
          src="/marine-creatures.png"
          width={800}
        />
      </div>
    </main>
  );
}
