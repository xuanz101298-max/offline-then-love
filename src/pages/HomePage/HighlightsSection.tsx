import { useRef, useEffect, useState } from 'react';
import { WifiOff, Mail, Eye, MapPin, Flame } from 'lucide-react';

const highlightsBg = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80';

const highlights = [
  {
    icon: WifiOff,
    title: '数字戒断社死现场',
    subtitle: '失去"表情包"后的人类有多笨拙',
    desc: '当"在吗"没有了表情包兜底，当好感不能靠"朋友圈点赞"试探，习惯了数字化社交的嘉宾们，会在镜头前暴露出最真实的社交焦虑。那些手足无措的沉默、笨拙的找话题、以及一个眼神就脸红的瞬间，将成为观众最有共鸣的"世另我"时刻。',
    keywords: ['社死', '笨拙', '共鸣'],
  },
  {
    icon: Mail,
    title: '手写信修罗场',
    subtitle: '双向奔赴还是单向暗恋',
    desc: '每天清晨的邮筒开箱时刻，是全天的情绪高点。谁给谁写了信？谁没有收到回信？当A给B写信、B给C写信的"错位好感"出现时，那种青春期才有的酸涩感将通过特写镜头无限放大。没有观察室打断，观众自己品。',
    keywords: ['修罗场', '错位', '酸涩'],
  },
  {
    icon: Eye,
    title: '眼神接触大挑战',
    subtitle: '现代人最怕的"空气突然安静"',
    desc: '篝火旁的10分钟沙漏倒计时，两个人只能看着对方聊天。没有手机救场，没有"我去下洗手间"的借口。最初的尴尬、中场的偷笑、最后的情不自禁——这种被迫的"凝视"，反而让最真实的情绪无处躲藏。',
    keywords: ['凝视', '尴尬', '真实'],
  },
  {
    icon: MapPin,
    title: '都市人生存能力大考验',
    subtitle: '现金买菜、生火做饭的翻车现场',
    desc: '当习惯了外卖和扫码支付的都市精英，突然要用现金跟古镇阿婆讨价还价、要在土灶上生火做饭——那些生活技能的缺失、厨房里的手忙脚乱、以及"黑暗料理"的诞生，将带来最真实的笑料和化学反应。',
    keywords: ['翻车', '技能', '笑料'],
  },
  {
    icon: Flame,
    title: '不定时直播突袭',
    subtitle: '当直播镜头突然亮起的那一刻',
    desc: '没有预告，没有剧本，直播镜头会在最意想不到的时刻亮起——可能是深夜的一场真心话，可能是清晨的一次偶遇。这种"突袭感"让嘉宾无法预设表现，观众也将见证最自然、最意外的情感瞬间。',
    keywords: ['突袭', '自然', '意外'],
  },
];

export default function HighlightsSection() {
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

  const highlightKeyword = (text: string, keywords: string[]) => {
    let result = text;
    keywords.forEach((kw) => {
      result = result.replace(new RegExp(kw, 'g'), `<span class="text-[hsl(35_60%_55%)]">${kw}</span>`);
    });
    return result;
  };

  return (
    <section ref={ref} id="highlights" className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 opacity-8">
        <img src={highlightsBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[hsl(35_15%_8_/0.85)]" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header - airy and cinematic */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[hsl(35_50%_55%)] font-light">Highlights</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-serif font-light text-white tracking-wide">核心爆点</h2>
          <div className="mt-6 w-12 h-px bg-[hsl(35_50%_55%/0.5)] mx-auto" />
          <p className="mt-6 text-sm text-[hsl(35_10%_65%)] max-w-md mx-auto font-light leading-relaxed">
            五个情绪看点，来自现代人面对"慢下来"时的心理博弈
          </p>
        </div>

        {/* List - minimal cinematic style */}
        <div className="space-y-8">
          {highlights.map((h, index) => (
            <div
              key={h.title}
              className={`group relative py-8 border-b border-[hsl(35_15%_20%/0.3)] transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                {/* Number - large and subtle */}
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-6xl font-serif font-light text-[hsl(35_50%_55%/0.15)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  {/* Title row */}
                  <div className="flex flex-wrap items-baseline gap-3 mb-4">
                    <h3 className="text-lg md:text-xl font-serif font-light text-white tracking-wide">{h.title}</h3>
                    <span className="text-xs text-[hsl(35_50%_55%)] font-light tracking-wider">{h.subtitle}</span>
                  </div>

                  {/* Description - airy */}
                  <p 
                    className="text-sm text-[hsl(35_10%_70%)] font-light leading-loose"
                    dangerouslySetInnerHTML={{ __html: highlightKeyword(h.desc, h.keywords) }} 
                  />

                  {/* Keywords - subtle tags */}
                  <div className="flex flex-wrap gap-3 mt-5">
                    {h.keywords.map((kw) => (
                      <span 
                        key={kw} 
                        className="text-[10px] tracking-wider text-[hsl(35_10%_50%)] uppercase"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Icon - minimal */}
                <div className="flex-shrink-0 hidden md:flex">
                  <h.icon className="w-5 h-5 text-[hsl(35_50%_55%/0.4)]" strokeWidth={1} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote - cinematic */}
        <div className={`mt-20 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl font-serif font-light italic text-[hsl(35_15%_85%)] tracking-wide">
            "不制造狗血的手撕，只捕捉真实的呼吸"
          </p>
        </div>
      </div>
    </section>
  );
}
