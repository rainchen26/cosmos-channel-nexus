import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Upload, Image, Wand2, Dog, User, Users, Smile } from "lucide-react";

const AIGenerate: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('星际穿梭');
  const [selectedSubStyle, setSelectedSubStyle] = useState('星尘牧歌');
  
  const styleCategories = [
    {
      name: '星际穿梭',
      description: '宇宙级浪漫，跨越光年的陪伴',
      subStyles: [
        '星尘牧歌 - 漂浮星屑中的毛绒云团',
        '银河茶会 - 太空站舷窗旁的下午茶',
        '跃迁虹桥 - 量子隧道里的追逐光斑',
        '星舰摇篮 - 机械舱内蜷睡育儿舱',
        '黑洞萌迹 - 重力扭曲中的滑稽失重',
        '彗尾戏雪 - 冰晶彗星上的爪印雪仗',
        '星环漫游 - 悬浮于土星环的遛弯',
        '脉冲撒娇 - 中子星辐射下的翻滚肚皮'
      ]
    },
    {
      name: '赛博奇境',
      description: '机械与血肉共生的近未来',
      subStyles: [
        '霓虹梳毛 - 全息广告牌下的理毛仪式',
        '数据鱼塘 - 光纤河流垂钓电子鱼',
        '义体午睡 - 充电桩旁的翻肚打盹',
        '故障亲昵 - 雪花屏特效的蹭脸瞬间',
        '机甲捕蝶 - 机械花园扑捉光子蝶',
        '朋克拆家 - 蒸汽管爆破时的懵脸特写',
        '代码零食 - 吃像素罐头溅出二进制',
        '投影遛弯 - 摩天楼立面倒影散步'
      ]
    },
    {
      name: '幻兽纪元',
      description: '神话生物混搭毛茸基因',
      subStyles: [
        '麒麟踏云 - 神祥云纹机械爪腾空',
        '青丘团宠 - 九尾卷成窝打呼噜',
        '鲲鹏零食 - 巨鹏羽翼藏冻干宝藏',
        '貔貅存粮 - 招财嘴吐零食山',
        '龙穴午睡 - 盘在龙珠上的蜷缩',
        '凤凰理毛 - 火羽飘落时的梳毛',
        '白泽课堂 - 神兽讲解拆家史',
        '精卫填喵 - 叼玩具填海动态'
      ]
    },
    {
      name: '量子童话',
      description: '微观世界的萌系物理',
      subStyles: [
        '波粒撒娇 - 同时呈现十种求摸形态',
        '纠缠零食 - 隔空传递虚拟罐头',
        '隧穿被窝 - 闪现进封印的暖炉',
        '叠加睡姿 - 量子态的十八种躺法',
        '超导拆家 - 零阻力推翻家具链',
        '湮灭球赛 - 正反物质逗猫球对撞',
        '弦论毛线 - 高维毛线团的混乱',
        '引力傲娇 - 质量扭曲导致口嫌体直'
      ]
    },
    {
      name: '古镜奇谭',
      description: '穿越东方美学的次元',
      subStyles: [
        '敦煌飞天 - 飘带缠成逗猫棒',
        '水墨扑蝶 - 宣纸晕染爪印',
        '青瓷午睡 - 冰裂纹榻上的蜷缩',
        '青铜饕餮 - 鼎纹变形成猫抓板',
        '活字捣乱 - 印刷版堆里的埋脸',
        '皮影追光 - 光影戏台的扑跃',
        '茶经品罐 - 茶宠旁鉴赏罐头',
        '丝路存粮 - 骆驼队运输冻干'
      ]
    },
    {
      name: '梦境代码',
      description: '潜意识深处的花园',
      subStyles: [
        '递归蹭脸 - 无限镜像的撒娇循环',
        '内存午睡 - 堆栈溢出式打呼',
        '异常卖萌 - 弹窗警告时的歪头',
        '缓存零食 - 突然吐出昨天藏的冻干',
        '多态睡姿 - 随机切换形态的困倦',
        '死锁拥抱 - 互相等待导致的黏人',
        '哈希拆家 - 不可逆的家具重组',
        '线程追逐 - 并行运行的逗猫现场'
      ]
    },
    {
      name: '萌能都市',
      description: '毛茸能量驱动的未来城市',
      subStyles: [
        '爪电站 - 踩发电板制造彩虹',
        '呼噜塔 - 声波共振点亮大厦',
        '尾巴桥 - 摇摆维持交通平衡',
        '冻干银行 - 爪印识别的零食ATM',
        '猫草公园 - 光合作用释放快乐素',
        '磨爪大厦 - 全楼面可伸缩猫抓柱',
        '逗猫广场 - 全息激光点狂欢派对',
        '暖肚基站 - 体温维持城市供暖'
      ]
    },
    {
      name: '时墟漫游',
      description: '时间裂隙中的永恒瞬间',
      subStyles: [
        '侏罗零食 - 恐龙嘴抢冻干',
        '秦俑理毛 - 兵马俑队列梳毛',
        '蒸汽拆家 - 维多利亚机械暴走',
        '赛博贞观 - 机甲宫殿翻肚皮',
        '未来石器 - 激光雕刻磨爪岩',
        '量子民国 - 旗袍与数据流共舞',
        '太空唐宋 - 星舰内的对诗舔毛',
        '超维当代 - 平行宇宙同步撒娇'
      ]
    }
  ];

  const handleUploadImage = (type: string) => {
    toast({
      title: "上传功能",
      description: `${type}图片上传功能即将推出！`,
    });
  };

  const handleStyleTabClick = (tab: string) => {
    const element = document.querySelector(`[data-value="${tab}"]`);
    if (element instanceof HTMLElement) {
      element.click();
    }
  };

  const handleSelectSubStyle = (subStyle: string) => {
    const mainSubStyle = subStyle.split(' - ')[0];
    setSelectedSubStyle(mainSubStyle);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-3 text-primary">
          在数据星河里，为你和你的宠伴留一盏不灭的灯
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          在这里，每一个数据都是温暖的记忆，每一帧画面都是永恒的陪伴
        </p>
      </div>
      
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="upload">记忆主角</TabsTrigger>
          <TabsTrigger value="style">选择风格</TabsTrigger>
          <TabsTrigger value="generate">生成记忆</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">主人/仆人照片</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="aspect-square bg-secondary rounded-md border border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
                    onClick={() => handleUploadImage('主人正面照')}>
                    <Upload className="h-8 w-8 text-primary/70 mb-2" />
                    <span className="text-sm mb-1">正面照</span>
                    <div className="text-xs text-muted-foreground px-3 text-center">
                      <p>拍摄要求：</p>
                      <p>• 脸部清晰、光线充足</p>
                      <p>• 建议尺寸：512×512px</p>
                      <p>• 正面自然表情</p>
                    </div>
                  </div>
                  {['左侧面照', '右侧面照', '背面照'].map((type, index) => (
                    <div key={index}
                      className="aspect-square bg-secondary rounded-md border border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
                      onClick={() => handleUploadImage(`主人${type}`)}>
                      <Upload className="h-8 w-8 text-primary/70 mb-2" />
                      <span className="text-sm">{type}</span>
                      <span className="text-xs text-muted-foreground mt-1">
                        {type === '左侧面照' ? '左侧90度角拍摄' :
                         type === '右侧面照' ? '右侧90度角拍摄' : '背对拍摄'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Dog className="mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">宠物照片</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="aspect-square relative overflow-hidden rounded-md bg-secondary flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/ef18555b-40cd-4f87-a225-c42fb4f45bd7.png"
                      alt="Sample pet photo 1"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                  <div className="aspect-square relative overflow-hidden rounded-md bg-secondary flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/9fac5e38-6838-42d2-9338-b84a15bb45a1.png"
                      alt="Sample pet photo 2"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                  <div className="aspect-square relative overflow-hidden rounded-md bg-secondary flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/645fb8ae-5d1e-49ef-bcee-41c31f772073.png"
                      alt="White cat in golden armor"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                  <div className="aspect-square relative overflow-hidden rounded-md bg-secondary flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/91b7a86f-e994-47e7-8721-cef7367f39e8.png"
                      alt="White cat in space attire"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-4 text-center">
            <Button 
              onClick={() => handleStyleTabClick("style")}
              className="bg-primary hover:bg-primary/90"
            >
              进入下一步：选择风格
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="style" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Wand2 className="mr-2 h-5 w-5 text-primary" />
                  A. 记忆提示
                </h3>
                <div className="space-y-4">
                  <Textarea
                    placeholder={`描述你想要的场景和氛围...

示例：我和我家的柴犬在星空下漫步，四周点缀着点点星光。
我穿着休闲服装，柴犬活泼可爱，正在对我撒娇。
场景氛围温馨浪漫，整体感觉略带梦幻，像是穿越银河的温柔瞬间。
画面中可以有星际穿梭的飞船掠过，给人一种未来感与浪漫的结合。

建议包含：场景描述、人物状态、宠物状态、整体氛围
建议字数50-200字，精简表达更有力！`}
                      className="aspect-square bg-secondary resize-none"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Image className="mr-2 h-5 w-5 text-primary" />
                  B. 上传参考风格
                </h3>
                <div 
                  className="aspect-square bg-secondary rounded-md border border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
                  onClick={() => handleUploadImage("风格参考")}
                >
                  <Upload className="h-8 w-8 text-primary/70 mb-2" />
                  <div className="text-sm text-center px-4">
                    <p className="mb-1">上传你喜欢的风格图片</p>
                    <p className="text-xs text-muted-foreground">支持jpg、png格式</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">C. 记忆风格</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">选择主题风格</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {styleCategories.map((category) => (
                    <div 
                      key={category.name}
                      className={`flex flex-col gap-2 p-2 rounded-md cursor-pointer ${selectedStyle === category.name ? 'bg-secondary/80 ring-1 ring-primary' : 'hover:bg-secondary/50'}`}
                      onClick={() => setSelectedStyle(category.name)}
                    >
                      <div className="aspect-square bg-secondary rounded-md overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                          <Wand2 className="h-8 w-8 text-primary/70" />
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="font-medium">{category.name}</h4>
                        <p className="text-xs text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">选择子风格 ({selectedStyle})</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {styleCategories.find(category => category.name === selectedStyle)?.subStyles.map((subStyle, index) => {
                    const [name, description] = subStyle.split(' - ');
                    return (
                      <div 
                        key={index}
                        className={`flex flex-col gap-2 p-2 rounded-md cursor-pointer ${selectedSubStyle === name ? 'bg-secondary/80 ring-1 ring-primary' : 'hover:bg-secondary/50'}`}
                        onClick={() => handleSelectSubStyle(subStyle)}
                      >
                        <div className="aspect-square bg-secondary rounded-md overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                            <Wand2 className="h-6 w-6 text-primary/60" />
                          </div>
                        </div>
                        <div className="text-center">
                          <h5 className="font-medium text-sm">{name}</h5>
                          <p className="text-xs text-muted-foreground">{description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4 text-center">
            <Button 
              onClick={() => handleStyleTabClick("generate")}
              className="bg-primary hover:bg-primary/90"
            >
              进入下一步：生成记忆
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="generate" className="space-y-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">已生成的记忆</h3>
            
            <div>
              <div className="flex items-center mb-4">
                <Image className="mr-2 text-primary" />
                <h4 className="text-xl font-semibold">照片记忆</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array(8).fill(0).map((_, i) => (
                  <div key={i} className="aspect-square card flex items-center justify-center">
                    <p className="text-muted-foreground text-sm text-center px-2">
                      {i < 2 ? "主人/仆人单独照" : 
                       i < 4 ? "宠物单独照" : 
                       "合照"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Upload className="mr-2 text-primary" />
                <h4 className="text-xl font-semibold">视频记忆</h4>
              </div>
              <div className="aspect-video card flex items-center justify-center">
                <p className="text-muted-foreground">AI生成的视频记忆</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Smile className="mr-2 text-primary" />
                <h4 className="text-xl font-semibold">表情包记忆</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array(8).fill(0).map((_, i) => (
                  <div key={i} className="aspect-square card flex items-center justify-center">
                    <p className="text-muted-foreground">表情包 #{i+1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIGenerate;
