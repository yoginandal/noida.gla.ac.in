import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

export function EventsSection({ title, subtitle, events }) {
  return (
    <section className="py-24 background-gradient relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto text-center mb-16">
          <Badge className="mb-4 bg-cusGreen text-white">{subtitle}</Badge>
          <Heading level={2} className="text-center text-cusBlue">
            {title}
          </Heading>
          <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary hover:bg-primary">
                    <Calendar className="h-3 w-3 mr-1" />
                    {event.date}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-cusGreen text-white hover:bg-cusGreen/80 group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="gap-2 bg-transparent hover:bg-transparent text-cusBlueLight border-cusGreen border-2 group"
          >
            View All Events
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
