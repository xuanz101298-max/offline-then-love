import { useRef, useEffect, useState } from 'react';
import { Users, MapPin, Calendar, Smartphone, Radio } from 'lucide-react';

const groupImage = 'https://miaoda.feishu.cn/aily/api/v1/files/static/c329da87edaa428dab265dd01b2aab09_ve_miaoda';

const stats = [
  { icon: Users, number: '4男4女', label: '嘉宾配置', desc: '8位习惯了数字化的都市男女，暂别城市高频信号' },
  { icon: MapPin, number: '深圳', label: '拍摄地点', desc: '大鹏山海与客家古镇，双面深圳自然体验' },
  { icon: Calendar, number: '10天', label: '限定断联', desc: '限定断联社交实验，换一种时速看见一个人' },
  { icon: Smartphone, number: '离线', label: '核心规则', desc: '白天完全不用手机，每晚21-22点法定处理时间' },
  { icon: Radio, number: '环节', label: '不定时直播', desc: '随机时刻开启惊喜直播，捕捉最自然真实的瞬间' },
];

export default function SetupSection() {
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
    <section ref={ref} id="setup" className="w-full py-16 md:py-24">
      {/* Hero Image - 更轻盈的电影质感 */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 mb-16">
        <div className={`relative h-56 md:h-72 rounded-xl overflow-hidden transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <img src={groupImage} alt="嘉宾群体" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(35_15%_8%)] via-[hsl(35_15%_8_/0.3)] to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[hsl(35_70%_55%/0.9)] backdrop-blur-sm flex items-center justify-center">
              <Users className="w-5 h-5 text-[hsl(35_15%_8%)]" />
            </div>
            <div>
              <div className="text-xl font-medium text-white">4男4女</div>
              <div className="text-xs text-[hsl(35_20%_75%)]">8位习惯了数字化的都市男女</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header - 更简洁的标题区 */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[hsl(35_70%_55%/0.8)]">Program Setup</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-serif font-medium text-white tracking-wide">基础设定</h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[hsl(35_70%_55%/0.6)] to-transparent mx-auto mt-4" />
          <p className="mt-4 text-sm text-[hsl(35_20%_70%)] max-w-lg mx-auto leading-relaxed">邀请8位习惯了数字化、高效率沟通的都市男女，暂别城市的"高频信号"</p>
        </div>

        {/* Stats - 5列网格，更轻盈的卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group p-5 rounded-lg bg-[hsl(35_15%_12%/0.5)] backdrop-blur-sm transition-all duration-500 hover:bg-[hsl(35_15%_15%/0.6)] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-9 h-9 rounded-full bg-[hsl(35_70%_55%/0.1)] flex items-center justify-center transition-colors group-hover:bg-[hsl(35_70%_55%/0.15)]">
                  <stat.icon className="w-4 h-4 text-[hsl(35_70%_55%)]" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl font-light text-[hsl(35_70%_55%)]">{stat.number}</div>
                  <div className="text-[11px] font-medium text-white/90 uppercase tracking-wider">{stat.label}</div>
                </div>
                <p className="text-[11px] text-[hsl(35_20%_65%)] leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote - 电影感引用 */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative inline-block">
            <span className="absolute -top-4 -left-6 text-4xl text-[hsl(35_70%_55%/0.2)] font-serif">"</span>
            <p className="text-lg md:text-xl font-serif font-light italic text-white/90 tracking-wide">在奔跑的城市里，等一个慢热的拥抱</p>
            <span className="absolute -bottom-6 -right-6 text-4xl text-[hsl(35_70%_55%/0.2)] font-serif">"</span>
          </div>
          <p className="mt-6 text-xs text-[hsl(35_20%_60%)] max-w-md mx-auto leading-relaxed">习惯了微信"秒回"和"打字试探"的年轻人，当手机被收走，他们会展现出怎样的真实自我？</p>
        </div>
      </div>
    </section>
  );
}
