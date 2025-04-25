import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Shop: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "星云梦境模板",
      description: "专业AI图像生成模板，包含10种宇宙风格预设",
      price: 39,
      category: "templates"
    },
    {
      id: 2,
      name: "深空探索特效包",
      description: "高质量的太空和星际特效，适用于视频创作",
      price: 59,
      category: "effects"
    },
    {
      id: 3,
      name: "星际旅行声音集",
      description: "太空环境音效和背景音乐，为你的创作增添氛围",
      price: 29,
      category: "audio"
    },
    {
      id: 4,
      name: "行星构建器",
      description: "创建自定义行星和卫星的高级工具",
      price: 99,
      category: "tools"
    },
    {
      id: 5,
      name: "宇宙场景集",
      description: "20个精心制作的太空环境和场景",
      price: 49,
      category: "templates"
    },
    {
      id: 6,
      name: "太空角色包",
      description: "10个可定制的宇航员和外星生物角色模型",
      price: 69,
      category: "characters"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        星际商城
      </h1>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="templates">模板</TabsTrigger>
          <TabsTrigger value="effects">特效</TabsTrigger>
          <TabsTrigger value="audio">音效</TabsTrigger>
          <TabsTrigger value="tools">工具</TabsTrigger>
          <TabsTrigger value="characters">角色</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        
        {["templates", "effects", "audio", "tools", "characters"].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter(product => product.category === category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="bg-white border border-primary/20 overflow-hidden hover:border-primary/40 transition-colors">
      <div className="h-48 bg-secondary/30 flex items-center justify-center">
        <span className="text-4xl">🌌</span>
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{product.description}</p>
        <p className="text-xl font-bold text-primary">{product.price} 星币</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary/90 hover:bg-primary text-white">
          加入购物车
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Shop;
