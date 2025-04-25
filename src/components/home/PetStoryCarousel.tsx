
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PetStory {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface PetStoryCarouselProps {
  stories: PetStory[];
  carouselOptions: {
    align: "start";
    dragFree: boolean;
    containScroll: "trimSnaps";
    dragThreshold?: number;
    inViewThreshold?: number;
    skipSnaps?: boolean;
  };
}

const PetStoryCarousel = ({ stories, carouselOptions }: PetStoryCarouselProps) => {
  return (
    <section className="space-y-10">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-tight" style={{ color: '#7E69AB' }}>
        你分享的每段故事，都在扩建萌尾宇宙
      </h2>
      
      <div className="relative">
        <Carousel className="w-full max-w-7xl mx-auto select-none" opts={{
          align: "start",
          containScroll: "trimSnaps",
          dragFree: true,
          dragThreshold: 1,
          inViewThreshold: 0.1,
          skipSnaps: true
        }}>
          <CarouselContent className="-ml-4 touch-pan-x">
            {stories.map((story) => (
              <CarouselItem key={story.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 cursor-grab">
                <Link to={story.link}>
                  <Card className="cosmic-card overflow-hidden border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30 hover:shadow-cosmic-accent/10 select-none">
                    <div className="h-52 relative overflow-hidden">
                      <img 
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="absolute bottom-0 p-4 text-white">
                          <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                          <p className="text-sm text-white/80 line-clamp-2">{story.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
          <ArrowRight className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </section>
  );
};

export default PetStoryCarousel;
