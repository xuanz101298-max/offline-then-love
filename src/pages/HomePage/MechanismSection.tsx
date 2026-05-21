import { useRef, useEffect, useState } from 'react';
import { SmartphoneIcon, MailIcon, FlameIcon } from 'lucide-react';

const mechanismBg = 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80';

const mechanisms = [
  {
    icon: SmartphoneIcon,
    title: '离线时间',
    subtitle: 'Offline Hour',
    desc: '嘉宾白天完全不使用手机。每晚21点-22点为"法定离线处理时间"，可处理必要的生活/工作事务，其余时间手机封存。',
    highlight: '习惯了微信"秒回"和"打字试探"的年轻人，突然失去了网络保护壳。他们必须学着用眼神、语气、肢体语言去表达好感。这种"戒断反应"带来的羞涩、笨拙和直接，是无脚本真人秀最迷人的高光。',
  },
  {
    icon: MailIcon,
    title: '手写信与慢递邮筒',
    subtitle: 'Slow Mail',
    desc: '每天深夜，古镇客栈或海边营地会设立一个"离线邮筒"。嘉宾必须用纸笔，给今天心动或想对话的异性写一封信（可以匿名，也可以署名）。',
    highlight: '见字如面。现代人很久没有感受过"等待回信"的焦虑与期盼了。第二天清晨，嘉宾去邮筒取信时的表情，以及由于文字的含蓄产生的误会与澄清，将成为推动剧情的核心线索。',
  },
  {
    icon: FlameIcon,
    title: '篝火夜话与真心话沙漏',
    subtitle: 'Campfire Truth',
    desc: '在海边露营时，放置一个10分钟的巨型沙漏。沙漏倒计时期间，两个人必须并肩坐在篝火旁，不能看手机，只能看着对方聊天。',
    highlight: '强行打破社交安全距离。现代人最怕"空气突然安静"，但在海浪声和火光中，最初的尴尬过去后，往往会流露出最真诚的脆弱（如：在外打拼的孤独、对亲密关系的渴望），从而达成深度共情。',
  },
];

export default function MechanismSection() {
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
    <section ref={ref} id="mechanism" className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={mechanismBg} alt="机制背景" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(35_20%_10_/0.95)] via-[hsl(35_18%_9_/0.9)] to-[hsl(35_20%_10_/0.95)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-[hsl(35_60%_55%)]">Mechanism Design</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-serif font-light text-white tracking-wide">真实冲突与看点设计</h2>
          <div className="mt-6 w-12 h-px bg-[hsl(35_60%_55%)/0.5] mx-auto" />
          <p className="mt-6 text-base text-[hsl(35_15%_65%)] max-w-2xl mx-auto leading-relaxed font-light">
            没有观察室的评判，我们不制造狗血的手撕和刻意的雌竞。<br className="hidden md:block" />
            所有的"看点"都来自习惯高效的现代人，在面对"慢下来"时的心理博弈。
          </p>
        </div>

        {/* Cards - 更轻盈的设计 */}
        <div className="space-y-8">
          {mechanisms.map((m, index) => (
            <div
              key={m.title}
              className={`group relative p-8 md:p-10 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* 轻盈的分隔线 */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(35_30%_30%/0.3)] to-transparent" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* 图标 - 更简约 */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[hsl(35_40%_25%/0.15)] flex items-center justify-center">
                  <m.icon className="w-6 h-6 text-[hsl(35_60%_55%)]" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1">
                  {/* 标题区 */}
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-serif font-light text-white tracking-wide">{m.title}</h3>
                    <span className="text-xs tracking-[0.15em] uppercase text-[hsl(35_50%_50%)/0.7]">{m.subtitle}</span>
                  </div>
                  
                  {/* 描述 */}
                  <p className="text-[hsl(35_15%_70%)] mb-5 leading-relaxed font-light">{m.desc}</p>
                  
                  {/* 看点 - 更柔和的强调 */}
                  <div className="relative pl-4 border-l border-[hsl(35_40%_35%/0.3)]">
                    <p className="text-sm text-[hsl(35_20%_60%)] leading-relaxed italic font-light">
                      {m.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`mt-16 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-[hsl(35_15%_50%)] font-light italic tracking-wide">
            让真实的心理博弈，成为最动人的剧情
          </p>
        </div>
      </div>
    </section>
  );
}
