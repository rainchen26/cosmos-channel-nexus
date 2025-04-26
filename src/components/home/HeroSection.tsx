
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden">
        <img 
          src="/lovable-uploads/208e8c2b-76fe-4bdb-9d1a-86e0c20fa212.png" 
          alt="赛博空间中女孩与数字猫的科技幻想" 
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center px-4 tracking-tight drop-shadow-lg">
            萌尾时空｜数字世界的心灵伴侣
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 text-center px-4 font-light drop-shadow-md">
            让每一个AI创作都成为跨越数字与情感的桥梁
          </p>
          <Button 
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-10 py-5 h-auto rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30"
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
