import Image from "next/image";

export default function Home() {
  // Assuming your navbar has a fixed height, e.g., 64px
  return (
    <section
      className="flex justify-around items-center"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      <div className="left">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Taily</h1>
          <p className="text-lg mb-4">
            A free and fast URL shortener. Shorten your links with ease!
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="/generate"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="right">
        <Image
          src="https://i.postimg.cc/yd27w8hb/images-removebg-preview.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
