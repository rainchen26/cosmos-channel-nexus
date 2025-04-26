
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

const Shop: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "星云梦境模板",
      description: "专业AI图像生成模板，包含10种宇宙风格预设",
      price: 39,
      category: "templates",
      image: "/lovable-uploads/0d56e295-4a6c-4c22-976f-e7ae357f9166.png"
    },
    {
      id: 2,
      name: "深空探索特效包",
      description: "高质量的太空和星际特效，适用于视频创作",
      price: 59,
      category: "effects",
      image: "/lovable-uploads/0382aeb1-1d69-4cad-8ef5-39b172da3e8c.png"
    },
    {
      id: 3,
      name: "星际旅行声音集",
      description: "太空环境音效和背景音乐，为你的创作增添氛围",
      price: 29,
      category: "audio",
      image: "/lovable-uploads/02843cfa-3fc6-4987-b74c-cbdfcbfe393e.png"
    },
    {
      id: 4,
      name: "行星构建器",
      description: "创建自定义行星和卫星的高级工具",
      price: 99,
      category: "tools",
      image: "/lovable-uploads/16bf60b0-d62c-4637-9969-78f5e5d380c4.png"
    }
  ];

  const categories = [
    { name: "templates", label: "创意模板" },
    { name: "effects", label: "特效工具" },
    { name: "audio", label: "音效资源" },
    { name: "tools", label: "创作工具" },
    { name: "characters", label: "角色素材" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="/lovable-uploads/dd570c0e-53db-4bf8-a147-d9ff2a22cae3.png"
          alt="萌趣定制频道封面"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-6">萌趣定制频道</h1>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto px-4">
              探索AI创意无限可能，定制专属于你的数字艺术
            </p>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="border-none shadow-none hover:bg-secondary/50 transition-colors">
              <CardContent className="p-4 text-center cursor-pointer">
                <h3 className="text-lg font-light">{category.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className="my-12" />

        {/* Featured Products */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-center mb-12">精选推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {products.slice(0, 4).map((product) => (
              <Card key={product.id} className="border-none shadow-none group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-xl font-light mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{product.price} 星币</span>
                      <Button variant="ghost" className="group/btn">
                        了解详情
                        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
