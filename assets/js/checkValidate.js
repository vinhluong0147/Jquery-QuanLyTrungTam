function CheckValidate() {
    var isValidForm = true;
    var checkTaiKhoan = kiemTraNhap('#TaiKhoan', '#tbTK', 'Vui lòng nhập Tài khoản') && kiemTraText('#TaiKhoan', '#tbTK', 'Tài khoản phải là chữ') && kiemTraDoDai('#TaiKhoan', '#tbTK', 5, 10);

    var checkMatKhau = kiemTraNhap('#MatKhau', '#tbMK', 'Vui lòng nhập Mật khẩu') && kiemTraText('#MatKhau', '#tbMK', ' Mật khẩu phải là chữ') && kiemTraDoDai('#MatKhau', '#tbMK', 5, 10);

    var checkHoTen = kiemTraNhap('#HoTen', '#tbHT', 'Vui lòng nhập Họ tên') && kiemTraText('#HoTen', '#tbHT', 'Họ tên phải là chữ') && kiemTraDoDai('#HoTen', '#tbHT', 5, 10);

    var checkSoDT = kiemTraNhap('#SoDienThoai', '#tbSoDT', 'Vui lòng nhập Số điện thoại') && kiemTraNumber('#SoDienThoai', '#tbSoDT', 'Số điện thoại phải là số') && kiemTraDoDai('#SoDienThoai', '#tbSoDT', 5, 10);

    var checkEmail = kiemTraNhap('#Email', '#tbEmail', 'Vui lòng nhập Email') && kiemTraEmail('#Email', '#tbEmail', 'Email không hợp lệ') && kiemTraDoDai('#Email', '#tbEmail', 5, 50);
    isValidForm &= checkTaiKhoan &= checkMatKhau &= checkHoTen &= checkSoDT &= checkEmail;
    return isValidForm;
}

function validateKeyUp() {
    $('#TaiKhoan').keyup(function checkTaiKhoan() {
        kiemTraNhap('#TaiKhoan', '#tbTK', 'Vui lòng nhập Tài khoản') && kiemTraText('#TaiKhoan', '#tbTK', 'Tài khoản phải là chữ') && kiemTraDoDai('#TaiKhoan', '#tbTK', 5, 10);
    })
    $('#MatKhau').keyup(function checkTaiKhoan() {
        kiemTraNhap('#MatKhau', '#tbMK', 'Vui lòng nhập Mật khẩu') && kiemTraText('#MatKhau', '#tbMK', ' Mật khẩu phải là chữ') && kiemTraDoDai('#MatKhau', '#tbMK', 5, 10);
    })
    $('#HoTen').keyup(function checkTaiKhoan() {
        kiemTraNhap('#HoTen', '#tbHT', 'Vui lòng nhập Họ tên') && kiemTraText('#HoTen', '#tbHT', 'Họ tên phải là chữ') && kiemTraDoDai('#HoTen', '#tbHT', 5, 10);

    })
    $('#SoDienThoai').keyup(function checkTaiKhoan() {
        kiemTraNhap('#SoDienThoai', '#tbSoDT', 'Vui lòng nhập Số điện thoại') && kiemTraNumber('#SoDienThoai', '#tbSoDT', 'Số điện thoại phải là số') && kiemTraDoDai('#SoDienThoai', '#tbSoDT', 5, 10);
    })
    $('#Email').keyup(function checkTaiKhoan() {
        kiemTraNhap('#Email', '#tbEmail', 'Vui lòng nhập Email') && kiemTraEmail('#Email', '#tbEmail', 'Email không hợp lệ') && kiemTraDoDai('#Email', '#tbEmail', 5, 50);
    })
}
validateKeyUp();