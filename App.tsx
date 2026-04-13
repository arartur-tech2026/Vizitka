
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { LectureList } from './components/LectureList';
import { InteractiveList } from './components/InteractiveList';
import { InterviewList } from './components/InterviewList';
import { CourseSection } from './components/CourseSection';
import { Mail, Phone, MapPin, Link as LinkIcon, BookOpen, Award, MonitorPlay, Star, User, Presentation, LayoutDashboard, GraduationCap, Mic } from 'lucide-react';
import portraitImage from './photo.png';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: id === 'about' ? 0 : element.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 40,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A] selection:bg-[#0A2540] selection:text-white">
      
      {/* Header */}
      <header className="relative w-full h-[400px] md:h-[450px] bg-[#0A2540] overflow-hidden">
        {/* Mobile top fade overlay */}
        <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-[#0A2540] via-[#0A2540]/90 to-transparent z-10 md:hidden pointer-events-none"></div>
        
        {/* Portrait Blend */}
        <div className="absolute right-0 top-8 md:top-0 bottom-0 w-full md:w-[80%] pointer-events-none flex justify-end">
          <img 
            src={portraitImage} 
            alt="Portrait" 
            className="h-full w-auto object-contain object-right-bottom" 
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%)'
            }}
          />
        </div>

        <div className="relative z-20 container mx-auto px-8 md:px-12 h-full flex flex-col justify-between pt-6 pb-3 md:pt-10 md:pb-10">
          <div className="mt-0 w-full md:w-auto self-center md:self-start px-4 md:px-0">
            <a 
              href="https://znanierussia.ru/speakers/79395?letter=Ш"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full md:w-auto px-2 py-2 md:px-4 md:py-2 mb-0 border border-[#D4AF37] bg-white/5 backdrop-blur-md rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="text-[#D4AF37] tracking-[0.1em] md:tracking-[0.2em] uppercase text-[clamp(9px,3vw,12px)] md:text-xs font-bold text-center whitespace-nowrap">Лектор общества «Знание»</span>
            </a>
          </div>
          <div className="mb-0 max-w-[85%] md:max-w-none relative z-30">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-1 md:mb-2 lg:mb-4 leading-tight drop-shadow-lg">
              Шармоянц Артур
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 font-light max-w-2xl drop-shadow-md">
              Лектор & Кандидат юридических наук
            </p>
          </div>
        </div>

        {/* Gold Bottom Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37] z-30"></div>
      </header>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* Left Sidebar */}
        <aside className="w-full md:w-[260px] lg:w-[360px] bg-[#1C1C1C] text-white p-8 md:p-6 lg:p-10 shrink-0 border-r border-[#2A2A2A] md:sticky md:top-0 md:h-screen md:overflow-y-auto custom-scrollbar flex flex-col">
          <div className="md:pt-4 lg:pt-8 flex flex-col h-full">
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-4 lg:mb-6 border-b border-[#D4AF37]/30 pb-3 lg:pb-4">Навигация</h3>
              <nav className="space-y-3 lg:space-y-4 mb-8 lg:mb-16">
                <a href="#about" className="block text-base lg:text-lg font-serif text-gray-300 hover:text-[#D4AF37] transition-colors">Обо мне</a>
                <a href="#lectures" className="block text-base lg:text-lg font-serif text-gray-300 hover:text-[#D4AF37] transition-colors">Лекции</a>
                <a href="#interactives" className="block text-base lg:text-lg font-serif text-gray-300 hover:text-[#D4AF37] transition-colors">Интерактивы</a>
                <a href="#course" className="block text-base lg:text-lg font-serif text-gray-300 hover:text-[#D4AF37] transition-colors">Курс</a>
                <a href="#interviews" className="block text-base lg:text-lg font-serif text-gray-300 hover:text-[#D4AF37] transition-colors">Интервью</a>
              </nav>
            </div>

            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-4 lg:mb-6 border-b border-[#D4AF37]/30 pb-3 lg:pb-4">Контакты</h3>
              <div className="space-y-4 lg:space-y-6 text-xs lg:text-sm text-gray-400">
                <a href="tel:+79780993303" className="flex items-center gap-3 lg:gap-4 hover:text-white transition-colors group">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors text-[#D4AF37] shrink-0">
                    <Phone size={12} className="lg:w-[14px] lg:h-[14px]" />
                  </div>
                  <span>+7 (978) 099-33-03</span>
                </a>
                <a href="mailto:sharmar@yandex.ru" className="flex items-center gap-3 lg:gap-4 hover:text-white transition-colors group">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors text-[#D4AF37] shrink-0">
                    <Mail size={12} className="lg:w-[14px] lg:h-[14px]" />
                  </div>
                  <span className="break-all">sharmar@yandex.ru</span>
                </a>
                <a href="https://vk.com/shartur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 lg:gap-4 hover:text-white transition-colors group">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors text-[#D4AF37] shrink-0">
                    <LinkIcon size={12} className="lg:w-[14px] lg:h-[14px]" />
                  </div>
                  <span>vk.com/shartur</span>
                </a>
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5 lg:mt-1 text-[#D4AF37]">
                    <MapPin size={12} className="lg:w-[14px] lg:h-[14px]" />
                  </div>
                  <span className="leading-relaxed mt-1 lg:mt-1.5">Симферополь, пр. Вернадского 4, каб. 105В</span>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-16 p-4 lg:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0A2540] rounded-full blur-2xl -mr-10 -mt-10 opacity-50"></div>
              <h4 className="font-serif text-base lg:text-lg text-white mb-3 lg:mb-4 relative z-10">Техническое оснащение</h4>
              <ul className="space-y-2 lg:space-y-3 text-[10px] lg:text-xs text-gray-400 relative z-10">
                <li className="flex items-center gap-2"><Star size={10} className="text-[#0A2540] shrink-0" fill="currentColor"/> <span>Яркий проектор (3000 ANSI)</span></li>
                <li className="flex items-center gap-2"><Star size={10} className="text-[#0A2540] shrink-0" fill="currentColor"/> <span>Экран на треноге (80 дюймов)</span></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 p-6 md:p-8 lg:py-16 lg:pl-16 lg:pr-16 xl:pr-24 bg-white min-w-0 overflow-x-hidden">
          
          {/* About Section */}
          <section id="about" className="mb-32">
            <div className="flex items-center gap-4 lg:gap-6 mb-12 -ml-5 lg:ml-0">
              <div className="w-10 h-10 rounded-full bg-[#0A2540] flex items-center justify-center shadow-md shrink-0">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-tight">Обо мне</h2>
            </div>

            <div className="max-w-4xl">
              <p className="text-xl mb-12 text-gray-700 font-light leading-relaxed">
                <span className="text-7xl float-left mr-4 mt-[-16px] font-serif text-[#0A2540] font-bold">С</span> 
                2009 года я работаю в Крымском федеральном университете имени В. И. Вернадского. За это время я опубликовал более 50 научных работ и принял участие во множестве российских и международных конференций. Являюсь членом редакционной коллегии научного журнала «Ученые записки КФУ им. В. И. Вернадского, серия – Юридические науки» (ВАК).
              </p>
              
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 my-16">
                <div className="p-6 lg:p-8 bg-white border border-[#D4AF37] shadow-sm hover:shadow-md transition-shadow">
                  <BookOpen size={32} className="text-[#0A2540] mb-6" />
                  <h4 className="font-serif font-bold text-gray-900 mb-3 text-lg">Образование</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Высшее юридическое образование</p>
                </div>
                <div className="p-6 lg:p-8 bg-white border border-[#D4AF37] shadow-sm hover:shadow-md transition-shadow">
                  <Award size={32} className="text-[#0A2540] mb-6" />
                  <h4 className="font-serif font-bold text-gray-900 mb-3 text-lg">Степень</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Кандидат юридических наук, доцент</p>
                </div>
                <div className="p-6 lg:p-8 bg-white border border-[#D4AF37] shadow-sm hover:shadow-md transition-shadow">
                  <MonitorPlay size={32} className="text-[#0A2540] mb-6" />
                  <h4 className="font-serif font-bold text-gray-900 mb-3 text-lg">Стаж</h4>
                  <p className="text-sm text-gray-600 leading-relaxed break-words">Научно-педагогической работы: 15 лет</p>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-8 mt-16 border-b border-gray-200 pb-4">Достижения и проекты</h3>
              
              <div className="relative border-l border-gray-300 ml-0 lg:ml-5 space-y-10 pb-4 mt-8">
                <div className="relative pl-8 lg:pl-10">
                  <div className="absolute -left-[10px] top-1 bg-white text-[#0A2540]">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-gray-800 text-lg font-light">Победитель Всероссийского конкурса <strong className="font-semibold">«Знание.Лектор»</strong> IV сезона (2024/2025).</p>
                </div>
                <div className="relative pl-8 lg:pl-10">
                  <div className="absolute -left-[10px] top-1 bg-white text-[#0A2540]">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-gray-800 text-lg font-light">Победитель в спец. номинации <strong className="font-semibold">«Лучший преподаватель курса «Основы российской государственности»»</strong> (V сезон, 2025).</p>
                </div>
                <div className="relative pl-8 lg:pl-10">
                  <div className="absolute -left-[10px] top-1 bg-white text-[#0A2540]">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-gray-800 text-lg font-light">Победитель Всероссийского конкурса <strong className="font-semibold">«Лучший преподаватель дисциплины «Основы российской государственности» в образовательных организациях высшего образования»</strong>, Минобрнауки России, Российское общество «Знание», Москва, 2024.</p>
                </div>
                <div className="relative pl-8 lg:pl-10">
                  <div className="absolute -left-[10px] top-1 bg-white text-[#0A2540]">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-gray-800 text-lg font-light">Участие в онлайн-проекте для госслужащих «Знание. Государство» и эксперт программы «Герои Крыма».</p>
                </div>
                <div className="relative pl-8 lg:pl-10">
                  <div className="absolute -left-[10px] top-1 bg-white text-[#0A2540]">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-gray-800 text-lg font-light">Сертифицированный эксперт Академии «Меганом» (Таврида.Арт).</p>
                </div>
                <div className="relative pl-8 lg:pl-10">
                  <div className="absolute -left-[10px] top-1 bg-white text-[#0A2540]">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-gray-800 text-lg font-light">Создатель авторского онлайн-курса подготовки к ЕГЭ по Обществознанию.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Lectures Section */}
          <section id="lectures" className="mb-32">
            <div className="flex items-center gap-4 lg:gap-6 mb-16 -ml-5 lg:ml-0">
              <div className="w-10 h-10 rounded-full bg-[#0A2540] flex items-center justify-center shadow-md shrink-0">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-tight">Темы Выступлений</h2>
            </div>
            <LectureList />
          </section>

          {/* Interactives Section */}
          <section id="interactives" className="mb-32">
            <div className="flex items-center gap-4 lg:gap-6 mb-16 -ml-5 lg:ml-0">
              <div className="w-10 h-10 rounded-full bg-[#0A2540] flex items-center justify-center shadow-md shrink-0">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-tight">Интерактивы</h2>
            </div>
            <InteractiveList />
          </section>

          {/* Course Section */}
          <section id="course" className="mb-32">
            <div className="flex items-center gap-4 lg:gap-6 mb-16 -ml-5 lg:ml-0">
              <div className="w-10 h-10 rounded-full bg-[#0A2540] flex items-center justify-center shadow-md shrink-0">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-tight">Курс</h2>
            </div>
            <CourseSection />
          </section>

          {/* Interviews Section */}
          <section id="interviews" className="mb-16">
            <div className="flex items-center gap-4 lg:gap-6 mb-16 -ml-5 lg:ml-0">
              <div className="w-10 h-10 rounded-full bg-[#0A2540] flex items-center justify-center shadow-md shrink-0">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-tight">Интервью</h2>
            </div>
            <InterviewList />
          </section>

          {/* Footer */}
          <footer className="mt-32 pt-12 border-t border-gray-200 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 Шармоянц Артур. Все права защищены.</p>
            <p>Персональное портфолио лектора общества «Знание»</p>
          </footer>

        </main>
      </div>

      {/* Floating Navigation Buttons */}
      <div className="fixed bottom-6 md:bottom-72 lg:bottom-12 right-4 md:right-6 lg:right-8 z-50 pointer-events-none">
        <div className={`flex flex-col gap-3 transition-all duration-500 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}>
          <button
            onClick={() => scrollToSection('about')}
          className="p-3 bg-[#0A2540] text-white border border-[#D4AF37] rounded-full shadow-lg hover:bg-[#153a61] hover:-translate-y-1 transition-all group relative"
          aria-label="Обо мне"
        >
          <User size={20} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Обо мне
          </span>
        </button>
        <button
          onClick={() => scrollToSection('lectures')}
          className="p-3 bg-[#0A2540] text-white border border-[#D4AF37] rounded-full shadow-lg hover:bg-[#153a61] hover:-translate-y-1 transition-all group relative"
          aria-label="Лекции"
        >
          <Presentation size={20} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Лекции
          </span>
        </button>
        <button
          onClick={() => scrollToSection('interactives')}
          className="p-3 bg-[#0A2540] text-white border border-[#D4AF37] rounded-full shadow-lg hover:bg-[#153a61] hover:-translate-y-1 transition-all group relative"
          aria-label="Интерактивы"
        >
          <LayoutDashboard size={20} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Интерактивы
          </span>
        </button>
        <button
          onClick={() => scrollToSection('course')}
          className="p-3 bg-[#0A2540] text-white border border-[#D4AF37] rounded-full shadow-lg hover:bg-[#153a61] hover:-translate-y-1 transition-all group relative"
          aria-label="Курс"
        >
          <GraduationCap size={20} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Курс
          </span>
        </button>
        <button
          onClick={() => scrollToSection('interviews')}
          className="p-3 bg-[#0A2540] text-white border border-[#D4AF37] rounded-full shadow-lg hover:bg-[#153a61] hover:-translate-y-1 transition-all group relative"
          aria-label="Интервью"
        >
          <Mic size={20} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Интервью
          </span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default App;
