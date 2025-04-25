
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
  };
}

const AISceneCarousel = ({ scenes, carouselOptions }: AISceneCarouselProps) => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight" style={{ color: '#7E69AB' }}>每一帧画面，都是AI留存的时光记忆</h2>
      </div>
      <Carousel className="w-full max-w-7xl mx-auto" opts={carouselOptions}>
        <CarouselContent className="-ml-4">
          {scenes.map((scene) => (
            <CarouselItem key={scene.id} className="pl-4 basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/4">
              <div className="relative h-[300px] group cursor-grab active:cursor-grabbing">
                <img
                  src={scene.src}
                  alt={scene.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
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
    </section>
  );
};

export default AISceneCarousel;
