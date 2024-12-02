// src/contexts/LanguageContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Define supported languages
const languages = {
  en: {
    home: 'Home',
    about: 'About Us',
    pricing: 'Pricing',
    contact: 'Contact',
    our_story: 'Our Story',
    about_us: 'About Us',
    welcome_text: 'Welcome to VNS Online School, where learning languages becomes an exciting journey!',
    school_description: 'Our online school offers a wide range of courses tailored to suit all ages and levels. Whether you\'re a young learner just starting out, a busy professional looking to enhance your communication skills, or a retiree embracing a new hobby, we have the perfect program for you.',
    our_vision: 'Our Vision',
    what_we_stand_for: 'What We Stand For',
    interactive_learning: 'At our school, we believe in making language learning interactive and enjoyable. Our courses incorporate engaging materials like multimedia resources, games, role-playing activities, and real-life simulations to ensure that every lesson is both educational and fun.',
    our_goals: 'Our Goals',
    what_we_aim_to_achieve: 'What We Aim To Achieve',
    modern_teaching_methods: 'We use modern teaching methods and personalized approaches to help you achieve your goals efficiently. Join us today and discover the joy of learning languages in a dynamic and supportive environment!',
  },
  de: {
    home: 'Startseite',
    about: 'Über uns',
    pricing: 'Preise',
    contact: 'Kontakt',
    our_story: 'Unsere Geschichte',
    about_us: 'Über uns',
    welcome_text: 'Willkommen bei VNS Online School, wo das Erlernen von Sprachen zu einer spannenden Reise wird!',
    school_description: 'Unsere Online-Schule bietet eine breite Palette an Kursen, die auf alle Altersgruppen und Niveaus abgestimmt sind. Egal, ob Sie ein junger Lernender sind, ein vielbeschäftigter Profi, der seine Kommunikationsfähigkeiten verbessern möchte, oder ein Rentner, der ein neues Hobby entdeckt – wir haben das perfekte Programm für Sie.',
    our_vision: 'Unsere Vision',
    what_we_stand_for: 'Wofür wir stehen',
    interactive_learning: 'In unserer Schule glauben wir, dass Sprachlernen interaktiv und unterhaltsam sein muss. Unsere Kurse bieten ansprechende Materialien wie multimediale Ressourcen, Spiele, Rollenspiele und Simulationen aus dem realen Leben, um sicherzustellen, dass jede Lektion sowohl lehrreich als auch spaßig ist.',
    our_goals: 'Unsere Ziele',
    what_we_aim_to_achieve: 'Was wir erreichen wollen',
    modern_teaching_methods: 'Wir setzen moderne Lehrmethoden und personalisierte Ansätze ein, um Ihnen zu helfen, Ihre Ziele effizient zu erreichen. Kommen Sie noch heute zu uns und entdecken Sie die Freude am Sprachenlernen in einer dynamischen und unterstützenden Umgebung!',
  },
  ko: {
    home: '홈',
    about: '회사 소개',
    pricing: '가격',
    contact: '연락처',
    our_story: '우리의 이야기',
    about_us: '회사 소개',
    welcome_text: 'VNS 온라인 학교에 오신 것을 환영합니다. 언어 학습을 흥미진진한 여정으로 만들어 드립니다!',
    school_description: '우리의 온라인 학교는 모든 연령대와 수준에 맞춘 다양한 강좌를 제공합니다. 어린 학습자가 처음 시작하거나, 바쁜 직장인이 자신의 의사소통 능력을 향상시키거나, 새로운 취미를 시작하는 은퇴자가 되거나, 여러분에게 맞는 완벽한 프로그램이 있습니다.',
    our_vision: '우리의 비전',
    what_we_stand_for: '우리가 지향하는 것',
    interactive_learning: '우리 학교에서는 언어 학습을 상호작용적이고 즐겁게 만드는 것을 믿습니다. 우리의 강좌는 멀티미디어 자료, 게임, 역할 놀이 활동, 실제 시뮬레이션과 같은 흥미로운 자료를 포함하여 모든 수업이 교육적이고 재미있도록 보장합니다.',
    our_goals: '우리의 목표',
    what_we_aim_to_achieve: '우리가 이루고자 하는 것',
    modern_teaching_methods: '우리는 현대적인 교수법과 개인화된 접근 방식을 사용하여 여러분이 목표를 효율적으로 달성할 수 있도록 돕습니다. 오늘 저희와 함께하며 동적이고 지원적인 환경에서 언어 학습의 즐거움을 발견해 보세요!',
  },
  it: {
    home: 'Home',
    about: 'Chi siamo',
    pricing: 'Prezzi',
    contact: 'Contatti',
    our_story: 'La nostra storia',
    about_us: 'Chi siamo',
    welcome_text: 'Benvenuti alla VNS Online School, dove imparare le lingue diventa un viaggio entusiasmante!',
    school_description: 'La nostra scuola online offre una vasta gamma di corsi adatti a tutte le età e livelli. Che tu sia un giovane apprendista che inizia, un professionista impegnato che vuole migliorare le proprie capacità comunicative, o un pensionato che si sta avvicinando a un nuovo hobby, abbiamo il programma perfetto per te.',
    our_vision: 'La nostra visione',
    what_we_stand_for: 'Cosa rappresentiamo',
    interactive_learning: 'Nella nostra scuola crediamo che l\'apprendimento delle lingue debba essere interattivo e divertente. I nostri corsi incorporano materiali coinvolgenti come risorse multimediali, giochi, attività di role-playing e simulazioni della vita reale per garantire che ogni lezione sia educativa e divertente.',
    our_goals: 'I nostri obiettivi',
    what_we_aim_to_achieve: 'Cosa vogliamo raggiungere',
    modern_teaching_methods: 'Utilizziamo metodi di insegnamento moderni e approcci personalizzati per aiutarti a raggiungere i tuoi obiettivi in modo efficiente. Unisciti a noi oggi e scopri la gioia di imparare le lingue in un ambiente dinamico e di supporto!',
  },
};

// Create context
export const LanguageContext = createContext();  // Explicit export

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: languages[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// export default LanguageContext;  // Remove this line

