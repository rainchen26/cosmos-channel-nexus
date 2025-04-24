
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Community: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "我的第一次星际旅行创作",
      content: "这是我使用梦微AI生成的太空旅行场景，灵感来源于科幻小说《三体》",
      author: "星空漫游者",
      avatar: "SM",
      likes: 245,
      comments: 56,
      category: "showcase"
    },
    {
      id: 2,
      title: "如何创建完美的星球表面细节",
      content: "分享一些关于如何使用AI工具创建逼真行星表面的技巧和窍门",
      author: "行星设计师",
      avatar: "PD",
      likes: 189,
      comments: 43,
      category: "tutorial"
    },
    {
      id: 3,
      title: "寻找创作伙伴：太空歌剧项目",
      content: "我正在寻找对科幻题材感兴趣的创作者，一起合作完成一个太空歌剧短片",
      author: "银河导演",
      avatar: "GD",
      likes: 78,
      comments: 34,
      category: "collaboration"
    },
    {
      id: 4,
      title: "银河系边缘的奇妙发现",
      content: "这是我最新的AI生成作品集，探索了银河系边缘可能存在的奇异现象",
      author: "深空探险家",
      avatar: "DE",
      likes: 312,
      comments: 87,
      category: "showcase"
    },
    {
      id: 5,
      title: "AI绘画中的光影处理技巧",
      content: "分享如何在太空场景中创造出引人入胜的光影效果",
      author: "光影大师",
      avatar: "LM",
      likes: 265,
      comments: 59,
      category: "tutorial"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-cosmic-star text-glow mb-4 md:mb-0">创作社区</h1>
        <Button className="bg-cosmic-highlight hover:bg-cosmic-highlight/80">
          发布新内容
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="showcase">作品展示</TabsTrigger>
          <TabsTrigger value="tutorial">教程分享</TabsTrigger>
          <TabsTrigger value="collaboration">寻找合作</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
        
        {["showcase", "tutorial", "collaboration"].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="space-y-6">
              {posts
                .filter(post => post.category === category)
                .map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  avatar: string;
  likes: number;
  comments: number;
  category: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Card className="cosmic-card overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={`/avatar-${post.id}.png`} />
              <AvatarFallback className="bg-cosmic-nebula/50">{post.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{post.title}</CardTitle>
              <p className="text-sm text-cosmic-star/70">作者: {post.author}</p>
            </div>
          </div>
          <div className="text-sm text-cosmic-star/70">
            {post.category === "showcase" && "作品展示"}
            {post.category === "tutorial" && "教程分享"}
            {post.category === "collaboration" && "寻找合作"}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm">👍 {post.likes}</Button>
          <Button variant="ghost" size="sm">💬 {post.comments}</Button>
        </div>
        <Button variant="outline" size="sm" className="border-cosmic-accent text-cosmic-accent">
          查看详情
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Community;
