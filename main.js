// Bài 1
function ketquatuyensinh() {
	var dKhuVuc = document.getElementById("khuVuc").value;
	var diemKhuVuc = 0;
	if (dKhuVuc === "X") {
		diemKhuVuc = 0;
	} else if (dKhuVuc === "A") {
		diemKhuVuc = 2;
	} else if (dKhuVuc === "B") {
		diemKhuVuc = 1;
	} else if (dKhuVuc === "C") {
		diemKhuVuc = 0.5;
	}
	var dDoiTuong = parseInt(document.getElementById("doiTuong").value);
	var diemDoiTuong = 0;
	if (dDoiTuong === 1) {
		diemDoiTuong = 2.5;
	} else if (dDoiTuong === 2) {
		diemDoiTuong = 1.5;
	} else if (dDoiTuong === 3) {
		diemDoiTuong = 1;
	} else if (dDoiTuong === 0) {
		diemDoiTuong = 0;
	}
	console.log(diemDoiTuong);
	var diemChuanTruong = document.getElementById("diemChuan").value;
	var diemMon1 = document.getElementById("mon1").value;
	var diemMon2 = document.getElementById("mon2").value;
	var diemMon3 = document.getElementById("mon3").value;
	var ketqua = "";
	var tongDiemThiSinh = 0;
	tongDiemThiSinh =
		parseFloat(diemMon1) +
		parseFloat(diemMon2) +
		parseFloat(diemMon3) +
		parseFloat(diemDoiTuong) +
		parseInt(diemKhuVuc);
	if (
		tongDiemThiSinh >= diemChuanTruong &&
		diemMon1 != 0 &&
		diemMon2 != 0 &&
		diemMon3 != 0
	) {
		ketqua = "Đậu";
	} else {
		ketqua = "Rớt";
	}
	document.getElementById("ketquathi").innerHTML =
		ketqua + ", " + "Tổng số điểm: " + tongDiemThiSinh;
}

// Bài 2
function tinhtiendien() {
	var soDienKw = document.getElementById("soKW").value;
	var soTienDien = 0;
	if (soDienKw >= 0 && soDienKw <= 50) {
		soTienDien = soDienKw * 500;
	} else if (soDienKw > 50 && soDienKw <= 100) {
		soTienDien = 50 * 500 + (soDienKw - 50) * 650;
	} else if (soDienKw > 100 && soDienKw <= 200) {
		soTienDien = 50 * 500 + 50 * 650 + (soDienKw - 100) * 850;
	} else if (soDienKw > 200 && soDienKw <= 350) {
		soTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDienKw - 200) * 1100;
	} else if (soDienKw > 350) {
		soTienDien =
			50 * 500 +
			50 * 650 +
			100 * 850 +
			150 * 1100 +
			(soDienKw - 350) * 1300;
	}
	document.getElementById("sotienphaitra").innerHTML = soTienDien;
}

// Bài 3
function tinhthuethunhapcanhan() {
	var thuNhap = document.getElementById("thuNhap1Nam").value;
	var soNguoi = document.getElementById("nguoiPhuThuoc").value;
	var thuNhapChiuThue = 0;
	thuNhapChiuThue = thuNhap - 4000000 - soNguoi * 1600000;
	if (thuNhapChiuThue >= 0 && thuNhapChiuThue <= 60) {
		thuNhapChiuThue = thuNhapChiuThue * (5 / 100);
	} else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
		thuNhapChiuThue = thuNhapChiuThue * (10 / 100);
	} else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
		thuNhapChiuThue = thuNhapChiuThue * (15 / 100);
	} else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
		thuNhapChiuThue = thuNhapChiuThue * (20 / 100);
	} else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
		thuNhapChiuThue = thuNhapChiuThue * (25 / 100);
	} else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
		thuNhapChiuThue = thuNhapChiuThue * (30 / 100);
	} else if (thuNhapChiuThue > 960) {
		thuNhapChiuThue = thuNhapChiuThue * (35 / 100);
	}
	document.getElementById("tienthuephaichiu").innerHTML = thuNhapChiuThue;
}

//Bài 4
