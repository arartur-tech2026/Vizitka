import React, { useState } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';

export const CourseSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-none border border-gray-200 shadow-sm p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
        
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-2">
            Лицензированный онлайн-курс
          </h3>
          <p className="text-lg text-gray-500 font-light uppercase tracking-wider">
            подготовки к ЕГЭ по Обществознанию
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Poster and Button */}
          <div className="flex flex-col gap-6">
            <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <a 
                href="https://cfu-znanie.skillspace.ru/l/obsestvoznanie-cbb24e" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-full aspect-[4/3] sm:aspect-video bg-[#0A2540] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] to-[#153a61] opacity-90"></div>
                  <div className="relative z-10 text-center p-4 sm:p-6 w-full">
                    <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs sm:text-sm mb-1 sm:mb-2 block">Skillspace</span>
                    <h4 className="text-white font-serif text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 leading-tight">Курс подготовки к ЕГЭ</h4>
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
                      Перейти на лендинг <ExternalLink size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-full">
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="flex w-full justify-center items-center gap-3 bg-transparent text-[#0A2540] border-2 border-[#D4AF37] px-8 py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-colors font-bold tracking-wider uppercase text-sm"
              >
                <Play size={18} className="text-[#D4AF37]" />
                Смотреть видео
              </button>
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-700 leading-snug mb-2 font-light text-base">
              Инновационный онлайн-курс с интерактивными тренажерами, игровыми форматами работы и авторской методикой подготовки:
            </p>
            <ul className="text-gray-700 leading-snug font-light text-base space-y-1 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#0A2540] mt-0.5">•</span>
                <span>умные карточки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A2540] mt-0.5">•</span>
                <span>пошаговые симуляторы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A2540] mt-0.5">•</span>
                <span>уникальный смарт-комплекс «вторая часть ЕГЭ за 5 шагов»</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              aria-label="Закрыть"
            >
              <X size={24} />
            </button>
            <iframe 
              src="https://vkvideo.ru/video_ext.php?oid=-136657128&id=456239021&hash=4e303eb564ba9cda&hd=3&autoplay=1" 
              className="w-full h-full" 
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};
