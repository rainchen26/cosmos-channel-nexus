
import { useState, useEffect, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIScene {
  id: number;
  title: string;
  src: string;
}

interface AISceneCarouselProps {
  scenes: AIScene[];
  carouselOptions: {
    align: "start";
    dragFree: boolean;
    containScroll: "trimSnaps";
    dragThreshold?: number;
    inViewThreshold?: number;
    skipSnaps?: boolean;
  };
}

const AISceneCarousel = ({ scenes, carouselOptions }: AISceneCarouselProps) => {
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
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight" style={{ color: '#7E69AB' }}>每一帧画面，都是AI留存的时光记忆</h2>
      </div>
      <div className="relative">
        <Carousel 
          className="w-full max-w-7xl mx-auto cursor-grab active:cursor-grabbing" 
          opts={carouselOptions}
          setApi={setApi}
        >
          <CarouselContent className="-ml-4 touch-pan-x">
            {scenes.map((scene) => (
              <CarouselItem key={scene.id} className="pl-4 basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/4 select-none">
                <div className="relative h-[300px]">
                  <img
                    src={scene.src}
                    alt={scene.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
                    draggable="false"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl">
                    <h3 className="text-xl font-bold text-white/90">{scene.title}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
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
        </Carousel>
      </div>
    </section>
  );
};

export default AISceneCarousel;
