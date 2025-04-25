
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface PetStory {
  id: number;
  title: string;
  description: string;
  author: string;
  pet: string;
  image: string;
}

interface PetStoryCarouselProps {
  stories: PetStory[];
  carouselOptions: {
    align: "start";
    dragFree: boolean;
    containScroll: "trimSnaps";
    draggable: boolean;
  };
}

const PetStoryCarousel = ({ stories, carouselOptions }: PetStoryCarouselProps) => {
  return (
    <section className="space-y-10">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-tight" style={{ color: '#7E69AB' }}>
        你分享的每段故事，都在扩建萌尾宇宙
      </h2>
      
      <Carousel className="w-full max-w-7xl mx-auto" opts={carouselOptions}>
        <CarouselContent className="-ml-4">
          {stories.map((story) => (
            <CarouselItem key={story.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="cosmic-card overflow-hidden border-cosmic-accent/20 shadow-lg shadow-cosmic-accent/5 transition-all duration-300 hover:border-cosmic-accent/30 hover:shadow-cosmic-accent/10 cursor-grab active:cursor-grabbing">
                <div className="h-52 relative overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl" style={{ color: '#7E69AB' }}>{story.title}</CardTitle>
                  <CardDescription className="text-cosmic-star/70 text-base">
                    {story.author} 与 {story.pet} 的故事
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cosmic-star/80 line-clamp-3">{story.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="hover:text-[#7E69AB]/90 hover:bg-[#7E69AB]/10"
                  >
                    阅读更多
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default PetStoryCarousel;
