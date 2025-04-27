
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // This would ideally come from a data source/API
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
      subcategory: "NFT虚",
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
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink onClick={handleGoBack} className="flex items-center cursor-pointer">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  返回
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">商品</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>{product.name}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            {product.subcategory && (
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                {product.subcategory}
              </p>
            )}
            
            <h1 className="text-4xl font-light tracking-wide">{product.name}</h1>
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">{product.description}</p>
              
              <div className="text-lg">
                {product.priceRange ? (
                  <span>¥{product.price} - ¥{product.highPrice}</span>
                ) : (
                  <span>¥{product.price}{product.subscription ? "/月" : ""}</span>
                )}
              </div>
              
              {product.donation && (
                <p className="text-green-600">捐赠: {product.donation}</p>
              )}
              
              {product.savings && (
                <p className="text-red-600">省: ¥{product.savings}</p>
              )}
            </div>
            
            <Separator className="my-8" />
            
            <div className="space-y-4">
              <Button size="lg" className="w-full">
                立即购买
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                加入购物车
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
