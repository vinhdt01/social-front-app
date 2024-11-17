// middleware.js
import { NextResponse } from 'next/server';

// Các URL yêu cầu xác thực
const protectedRoutes = ['/1', '/profile', '/settings'];

export function middleware(req) {
    // Lấy token từ cookies (giả sử bạn lưu token ở đây)
    const token = req.cookies.get('token')?.value;

    // Kiểm tra nếu người dùng truy cập vào các route yêu cầu xác thực mà không có token
    if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
        // Nếu không có token, chuyển hướng đến trang đăng nhập
        const loginUrl = new URL('/login', req.url);
        return NextResponse.redirect(loginUrl);
    }

    // Nếu có token hoặc không truy cập các route yêu cầu xác thực, tiếp tục xử lý yêu cầu
    return NextResponse.next();
}

// Xác định đường dẫn áp dụng middleware
export const config = {
    matcher: ['/1', '/profile', '/settings'], // Các route yêu cầu xác thực
};
