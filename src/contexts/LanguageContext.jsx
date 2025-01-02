import React, { createContext, useState, useEffect } from 'react';
import en_courses from '../contexts/en_courses.json';
import de_courses from '../contexts/de_courses.json';
import uk_courses from '../contexts/uk_courses.json';
import it_courses from '../contexts/it_courses.json';
import ko_courses from '../contexts/ko_courses.json';

const languages = {
  en: {
    //Home
    home: 'Home',
    about: 'About Us',
    pricing: 'Pricing',
    contact: 'Contact',
    languageSchool: "Language School",
    //About
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
    // Contact
    contactUs: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    messageSent: 'Message sent successfully!',
    messageFailed: 'Failed to send the message, please try again.',
    // Pricing
    pricing_list: {
      english: {
        language: 'English',
        basic: 'Basic Plan (A1-A2)',
        middle: 'Middle Plan (A2-B1)',
        advanced: 'Advanced Plan (B2)',
      },
      german: {
        language: 'German',
        basic: 'Basic Plan (A1-A2)',
        middle: 'Middle Plan (A2-B1)',
        advanced: 'Advanced Plan (B2)',
      },
      ukrainian: {
        language: 'Ukrainian',
        basic: 'Basic Plan (A1-A2)',
        middle: 'Middle Plan (A2-B1)',
        advanced: 'Advanced Plan (B2)',
      },
      italian: {
        language: 'Italian',
        basic: 'Basic Plan (A1-A2)',
        middle: 'Middle Plan (A2-B1)',
        advanced: 'Advanced Plan (B2)',
      },
      korean: {
        language: 'Korean',
        basic: 'Basic Plan (Level 1-2)',
        middle: 'Middle Plan (Level 2-3)',
        advanced: 'Advanced Plan (Level 4)',
      }
    },
    contactText: 'Contact us',
    helpCenter: 'Help center access',

    courses: en_courses,
  },
  de: {
    home: 'Startseite',
    about: 'Über uns',
    pricing: 'Preise',
    contact: 'Kontakt',
    languageSchool: "Sprachschule",

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
    
    contactUs: 'Kontaktiere uns',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    sendMessage: 'Nachricht senden',
    sending: 'Senden...',
    messageSent: 'Nachricht erfolgreich gesendet!',
    messageFailed: 'Nachricht konnte nicht gesendet werden, bitte versuche es erneut.',

    pricing_list: {
      english: {
        language: 'Englisch',
        basic: 'Basisplan (A1-A2)',
        middle: 'Mittlerer Plan (A2-B1)',
        advanced: 'Fortgeschrittener Plan (B2)',
      },
      german: {
        language: 'Deutsch',
        basic: 'Basisplan (A1-A2)',
        middle: 'Mittlerer Plan (A2-B1)',
        advanced: 'Fortgeschrittener Plan (B2)',
      },
      ukrainian: {
        language: 'Ukrainisch',
        basic: 'Basisplan (A1-A2)',
        middle: 'Mittlerer Plan (A2-B1)',
        advanced: 'Fortgeschrittener Plan (B2)',
      },
      italian: {
        language: 'Italienisch',
        basic: 'Basisplan (A1-A2)',
        middle: 'Mittlerer Plan (A2-B1)',
        advanced: 'Fortgeschrittener Plan (B2)',
      },
      korean: {
        language: 'Koreanisch',
        basic: 'Basisplan (Stufe 1-2)',
        middle: 'Mittlerer Plan (Stufe 2-3)',
        advanced: 'Fortgeschrittener Plan (Stufe 4)',
      }
    },
    contactText: 'Kontaktieren Sie uns',
    helpCenter: 'Zugang zum Hilfezentrum',

    courses: de_courses,
  },
  uk: {
    home: 'Головна',
    about: 'Про нас',
    pricing: 'Ціни',
    contact: 'Контакти',
    languageSchool: "Школа мов",

    our_story: 'Наша історія',
    about_us: 'Про нас',
    welcome_text: 'Ласкаво просимо до VNS Online School, де вивчення мов стає захоплюючою подорожжю!',
    school_description: 'Наша онлайн-школа пропонує широкий вибір курсів, що підходять для будь-якого віку та рівня. Чи ви молода людина, яка тільки починає, зайнятий професіонал, що хоче покращити свої комунікаційні навички, чи пенсіонер, який займається новим хобі, у нас є ідеальна програма для вас.',
    our_vision: 'Наша візія',
    what_we_stand_for: 'Що ми представляємо',
    interactive_learning: 'У нашій школі ми віримо, що вивчення мов повинно бути інтерактивним та веселим. Наші курси включають інтерактивні матеріали, такі як мультимедійні ресурси, ігри, рольові вправи та симуляції реального життя, щоб кожен урок був як навчальним, так і приємним.',
    our_goals: 'Наші цілі',
    what_we_aim_to_achieve: 'Чого ми прагнемо досягти',
    modern_teaching_methods: 'Ми використовуємо сучасні методи викладання та індивідуальні підходи, щоб допомогти вам ефективно досягати ваших цілей. Приєднуйтесь до нас сьогодні та відкрийте радість вивчення мов у динамічному та підтримуючому середовищі!',

    contactUs: 'Зв’яжіться з нами',
    name: 'Ім’я',
    email: 'Електронна пошта',
    message: 'Повідомлення',
    sendMessage: 'Надіслати повідомлення',
    sending: 'Надсилання...',
    messageSent: 'Повідомлення успішно надіслано!',
    messageFailed: 'Не вдалося надіслати повідомлення, будь ласка, спробуйте ще раз.',

    pricing_list: {
      english: {
        language: 'Англійська',
        basic: 'Базовий план (A1-A2)',
        middle: 'Середній план (A2-B1)',
        advanced: 'Просунутий план (B2)',
      },
      german: {
        language: 'Німецька',
        basic: 'Базовий план (A1-A2)',
        middle: 'Середній план (A2-B1)',
        advanced: 'Просунутий план (B2)',
      },
      ukrainian: {
        language: 'Українська',
        basic: 'Базовий план (A1-A2)',
        middle: 'Середній план (A2-B1)',
        advanced: 'Просунутий план (B2)',
      },
      italian: {
        language: 'Італійська',
        basic: 'Базовий план (A1-A2)',
        middle: 'Середній план (A2-B1)',
        advanced: 'Просунутий план (B2)',
      },
      korean: {
        language: 'Корейська',
        basic: 'Базовий план (Рівень 1-2)',
        middle: 'Середній план (Рівень 2-3)',
        advanced: 'Просунутий план (Рівень 4)',
      },
    },
    contactText: 'Зв’яжіться з нами',
    helpCenter: 'Доступ до центру підтримки',

    courses: uk_courses,
  },
  it: {
    home: 'Home',
    about: 'Chi siamo',
    pricing: 'Prezzi',
    contact: 'Contatti',
    languageSchool: "Scuola di lingua",

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
    
    contactUs: 'Contattaci',
    name: 'Nome',
    email: 'Email',
    message: 'Messaggio',
    sendMessage: 'Invia messaggio',
    sending: 'Invio in corso...',
    messageSent: 'Messaggio inviato con successo!',
    messageFailed: 'Impossibile inviare il messaggio, per favore riprova.',
    
    pricing_list: {
      english: {
        language: 'Inglese',
        basic: 'Piano base (A1-A2)',
        middle: 'Piano intermedio (A2-B1)',
        advanced: 'Piano avanzato (B2)',
      },
      german: {
        language: 'Tedesco',
        basic: 'Piano base (A1-A2)',
        middle: 'Piano intermedio (A2-B1)',
        advanced: 'Piano avanzato (B2)',
      },
      ukrainian: {
        language: 'Ucraino',
        basic: 'Piano base (A1-A2)',
        middle: 'Piano intermedio (A2-B1)',
        advanced: 'Piano avanzato (B2)',
      },
      italian: {
        language: 'Italiano',
        basic: 'Piano base (A1-A2)',
        middle: 'Piano intermedio (A2-B1)',
        advanced: 'Piano avanzato (B2)',
      },
      korean: {
        language: 'Coreano',
        basic: 'Piano base (Livello 1-2)',
        middle: 'Piano intermedio (Livello 2-3)',
        advanced: 'Piano avanzato (Livello 4)',
      }
    },
    contactText: 'Contattaci',
    helpCenter: 'Accesso al centro assistenza',

    courses: it_courses,
  },
  ko: {
    home: '홈',
    about: '회사 소개',
    pricing: '가격',
    contact: '연락처',
    languageSchool: "어학 학교",

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
    
    contactUs: '문의하기',
    name: '이름',
    email: '이메일',
    message: '메시지',
    sendMessage: '메시지 보내기',
    sending: '전송 중...',
    messageSent: '메시지가 성공적으로 전송되었습니다!',
    messageFailed: '메시지 전송에 실패했습니다. 다시 시도해 주세요.', 
    
    pricing_list: {
      english: {
        language: '영어',
        basic: '기본 계획 (A1-A2)',
        middle: '중간 계획 (A2-B1)',
        advanced: '고급 계획 (B2)',
      },
      german: {
        language: '독일어',
        basic: '기본 계획 (A1-A2)',
        middle: '중간 계획 (A2-B1)',
        advanced: '고급 계획 (B2)',
      },
      ukrainian: {
        language: '우크라이나어',
        basic: '기본 계획 (A1-A2)',
        middle: '중간 계획 (A2-B1)',
        advanced: '고급 계획 (B2)',
      },
      italian: {
        language: '이탈리아어',
        basic: '기본 계획 (A1-A2)',
        middle: '중간 계획 (A2-B1)',
        advanced: '고급 계획 (B2)',
      },
      korean: {
        language: '한국어',
        basic: '기본 계획 (레벨 1-2)',
        middle: '중간 계획 (레벨 2-3)',
        advanced: '고급 계획 (레벨 4)',
      }
    },
    contactText: '문의하기',
    helpCenter: '도움말 센터 액세스',

    courses: ko_courses,
  },
};

// Create context
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const courses = en_courses[language]?.courses || {};  

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: languages[language], courses }}>
      {children}
    </LanguageContext.Provider>
  );
};
