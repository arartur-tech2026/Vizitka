import React, { useState } from 'react';
import { Clock, Users, CheckCircle2, HelpCircle, BookOpen, Play, ExternalLink, X, Plus, Minus } from 'lucide-react';

interface Interactive {
  id: string;
  title: string;
  description: string;
  details: string;
  duration: string;
  icon: React.ReactNode;
  videoUrl?: string;
}

const interactives: Interactive[] = [
  {
    id: '1',
    title: 'СВОЯ ИГРА',
    description: 'Интерактив для командной работы. Аудитория распределяется на 3-5 групп, которые соревнуются в знании темы викторины.',
    details: '5 тематик по 5 вопросов и спец. категории с отдельными вопросами. Выигрывает команда набравшая наибольшее количество баллов за правильные ответы.',
    duration: '1 час',
    icon: <Users size={24} />,
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240613&hash=9b6c0412808b46f7&autoplay=1'
  },
  {
    id: '2',
    title: 'ВЫБОР ЦЕННОСТЕЙ',
    description: 'Групповое упражнение, в котором участники выбирают пять наиболее значимых ценностей из набора карточек (17 традиционных ценностей и 5 антиценностей).',
    details: 'Результаты всех групп фиксируются и анализируются в реальном времени. Позволяет вовлечь участников в ценностный диалог и развивает навыки командных решений.',
    duration: '1 час',
    icon: <CheckCircle2 size={24} />,
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240617&hash=bb0f0fdf29cc30e1&autoplay=1'
  },
  {
    id: '3',
    title: 'Правда или ложь',
    description: 'Участники видят на экране карточку с четырьмя утверждениями, из которых одно неверное. Нужно найти ошибку и объяснить, почему она неверна.',
    details: 'Кто первым поднял руку и дал правильное объяснение получает призовой балл. Делает обучение более интересным и закрепляет знания на практике.',
    duration: '0,5 час',
    icon: <HelpCircle size={24} />
  },
  {
    id: '4',
    title: 'Кроссворд',
    description: 'На экране отображается сетка кроссворда. Участники отгадывают зашифрованные слова.',
    details: 'Служит для закрепления терминологии и ключевых понятий. Систематизирует знания, делает процесс обучения динамичным.',
    duration: '0,5 час',
    icon: <BookOpen size={24} />,
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456239808&hash=49780db3843a26b9&autoplay=1'
  }
];

const InteractiveItem: React.FC<{ item: Interactive; onPlayClick: (e: React.MouseEvent, url: string) => void }> = ({ item, onPlayClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-none p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#0A2540]"></div>
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-gray-50 rounded-full text-[#0A2540] border border-gray-100 shadow-sm">
          {item.icon}
        </div>
        <div>
          <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{item.title}</h3>
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium uppercase tracking-wider">
            <Clock size={14} />
            <span>{item.duration}</span>
          </div>
        </div>
      </div>
      
      {/* Accordion Toggle */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left text-[#0A2540] font-bold text-sm uppercase tracking-wider py-2 border-b border-gray-100 mb-4"
      >
        <span>Подробнее</span>
        {isExpanded ? <Minus size={16} className="text-[#D4AF37]" /> : <Plus size={16} className="text-[#D4AF37]" />}
      </button>

      <div className={`flex-grow flex-col ${isExpanded ? 'flex' : 'hidden'}`}>
        <p className="text-gray-700 leading-relaxed mb-6 font-light flex-grow">
          {item.description}
        </p>
        <div className="p-5 bg-gray-50 border border-gray-100 text-sm text-gray-600 leading-relaxed font-serif italic mb-6">
          "{item.details}"
        </div>
      </div>
      
      {item.videoUrl && (
        <div className="mt-auto pt-2">
          <a 
            href={item.videoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => onPlayClick(e, item.videoUrl!)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A2540] hover:text-blue-700 transition-colors uppercase tracking-wider"
          >
            Смотреть пример
            {item.videoUrl.includes('vk.com/video_ext.php') ? <Play size={16} /> : <ExternalLink size={16} />}
          </a>
        </div>
      )}
    </div>
  );
};

export const InteractiveList: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePlayClick = (e: React.MouseEvent, url: string) => {
    if (url.includes('vk.com/video_ext.php') || url.includes('youtube.com/embed')) {
      e.preventDefault();
      setActiveVideo(url);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {interactives.map((item) => (
          <InteractiveItem key={item.id} item={item} onPlayClick={handlePlayClick} />
        ))}
      </div>

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
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};
