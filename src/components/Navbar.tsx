
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Switch } from "@/components/ui/switch";

export function Navbar({ autoPainMode, setAutoPainMode }: { 
  autoPainMode: boolean; 
  setAutoPainMode: (value: boolean) => void;
}) {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <nav className="fixed bg-[#DCDCDC] top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 px-4 border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-md text-gray-600 whitespace-nowrap">
            {language === 'zh' ? '自动痛苦模式' : 'Auto-Pain Mode'}:
          </span>
          <Switch 
            checked={autoPainMode} 
            onCheckedChange={setAutoPainMode}
            className="data-[state=checked]:bg-pink-500 bg-[#CDCDCD]"
          />
        </div>
        
        <Button 
          variant="ghost" 
          size="lg" 
          onClick={toggleLanguage}
          className="hover:bg-pink-100 border-2 hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow"
        >
          <Languages className="w-5 h-5 mr-2" />
          {language === 'zh' ? 'EN' : '中文'}
        </Button>
      </div>
    </nav>
  );
}
