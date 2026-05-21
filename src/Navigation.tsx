import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';

const navItems = [
  { label: '创意', href: '#concept' },
  { label: '设定', href: '#setup' },
  { label: '场景', href: '#scenes' },
  { label: '机制', href: '#mechanism' },
  { label: '合作', href: '#partnership' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[hsl(35_15%_8_/0.9)] backdrop-blur-md border-b border-[hsl(35_15%_20%)]' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <UniversalLink to="#hero" className="font-serif font-bold text-xl text-[hsl(30_25%_96%)]">离线，然后恋爱</UniversalLink>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-sm font-medium text-[hsl(35_15%_65%)] hover:text-[hsl(35_60%_55%)] transition-colors">
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-[hsl(35_60%_55%)]">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[hsl(35_15%_8_/0.98)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-2xl font-serif text-[hsl(35_20%_96%)] hover:text-[hsl(35_60%_55%)] transition-colors">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
