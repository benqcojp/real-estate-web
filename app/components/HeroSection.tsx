'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      {/* 背景图片 - 使用日本传统旅馆图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/japanese-ryokan.jpg" // 日本旅馆外观或内部照片
          alt="伝統的な日本旅館"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* 暗化叠加层 */}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
            日本の伝統と現代の<br />
            <span className="text-primary-100">くつろぎの空間</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 font-light">
            自然に囲まれた静寂と伝統的なおもてなしで、
            心静かな休息をお楽しみください。
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/locations" className="btn btn-lg bg-accent-red hover:bg-accent-red/90 text-white border-none">
              宿を探す
            </Link>
            <Link href="/about" className="btn btn-lg btn-outline border-white text-white hover:bg-white/10">
              詳細を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 