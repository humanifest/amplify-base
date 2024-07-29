import { styleBackgroundImage } from "@/src/utils";
import Hero from "./Hero";
import Sections from "./Sections";
import heroImage from "@/src/assets/images/hero-image.jpg";

export default function Welcome() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={styleBackgroundImage(heroImage)}
    >
      <Hero />
      <Sections />
    </div>
  );
}
