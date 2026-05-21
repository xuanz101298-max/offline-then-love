import { useRef, useEffect, useState } from 'react';
import { Car, Sun, Wine, Camera } from 'lucide-react';

const carSceneImg = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80';
const sunSceneImg = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80';
const wineSceneImg = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80';
const cameraSceneImg = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80';

const rightsLevels = [
  { level: '场景级', desc: '品牌产品自然融入节目情境', examples: '自驾转场、户外防护、夜晚微醺、影像记录' },
  { level: '情绪级', desc: '品牌绑定情感高光与治愈时刻', examples: '篝火夜话、山海徒步、手写信、眼神交汇' },
  { level: 'IP级', desc: '品牌与节目IP共创疗愈生活方式', examples: '离线生活概念、慢社交路线、限定联名产品' },
];

const brandExamples = [
  { 
    icon: Car, 
    brand: '新能源汽车', 
    scene: '心动自驾线', 
    integration: '连接都市与山海的"时空隧道"。车内密闭舒适的环境是绝佳的交心场所，成为共同冒险的第一个"家"。',
    image: carSceneImg 
  },
  { 
    icon: Sun, 
    brand: '户外防晒', 
    scene: '大自然里的保护色', 
    integration: '山海装备箱里的必备品。在阳光下互相照顾的瞬间，品牌成为温暖关怀的自然表达。',
    image: sunSceneImg 
  },
  { 
    icon: Wine, 
    brand: '低度轻醺酒', 
    scene: '夜晚的松弛剂', 
    integration: '古镇离线咖啡馆与海边微醺时刻，品牌成为"卸下防备、勇敢说爱"的情感催化剂。',
    image: wineSceneImg 
  },
  { 
    icon: Camera, 
    brand: '影像手机', 
    scene: '"你眼中的我"限定相册', 
    integration: '记录没有滤镜的真实。每晚照片投影在客栈白墙，抓拍的笑容与专注的侧脸直击人心。',
    image: cameraSceneImg 
  },
];

export default function PartnershipSection() {
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
    <section ref={ref} id="partnership" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/80">Partnership</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-serif font-light text-foreground tracking-wide">品牌合作</h2>
          <div className="mt-6 w-12 h-px bg-primary/50 mx-auto" />
          <p className="mt-6 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            拒绝生硬的口播，让品牌成为"慢下来、享受生活、真诚相爱"的保障和道具
          </p>
        </div>

        {/* Rights Levels - 更轻盈的金字塔 */}
        <div className={`max-w-lg mx-auto mb-16 transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-4">
            {rightsLevels.map((item, index) => (
              <div
                key={item.level}
                className="text-center py-4 transition-all duration-500"
                style={{ 
                  marginLeft: `${(2 - index) * 24}px`, 
                  marginRight: `${(2 - index) * 24}px`,
                  opacity: 1 - index * 0.15
                }}
              >
                <div className={`text-sm font-medium ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                  {item.level}
                </div>
                <div className="text-xs text-muted-foreground/70 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Examples - 电影质感卡片 */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandExamples.map((example, index) => (
              <div
                key={example.brand}
                className="group transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={example.image} 
                    alt={example.scene} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary">
                      <example.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{example.brand}</div>
                      <div className="text-xs text-primary/80">{example.scene}</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-2 border-l border-primary/20">
                  {example.integration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition - 简洁收尾 */}
        <div className={`text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl font-serif font-light italic text-foreground/90 leading-relaxed">
            "让品牌成为<span className="text-primary">疗愈生活方式</span>的一部分"
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground/80 tracking-wide">
            {['自然融入剧情', '情感绑定场景', '真实感无脚本'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
