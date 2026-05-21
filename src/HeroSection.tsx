import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const heroBgImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById('concept')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="hero" className="w-full min-h-full relative flex flex-col justify-center items-center overflow-hidden">
      {/* Background with cinematic treatment */}
      <div className="absolute inset-0">
        <img 
          src={heroBgImage} 
          alt="深圳山海" 
          className="w-full h-full object-cover scale-105" 
          style={{ filter: 'saturate(0.85) contrast(0.95)' }}
        />
        {/* Soft cinematic gradient - warmer and lighter */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30_20%_15%/0.4)] via-[hsl(35_15%_20%/0.3)] to-[hsl(40_20%_12%/0.85)]" />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(30_15%_8%/0.4)_100%)]" />
      </div>

      {/* Floating dust particles - subtle and dreamy */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[hsl(40_60%_70%/0.4)]"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 15}%`,
              animation: `float ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content - airy and cinematic */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-24 flex flex-col items-center text-center">
        {/* Top label */}
        <div className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[11px] font-light tracking-[0.4em] uppercase text-[hsl(40_40%_70%)]">
            深圳 · 大鹏山海 · 限定断联实验
          </span>
        </div>

        {/* Main title - softer and more elegant */}
        <h1 
          className={`mt-8 text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white/95 transition-all duration-1000 delay-200 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontFamily: 'Georgia, "Noto Serif SC", serif', letterSpacing: '0.05em' }}
        >
          离线，然后恋爱
        </h1>

        {/* English subtitle */}
        <p 
          className={`mt-4 text-xs md:text-sm text-[hsl(35_30%_65%)] tracking-[0.3em] uppercase font-light transition-all duration-1000 delay-300 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          Offline & Love
        </p>

        {/* Tagline - softer */}
        <p 
          className={`mt-6 text-sm md:text-base font-light text-[hsl(40_20%_80%)] max-w-lg tracking-wide transition-all duration-1000 delay-400 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          10天限定断联社交实验
        </p>

        {/* Main slogan - cinematic quote style */}
        <div 
          className={`mt-16 max-w-2xl transition-all duration-1000 delay-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative">
            {/* Decorative lines */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[hsl(40_40%_60%/0.5)] to-transparent" />
            
            <p 
              className="text-xl md:text-2xl lg:text-3xl font-light italic text-white/90 leading-relaxed tracking-wide"
              style={{ fontFamily: 'Georgia, "Noto Serif SC", serif' }}
            >
              在奔跑的城市里，
              <br className="hidden md:block" />
              等一个慢热的拥抱。
            </p>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[hsl(40_40%_60%/0.5)] to-transparent" />
          </div>
        </div>

        {/* Style tags - minimal */}
        <div 
          className={`mt-20 flex items-center gap-8 transition-all duration-1000 delay-600 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {['电影质感', '低饱和暖调', '纪实风'].map((tag, i) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="text-[10px] text-[hsl(40_25%_60%)] tracking-[0.2em] uppercase">{tag}</span>
              {i < 2 && <span className="w-1 h-1 rounded-full bg-[hsl(40_30%_50%/0.4)]" />}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator - subtle */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer transition-all duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={scrollToNext}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[hsl(40_20%_60%)]">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[hsl(40_30%_60%)] animate-bounce" />
      </div>

      {/* Soft bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(35_18%_10%)] to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
