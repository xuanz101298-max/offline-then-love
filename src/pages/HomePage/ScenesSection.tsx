import { useRef, useEffect, useState } from 'react';
import { Home, Waves, UtensilsCrossed, Palette, MapPin, Footprints } from 'lucide-react';

const ancientTownImage = 'https://miaoda.feishu.cn/aily/api/v1/files/static/cc8af488555c404db318c83fc153e22d_ve_miaoda';
const beachImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
const workshopImage = 'https://miaoda.feishu.cn/aily/api/v1/files/static/fd2a5078fdf24f5cbf4950aa7949cc50_ve_miaoda';
const campingImage = 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80';

export default function ScenesSection() {
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
    <section ref={ref} id="scenes" className="w-full py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header - 更轻盈的电影标题 */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-light tracking-[0.3em] uppercase text-[hsl(35_70%_55%)]">Scenes</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-serif font-light text-white tracking-wide">核心情境设计</h2>
          <div className="w-12 h-px bg-[hsl(35_70%_55%/0.5)] mx-auto mt-6" />
          <p className="mt-6 text-base font-light text-[hsl(35_15%_65%)] max-w-xl mx-auto leading-relaxed">从"方寸屏幕"到"辽阔山海"，物理空间的降噪让深度接触自然发生</p>
        </div>

        {/* Phase 1: Ancient Town - 更轻盈的设计 */}
        <div className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img src={ancientTownImage} alt="大鹏古镇" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Home className="w-3 h-3 text-[hsl(35_70%_55%)]" />
                <span className="text-xs font-light text-white">阶段一</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-xs font-light tracking-[0.2em] uppercase text-[hsl(35_70%_55%)]">Day 1-4</span>
                <h3 className="mt-2 text-xl font-serif font-light text-white">大鹏古镇 · 附近的复兴</h3>
              </div>
              <p className="text-sm font-light text-[hsl(35_15%_65%)] leading-relaxed">
                拍摄地：大鹏所城、甘坑古镇。青砖黛瓦的客家古镇，让习惯了数字化生活的都市人重新体验"附近"的温度。
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-px bg-[hsl(35_70%_55%/0.3)]" />
                  <div>
                    <p className="text-sm font-light text-[hsl(35_20%_75%)] leading-relaxed">
                      <span className="text-[hsl(35_70%_55%)]">没有数字支付的旧时光：</span>
                      收起手机，每天发放有限现金。手写菜单、跟古镇阿婆聊天买菜、共同生火做饭，在柴米油盐中重建"附近感"。
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-px bg-[hsl(35_70%_55%/0.3)]" />
                  <div>
                    <p className="text-sm font-light text-[hsl(35_20%_75%)] leading-relaxed">
                      <span className="text-[hsl(35_70%_55%)]">古镇非遗手作搭子：</span>
                      两人一组体验客家草帽编织、陶艺或茶果制作。指尖碰撞间，真实的性格开始展现。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Beach */}
        <div className={`mb-16 transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div>
                <span className="text-xs font-light tracking-[0.2em] uppercase text-[hsl(35_70%_55%)]">Day 5-10</span>
                <h3 className="mt-2 text-xl font-serif font-light text-white">蓝色海岸 · 心动的同频</h3>
              </div>
              <p className="text-sm font-light text-[hsl(35_15%_65%)] leading-relaxed">
                拍摄地：桔钓沙（果冻海）、西涌、深圳天文台海岸线。从古镇的含蓄走向海边的开阔，自然成为情感催化剂。
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-px bg-[hsl(35_70%_55%/0.3)]" />
                  <div>
                    <p className="text-sm font-light text-[hsl(35_20%_75%)] leading-relaxed">
                      <span className="text-[hsl(35_70%_55%)]">山海徒步与盲盒互助：</span>
                      在最美海岸线徒步，部分路段需要两人携手攀爬。身体的无意识靠近让信任感成倍放大。
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-px bg-[hsl(35_70%_55%/0.3)]" />
                  <div>
                    <p className="text-sm font-light text-[hsl(35_20%_75%)] leading-relaxed">
                      <span className="text-[hsl(35_70%_55%)]">海边浪潮实验：</span>
                      共同完成桨板滑行或帆船出海，在海浪的起伏中探讨深度的情感观与未来向往。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative aspect-[4/3] rounded-lg overflow-hidden">
              <img src={beachImage} alt="深圳海滩" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Waves className="w-3 h-3 text-[hsl(35_70%_55%)]" />
                <span className="text-xs font-light text-white">阶段二</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Cards - 更电影感的横向布局 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`group transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
              <img src={workshopImage} alt="古镇生活" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-light tracking-wider text-[hsl(35_70%_55%)]">平价时光与柴米油盐</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[hsl(35_15%_55%)]">
                <MapPin className="w-3 h-3" />
                <span>大鹏所城 / 甘坑古镇 / 径口古镇</span>
              </div>
              <p className="text-sm font-light text-[hsl(35_15%_65%)] leading-relaxed">慢节奏的古镇打破都市人的"社交伪装"。在烟火气里，真实的性格和久违的"附近感"开始复苏。</p>
            </div>
          </div>
          <div className={`group transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
              <img src={campingImage} alt="海边露营" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-light tracking-wider text-[hsl(35_70%_55%)]">自然疗愈与荷尔蒙共振</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[hsl(35_15%_55%)]">
                <MapPin className="w-3 h-3" />
                <span>桔钓沙 / 西涌 / 天文台</span>
              </div>
              <p className="text-sm font-light text-[hsl(35_15%_65%)] leading-relaxed">海浪、日落、海风是天然的催化剂。让人的情绪变得柔软、真诚，适合探讨深度的情感观。</p>
            </div>
          </div>
        </div>

        {/* 备选地点提及 */}
        <div className={`mt-16 text-center transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs font-light text-[hsl(35_15%_50%)] tracking-wider">
            其他备选拍摄地：较场尾、杨梅坑、七娘山
          </p>
        </div>
      </div>
    </section>
  );
}
