import { ArrowRight } from "lucide-react";
import fixedBackground from "@/assets/general/fixedBackground.webp";

export default function ExploreMajorsSection() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Fixed background image with lowest z-index */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${fixedBackground})`,
          backgroundAttachment: "fixed",
          filter: "brightness(0.8)",
        }}
      />

      {/* Added black overlay with z-index between background and content */}
      <div className="absolute inset-0 bg-black/20 z-[5]" />

      {/* Content overlay with higher z-index */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4">
            <span className="block">
              Explore
              <span className="border-b-4 border-cusYellow"> Majors</span> &
            </span>
            <span className=" mt-2 border-b-4 border-cusYellow inline-block pb-2 ">
              {/*inline-block*/}
              Programs
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white my-6">
            Choose from 5 undergraduate and graduate majors
          </p>

          <button className="bg-cusGreen hover:bg-cusGreenDark text-white py-3 px-6 flex items-center transition-colors duration-300 mt-4">
            <span className="mr-2">View all programs</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
