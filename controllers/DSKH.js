$(document).ready(function() {
    var danhSachKhoaHoc = new DanhSachKhoaHoc();
    var khoaHocService = new KhoaHocService();
    var nguoiDungService = new NguoiDungService();

    function LoadKhoaHoc() {
        khoaHocService.LayDanhSachKH()
            .done(function(DSKH) {
                danhSachKhoaHoc.DSKH = DSKH;
                hienThiDSKH(danhSachKhoaHoc.DSKH);
            })
            .fail(function(error) {
                console.log(error)
            })
    }
    LoadKhoaHoc()

    function LayDanhSachGV() {
        nguoiDungService.LayDanhSachNguoiDung()
            .done(function(DSND) {
                var content = ''
                for (var i = 0; i < DSND.length; i++) {
                    var nguoiDung = DSND[i];
                    if (nguoiDung.MaLoaiNguoiDung === "GV") {
                        content +=
                            `
                            <option value='${nguoiDung.TaiKhoan}'>${nguoiDung.TaiKhoan}</option>
                            `
                    }

                }
                $('#NguoiTao').html(content)

            })
            .fail(function(error) {})

    }
    LayDanhSachGV()

    function hienThiDSKH(DSKH) {
        var content = '';
        for (var i = 0; i < DSKH.length; i++) {
            var khoaHoc = DSKH[i];
            content +=
                `
                <tr class="trThongTinKH"
                            data-ten="${khoaHoc.TenKhoaHoc}" 
                            data-ma="${khoaHoc.MaKhoaHoc}" 
                            data-mota="${khoaHoc.MoTa}" 
                            data-hinhanh="${khoaHoc.HinhAnh}" 
                            data-luotxem="${khoaHoc.LuotXem}"
                            data-nguoitao="${khoaHoc.NguoiTao}"
                            >
                    <td><input type="checkbox" value="${khoaHoc.MaKhoaHoc}" class="cbXoaKhoaHoc"></td>
                    <td class="ThongTinKH">${khoaHoc.TenKhoaHoc}</td>
                    <td class="ThongTinKH">${khoaHoc.MaKhoaHoc}</td>
                    <td class="ThongTinKH">${khoaHoc.MoTa}</td>
                    <td class="ThongTinKH"><img src="${khoaHoc.HinhAnh}" width="50" height="30"/></td>
                    <td class="ThongTinKH">${khoaHoc.LuotXem}</td>
                    <td class="ThongTinKH">${khoaHoc.NguoiTao}</td>
                </tr>
            `
        }
        $('#tblKhoaHoc').html(content);
    }

    $('#btnThemKhoaHoc').click(function OpenModal() {
        $('.modal-body input').val('');

        $('.modal-title').html('Thêm Khóa Học');
        var btnGroups =
            `
        <button class="btn btn-success" id="btnThemKH">Thêm Khóa Học</button>
        <button class="btn btn-secondary closeModal" data-dismiss="modal">Đóng</button>
        `
        $('.modal-footer').html(btnGroups);
        $('#TaiKhoan').attr('readonly', false)
    });


    $('body').delegate('#btnThemKH', 'click', function() {
        var maKhoaHoc = $('#MaKH').val();
        var tenKhoaHoc = $('#TenKH').val();
        var moTa = $('#MoTa').val();
        var hinhAnh = $('#HinhAnh').val();
        var luotXem = $('#LuotXem').val();
        var nguoiTao = $('#NguoiTao').val();
        var khoaHoc = new KhoaHoc(maKhoaHoc, tenKhoaHoc, moTa, hinhAnh, luotXem, nguoiTao)
        khoaHocService.ThemKhoaHoc(khoaHoc)
            .done(function(res) {
                window.location.reload()
            })
            .fail(function(error) {
                console.log(error)
            })
    })



    $('body').delegate('.ThongTinKH', 'click', function layThongTin() {
        This = $(this).parent()
        var tenKH = This.attr('data-ten');
        var maKH = This.attr('data-ma');
        var moTa = This.attr('data-mota');
        var hinhAnh = This.attr('data-hinhanh');
        var luotXem = This.attr('data-luotxem');
        var nguoiTao = This.attr('data-nguoitao');

        $('#TenKH').val(tenKH)
        $('#MaKH').val(maKH);
        $('#MoTa').val(moTa);
        $('#HinhAnh').val(hinhAnh);
        $('#LuotXem').val(luotXem);
        $('#NguoiTao').val(nguoiTao);

        $('.modal-title').html('Cập nhật người dùng');
        var btnGroups =
            `
        <button class="btn btn-success" id="btnCapNhatKH">Cập nhật</button>
        <button class="btn btn-secondary closeModal" data-dismiss="modal">Đóng</button>
        `
        $('.modal-footer').html(btnGroups);

        $('.ThongTinKH').attr('data-toggle', 'modal');
        $('.ThongTinKH').attr('data-target', '#ModalKH');
        $('#MaKH').attr('readonly', true)
    });

    $('body').delegate('#btnCapNhatKH', 'click', function capNhatThongTin() {

        var maKhoaHoc = $('#MaKH').val();
        var tenKhoaHoc = $('#TenKH').val();
        var moTa = $('#MoTa').val();
        var hinhAnh = $('#HinhAnh').val();
        var luotXem = $('#LuotXem').val();
        var nguoiTao = $('#NguoiTao').val();
        var khoaHoc = new KhoaHoc(maKhoaHoc, tenKhoaHoc, moTa, hinhAnh, luotXem, nguoiTao)

        khoaHocService.CapNhatKhoaHoc(khoaHoc)
            .done(function(res) {
                window.location.reload()
            })
            .fail(function(err) {})
        $('.close').trigger('click');
        $('.modal-body input').val('');
        $('#MaKH').attr('readonly', false)


    });

    $('#btnXoaKhoaHoc').click(function xoaNguoiDung() {
        $('.cbXoaKhoaHoc').each(function() {

            if ($(this).is(':checked')) {
                var tenKhoaHoc = $(this).val();
                khoaHocService.XoaKhoaHoc(tenKhoaHoc)
                    .done(function(res) {
                        window.location.reload()
                    })
                    .fail(function(err) {})
            }

        })

        $('.checkAll').prop('checked', false);
    });

    $('.checkAllKH').click(function XoaAll() {
        $('.cbXoaKhoaHoc').trigger('click')
    })

})