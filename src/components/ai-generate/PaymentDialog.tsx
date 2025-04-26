
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Package, Image, Video, Smile, Smartphone, CreditCard, Check } from "lucide-react";
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
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handlePurchase = (amount: number) => {
    setSelectedPayment(amount);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onConfirm();
  };

  const colorOptions = [
    { name: '星空紫', color: '#9b87f5' },
    { name: '晨曦粉', color: '#FFDEE2' },
    { name: '海洋蓝', color: '#0EA5E9' },
    { name: '暖阳橙', color: '#F97316' },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            选择您的记忆库套装
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 my-4">
          <div className="space-y-4">
            <button
              onClick={() => setSelectedPackage('basic')}
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
              onClick={() => setSelectedPackage('pro')}
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

          <div className="border-t pt-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">充值萌爱尾波币</h3>
            </div>
            <div className="space-y-3">
              {[
                { coins: 800, price: 80 },
                { coins: 2000, price: 160 },
                { coins: 5000, price: 350 },
              ].map((option) => (
                <button
                  key={option.coins}
                  onClick={() => handlePurchase(option.coins)}
                  className={cn(
                    "w-full p-4 border rounded-lg hover:bg-accent transition-colors flex items-center justify-between group",
                    selectedPayment === option.coins && "border-primary bg-accent"
                  )}
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
          </div>

          {selectedPayment && (
            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-lg font-medium">选择您喜欢的主题色</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorSelect(color.color)}
                    className={cn(
                      "p-4 rounded-lg border transition-all flex items-center justify-between",
                      selectedColor === color.color && "border-primary"
                    )}
                    style={{ backgroundColor: color.color + '20' }}
                  >
                    <span className="font-medium">{color.name}</span>
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: color.color }}
                    >
                      {selectedColor === color.color && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
