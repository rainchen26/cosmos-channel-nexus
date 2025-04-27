
import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  const [api, setApi] = useState<any>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    onSelect();
    
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="space-y-10">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-tight" style={{ color: '#7E69AB' }}>
        你分享的每段故事，都在扩建萌尾宇宙
      </h2>
      
      <div className="relative">
        <div className="overflow-hidden pb-4">
          <Carousel 
            className="w-full max-w-7xl mx-auto cursor-grab active:cursor-grabbing" 
            opts={carouselOptions}
            setApi={setApi}
          >
            <CarouselContent className="touch-pan-x">
              {stories.map((story) => (
                <CarouselItem key={story.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 select-none">
                  <Link to={story.link}>
                    <div className="overflow-hidden border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30 hover:shadow-cosmic-accent/10">
                      <div className="h-80 relative overflow-hidden">
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
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {canScrollPrev && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md z-10"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </Button>
        )}
        
        {canScrollNext && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md z-10"
            onClick={scrollNext}
          >
            <ArrowRight className="h-6 w-6 text-gray-700" />
          </Button>
        )}
      </div>
    </section>
  );
};

export default PetStoryCarousel;
