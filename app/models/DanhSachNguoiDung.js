function DanhSachNguoiDung() {
    this.DSND = [];
    this.ThemNguoiDung = function(nguoiDung) {
        this.DSND.push(nguoiDung);
    }
    this.findIndex = function(taiKhoan) {
        for (var i = 0; i < this.DSND.length; i++) {
            if (this.DSND[i].TaiKhoan === taiKhoan) {
                return i;
            }
        }
        return -1;
    }
    this.TimKiemNguoiDung = function(keyWord) {
        var danhSachTimKiem = [];
        for (var i = 0; i < this.DSND.length; i++) {
            var nguoiDung = this.DSND[i]
            if (nguoiDung.HoTen.toLowerCase().indexOf(keyWord.toLowerCase().trim()) !== -1) {
                danhSachTimKiem.push(nguoiDung)
            }
        }
        return danhSachTimKiem;
    }
    this.XoaNguoiDung = function(taiKhoan) {
        var index = this.findIndex(taiKhoan);
        if (index !== -1) {
            this.DSND.splice(index, 1);
        }
    }

}