function KhoaHocService() {
    this.LayDanhSachKH = function() {
        return $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
            type: 'GET'
        })
    }
    this.ThemKhoaHoc = function(khoaHoc) {
        return $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc',
            type: 'POST',
            data: khoaHoc
        })
    }

    this.CapNhatKhoaHoc = function(khoaHoc) {
        return $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatKhoaHoc',
            type: 'PUT',
            data: khoaHoc
        })
    }

    this.XoaKhoaHoc = function(id) {
        return $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/${id}`,
            type: 'DELETE',
        })
    }
}