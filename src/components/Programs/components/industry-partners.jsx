import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import IconMarquee from "@/components/main/IconMarquee";
import { TextAnimate } from "@/components/magicui/text-animate";
import GridBackground from "@/components/ui/GridBackground";
export function IndustryPartners({ title, subtitle, icons }) {
  return (
    <section className="py-16 container mx-auto px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="mb-4 bg-cusSecondary text-cusText">{subtitle}</Badge>
        <Heading level={2} className="text-center text-cusText">
          <TextAnimate
            as="span"
            by="word"
            delay={0.2}
            duration={0.5}
            animation="slideUp"
            className="inline-flex flex-wrap"
          >
            {title}
          </TextAnimate>
        </Heading>
        <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
        <div className="mt-10">
          <IconMarquee icons={icons} />
        </div>
      </div>
    </section>
  );
}
