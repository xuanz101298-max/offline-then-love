import { useRef, useEffect, useState } from 'react';

const bgImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80';
const businessQrCode = 'https://miaoda.feishu.cn/aily/api/v1/feisuda/attachments/45616d72-5bb4-47d0-83d6-0e504d77d387/raw';
const castingQrCode = 'https://miaoda.feishu.cn/aily/api/v1/feisuda/attachments/4766e9fb-2c48-496b-bead-271ef6139a4e/raw';

export default function EndingSection() {
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
    <section ref={ref} id="ending" className="w-full min-h-[80vh] flex items-center justify-center py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(35_20%_15_/0.6)] via-[hsl(35_15%_10_/0.75)] to-[hsl(35_10%_8_/0.9)]" />

      <div className="max-w-4xl mx-auto px-8 md:px-12 text-center relative z-10">
        {/* Slogan */}
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light italic text-white/95 leading-relaxed tracking-wide">
            在奔跑的城市里，<br />
            等一个慢热的拥抱。
          </p>
        </div>

        {/* Soft Divider */}
        <div className={`my-16 transition-all duration-1000 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-auto" />
        </div>

        {/* Text */}
        <div className={`space-y-4 transition-all duration-1000 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-base md:text-lg font-light text-white/70 tracking-wide">暂别城市的"高频信号"，换一种时速</p>
          <p className="text-base md:text-lg font-light text-white/70">
            在古镇与海边的10天里<br />
            真正看见一个人，听清一颗心
          </p>
        </div>

        {/* Project Logo - Minimal */}
        <div className={`mt-20 transition-all duration-1000 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-3xl md:text-4xl font-serif font-light tracking-wide text-white mb-2">离线，然后恋爱</div>
          <div className="text-sm tracking-[0.3em] uppercase text-white/50">Offline & Love</div>
        </div>

        {/* Location Tags - Minimal */}
        <div className={`mt-8 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {['大鹏所城', '甘坑古镇', '径口古镇', '西涌', '桔钓沙'].map((loc) => (
            <span key={loc} className="text-xs text-white/40 tracking-wider">{loc}</span>
          ))}
        </div>

        {/* QR Codes - Clean Design */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 delay-600 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {[
            { img: businessQrCode, title: '商务合作', subtitle: 'Business Cooperation' },
            { img: castingQrCode, title: '选角导演', subtitle: 'Casting Director' },
          ].map((qr) => (
            <div key={qr.title} className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-lg bg-white/5 backdrop-blur-sm overflow-hidden mb-4 p-2">
                <img src={qr.img} alt={qr.title} className="w-full h-full object-cover rounded" />
              </div>
              <div className="text-sm font-light text-white/80">{qr.title}</div>
              <div className="text-xs mt-1 text-white/40 tracking-wider">{qr.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Company - Minimal */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-sm text-white/50 tracking-wider">
            制作方 · 上海整挺好文化传媒有限公司
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 transition-all duration-1000 delay-800 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-white/30 tracking-wider">© 2026 离线，然后恋爱 · 限定断联社交实验</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(35_10%_8%)] to-transparent pointer-events-none" />
    </section>
  );
}
