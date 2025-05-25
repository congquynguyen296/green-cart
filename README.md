Green Cart
==========

Giới Thiệu
----------

Green Cart là một nền tảng webapp responsive, nơi người dùng có thể khám phá và mua sắm các loại thực phẩm sạch, an toàn với chất lượng cao. Từ rau củ quả tươi ngon, gạo nguyên chất, gia vị đậm đà đến nước giải khát lành mạnh - tất cả đều được chọn lọc kỹ lưỡng. Với công nghệ hiện đại và giao diện thân thiện, Green Cart không chỉ là một cửa hàng trực tuyến mà còn là người bạn đồng hành cho lối sống xanh.

Công Nghệ Sử Dụng
-----------------

*   **Frontend**: ReactJS, Tailwind CSS.
    
*   **Backend**: NodeJS, Express.
    
*   **Database**: MongoDB.
    
*   **Other**: VNPay, Google OAuth.
    

Yêu Cầu Hệ Thống
----------------

*   **Phần mềm**:
    
    *   NodeJS (v16.x hoặc cao hơn).
        
    *   npm hoặc yarn.
        
    *   MongoDB (đã cài đặt và chạy local hoặc dùng MongoDB Atlas).
        
    *   Git (để clone repository).
        
*   **Môi trường**: Hỗ trợ macOS, Windows, hoặc Linux.
    

Hướng Dẫn Cài Đặt
-----------------

1.  **Clone Repository**:

    *   git clone http://github.congquynguyen296.green-cart.git
        
    *   cd green-cart

2.  **Cài Đặt Phụ Thuộc**:
    
    *   cd client npm install
        
    *   cd server npm install

        
3.  **Chạy Ứng Dụng**:
    
    *   Mở 2 terminal:
        
        *   Terminal 1 (server): npm start
            
        *   Terminal 2 (client): npm run dev
            
    *   Truy cập [http://localhost:5174](http://localhost:5174) để xem ứng dụng.
        

Tính Năng Chính
---------------

1.  **Tìm Kiếm & Lọc Sản Phẩm**:
    
    *   Tìm theo tên, thể loại (rau củ, gạo, gia vị, nước giải khát), giá.
        
    *   Bộ lọc thông minh.
        
2.  **Giỏ Hàng & Đặt Hàng**:
    
    *   Thêm sản phẩm, xem chi tiết, xác nhận đơn.
        
    *   Theo dõi trạng thái giao hàng.
        
3.  **Thanh Toán**:
    
    *   Thanh toán qua VNPay.
        
4.  **Quản Lý Tài Khoản**:
    
    *   Đăng nhập qua Google, quản lý thông tin.
        
5.  **Admin**:
    
    *   Thêm, sửa, xóa sản phẩm, quản lý đơn hàng.
        
6.  **Responsive Design**:
    
    *   Tối ưu trên mọi thiết bị.