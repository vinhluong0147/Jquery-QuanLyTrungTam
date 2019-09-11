var DanhSachNguoiDung = new DanhSachNguoiDung();

function hienThiDSND(DSND) {
    var content = '';
    for (var i = 0; i < DSND.length; i++) {
        var nguoiDung = DSND[i];
        content +=
            `
            <tr class="trThongTinNguoiDung" 
                        data-taikhoan="${nguoiDung.TaiKhoan}" 
                        data-matkhau="${nguoiDung.MatKhau}" 
                        data-hoten="${nguoiDung.HoTen}" 
                        data-email="${nguoiDung.Email}" 
                        data-sodt="${nguoiDung.SoDT}"
                        data-maloainguoidung="${nguoiDung.MaLoaiNguoiDung}" 
                        >
                <td><input type="checkbox" value="${nguoiDung.TaiKhoan}" class="cbXoaNguoiDung"></td>
                <td class="tdThongTin">${nguoiDung.TaiKhoan}</td>
                <td class="tdThongTin">${nguoiDung.MatKhau}</td>
                <td class="tdThongTin">${nguoiDung.HoTen}</td>
                <td class="tdThongTin">${nguoiDung.Email}</td>
                <td class="tdThongTin">${nguoiDung.SoDT}</td>
                <td class="tdThongTin">${nguoiDung.MaLoaiNguoiDung}</td>
            </tr>
        `
    }
    $('#tblDanhSachNguoiDung').html(content);
}

function LuuStorage() {
    var mangJson = JSON.stringify(DanhSachNguoiDung.DSND);
    localStorage.setItem('DSND', mangJson)
}

function LayStorage() {
    var mangJson = localStorage.getItem('DSND')
    if (mangJson) {
        DanhSachNguoiDung.DSND = JSON.parse(mangJson)
        hienThiDSND(DanhSachNguoiDung.DSND)
    }
}
LayStorage()

$('#btnThemNguoiDung').click(function HienThiModal() {
    $('.modal-body input').val('');

    $('.modal-title').html('Thêm người dùng');
    var btnGroups =
        `
    <button class="btn btn-success" id="btnThem">Thêm người dùng</button>
    <button class="btn btn-secondary closeModal" data-dismiss="modal">Đóng</button>
    `
    $('.modal-footer').html(btnGroups);
    $('#TaiKhoan').attr('readonly', false)
});

$('body').delegate('#btnThem', 'click', function themNguoiDung() {
    if (CheckValidate()) {
        var taiKhoan = $('#TaiKhoan').val();
        var matKhau = $('#MatKhau').val();
        var hoTen = $('#HoTen').val();
        var email = $('#Email').val();
        var soDT = $('#SoDienThoai').val();
        var maLoaiNguoiDung = $('#maLoaiNguoiDung').val();
        var NguoiDungMoi = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, maLoaiNguoiDung);
        DanhSachNguoiDung.ThemNguoiDung(NguoiDungMoi)

        hienThiDSND(DanhSachNguoiDung.DSND);

        $('.close').trigger('click');
        $('.modal-body input').val('');
        LuuStorage()
        $('#TaiKhoan, #MatKhau,#HoTen,#Email, #SoDienThoai').css('border', '1px solid #ced4da');
    }
})

$('#btnXoaNguoiDung').click(function xoaNguoiDung() {
    $('.cbXoaNguoiDung').each(function() {

        if ($(this).is(':checked')) {
            var taiKhoan = $(this).val();
            DanhSachNguoiDung.XoaNguoiDung(taiKhoan)
        }

    })
    hienThiDSND(DanhSachNguoiDung.DSND)
    $('.checkAll').prop('checked', false);
});

$('.checkAll').click(function XoaAll() {
    $('.cbXoaNguoiDung').trigger('click')
})


$('body').delegate('.tdThongTin', 'click', function layThongTin() {
    var This = $(this).parent();
    var taiKhoan = This.attr('data-taikhoan');
    var matKhau = This.attr('data-matkhau');
    var HoTen = This.attr('data-hoten');
    var Email = This.attr('data-email');
    var soDT = This.attr('data-sodt');
    var maLoaiNguoiDung = This.attr('data-maloainguoidung');

    $('#TaiKhoan').val(taiKhoan)
    $('#MatKhau').val(matKhau);
    $('#HoTen').val(HoTen);
    $('#Email').val(Email);
    $('#SoDienThoai').val(soDT);
    $('#maLoaiNguoiDung').val(maLoaiNguoiDung);

    $('.modal-title').html('Cập nhật người dùng');
    var btnGroups =
        `
    <button class="btn btn-success" id="btnCapNhat">Cập nhật</button>
    <button class="btn btn-secondary closeModal" data-dismiss="modal">Đóng</button>
    `
    $('.modal-footer').html(btnGroups);

    $('.tdThongTin').attr('data-toggle', 'modal');
    $('.tdThongTin').attr('data-target', '#myModal');
    $('#TaiKhoan').attr('readonly', true)
});


$('body').delegate('#btnCapNhat', 'click', function capNhatThongTin() {
    if (CheckValidate()) {
        var taiKhoan = $('#TaiKhoan').val();
        var matKhau = $('#MatKhau').val();
        var hoTen = $('#HoTen').val();
        var email = $('#Email').val();
        var soDT = $('#SoDienThoai').val();
        var maLoaiNguoiDung = $('#maLoaiNguoiDung').val();
        var NguoiDungMoi = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, maLoaiNguoiDung);

        var index = DanhSachNguoiDung.findIndex(taiKhoan)
        if (index !== -1) {
            DanhSachNguoiDung.DSND[index] = NguoiDungMoi;
        }
        hienThiDSND(DanhSachNguoiDung.DSND);
        $('.close').trigger('click');
        $('.modal-body input').val('');
        $('#TaiKhoan, #MatKhau,#HoTen,#Email, #SoDienThoai').css('border', '1px solid #ced4da');
        $('#TaiKhoan').attr('readonly', false)
    }


});

$('#TimKiemNguoiDung').keyup(function TimKiemNguoiDung() {
    var keyword = $('#TimKiemNguoiDung').val();
    var danhSachTimKiem = DanhSachNguoiDung.TimKiemNguoiDung(keyword);
    hienThiDSND(danhSachTimKiem)
    console.log(danhSachTimKiem)
});

$('body').delegate('.closeModal', 'click', function() {
    $('#tbTK, #tbMK, #tbHT, #tbSoDT, #tbEmail').css('display', 'none');
    $('.close').trigger('click');

})

$(document).click(function(event) {
    if (!$(event.target).closest("#myModal").length) {
        $('#tbTK, #tbMK, #tbHT, #tbSoDT, #tbEmail').css('display', 'none');
        $('#TaiKhoan,#MatKhau,#HoTen,#SoDienThoai,#Email').css('border', '1px solid #ced4da');
        $('.close').trigger('click');
    }
})