
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Package, Crown, Sparkles, WalletCards } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const PackageSelection = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('basic');
  const [showCoinDialog, setShowCoinDialog] = useState(false);

  const handleConfirmPackage = () => {
    setShowCoinDialog(true);
  };

  const handlePurchaseCoins = (amount: number, price: number) => {
    setShowCoinDialog(false);
    toast({
      title: "购买成功",
      description: `您已成功购买 ${amount} 个萌爱尾波币`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3">选择您的专属记忆套装</h1>
        <p className="text-muted-foreground">为您的爱宠创造永恒回忆</p>
      </div>

      <RadioGroup
        defaultValue="basic"
        onValueChange={setSelectedPackage}
        className="grid gap-6"
      >
        <div className={`relative flex flex-col rounded-lg border p-6 shadow hover:shadow-md transition-shadow
          ${selectedPackage === 'basic' ? 'border-primary bg-primary/5' : 'border-border'}`}
        >
          <RadioGroupItem value="basic" id="basic" className="absolute right-4 top-4" />
          <div className="flex items-center gap-3 mb-4">
            <Package className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">基础记忆库</h3>
          </div>
          <p className="text-2xl font-bold text-primary mb-4">666 萌爱尾波币</p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              8张精美照片
            </li>
            <li className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              1个电子相册视频
            </li>
          </ul>
        </div>

        <div className={`relative flex flex-col rounded-lg border p-6 shadow hover:shadow-md transition-shadow
          ${selectedPackage === 'pro' ? 'border-primary bg-primary/5' : 'border-border'}`}
        >
          <RadioGroupItem value="pro" id="pro" className="absolute right-4 top-4" />
          <div className="flex items-center gap-3 mb-4">
            <Crown className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Pro记忆库</h3>
          </div>
          <p className="text-2xl font-bold text-primary mb-4">999 萌爱尾波币</p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              8张精美照片
            </li>
            <li className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              1个电子相册视频
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              8个爱宠表情包
            </li>
            <li className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              2张手机屏保
            </li>
          </ul>
        </div>
      </RadioGroup>

      <div className="mt-8 text-center">
        <Button 
          onClick={handleConfirmPackage}
          className="w-full max-w-sm bg-primary hover:bg-primary/90"
        >
          确认选择
        </Button>
      </div>

      <Dialog open={showCoinDialog} onOpenChange={setShowCoinDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <WalletCards className="h-5 w-5 text-primary" />
              购买萌爱尾波币
            </DialogTitle>
            <DialogDescription>
              选择适合您的充值方案
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <button
              onClick={() => handlePurchaseCoins(800, 80)}
              className="flex items-center justify-between p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <WalletCards className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium">800 尾波币</p>
                  <p className="text-sm text-muted-foreground">基础充值包</p>
                </div>
              </div>
              <p className="font-bold">￥80</p>
            </button>

            <button
              onClick={() => handlePurchaseCoins(2000, 160)}
              className="flex items-center justify-between p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <WalletCards className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium">2000 尾波币</p>
                  <p className="text-sm text-muted-foreground">超值充值包</p>
                </div>
              </div>
              <p className="font-bold">￥160</p>
            </button>

            <button
              onClick={() => handlePurchaseCoins(5000, 350)}
              className="flex items-center justify-between p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <WalletCards className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium">5000 尾波币</p>
                  <p className="text-sm text-muted-foreground">豪华充值包</p>
                </div>
              </div>
              <p className="font-bold">￥350</p>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PackageSelection;
