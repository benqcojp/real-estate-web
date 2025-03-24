import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supportedLocales = ['ja', 'en', 'zh-CN', 'zh-TW'];
const defaultLocale = 'ja';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // すでに言語パスがある場合、または_next、api、画像などのパスの場合はスキップ
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }
  
  // URLからロケールを抽出するための正規表現
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  
  // ロケールを持たないパスにデフォルトロケールを追加
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/${defaultLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`,
        request.url
      )
    );
  }
  
  return NextResponse.next();
}

export const config = {
  // middleware関数を実行するパスを定義
  matcher: [
    // /api/, /_next/に基づくものを除く
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
}; 