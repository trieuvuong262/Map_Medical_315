const parser = new DOMParser();
const dataMap315json = await import('./data_map.json', {
  with: { type: 'json' }
});
let zoomHCM = 12,
  latHCM = 10.7996365,
  lngHCM = 106.6717373;
let dataMap315 = [...dataMap315json.default],
  dataMapDangXem = [...dataMap315json.default];
const layIdChiNhanh = (chiNhanh) => {
  return "id" + dataMap315.indexOf(chiNhanh);
};
const buildContent = (chiNhanh) => {
  const content = document.createElement("div");
  content.setAttribute(`id`, layIdChiNhanh(chiNhanh));
  content.classList.add("property", "property_nhi", "property_" + chiNhanh.type.toLowerCase());
  content.innerHTML = `    
    <div class="addressTitle">
      <p class="color_${chiNhanh.type.toLowerCase()}">${chiNhanh.title}</p>
    </div>

    <div class="icon">
      <img class="${chiNhanh.type == "BVSAN" || chiNhanh.type == "BVNHI" || chiNhanh.type == "VP" ? "" : "logo_pk"}" src="${chiNhanh.img}"></img>
    </div>

    <div class="detail">
      <div class="name">
        <svg class="svg_icon color_${chiNhanh.type.toLowerCase()}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="rgba(0, 175, 239, 1)"> <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path> </svg>
        <span class="color_${chiNhanh.type.toLowerCase()}">${chiNhanh.name}</span>
        <svg class="exit" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d="M797.32 985.882 344.772 1438.43l188.561 188.562 452.549-452.549 452.548 452.549 188.562-188.562-452.549-452.548 452.549-452.549-188.562-188.561L985.882 797.32 533.333 344.772 344.772 533.333z"/>
        </svg>
      </div>
      <div class="hotline">
        <a href="tel: ${chiNhanh.hotline}">
          <svg class="svg_icon color_${chiNhanh.type.toLowerCase()}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="rgba(0, 175, 239, 1)"> <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path> </svg>
          <span>${chiNhanh.hotline}</span>
        </a>
      </div>
      <div class="address">
      <a target="_blank" href="${chiNhanh.linkMap}">
        <svg class="svg_icon color_${chiNhanh.type.toLowerCase()}" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><path id="map-marker-Filled-2" data-name="map-marker-Filled" class="cls-1" d="M14,10a2,2,0,1,1-2-2A2.006,2.006,0,0,1,14,10Zm5.5,0c0,6.08-4.67,9.89-6.67,11.24a1.407,1.407,0,0,1-.83.26,1.459,1.459,0,0,1-.84-.26C9.16,19.89,4.5,16.09,4.5,10A7.33,7.33,0,0,1,12,2.5,7.336,7.336,0,0,1,19.5,10ZM16,10a4,4,0,1,0-4,4A4,4,0,0,0,16,10Z"/></g></svg>
        <span>${chiNhanh.address}</span>
      </a>
      </div>
      <div class="clockWork">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"> <path d="M10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10S15.5,20,10,20z M10,2c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S14.4,2,10,2 z"/> <path d="M13.8,12l-4-1C9.3,10.9,9,10.5,9,10V5c0-0.6,0.4-1,1-1s1,0.4,1,1v4.2l3.2,0.8c0.5,0.1,0.9,0.7,0.7,1.2 C14.8,11.8,14.3,12.1,13.8,12z"/> </svg>
        <span class="${chiNhanh.workingTime == "Coming soon" ? "coming_soon" : ""}" style="margin-top:2px">&nbsp${chiNhanh.workingTime}</span>
      </div>
    </div>
      `;
  return content;
};
const toggleHighlight = (markerView) => {
  let divChiNhanh = markerView.content;
  if (divChiNhanh.classList.contains("highlight")) {
    divChiNhanh.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    divChiNhanh.classList.add("highlight");
    markerView.zIndex = 1;
  }
};
const initMap = async (dataMapCanXem, zoomCanXem, latCanXem, lngCanXem) => {// toa do hcm 10.7996365, 106.6717373 
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: latCanXem, lng: lngCanXem },
    zoom: zoomCanXem,
    mapId: "4504f8b37365c3d0",
    mapTypeControl: false,
    streetViewControl: false,
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
  for (const chiNhanh of dataMapCanXem) {
    switch (chiNhanh.type) {
      case "NHI":
        chiNhanh.img = "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/logo-315-moi-real-20230620043518-tn2we.png";
        if (chiNhanh.workingTime === "Time.part") {
          chiNhanh.name = "Nhi Đồng 315";
        } else {
          chiNhanh.name = "Nhi Đồng 315 & Tiêm Chủng Nhi";
        };
        break;
      case "SAN":
        chiNhanh.img = "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png";
        chiNhanh.name = "Phụ Sản 315";
        break;
      case "LAO":
        chiNhanh.img = "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png";
        chiNhanh.name = "Tim Mạch - Tiểu Đường 315";
        break;
      case "MAT":
        chiNhanh.img = "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/mat-nenxanh-20230620043518-qi02r.png";
        chiNhanh.name = "Mắt 315";
        break;
      case "BVSAN":
        chiNhanh.img = "https://w.ladicdn.com/5aa6273ea81f66ca2eacc40b/map-icon-bv-20240327164436-qwmck.png";
        chiNhanh.name = "Bệnh viện Phụ Sản Quốc Tế 315";
        break;
      case "BVNHI":
        chiNhanh.img = "https://w.ladicdn.com/5aa6273ea81f66ca2eacc40b/map-icon-bv-nhi-20240404155155-f7ge7.png";
        chiNhanh.name = "Bệnh viện Nhi Đồng Quốc Tế 315";
        break;
      case "VP":
        chiNhanh.img = "https://w.ladicdn.com/5aa6273ea81f66ca2eacc40b/map-icon-vp-20240327164436-ojkt8.png";
        chiNhanh.name = "Văn phòng 315 MEDICAL";
        break;
      default:
        break;
    };
    switch (chiNhanh.workingTime) {
      case "Time.vp":
        chiNhanh.workingTime = "T2-CN: 8:00 - 12:00 & 13:00 - 17:00";
        break;
      case "Time.full":
        chiNhanh.workingTime = "T2-CN: 8:00 - 11:30 & 13:30 - 20:30";
        break;
      case "Time.part":
        chiNhanh.workingTime = "T2-T6: 17:00 - 20:30</br>T7-CN: 8:00 - 11:30 & 13:30 - 20:30";
        break;
      case "Time.comingsoon":
        chiNhanh.workingTime = "Coming soon";
        break;
      default:
        break;
    };
    if (chiNhanh.hotline == "Hotline315" || chiNhanh.hotline == "" || chiNhanh.hotline === undefined) {
      chiNhanh.hotline = "0901.315.315";
    };
    const glyphSvgMarkerView = new AdvancedMarkerElement({
      map,
      position: {
        lat: Number(chiNhanh.latitude),
        lng: Number(chiNhanh.longitude)
      },
      content: buildContent(chiNhanh)
    });
    glyphSvgMarkerView.addListener("click", () => {
      toggleHighlight(glyphSvgMarkerView);
    });
  }
};
// ********************** FORM SEARCH FILTER **********************
let dsInputChuyenKhoa = document.getElementById("loai_chi_nhanh").querySelectorAll("input"), //danh sach input loai chi nhanh
  inputChonTatCa = document.getElementById("ckb_all"),
  inputNhi = document.getElementById("ckb_nhi"),
  inputSan = document.getElementById("ckb_san"),
  inputLao = document.getElementById("ckb_lao"),
  inputMat = document.getElementById("ckb_mat"),
  inputBvSan = document.getElementById("ckb_bvsan"),
  inputBvNhi = document.getElementById("ckb_bvnhi"),
  inputVp = document.getElementById("ckb_vp"),
  inputTimDiaChi = document.getElementById("txt_timdiachi"),
  inputTimTinhTp = document.getElementById("cbb_timtinhtp"),
  dsDiaChiInput = document.getElementById("ds_diachi");

const xuLyChuoi = (str) => {
  str = str.toLowerCase();
  str = str.replace(/\s+/g, ' ');
  str = str.trim();
  str = str.replace(/thành phố|thanh pho|tp /g, 'tp. ');
  str = str.replace(/tphcm|tp.hcm/g, 'tp. hcm');
  str = str.replace(/q2|q9|quận 2|quận 9|quan 2|quan 9/g, 'tp. thủ đức');
  str = str.replace(/quận|q |q./g, 'q. ');
  str = str.replace(/huyện|h |h./g, 'h. ');
  str = str.replace(/q1|quận 1|quan 1/g, 'q. 1');
  str = str.replace(/q3|quận 3|quan 3/g, 'q. 3');
  str = str.replace(/q4|quận 4|quan 4/g, 'q. 4');
  str = str.replace(/q5|quận 5|quan 5/g, 'q. 5');
  str = str.replace(/q6|quận 6|quan 6/g, 'q. 6');
  str = str.replace(/q7|quận 7|quan 7/g, 'q. 7');
  str = str.replace(/q8|quận 8|quan 8/g, 'q. 8');
  str = str.replace(/q10|quận 10|quan 10/g, 'q. 10');
  str = str.replace(/q11|quận 11|quan 11/g, 'q. 11');
  str = str.replace(/q12|quận 12|quan 12/g, 'q. 12');
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/\s+/g, ' ');
  str = str.trim();
  return str;
};

const loadDsDiaChi = (dataMap) => {
  dsDiaChiInput.innerHTML = ``;
  if (dataMap.length > 0) {
    dataMap.map((chiNhanh) => {
      let liDiaChi = document.createElement("li");
      liDiaChi.classList.add("p-2");
      liDiaChi.innerHTML = chiNhanh.address;
      liDiaChi.addEventListener("click", () => {
        inputTimDiaChi.value = chiNhanh.address;
        dsDiaChiInput.style.display = "none";
      });
      dsDiaChiInput.appendChild(liDiaChi);
    });
    return true;
  };
  let liDiaChi = document.createElement("li");
  liDiaChi.classList.add("p-2", "pe-5");
  liDiaChi.innerHTML = `Không tìm thấy chi nhánh!<span class="me-4">&nbsp;</span>`;
  liDiaChi.addEventListener("click", () => {
    dsDiaChiInput.style.display = "none";
  });
  dsDiaChiInput.appendChild(liDiaChi);
  return false;
};
const loadDsTinhTp = () => {  //chọn tất cả các tỉnh/tp thì chuyền chuỗi "selected" 
  inputTimTinhTp.innerHTML = `<option value selected>Tất cả các Tỉnh/TP...</option>`;
  let dsTinhTp = [];
  dataMap315.map((chiNhanh) => {
    if (dsTinhTp.some(tinhTp => tinhTp.includes(chiNhanh.city)) === false) {
      dsTinhTp.push(chiNhanh.city);
    };
  });
  dsTinhTp.map((tinhTp) => {
    let optTinhTp = document.createElement("option");
    optTinhTp.value = tinhTp;
    tinhTp.replace(/TP. HCM/g, 'Hồ Chí Minh');
    optTinhTp.innerHTML = tinhTp;

    inputTimTinhTp.appendChild(optTinhTp);
  });
};

// const changeChiNhanh = () => {
//   let tuKhoa = xuLyChuoi(inputTuKhoa.value),
//     tinhTP = xuLyChuoi(inputTinhTP.value);
//   dataTam = [];
//   dataMapCanTim = [...dataMap315.default];
//   dataMapCanTim.map((dataChiNhanh) => {
//     if ((dataChiNhanh.type === "NHI" && inputNhi.checked)
//       || (dataChiNhanh.type === "SAN" && inputSan.checked)
//       || (dataChiNhanh.type === "LAO" && inputLao.checked)
//       || (dataChiNhanh.type === "MAT" && inputMat.checked)
//       || (dataChiNhanh.type === "BV" && inputBV.checked)
//       || (dataChiNhanh.type === "VP" && inputVP.checked)) {
//       dataTam.push(dataChiNhanh);
//     }
//   });
//   dataMapCanTim = [...dataTam];
//   if (tinhTP) {
//     //if (tinhTP === "hcm") tinhTP = "ho chi minh";
//     dataTam = [];
//     dataMapCanTim.map((dataChiNhanh) => {
//       let diaChi = xuLyChuoi(dataChiNhanh.address),
//         city = xuLyChuoi(dataChiNhanh.city);
//       if (diaChi.includes(tinhTP) || city.includes(tinhTP)) {
//         dataTam.push(dataChiNhanh);
//       }
//     });
//     dataMapCanTim = [...dataTam];
//     dataTam = [];
//   }
//   if (tuKhoa) {
//     dataTam = [];
//     dataMapCanTim.map((dataChiNhanh) => {
//       let diaChi = xuLyChuoi(dataChiNhanh.address),
//         city = xuLyChuoi(dataChiNhanh.city);
//       if (diaChi.includes(tuKhoa) || city.includes(tuKhoa)) {
//         dataTam.push(dataChiNhanh);
//       }
//     });
//     dataMapCanTim = [...dataTam];
//     dataTam = [];
//   }
//   var dataMapCanTim, dataTam;
//   if (dataMapCanTim.length > 0 && dataTam.length == 0) {
//     let latCanTim = Number(dataMapCanTim[0].latitude),
//       lngCanTim = Number(dataMapCanTim[0].longitude);
//     return initMap(dataMapCanTim, zoomHCM, latCanTim, lngCanTim);
//   } else if (dataMapCanTim == 0) {
//     return initMap(dataMapCanTim, 5, 15.96008004884515, 105.8365630818173);
//   }
//   return initMap(dataMapCanTim, zoomHCM, latHCM, lngHCM);
// };
// const keypressTuKhoa = () => {
//   divKhongTimThay.style.display = "none";
//   dataListDiaChi.style.display = "block";
//   let tuKhoa = xuLyChuoi(inputTuKhoa.value);
//   dataTam = [];
//   const dataMap = [...dataMap315.default];
//   dataMap.map((dataChiNhanh) => {
//     let diaChi = xuLyChuoi(dataChiNhanh.address);
//     let city = xuLyChuoi(dataChiNhanh.city);
//     if (diaChi.includes(tuKhoa) || city.includes(tuKhoa)) {
//       dataTam.push(dataChiNhanh);
//     }
//   });
//   if (dataTam.length > 0) {
//     dataListDiaChi.innerHTML = ``;
//     dataTam.map((dataChiNhanh) => {
//       let optDiaChi = document.createElement("li");
//       optDiaChi.classList.add("p-2");
//       optDiaChi.innerHTML = dataChiNhanh.address;
//       optDiaChi.addEventListener("click", () => {
//         inputTuKhoa.value = optDiaChi.innerHTML;
//         dataListDiaChi.style.display = "none";
//       });
//       dataListDiaChi.appendChild(optDiaChi);
//     });
//   } else {
//     divKhongTimThay.style.display = "block";
//     dataListDiaChi.style.display = "none";
//     loadDataList();
//   }
//   var dataTam;
// };
inputTimDiaChi.addEventListener("focus", () => {
  dsDiaChiInput.style.display = "block";
});
inputTimDiaChi.addEventListener("focusout", () => {
  setTimeout(() => {
    dsDiaChiInput.style.display = "none";
    loadDsDiaChi(dataMapDangXem);
  }, 200);
});
// inputTuKhoa.addEventListener("keyup", keypressTuKhoa);
// divElem.addEventListener("change", changeChiNhanh);
// inputTuKhoa.addEventListener("change", changeChiNhanh);
// inputTinhTP.addEventListener("change", changeChiNhanh);
// //dataListDiaChi.addEventListener("click", changeChiNhanh);
// dataListTinhTP.addEventListener("change", changeChiNhanh);
// loadDataList();
inputChonTatCa.addEventListener("change", () => {
  if (inputChonTatCa.checked) {
    document.getElementById("bo_chon_tat_ca").style.display = "none";
    dsInputChuyenKhoa.forEach(input => {
      input.disabled = true;
      input.checked = true;
    });
  } else {
    document.getElementById("bo_chon_tat_ca").style.display = "block";
    dsInputChuyenKhoa.forEach(input => {
      input.disabled = false;
    });
  }
});
document.getElementById("bo_chon_tat_ca").addEventListener("click", () => {
  dsInputChuyenKhoa.forEach(input => {
    input.checked = false;
  });
});
document.getElementById("btn_timkiem").addEventListener("click", () => {
  document.getElementById("btn_timkiem").style.display = "none";
  document.getElementById("div_timkiem").style.display = "block";
  document.getElementById("form_select_filter").classList.add("width25");
  document.getElementById("form_select_filter").focus();
});
document.getElementById("exit_timkiem").addEventListener("click", () => {
  document.getElementById("div_timkiem").style.display = "none";
  document.getElementById("btn_timkiem").style.display = "block";
  document.getElementById("form_select_filter").classList.remove("width25");
});
// document.getElementById("form_select_filter").addEventListener("mouseleave", () => {
//   document.getElementById("btn_timkiem").style.display = "block";
//   document.getElementById("div_timkiem").style.display = "none";
// });
initMap(dataMap315, zoomHCM, latHCM, lngHCM);
loadDsDiaChi(dataMapDangXem);
loadDsTinhTp();