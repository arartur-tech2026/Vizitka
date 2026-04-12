import React, { useState } from 'react';
import { Play, X, ExternalLink, Mic } from 'lucide-react';

const interviews = [
  {
    id: 1,
    title: '«Утро нового дня»',
    subtitle: 'на телеканале «Первый Крымский»',
    description: 'О том, как важно знать свои права, о правовой грамотности и развитии прав человека в исторической ретроспективе и мотивации.',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240600&hash=93e1db25fb2d6240',
    websiteUrl: 'https://1tvcrimea.ru/content/program-guest/utro-novogo-dnya-v-gostyakh-artur-sharmoya/'
  }
];

export const InterviewList: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {interviews.map((interview) => (
        <div key={interview.id} className="bg-white rounded-none border border-gray-200 shadow-sm p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
          
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-2">
              {interview.title}
            </h3>
            {interview.subtitle && (
              <p className="text-lg text-gray-500 font-light uppercase tracking-wider">
                {interview.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Column: Poster and Button */}
            <div className="flex flex-col gap-6">
              <div 
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setActiveVideo(interview.videoUrl)}
              >
                <div className="w-full aspect-[4/3] sm:aspect-video bg-[#0A2540] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] to-[#153a61] opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <Mic size={32} className="text-[#D4AF37] mb-3 opacity-80" />
                    <span className="text-white font-serif text-lg leading-tight">Первый Крымский</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-20">
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-[#0A2540] ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <a 
                  href={interview.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full justify-center items-center gap-3 bg-transparent text-[#0A2540] border-2 border-[#D4AF37] px-8 py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-colors font-bold tracking-wider uppercase text-sm"
                >
                  <ExternalLink size={18} className="text-[#D4AF37]" />
                  Сайт канала
                </a>
              </div>
            </div>

            {/* Right Column: Description */}
            <div className="flex flex-col justify-start">
              <p className="text-gray-700 leading-snug mb-2 font-light text-base">
                {interview.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              aria-label="Закрыть"
            >
              <X size={24} />
            </button>
            <iframe 
              src={activeVideo} 
              className="w-full h-full" 
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture" 
              frameBorder="0" 
              allowFullScreen
              style={{ backgroundColor: '#000' }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
