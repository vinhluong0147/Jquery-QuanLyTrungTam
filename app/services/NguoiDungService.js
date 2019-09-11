function NguoiDungService() {
    this.LayDanhSachNguoiDung = function() {
        return $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung',
            type: 'GET',

        })
    }
}