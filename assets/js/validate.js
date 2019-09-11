function kiemTraNhap(idInput, idTB, message) {
    var value = $(idInput).val();
    if (value.length > 0) {
        $(idTB).css('display', 'none');
        $(idInput).css('border', '1px solid green');
        return true;
    }
    $(idTB).css('display', 'block');
    $(idTB).css('color', 'red');
    $(idInput).css('border', '1px solid red');
    $(idTB).html(message);
    return false;

}

function kiemTraDoDai(idInput, idTB, min, max) {
    var value = $(idInput).val();
    if (value.length > max || value.length < min) {
        $(idTB).css('display', 'block');
        $(idTB).css('color', 'red');
        $(idInput).css('border', '1px solid red');
        $(idTB).html(`Độ dài yêu cầu từ ${min} tới ${max} kí tự`);
        return false;
    }
    $(idTB).css('display', 'none');
    $(idInput).css('border', '1px solid green');
    return true;
}


function kiemTraText(idInput, idTB, message) {
    var value = $(idInput).val();
    var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$")
    if (pattern.test(value)) {
        $(idTB).css('display', 'none');
        $(idInput).css('border', '1px solid green');
        return true;
    }
    $(idTB).css('display', 'block');
    $(idTB).css('color', 'red');

    $(idInput).css('border', '1px solid red');
    $(idTB).html(message);
    return false;
}

function kiemTraNumber(idInput, idTB, message) {
    var value = $(idInput).val();
    var pattern = new RegExp("^[0-9]+$")
    if (pattern.test(value)) {
        $(idTB).css('display', 'none');
        $(idInput).css('border', '1px solid green');
        return true;
    }
    $(idTB).css('display', 'block');
    $(idTB).css('color', 'red');

    $(idInput).css('border', '1px solid red');
    $(idTB).html(message);
    return false;
}

function kiemTraEmail(idInput, idTB, message) {
    var value = $(idInput).val();
    var pattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
        "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")

    if (pattern.test(value)) {
        $(idTB).css('display', 'none');
        $(idInput).css('border', '1px solid green');
        return true;
    }
    $(idTB).css('display', 'block');
    $(idTB).css('color', 'red');

    $(idInput).css('border', '1px solid red');
    $(idTB).html(message);
    return false;
}