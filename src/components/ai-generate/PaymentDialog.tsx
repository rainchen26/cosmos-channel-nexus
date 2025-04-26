
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Package, Crown, Sparkles } from "lucide-react";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const PaymentDialog: React.FC<PaymentDialogProps> = ({
  open,
  onOpenChange,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            萌爱镜像基础套装
          </DialogTitle>
          <DialogDescription>
            解锁专业级AI生成能力，创造独特的宠物记忆
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          <div className="flex items-start gap-3">
            <Package className="h-5 w-5 text-primary mt-1" />
            <div>
              <p className="font-medium">基础套装内容</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside ml-2">
                <li>8张精美图片</li>
                <li>1个定制视频</li>
                <li>600个萌尾粒子</li>
                <li>Pro会员特权</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-1" />
            <div>
              <p className="font-medium">Pro会员特权</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside ml-2">
                <li>高级风格定制</li>
                <li>无限次生成</li>
                <li>优先生成队列</li>
                <li>专属客服支持</li>
              </ul>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button 
            onClick={onConfirm}
            className="w-full bg-primary hover:bg-primary/90"
          >
            立即购买 ¥99
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
