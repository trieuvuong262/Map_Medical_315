const parser = new DOMParser();
const dataMap315 = await import('./data_map.json', {
  with: { type: 'json' }
});
let zoomHCM = 12,
  latHCM = 10.7996365,
  lngHCM = 106.6717373;
async function initMap(dataMapCanXem, zoomCanXem, latCanXem, lngCanXem) {// toa do hcm 10.7996365, 106.6717373 
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: latCanXem, lng: lngCanXem },
    zoom: zoomCanXem,
    mapId: "4504f8b37365c3d0",
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
  const buildContent = (property) => {
    const content = document.createElement("div");
    content.classList.add("property");
    switch (property.type) {
      case "NHI":
        content.classList.add("property_nhi");
        break;
      case "SAN":
        content.classList.add("property_san");
        break;
      case "LAO":
        content.classList.add("property_lao");
        break;
      case "MAT":
        content.classList.add("property_mat");
        break;
      case "BV":
        content.classList.add("property_bv");
        break;
      case "VP":
        content.classList.add("property_vp");
        break;
      default:
        content.classList.add("property_nhi");
        break;
    }
    content.innerHTML = `    
    <div class="addressTitle">
      <p class="
      ${property.type == "SAN" || property.type == "BV"
        ? "color_san"
        : property.type == "LAO"
          ? "color_lao"
          : property.type == "MAT"
            ? "color_mat"
            : "color_nhi"
      }
      ">${property.title}</p>
    </div>
    
    <div class="icon">
      <img class="
      ${property.type == "BV" || property.type == "VP"
        ? ""
        : "logo_pk"
      }" src="${property.img}"></img>
    </div>

    <div class="detail">
      <div class="name">
        <svg class="svg_icon 
        ${property.type == "SAN" || property.type == "BV"
        ? "color_san"
        : property.type == "LAO"
          ? "color_lao"
          : property.type == "MAT"
            ? "color_mat"
            : "color_nhi"
      }
      " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="rgba(0, 175, 239, 1)"> <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path> </svg>
        <span class="
        ${property.type == "SAN" || property.type == "BV"
        ? "color_san"
        : property.type == "LAO"
          ? "color_lao"
          : property.type == "MAT"
            ? "color_mat"
            : "color_nhi"
      }
      ">${property.name}</span>
      <svg class="exit" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M797.32 985.882 344.772 1438.43l188.561 188.562 452.549-452.549 452.548 452.549 188.562-188.562-452.549-452.548 452.549-452.549-188.562-188.561L985.882 797.32 533.333 344.772 344.772 533.333z"/>
</svg>
      </div>
      <div class="hotline">
      <a href="tel: ${property.hotline}">
        <svg class="svg_icon 
        ${property.type == "SAN" || property.type == "BV"
        ? "color_san"
        : property.type == "LAO"
          ? "color_lao"
          : property.type == "MAT"
            ? "color_mat"
            : "color_nhi"
      }
      " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="rgba(0, 175, 239, 1)"> <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path> </svg>
        <span>${property.hotline}</span>
        </a>
      </div>
      <div class="address">
      <a target="_blank" href="${property.linkMap}">
        <svg class="svg_icon 
        ${property.type == "SAN" || property.type == "BV"
        ? "color_san"
        : property.type == "LAO"
          ? "color_lao"
          : property.type == "MAT"
            ? "color_mat"
            : "color_nhi"
      }
      " viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><path id="map-marker-Filled-2" data-name="map-marker-Filled" class="cls-1" d="M14,10a2,2,0,1,1-2-2A2.006,2.006,0,0,1,14,10Zm5.5,0c0,6.08-4.67,9.89-6.67,11.24a1.407,1.407,0,0,1-.83.26,1.459,1.459,0,0,1-.84-.26C9.16,19.89,4.5,16.09,4.5,10A7.33,7.33,0,0,1,12,2.5,7.336,7.336,0,0,1,19.5,10ZM16,10a4,4,0,1,0-4,4A4,4,0,0,0,16,10Z"/></g></svg>
        <span>${property.address}</span>
        </a>
      </div>
      <div class="clockWork">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"> <path d="M10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10S15.5,20,10,20z M10,2c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S14.4,2,10,2 z"/> <path d="M13.8,12l-4-1C9.3,10.9,9,10.5,9,10V5c0-0.6,0.4-1,1-1s1,0.4,1,1v4.2l3.2,0.8c0.5,0.1,0.9,0.7,0.7,1.2 C14.8,11.8,14.3,12.1,13.8,12z"/> </svg>
        <span class="
        ${property.workingTime == "Coming soon"
        ? "coming_soon"
        : ""
      }
      " style="margin-top:2px">&nbsp${property.workingTime}</span>
      </div>
    </div>
      `;
    return content;
  };
  function toggleHighlight(markerView) {
    if (markerView.content.classList.contains("highlight")) {
      markerView.content.classList.remove("highlight");
      markerView.zIndex = null;
    } else {
      markerView.content.classList.add("highlight");
      markerView.zIndex = 1;
    }
  }



  for (const property of dataMapCanXem) {
    switch (property.type) {
      case "NHI":
        property.img = "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/logo-315-moi-real-20230620043518-tn2we.png";
        property.name = "Nhi Đồng 315 & Tiêm Chủng Nhi";
        break;
      case "SAN":
        property.img = "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png";
        property.name = "Phụ Sản 315";
        break;
      case "LAO":
        property.img = "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png";
        property.name = "Tim Mạch - Tiểu Đường 315";
        break;
      case "MAT":
        property.img = "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/mat-nenxanh-20230620043518-qi02r.png";
        property.name = "Mắt 315";
        break;
      case "BV":
        property.img = "https://w.ladicdn.com/5aa6273ea81f66ca2eacc40b/map-icon-bv-20240327164436-qwmck.png";
        property.name = "Bệnh viện Phụ Sản Quốc Tế 315";
        break;
      case "VP":
        property.img = "https://w.ladicdn.com/5aa6273ea81f66ca2eacc40b/map-icon-vp-20240327164436-ojkt8.png";
        property.name = "Văn phòng 315 MEDICAL";
        break;
      default:
        break;
    }
    switch (property.workingTime) {
      case "Time.vp":
        property.workingTime = "T2-CN: 8:00 - 12:00 & 13:00 - 17:00";
        break;
      case "Time.full":
        property.workingTime = "T2-CN: 8:00 - 11:30 & 13:30 - 20:30";
        break;
      case "Time.part":
        property.workingTime = "T2-T6: 17:00 - 20:30</br>T7-CN: 8:00 - 11:30 & 13:30 - 20:30";
        break;
      case "Time.comingsoon":
        property.workingTime = "Coming soon";
        break;
      default:
        break;
    }
    if (property.hotline === "Hotline315" || property.hotline === undefined) {
      property.hotline = "0901.315.315";
    }
    const positionMap = {
      lat: Number(property.latitude),
      lng: Number(property.longitude),
    }


    const glyphSvgMarkerView = new AdvancedMarkerElement({
      map,
      position: positionMap,
      content: buildContent(property),
    });
    glyphSvgMarkerView.addListener("click", () => {
      toggleHighlight(glyphSvgMarkerView);
    });
  }
}
initMap(dataMap315.default, zoomHCM, latHCM, lngHCM);

// ********************** FORM SEARCH FILTER **********************
let divElem = document.getElementById("loai_chi_nhanh"), inputElements = divElem.querySelectorAll("input"), // danh sach input loai chi nhanh
  inputChonTatCa = document.getElementById("ckb_all"),
  inputNhi = document.getElementById("ckb_nhi"),
  inputSan = document.getElementById("ckb_san"),
  inputLao = document.getElementById("ckb_lao"),
  inputMat = document.getElementById("ckb_mat"),
  inputBV = document.getElementById("ckb_bv"),
  inputVP = document.getElementById("ckb_vp"),
  inputTuKhoa = document.getElementById("txt_tukhoa"),
  inputTinhTP = document.getElementById("txt_tinhtp");

function xuLyChuoi(str) {
  str = str.trim();
  str = str.toLowerCase();
  str = str.replace(/\s+/g, ' ');
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
}
const changeChonTatCa = () => {
  if (inputChonTatCa.checked) {
    inputElements.forEach(input => {
      input.disabled = true;
      input.checked = true;
    });
    changeLoaiChiNhanh();
  } else {
    inputElements.forEach(input => {
      input.disabled = false;
    });
  }
  return inputElements;
}
const changeLoaiChiNhanh = () => {
  let tuKhoa = xuLyChuoi(inputTuKhoa.value),
    tinhTP = xuLyChuoi(inputTinhTP.value),
    diaChi = "";
  dataTam = [];
  dataMapCanTim = [...dataMap315.default];
  dataMapCanTim.map((dataChiNhanh) => {
    if ((dataChiNhanh.type === "NHI" && inputNhi.checked)
      || (dataChiNhanh.type === "SAN" && inputSan.checked)
      || (dataChiNhanh.type === "LAO" && inputLao.checked)
      || (dataChiNhanh.type === "MAT" && inputMat.checked)
      || (dataChiNhanh.type === "BV" && inputBV.checked)
      || (dataChiNhanh.type === "VP" && inputVP.checked)) {
      dataTam.push(dataChiNhanh);
    }
  });
  dataMapCanTim = [...dataTam];
  if (tinhTP) {
    //if (tinhTP === "hcm") tinhTP = "ho chi minh";
    dataTam = [];
    dataMapCanTim.map((dataChiNhanh) => {
      diaChi = xuLyChuoi(dataChiNhanh.address);
      if (diaChi.search(tinhTP) !== -1) {
        dataTam.push(dataChiNhanh);
      }
    });
    dataMapCanTim = [...dataTam];
    dataTam = [];
  }
  if (tuKhoa) {
    dataTam = [];
    dataMapCanTim.map((dataChiNhanh) => {
      diaChi = xuLyChuoi(dataChiNhanh.address);
      if (diaChi.search(tuKhoa) !== -1) {
        dataTam.push(dataChiNhanh);
      }
    });
    dataMapCanTim = [...dataTam];
    dataTam = [];
  }
  var dataMapCanTim, dataTam;
  if (dataMapCanTim.length > 0 && dataTam.length == 0) {
    let latCanTim = Number(dataMapCanTim[0].latitude),
      lngCanTim = Number(dataMapCanTim[0].longitude);
    return initMap(dataMapCanTim, zoomHCM, latCanTim, lngCanTim);
  }
  return initMap(dataMapCanTim, zoomHCM, latHCM, lngHCM);
}
divElem.addEventListener("change", changeLoaiChiNhanh);
inputChonTatCa.addEventListener("change", changeChonTatCa);
inputTuKhoa.addEventListener("change", changeLoaiChiNhanh);
inputTinhTP.addEventListener("change", changeLoaiChiNhanh);