import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Member: React.FC = () => {
  const memberProgress = 65;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">会员中心</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white border border-primary/20">
          <CardHeader>
            <CardTitle>个人资料</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4 cosmic-border">
                <AvatarImage src="/avatar-user.png" />
                <AvatarFallback className="text-lg bg-cosmic-nebula">用户</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-1">探索者27839</h3>
              <p className="text-cosmic-star/70 mb-4">注册时间: 2025-04-15</p>
              <div className="w-full mb-2">
                <div className="flex justify-between mb-1">
                  <span>梦微等级</span>
                  <span>6/10</span>
                </div>
                <Progress value={memberProgress} className="h-2" />
              </div>
              <p className="text-sm text-cosmic-accent mt-2">再获得350星点升级到下一等级</p>
              <Button className="mt-4 w-full">编辑个人资料</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white border border-primary/20 col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>会员数据</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="cosmic-card p-4 text-center">
                <p className="text-2xl font-bold text-cosmic-highlight">128</p>
                <p className="text-sm text-cosmic-star/70">创作数量</p>
              </div>
              <div className="cosmic-card p-4 text-center">
                <p className="text-2xl font-bold text-cosmic-nebula">1,240</p>
                <p className="text-sm text-cosmic-star/70">剩余星点</p>
              </div>
              <div className="cosmic-card p-4 text-center">
                <p className="text-2xl font-bold text-cosmic-accent">25</p>
                <p className="text-sm text-cosmic-star/70">收藏作品</p>
              </div>
              <div className="cosmic-card p-4 text-center">
                <p className="text-2xl font-bold text-cosmic-glow">7</p>
                <p className="text-sm text-cosmic-star/70">参与项目</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-bold mb-2">会员特权</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cosmic-accent mr-2"></div>
                  <span>每日额外50星点AI创作额度</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cosmic-accent mr-2"></div>
                  <span>优先使用新功能</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cosmic-accent mr-2"></div>
                  <span>独家太空风格模板</span>
                </li>
                <li className="flex items-center opacity-50">
                  <div className="w-2 h-2 rounded-full bg-cosmic-accent mr-2"></div>
                  <span>8级解锁: 扩展分辨率创作</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="creations" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="creations">我的创作</TabsTrigger>
          <TabsTrigger value="collections">我的收藏</TabsTrigger>
          <TabsTrigger value="transactions">消费记录</TabsTrigger>
        </TabsList>
        
        <TabsContent value="creations">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <CreationCard key={item} id={item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="collections">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <CollectionCard key={item} id={item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="transactions">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>消费记录</CardTitle>
              <CardDescription>你的星点消费和充值记录</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "2025-04-20", desc: "购买宇宙模板包", amount: -200 },
                  { date: "2025-04-18", desc: "充值星点", amount: 500 },
                  { date: "2025-04-15", desc: "AI创作高级版", amount: -100 },
                  { date: "2025-04-10", desc: "每日签到奖励", amount: 50 },
                ].map((tx, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 cosmic-card">
                    <div>
                      <p className="font-medium">{tx.desc}</p>
                      <p className="text-sm text-cosmic-star/70">{tx.date}</p>
                    </div>
                    <p className={tx.amount > 0 ? "text-green-400" : "text-cosmic-accent"}>
                      {tx.amount > 0 ? `+${tx.amount}` : tx.amount} 星点
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface CardProps {
  id: number;
}

const CreationCard: React.FC<CardProps> = ({ id }) => {
  return (
    <Card className="cosmic-card overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-cosmic-nebula/30 to-cosmic-accent/30"></div>
      <CardContent className="pt-4">
        <h3 className="font-bold mb-1">创作 #{id}</h3>
        <p className="text-sm text-cosmic-star/70 mb-3">创建于 2025-04-{10 + id}</p>
        <div className="flex justify-between">
          <Button variant="ghost" size="sm">编辑</Button>
          <Button variant="outline" size="sm" className="border-cosmic-accent text-cosmic-accent">分享</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const CollectionCard: React.FC<CardProps> = ({ id }) => {
  return (
    <Card className="cosmic-card overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-cosmic-highlight/30 to-cosmic-nebula/30"></div>
      <CardContent className="pt-4">
        <h3 className="font-bold mb-1">收藏 #{id}</h3>
        <p className="text-sm text-cosmic-star/70 mb-3">收藏于 2025-04-{15 + id}</p>
        <div className="flex justify-between">
          <Button variant="ghost" size="sm">查看</Button>
          <Button variant="outline" size="sm" className="border-cosmic-accent text-cosmic-accent">删除</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Member;
