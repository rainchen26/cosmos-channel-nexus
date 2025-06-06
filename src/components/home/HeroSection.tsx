
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden">
        <img 
          src="/lovable-uploads/f6e2827e-1dbe-4454-ad95-4b05ce1bbaed.png" 
          alt="赛博空间中女孩与数字猫的科技幻想" 
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center px-4 tracking-tight drop-shadow-lg">
            萌尾时空｜以AI之名，让爱永存
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 text-center px-4 font-light drop-shadow-md">
            让每一个AI创作都成为跨越数字与情感的桥梁
          </p>
          <Button 
            className="text-lg px-10 py-5 h-auto rounded-xl transition-all duration-300 shadow-lg"
          >
            进入时空
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
