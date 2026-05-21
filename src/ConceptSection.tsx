import { useRef, useEffect, useState } from 'react';
import { Smartphone, X, Check, MapPin, Heart } from 'lucide-react';

const digitalLifeImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';
const offlineLifeImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';

const digitalModeItems = [
  '微信秒回、打字试探、表情包试探',
  '数字化社交，效率至上',
  '约会先查LinkedIn，恋爱像在面试',
  '24小时在线，却从不真正看见对方',
];

const offlineModeItems = [
  '手写信件、眼神交汇、肢体语言表达',
  '面对面真实社交，感受呼吸与温度',
  '没有简历包装，只有灵魂碰撞',
  '10天限定断联，听清一颗心',
];

export default function ConceptSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="concept" className="w-full py-16 md:py-24 bg-[hsl(35_15%_8%)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-light tracking-[0.3em] uppercase text-[hsl(35_60%_55%)]">Core Concept</span>
          <h2 className="mt-4 text-2xl md:text-4xl font-serif font-light text-white tracking-wide">核心概念</h2>
          <div className="mt-6 w-12 h-px bg-[hsl(35_60%_55%/0.5)] mx-auto" />
          <p className="mt-8 text-base md:text-lg text-[hsl(35_20%_70%)] max-w-2xl mx-auto leading-relaxed font-light">
            10天"限定断联"社交实验。邀请8位习惯了数字化、高效率沟通的都市男女，暂别城市的"高频信号"，在深圳最美的大鹏山海与客家古镇里，换一种时速，去真正看见一个人，听清一颗心。
          </p>
        </div>

        {/* Comparison - Lighter Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Digital Mode */}
          <div className={`relative group transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg">
              <img src={digitalLifeImage} alt="数字化生活" className="w-full h-48 object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(35_15%_8%)] via-[hsl(35_15%_8%/0.8)] to-transparent" />
            </div>
            <div className="relative -mt-12 px-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[hsl(35_20%_20%)] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-[hsl(35_20%_50%)]" />
                </div>
                <div>
                  <h3 className="text-base font-serif text-[hsl(35_20%_60%)]">方寸屏幕</h3>
                  <span className="text-xs text-[hsl(35_20%_40%)] tracking-wider font-light">DIGITAL</span>
                </div>
              </div>
              <ul className="space-y-3">
                {digitalModeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <X className="w-4 h-4 text-[hsl(35_20%_40%)] mt-0.5 shrink-0" />
                    <span className="text-[hsl(35_20%_55%)] font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Offline Mode */}
          <div className={`relative group transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg">
              <img src={offlineLifeImage} alt="离线生活" className="w-full h-48 object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(35_15%_8%)] via-[hsl(35_15%_8%/0.7)] to-transparent" />
            </div>
            <div className="relative -mt-12 px-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[hsl(35_60%_55_/0.15)] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[hsl(35_60%_55%)]" />
                </div>
                <div>
                  <h3 className="text-base font-serif text-white">辽阔山海</h3>
                  <span className="text-xs text-[hsl(35_60%_55%)] tracking-wider font-light">OFFLINE</span>
                </div>
              </div>
              <ul className="space-y-3">
                {offlineModeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[hsl(35_60%_55%)] mt-0.5 shrink-0" />
                    <span className="text-[hsl(35_20%_80%)] font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Visual Style - Elegant Minimal */}
        <div className={`mt-20 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[hsl(35_60%_55%/0.4)]" />
            <Heart className="w-5 h-5 text-[hsl(35_60%_55%)]" />
            <span className="w-8 h-px bg-[hsl(35_60%_55%/0.4)]" />
          </div>
          <p className="text-xl md:text-2xl font-serif font-light text-white tracking-wide">
            从屏幕<span className="text-[hsl(35_60%_55%)] mx-3">·</span>到山海
          </p>
          <p className="mt-6 text-sm text-[hsl(35_20%_60%)] font-light">
            电影质感 · 低饱和暖色调 · 纪实风
          </p>
          <p className="mt-2 text-xs text-[hsl(35_20%_45%)] font-light">
            拒绝工业糖精，捕捉真实的呼吸感与眼神流转
          </p>
        </div>
      </div>
    </section>
  );
}
