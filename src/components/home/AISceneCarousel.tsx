
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

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
    draggable: boolean;
    dragThreshold?: number;
    inViewThreshold?: number;
    skipSnaps?: boolean;
  };
}

const AISceneCarousel = ({ scenes, carouselOptions }: AISceneCarouselProps) => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight" style={{ color: '#7E69AB' }}>每一帧画面，都是AI留存的时光记忆</h2>
      </div>
      <div className="relative">
        <Carousel className="w-full max-w-7xl mx-auto" opts={{
          align: "start",
          containScroll: "trimSnaps",
          dragFree: true,
          draggable: true,
          dragThreshold: 1,
          inViewThreshold: 0.1,
          skipSnaps: true
        }}>
          <CarouselContent className="-ml-4">
            {scenes.map((scene) => (
              <CarouselItem key={scene.id} className="pl-4 basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/4 cursor-grab">
                <div className="relative h-[300px] select-none">
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
        </Carousel>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
          <ArrowRight className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </section>
  );
};

export default AISceneCarousel;
