import { useRef, useEffect, useState } from 'react';
import { Play, Scissors, Hash, Archive } from 'lucide-react';

const distributionBg = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80';

const phases = [
  { id: 1, icon: Play, title: '正片上线', subtitle: '长视频平台首发', actions: ['每周固定时段更新', '会员抢先看机制', '弹幕互动引导'], platforms: ['腾讯视频', '爱奇艺', '优酷'] },
  { id: 2, icon: Scissors, title: '切片分发', subtitle: '短视频平台二次传播', actions: ['离线戒断反应片段', '匿名黑板修罗场', '古镇vs海边反差'], platforms: ['抖音', '快手', '视频号'] },
  { id: 3, icon: Hash, title: '话题运营', subtitle: '社交媒体话题引爆', actions: ['#深圳搞钱男女恋爱', '#离线10天挑战', '#古镇慢生活'], platforms: ['微博', '小红书', 'B站'] },
  { id: 4, icon: Archive, title: '长尾沉淀', subtitle: '内容资产持续发酵', actions: ['深圳文旅路线种草', '慢生活理念延续', '线下体验店联动'], platforms: ['全平台分发'] },
];

export default function DistributionSection() {
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
    <section ref={ref} id="distribution" className="w-full py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={distributionBg} alt="传播策略背景" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180_30%_12_/0.95)] via-[hsl(180_30%_12_/0.9)] to-[hsl(180_30%_12_/0.95)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(45_90%_60%)]">Distribution Strategy</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-serif font-bold text-white">传播规划</h2>
          <div className="mt-4 w-16 h-0.5 bg-[hsl(45_90%_60%)] mx-auto" />
          <p className="mt-4 text-base text-[hsl(40_20%_75%)] max-w-2xl mx-auto">全周期内容运营策略，从首播引爆到长尾沉淀</p>
        </div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`group relative p-6 rounded-2xl border border-[hsl(180_20%_20%)] bg-[hsl(180_25%_18%)] transition-all duration-700 hover:border-[hsl(45_90%_60_/0.3)] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[hsl(45_90%_60%)] flex items-center justify-center">
                <span className="text-sm font-bold text-[hsl(180_30%_12%)]">{phase.id}</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-[hsl(45_90%_60_/0.1)] border border-[hsl(45_90%_60_/0.2)] flex items-center justify-center mb-4">
                <phase.icon className="w-7 h-7 text-[hsl(45_90%_60%)]" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-white mb-1">{phase.title}</h3>
              <p className="text-sm text-[hsl(45_90%_60%)] mb-4">{phase.subtitle}</p>
              <ul className="space-y-2 mb-4">
                {phase.actions.map((action) => (
                  <li key={action} className="flex items-start gap-2 text-sm text-[hsl(40_20%_75%)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(45_90%_60_/0.5)] mt-1.5 shrink-0" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[hsl(180_20%_20%)]">
                <p className="text-xs text-[hsl(40_20%_60%)] mb-2">主要平台</p>
                <div className="flex flex-wrap gap-2">
                  {phase.platforms.map((p) => (
                    <span key={p} className="px-2 py-1 text-xs rounded-full bg-[hsl(180_22%_16%)] text-[hsl(40_20%_75%)] border border-[hsl(180_20%_20%)]">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[hsl(180_25%_18%)] border border-[hsl(180_20%_20%)]">
            <span className="w-2 h-2 rounded-full bg-[hsl(45_90%_60%)]" />
            <span className="text-sm text-[hsl(40_20%_75%)]">
              预计全网总播放量 <strong className="text-[hsl(45_90%_60%)]">30亿+</strong> · 话题阅读量 <strong className="text-[hsl(45_90%_60%)]">80亿+</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
