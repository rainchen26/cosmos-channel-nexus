import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Star, Heart, Gift, Package, Archive, Medal, Book } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "全部", icon: <Package className="mb-2 mx-auto" /> },
    { id: "smart-pet", name: "智能设备", icon: <Medal className="mb-2 mx-auto" /> },
    { id: "emotional", name: "情感产品", icon: <Heart className="mb-2 mx-auto" /> },
    { id: "digital", name: "数字资产", icon: <Star className="mb-2 mx-auto" /> },
    { id: "memory", name: "情感传承", icon: <Archive className="mb-2 mx-auto" /> },
    { id: "bundle", name: "产品组合", icon: <Gift className="mb-2 mx-auto" /> },
    { id: "charity", name: "公益联名", icon: <Book className="mb-2 mx-auto" /> }
  ];

  const products = [
    {
      id: 1,
      name: "全息投影亲子T恤",
      category: "emotional",
      subcategory: "潮流服饰",
      description: "日夜双模式动态图案 + 靠近触发互动",
      price: 199,
      highPrice: 599,
      priceRange: true,
      image: "/lovable-uploads/dd570c0e-53db-4bf8-a147-d9ff2a22cae3.png"
    },
    {
      id: 2,
      name: "温感变色卫衣",
      category: "emotional",
      subcategory: "潮流服饰",
      description: "体温显现隐藏爪印 + NFC声纹加密",
      price: 299,
      priceRange: false,
      image: "/lovable-uploads/8607dd72-afb7-4a8f-b347-ef5b39c95a4d.png"
    },
    {
      id: 3,
      name: "量子零食罐",
      category: "emotional",
      subcategory: "电子配件",
      description: "投喂量AI建议 + 全息进食动画投影",
      price: 199,
      priceRange: false,
      image: "/lovable-uploads/0382aeb1-1d69-4cad-8ef5-39b172da3e8c.png"
    },
    {
      id: 4,
      name: "萌爪无线充电器",
      category: "emotional",
      subcategory: "电子配件",
      description: "充电时触发宠物跑动光效 + 呼噜ASMR",
      price: 159,
      priceRange: false,
      image: "/lovable-uploads/73bf8d29-3014-4514-a435-68aa36417fff.png"
    },
    {
      id: 5,
      name: "拆家现场盲盒",
      category: "emotional",
      subcategory: "趣味周边",
      description: "3D打印家具残骸模型 + 限量虚拟复活卡",
      price: 89,
      priceRange: false,
      image: "/lovable-uploads/8b666a29-bc5f-4646-8542-37b358076f96.png"
    },

    {
      id: 6,
      name: "动态表情包订阅包",
      category: "digital",
      subcategory: "数字内容",
      description: '每月8款AI梗图 + 声控触发（说"汪"出图）',
      price: 15,
      priceRange: false,
      subscription: true,
      image: "/lovable-uploads/c4aef956-4bb3-411e-9342-ed8bf74afb37.png"
    },
    {
      id: 7,
      name: "全息屏保工坊",
      category: "digital",
      subcategory: "数字内容",
      description: "互动光粒宠物 + 天气联动躲雨动画",
      price: 29,
      highPrice: 99,
      priceRange: true,
      image: "/lovable-uploads/d20a8cf8-0348-4400-8e0b-e3d715deca9d.png"
    },
    {
      id: 8,
      name: "赛博机械翼NFT时装",
      category: "digital",
      subcategory: "NFT虚����",
      description: "提升社群互动收益 + 跨平台元宇宙通用",
      price: 29,
      highPrice: 299,
      priceRange: true,
      image: "/lovable-uploads/d20a8cf8-0348-4400-8e0b-e3d715deca9d.png"
    },
    {
      id: 9,
      name: "肉垫星舰载具",
      category: "digital",
      subcategory: "NFT虚拟",
      description: "萌尾宇宙飞行特效 + 爪印尾迹云",
      price: 499,
      priceRange: false,
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },
    {
      id: 10,
      name: "萌爪星云（虚拟土地）",
      category: "digital",
      subcategory: "虚拟地产",
      description: "建造专属宠物乐园 + 收租赚取爪能粒子",
      price: 999,
      highPrice: 9999,
      priceRange: true,
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },

    {
      id: 11,
      name: "机械宠物复苏计划",
      category: "memory",
      subcategory: "记忆复苏",
      description: "3D打印习性克隆体 + AI人格渐进学习",
      price: 5999,
      premium: true,
      priceRange: false,
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },
    {
      id: 12,
      name: "跨代际传承U盘",
      category: "memory",
      subcategory: "高端定制",
      description: "爪印外形 + 祖辈VR养宠教学",
      price: 299,
      priceRange: false,
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },
    {
      id: 13,
      name: "钛合金记忆碑",
      category: "memory",
      subcategory: "高端定制",
      description: "NFC芯片存百年数据 + 陨石材质刻字",
      price: 1999,
      priceRange: false,
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },
    {
      id: 14,
      name: "全息时光胶囊",
      category: "memory",
      subcategory: "高端定制",
      description: "埋藏未来寄语 + 地理坐标AR寻宝",
      price: 899,
      priceRange: false,
      image: "/lovable-uploads/73bf8d29-3014-4514-a435-68aa36417fff.png"
    },

    {
      id: 15,
      name: "萌新守护者套装",
      category: "bundle",
      description: "AI项圈基础款 + 量子猫垫 + 10枚卫生袋",
      price: 699,
      savings: 138,
      scenario: "养宠入门必备",
      image: "/lovable-uploads/dd570c0e-53db-4bf8-a147-d9ff2a22cae3.png"
    },
    {
      id: 16,
      name: "次元亲子礼盒",
      category: "bundle",
      description: "全息T恤×2 + 表情包年费 + 萌爪充电器",
      price: 999,
      savings: 298,
      scenario: "家庭情感互动",
      image: "/lovable-uploads/8a951067-2af8-4277-abe7-3bda9e356cc0.png"
    },
    {
      id: 17,
      name: "元宇宙原住民包",
      category: "bundle",
      description: "虚拟土地×1 + NFT时装×3 + 肉垫星舰",
      price: 1999,
      savings: 500,
      scenario: "数字资产投资者",
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },
    {
      id: 18,
      name: "永恒记忆典藏箱",
      category: "bundle",
      description: "机械复苏计划 + 钛合金记忆碑 + 传承U盘",
      price: 7999,
      savings: 998,
      scenario: "高端情感传承",
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },

    {
      id: 19,
      name: "流浪星火粮包",
      category: "charity",
      subcategory: "流浪动物救助",
      description: "每购买1份捐赠流浪动物3日口粮",
      price: 59,
      donation: "¥15",
      image: "/lovable-uploads/dece4934-93f3-41c2-a501-04e43248c26a.png"
    },
    {
      id: 20,
      name: "云领养卫生袋",
      category: "charity",
      subcategory: "流浪动物救助",
      description: "袋身印有待领养宠物信息 + 扫码一键云投喂",
      price: 39,
      donation: "每10包资助1次绝育手术",
      image: "/lovable-uploads/16bf60b0-d62c-4637-9969-78f5e5d380c4.png"
    },

    {
      id: 21,
      name: "AI镜像项圈",
      category: "smart-pet",
      subcategory: "智能穿戴",
      description: "全息投影宠物形象 + 健康数据萌爪指示灯",
      price: 399,
      highPrice: 1299,
      priceRange: true,
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },

    {
      id: 22,
      name: "次元牵引绳",
      category: "smart-pet",
      subcategory: "智能穿戴",
      description: "实时心情表情包 + 防丢投影定位",
      price: 299,
      highPrice: 899,
      priceRange: true,
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },
    {
      id: 23,
      name: "量子踩奶猫垫",
      category: "smart-pet",  
      subcategory: "居家用品",
      description: "AI生成图案 + 睡姿压力传感记录",
      price: 199,
      highPrice: 599,
      priceRange: true,
      image: "/lovable-uploads/73bf8d29-3014-4514-a435-68aa36417fff.png"
    },
    {
      id: 24,
      name: "萌爪卫生袋（10枚装）",
      category: "smart-pet",
      subcategory: "居家用品",
      description: "可降解漫画印花 + AI语音夸夸除臭",
      price: 39,
      priceRange: false,
      image: "/lovable-uploads/16bf60b0-d62c-4637-9969-78f5e5d380c4.png"
    },
    {
      id: 25,
      name: "星云体温贴",
      category: "smart-pet",
      subcategory: "健康监测",
      description: "24小时测温 + 异常预警萌爪震动",
      price: 159,
      priceRange: false,
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const bundles = [
    {
      id: 101,
      name: "萌新守护者套装",
      category: "bundle",
      description: "AI项圈基础款 + 量子猫垫 + 10枚卫生袋",
      price: 699,
      savings: 138,
      scenario: "养宠入门必备",
      image: "/lovable-uploads/dd570c0e-53db-4bf8-a147-d9ff2a22cae3.png"
    },
    {
      id: 102,
      name: "次元亲子礼盒",
      category: "bundle",
      description: "全息T恤×2 + 表情包年费 + 萌爪充电器",
      price: 999,
      savings: 298,
      scenario: "家庭情感互动",
      image: "/lovable-uploads/8a951067-2af8-4277-abe7-3bda9e356cc0.png"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[80vh] overflow-hidden bg-black">
        <img
          src="/lovable-uploads/dd570c0e-53db-4bf8-a147-d9ff2a22cae3.png"
          alt="萌趣定制频道封面"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-7xl font-light mb-8 tracking-wide">萌趣定制频道</h1>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto px-4 tracking-wider opacity-90">
              当科技与情感相遇，为珍贵的陪伴创造永恒价值
            </p>
            <div className="mt-12">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-none px-10 py-6 text-lg font-light tracking-wider">
                探索全部系列
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-2xl font-light text-center mb-10 tracking-wide">产品系列</h2>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
            {categories.map((category) => (
              <Card 
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`border-none shadow-none hover:bg-secondary/30 transition-colors cursor-pointer ${
                  activeCategory === category.id ? "bg-secondary/40" : ""
                }`}
              >
                <CardContent className="p-4 text-center">
                  {category.icon}
                  <h3 className="text-sm font-light tracking-wide">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Separator className="my-16" />

        <div className="mb-20">
          <h2 className="text-3xl font-light text-center mb-16 tracking-wide">{activeCategory === 'all' ? '精选商品' : categories.find(c => c.id === activeCategory)?.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="border-none shadow-none group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.premium && (
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-xs uppercase tracking-wider">
                        尊享系列
                      </div>
                    )}
                  </div>
                  <div className="px-2">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.subcategory}</p>
                        <h3 className="text-lg font-light tracking-wide">{product.name}</h3>
                      </div>
                      <div className="text-right">
                        {product.priceRange ? (
                          <span className="text-sm font-light">
                            ¥{product.price} - ¥{product.highPrice}
                          </span>
                        ) : (
                          <span className="text-sm font-light">
                            ¥{product.price}{product.subscription ? "/月" : ""}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-xs px-0">
                            查看细节
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">{product.name}</h4>
                            <p className="text-xs text-muted-foreground">{product.description}</p>
                            <div className="pt-2">
                              <Button size="sm" className="w-full mt-2">
                                加入购物车
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      <Button variant="ghost" size="sm" className="group/btn">
                        立即购买
                        <ChevronRight className="h-3 w-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                    {product.donation && (
                      <div className="text-sm text-green-600 font-medium mt-2">
                        捐赠: {product.donation}
                      </div>
                    )}
                    {product.savings && (
                      <div className="text-sm text-red-600 font-medium mt-2">
                        省: ¥{product.savings}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink href="#" className="rounded-none border-none">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="rounded-none border-none">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="rounded-none border-none">
                    3
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <Separator className="my-20" />
        
        <div className="mb-24">
          <h2 className="text-3xl font-light text-center mb-6 tracking-wide">专属套装</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">甄选组合，满足多样场景需求，为您的爱宠提供全方位呵护体验</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {bundles.map((bundle) => (
              <Card key={bundle.id} className="border-none shadow-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
                        <img
                          src={bundle.image}
                          alt={bundle.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-light mb-2 tracking-wide">{bundle.name}</h3>
                        <p className="text-sm mb-1 tracking-wide">{bundle.scenario}</p>
                        <p className="text-sm text-muted-foreground mb-6">{bundle.description}</p>
                      </div>
                      <div>
                        <div className="flex items-baseline mb-6">
                          <span className="text-lg font-light">¥{bundle.price}</span>
                          <span className="text-sm text-muted-foreground ml-2">省¥{bundle.savings}</span>
                        </div>
                        <Button className="w-full rounded-none">立即选购</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-black text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 tracking-wider">萌爪印记</h2>
          <p className="text-lg font-light max-w-2xl mx-auto mb-10 opacity-80 tracking-wide">
            为每位爱宠创造专属回忆，让陪伴的温度穿越时光
          </p>
          <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-none px-10">
            探索定制服务
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
