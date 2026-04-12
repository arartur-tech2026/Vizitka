import React, { useState } from 'react';
import { ExternalLink, Clock, Play, X, Plus, Minus } from 'lucide-react';

interface Lecture {
  id: string;
  title: string;
  description: string[];
  duration: string;
  videoUrl: string;
}

const lectures: Lecture[] = [
  {
    id: '1',
    title: 'Родина помнит своих героев, ключевые личности Великой Отечественной воины',
    description: [
      'Героизм как социально-психологический феномен.',
      'Героизм в условиях Великой Отечественной.',
      'Герои Советского Союза.'
    ],
    duration: '1 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240609&hash=c37d71e13bab2b5d&autoplay=1'
  },
  {
    id: '2',
    title: 'Сила в единстве: консолидация народа как ключевой фактор Победы в Великой Отечественной войне',
    description: [
      'Чудо эвакуации.',
      'Цифры и факты о ВОВ.',
      'Уроки истории 80 лет спустя.'
    ],
    duration: '1 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240608&hash=73edce2a2f2788f9&autoplay=1'
  },
  {
    id: '3',
    title: 'Без срока давности, преступления нацистов против советских граждан',
    description: [
      'Жертвы нацизма в оккупации.',
      'Преступления нацистов в Ленинграде, Смоленске, Белоруссии и Симферополе.'
    ],
    duration: '1 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240608&hash=73edce2a2f2788f9&autoplay=1'
  },
  {
    id: '4',
    title: 'Личная безопасность в цифровом мире (киберпреступления)',
    description: [
      'Современная киберпреступность, цифры, факты.',
      'Актуальные «сценарии» злоумышленников.',
      'Новые угрозы цифрового времени (Ai и технология "дипфейк").',
      'Рекомендации по безопасности.'
    ],
    duration: '1,5 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240611&hash=542540d3b5000c96&autoplay=1'
  },
  {
    id: '5',
    title: 'Права человека в цифровую эпоху',
    description: [
      'Международно-правовые регулирование прав человека.',
      'Поколения прав человека.',
      'Вызовы и угрозы цифровой эпохи.'
    ],
    duration: '1 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240611&hash=542540d3b5000c96&autoplay=1'
  },
  {
    id: '6',
    title: 'Государственное устройство и система публичной власти',
    description: [
      'Конституционные основы: каркас российского государства.',
      'Форма государственного устройства РФ.',
      'Местное самоуправление в единой системе публичной власти.',
      'Система органов публичной власти и принцип разделения властей.'
    ],
    duration: '1 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240612&hash=7ace31cbfc29ac8c&autoplay=1'
  },
  {
    id: '7',
    title: 'Принцип разделения властей и демократия',
    description: [
      'Концепции разделения властей в работах Монтескьё.',
      'Функции принципа разделения властей.',
      'Разделение властей как основа демократического правового государства.',
      'Реализация принципа разделения властей в Конституции РФ.'
    ],
    duration: '1,5 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240144&hash=4d78328400ee8c1c&autoplay=1'
  },
  {
    id: '8',
    title: 'Основной закон РФ: как устроена Конституция',
    description: [
      'Интересные факты о принятии Конституции.',
      'Роль Конституции в правовой системе.',
      'Структура и содержание Конституции РФ.'
    ],
    duration: '1-2 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240135&hash=acbdd1c4bc2d3f1d&autoplay=1'
  },
  {
    id: '9',
    title: '12 лет Конституции Республики Крым',
    description: [
      'Исторический контекст и принятие Конституции.',
      'Основные положения Конституции.',
      '12 лет спустя: взгляд в будущее.'
    ],
    duration: '1 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240616&hash=e080be0894755ff2&autoplay=1'
  },
  {
    id: '10',
    title: 'Герои на защите Родины',
    description: [
      'Суверенитет и национальная безопасность.',
      'История развития армии и система защиты Отечества.',
      'Феномен российского героизма: преемственность поколений.',
      'Современные герои в лицах, от ВОВ до СВО.'
    ],
    duration: '1,5 час',
    videoUrl: ''
  },
  {
    id: '11',
    title: 'Цивилизационный путь России: единство народов и испытания сквозь века',
    description: [
      'Что такое цивилизация и каков цивилизационный код России.',
      'Единство народов России, как исторический закон сохранения и процветания страны.',
      'Испытания и победы: консолидация народа как ключевой фактор Победы.'
    ],
    duration: '2 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456240541&hash=6f501bcea7c01086&autoplay=1'
  },
  {
    id: '12',
    title: 'Санкционная политика Запада против России: исторические и современные вызовы',
    description: [
      'Исторические корни санкционной политики (с XII века).',
      'Санкционная политики запада против России в Советское время.',
      'Современные санкции против России: цели, методы и глобальные угрозы.'
    ],
    duration: '1 час',
    videoUrl: ''
  },
  {
    id: '13',
    title: 'Развитие страны и вызовы будущего',
    description: [
      'Экономические потрясения 90-х: восстановление и трансформация.',
      'Геополитические игры: расширение НАТО, Запад и Мюнхенская речь В.В. Путина.',
      'Присоединение Крыма: правовой аспект.',
      'Уроки прошлого: нацизм и его современные угрозы.',
      'Смена мироустройства: СВО и зарождение многополярного мира.'
    ],
    duration: '2 час',
    videoUrl: ''
  },
  {
    id: '14',
    title: 'Современная Россия: цифры и факты',
    description: [
      'География, ресурсы, экономика, население и многое другое.',
      'Современная, технологичная Россия в цифрах.',
      'Российские регионы.'
    ],
    duration: '2 час',
    videoUrl: 'https://vk.com/video_ext.php?oid=22709475&id=456239810&hash=40296485df80eee2&autoplay=1'
  }
];

const LectureItem: React.FC<{ lecture: Lecture; onPlayClick: (e: React.MouseEvent, url: string) => void }> = ({ lecture, onPlayClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-none border-t-4 border-t-[#0A2540] border-x border-b border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col group relative overflow-hidden">
      <div className="p-8 flex-grow">
        <div className="flex items-center gap-2 text-[#0A2540] text-xs font-bold tracking-widest uppercase mb-4">
          <Clock size={14} />
          {lecture.duration}
        </div>
        <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#0A2540] transition-colors">
          {lecture.title}
        </h3>
        
        {/* Accordion Toggle */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left text-[#0A2540] font-bold text-sm uppercase tracking-wider py-2 border-b border-gray-100 mb-4"
        >
          <span>Подробнее</span>
          {isExpanded ? <Minus size={16} className="text-[#D4AF37]" /> : <Plus size={16} className="text-[#D4AF37]" />}
        </button>

        <div className={`text-gray-600 text-sm leading-relaxed mb-6 font-light ${isExpanded ? 'block' : 'hidden'}`}>
          <ul className="list-disc pl-5 space-y-2">
            {lecture.description.map((sentence, idx) => (
              <li key={idx}>{sentence}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-8 pt-0 mt-auto">
        {lecture.videoUrl ? (
          <a 
            href={lecture.videoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => onPlayClick(e, lecture.videoUrl)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A2540] hover:text-blue-700 transition-colors uppercase tracking-wider"
          >
            Смотреть лекцию
            {lecture.videoUrl.includes('vk.com/video_ext.php') ? <Play size={16} /> : <ExternalLink size={16} />}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider cursor-not-allowed">
            Скоро появится
          </span>
        )}
      </div>
    </div>
  );
};

export const LectureList: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePlayClick = (e: React.MouseEvent, url: string) => {
    // If it's a VK embed link or YouTube embed link, open in modal
    if (url.includes('vk.com/video_ext.php') || url.includes('youtube.com/embed')) {
      e.preventDefault();
      setActiveVideo(url);
    }
    // Otherwise (like Yandex Disk), let it open in a new tab normally
  };

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-8">
        {lectures.map((lecture) => (
          <LectureItem key={lecture.id} lecture={lecture} onPlayClick={handlePlayClick} />
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
