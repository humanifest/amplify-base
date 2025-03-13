export default function Hero() {
  return (
    <header className="relative h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50">
        {/* Dark overlay */}
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold">
          Transform Your Business with Expert Software Solutions
        </h1>
        <p className="mb-8 text-2xl">
          We provide cutting-edge software consulting services to help you
          achieve your business goals.
        </p>
      </div>
    </header>
  );
}
