
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Upload, Dog } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface UploadSectionProps {
  handleUploadImage: (type: string) => void;
  handleStyleTabClick: (tab: string) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ handleUploadImage, handleStyleTabClick }) => {
  return (
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
                src="/lovable-uploads/8607dd72-afb7-4a8f-b347-ef5b39c95a4d.png"
                alt="Sample pet photo 3"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-md bg-secondary flex items-center justify-center">
              <img 
                src="/lovable-uploads/f960fd84-cebf-4f63-8a14-9e7631299236.png"
                alt="Sample pet photo 4"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadSection;
