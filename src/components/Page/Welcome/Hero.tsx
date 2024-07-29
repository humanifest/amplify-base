export default function Hero() {
  return (
    <header className="relative h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50">
        {/* Dark overlay */}
      </div>

      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-5xl font-bold mb-4">
          Transform Your Business with Expert Software Solutions
        </h1>
        <p className="text-2xl mb-8">
          We provide cutting-edge software consulting services to help you
          achieve your business goals.
        </p>
      </div>
    </header>
  );
}
