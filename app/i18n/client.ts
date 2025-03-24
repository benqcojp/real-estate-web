'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// 言語ファイルを動的にインポート
async function loadLocaleData(locale: string) {
  try {
    // デフォルト言語は日本語
    if (locale === 'ja' || !locale) {
      return (await import('./locales/ja')).default;
    }
    
    // 他の言語をサポート
    switch(locale) {
      case 'en':
        return (await import('./locales/en')).default;
      case 'zh-CN':
        return (await import('./locales/zh-CN')).default;
      case 'zh-TW':
        return (await import('./locales/zh-TW')).default;
      default:
        return (await import('./locales/ja')).default;
    }
  } catch (error) {
    console.error('Failed to load locale data', error);
    // エラー時は日本語をフォールバックとして使用
    return (await import('./locales/ja')).default;
  }
}

export function useTranslation() {
  const params = useParams();
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  
  const locale = params?.lang || 'ja';
  
  useEffect(() => {
    async function loadTranslations() {
      setIsLoading(true);
      const data = await loadLocaleData(locale as string);
      setTranslations(data);
      setIsLoading(false);
    }
    
    loadTranslations();
  }, [locale]);
  
  const t = (key: string) => {
    if (isLoading) return '';
    
    // キーをドット表記で分割してネストされたオブジェクトから値を取得
    // 例: 'home.hero.title' -> translations.home.hero.title
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };
  
  return { t, locale, isLoading };
} 