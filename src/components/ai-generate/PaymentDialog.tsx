import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Package, Image, Video, Smile, Smartphone, CreditCard, WalletCards } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

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
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  const handlePurchase = (amount: number) => {
    setSelectedPayment(amount);
  };

  const handlePaymentConfirm = () => {
    toast({
      title: "支付成功",
      description: "您已成功完成支付",
    });
    onConfirm();
    setShowPaymentPage(false);
  };

  if (showPaymentPage) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <WalletCards className="h-5 w-5 text-primary" />
              确认支付
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 my-4">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-medium">支付金额</div>
                <div className="text-primary font-medium">RMB {selectedPayment! / 10}元</div>
              </div>
              <div className="text-sm text-muted-foreground">
                将获得 {selectedPayment} 个萌爱尾波币
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button
                onClick={handlePaymentConfirm}
                className="w-full bg-primary hover:bg-primary/90"
              >
                确认支付
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPaymentPage(false)}
                className="w-full"
              >
                返回修改
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

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
            <div className="flex justify-center">
              <Button 
                onClick={() => setShowPaymentPage(true)}
                className="w-full max-w-sm bg-primary hover:bg-primary/90"
              >
                点击充值
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
