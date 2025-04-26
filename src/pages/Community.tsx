import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Community: React.FC = () => {
  const posts = [
    {
      id: 2,
      title: "寻找创作伙伴：太空歌剧项目",
      content: "我正在寻找对科幻题材感兴趣的创作者，一起合作完成一个太空歌剧短片",
      author: "银河导演",
      avatar: "GD",
      likes: 78,
      comments: 34,
      category: "collaboration",
      image: "/lovable-uploads/dd570c0e-53db-4bf8-a147-d9ff2a22cae3.png"
    },
    {
      id: 3,
      title: "银河系边缘的奇妙发现",
      content: "这是我最新的AI生成作品集，探索了银河系边缘可能存在的奇异现象",
      author: "深空探险家",
      avatar: "DE",
      likes: 312,
      comments: 87,
      category: "showcase",
      image: "/lovable-uploads/8a951067-2af8-4277-abe7-3bda9e356cc0.png"
    },
    {
      id: 4,
      title: "AI绘画中的光影处理技巧",
      content: "分享如何在太空场景中创造出引人入胜的光影效果",
      author: "光影大师",
      avatar: "LM",
      likes: 265,
      comments: 59,
      category: "tutorial",
      image: "/lovable-uploads/9737e3c3-2f40-4d72-b124-8baca9b0923c.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-primary mb-4 md:mb-0">创作社区</h1>
        <Button className="bg-primary/90 hover:bg-primary text-white">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
        
        {["showcase", "tutorial", "collaboration"].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
  image: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Card className="group cursor-pointer hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <AspectRatio ratio={1}>
          <img 
            src={post.image} 
            alt={post.title}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </AspectRatio>
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium text-sm mb-1 line-clamp-2">{post.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{post.content}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={`/avatar-${post.id}.png`} />
              <AvatarFallback className="text-xs">{post.avatar}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{post.author}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">👍 {post.likes}</span>
            <span className="text-xs text-muted-foreground">💬 {post.comments}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Community;
