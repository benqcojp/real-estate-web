'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // 現在の言語コードを取得（URLから）
  const getCurrentLanguage = (): Language => {
    const langCode = pathname.split('/')[1];
    const found = languages.find(lang => lang.code === langCode);
    return found || languages[0]; // デフォルトは日本語
  };
  
  const currentLang = getCurrentLanguage();
  
  const switchLanguage = (langCode: string) => {
    const currentPath = pathname;
    
    // 現在のパスから言語部分を削除
    let newPath = currentPath;
    if (languages.some(lang => currentPath.startsWith(`/${lang.code}`))) {
      newPath = currentPath.substring(3); // 言語部分を削除
    }
    
    // 選択した言語が日本語（デフォルト）でない場合は言語コードを追加
    if (langCode !== 'ja') {
      newPath = `/${langCode}${newPath}`;
    }
    
    router.push(newPath);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 py-2 px-3 rounded-sm text-primary-700 hover:bg-primary-50"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.name}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-sm shadow-lg z-50 border border-primary-100">
          <ul>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => switchLanguage(lang.code)}
                  className={`flex items-center space-x-2 w-full text-left px-4 py-2 hover:bg-primary-50 ${
                    currentLang.code === lang.code ? 'bg-primary-50' : ''
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 