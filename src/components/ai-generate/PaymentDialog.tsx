
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Package, Image, Video, Smile, Smartphone, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'pro' | null>(null);
  const [showCoinOptions, setShowCoinOptions] = useState(false);

  const handlePackageSelect = (pkg: 'basic' | 'pro') => {
    setSelectedPackage(pkg);
    setShowCoinOptions(true);
  };

  const handlePurchase = (amount: number) => {
    onConfirm();
  };

  if (showCoinOptions) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              充值萌爱尾波币
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 my-4">
            {[
              { coins: 800, price: 80 },
              { coins: 2000, price: 160 },
              { coins: 5000, price: 350 },
            ].map((option) => (
              <button
                key={option.coins}
                onClick={() => handlePurchase(option.coins)}
                className="w-full p-4 border rounded-lg hover:bg-accent transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-lg font-medium">{option.coins}尾波币</div>
                </div>
                <div className="text-lg font-medium text-primary">
                  RMB{option.price}元
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            选择您的记忆库套装
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          <button
            onClick={() => handlePackageSelect('basic')}
            className={cn(
              "w-full p-4 border rounded-lg hover:bg-accent transition-colors",
              selectedPackage === 'basic' && "border-primary bg-accent"
            )}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-medium">基础记忆库</div>
              <div className="text-primary font-medium">666个萌爱尾波币</div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                <span>8张精美照片</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span>1个电子相册视频</span>
              </div>
            </div>
          </button>

          <button
            onClick={() => handlePackageSelect('pro')}
            className={cn(
              "w-full p-4 border rounded-lg hover:bg-accent transition-colors",
              selectedPackage === 'pro' && "border-primary bg-accent"
            )}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-medium">Pro记忆库</div>
              <div className="text-primary font-medium">999个萌爱尾波币</div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                <span>8张精美照片</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span>1个电子相册视频</span>
              </div>
              <div className="flex items-center gap-2">
                <Smile className="h-4 w-4" />
                <span>8个爱宠表情包</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span>2张手机屏保</span>
              </div>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
