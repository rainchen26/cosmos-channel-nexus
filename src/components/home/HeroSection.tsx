
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden">
        <img 
          src="/lovable-uploads/0d56e295-4a6c-4c22-976f-e7ae357f9166.png" 
          alt="科技感女孩与数字猫的太空幻想场景" 
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white text-center px-4 tracking-tight drop-shadow-lg">
            萌尾时空｜以AI之名，让爱永存
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90 text-center px-4 font-light drop-shadow-md">
            让每一个AI创作都成为永恒的情感记忆
          </p>
          <Button 
            className="bg-cosmic-highlight hover:bg-cosmic-highlight/90 text-white text-lg px-12 py-6 h-auto rounded-xl transition-all duration-300 shadow-lg shadow-cosmic-highlight/20"
            size="lg"
          >
            进入时空
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
