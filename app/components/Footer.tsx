'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-white font-serif text-2xl">宿 悠</span>
              <span className="ml-2 text-primary-200 text-lg">YADO YUME</span>
            </div>
            <p className="text-primary-300 mb-4">
              伝統と現代が融合した日本旅館の体験を提供します。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-primary-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* 导航链接 */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">宿泊施設</h3>
            <ul className="space-y-2">
              <li><Link href="/locations/kyoto" className="text-primary-300 hover:text-white">京都</Link></li>
              <li><Link href="/locations/tokyo" className="text-primary-300 hover:text-white">東京</Link></li>
              <li><Link href="/locations/hokkaido" className="text-primary-300 hover:text-white">北海道</Link></li>
              <li><Link href="/locations/okinawa" className="text-primary-300 hover:text-white">沖縄</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">体験</h3>
            <ul className="space-y-2">
              <li><Link href="/experiences/onsen" className="text-primary-300 hover:text-white">温泉体験</Link></li>
              <li><Link href="/experiences/cuisine" className="text-primary-300 hover:text-white">日本料理</Link></li>
              <li><Link href="/experiences/tea" className="text-primary-300 hover:text-white">茶道</Link></li>
              <li><Link href="/experiences/nature" className="text-primary-300 hover:text-white">自然散策</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">お問い合わせ</h3>
            <ul className="space-y-2">
              <li className="text-primary-300">
                <span className="block">〒100-0001</span>
                <span className="block">東京都千代田区1-1-1</span>
                <span className="block">宿悠ビル</span>
              </li>
              <li className="text-primary-300">
                <span className="block">TEL: 03-1234-5678</span>
              </li>
              <li className="text-primary-300">
                <span className="block">info@yadoyume.jp</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-400 text-sm">
            &copy; {new Date().getFullYear()} 宿悠 YADO YUME. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-primary-400 hover:text-primary-300 text-sm">
              利用規約
            </Link>
            <Link href="/privacy" className="text-primary-400 hover:text-primary-300 text-sm">
              プライバシーポリシー
            </Link>
            <Link href="/sitemap" className="text-primary-400 hover:text-primary-300 text-sm">
              サイトマップ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 