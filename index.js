const parser = new DOMParser();

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 10.7996365, lng: 106.6717373 },
    zoom: 12,
    mapId: "4504f8b37365c3d0",
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
  const buildContent = (property) => {
    const content = document.createElement("div");
    content.classList.add("property");
    switch (property.type) {
      case "VP":
        content.classList.add("property_vp");
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
        content.classList.add("property_san");
        content.classList.add("property_bv");
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
        <span><a href="tel: ${property.hotline}">${property.hotline}</a></span>
      </div>
      <div class="address">
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
        <span><a target="_blank" href="${property.linkMap}">${property.address}</a></span>
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
  for (const property of dataNhiDong315) {
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
      toggleHighlight(glyphSvgMarkerView, property);
    });
  }
  function toggleHighlight(markerView, property) {
    if (markerView.content.classList.contains("highlight")) {
      markerView.content.classList.remove("highlight");
      markerView.zIndex = null;
    } else {
      markerView.content.classList.add("highlight");
      markerView.zIndex = 1;
    }
  }
}

const SrcLogo = {
  nhi: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/logo-315-moi-real-20230620043518-tn2we.png",
  san: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
  lao: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png",
  mat: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/mat-nenxanh-20230620043518-qi02r.png",
  bv: "https://w.ladicdn.com/5aa6273ea81f66ca2eacc40b/map-icon-bv-20240327164436-qwmck.png",
  vp: "https://w.ladicdn.com/5aa6273ea81f66ca2eacc40b/map-icon-vp-20240327164436-ojkt8.png",
};
const Name = {
  nhi: "Nhi Đồng 315 & Tiêm Chủng Nhi",
  san: "Phụ Sản 315",
  lao: "Tim Mạch - Tiểu Đường 315",
  mat: "Mắt 315",
  bv: "Bệnh viện Phụ Sản Quốc Tế 315",
  vp: "Văn phòng 315 MEDICAL",
}
const Hotline315 = "0901.315.315"
const Time = {
  vp: "T2-CN: 8:00 - 12:00 & 13:00 - 17:00",
  full: "T2-CN: 8:00 - 11:30 & 13:30 - 20:30",
  part: "T2-T6: 17:00 - 20:30</br>T7-CN: 8:00 - 11:30 & 13:30 - 20:30", //2 dong, them the </br> de xuong dong
  comingsoon: "Coming soon"
};
const dataNhiDong315 = [
  {
    title: "Số 207B Hoàng Văn Thụ",
    type: "VP",
    img: SrcLogo.vp,
    name: Name.vp,
    hotline: Hotline315,
    address: "207B Hoàng Văn Thụ, P. 8, Q. Phú Nhuận, TP. HCM",
    workingTime: Time.vp,
    linkMap: "https://maps.app.goo.gl/B5ycg623tkWB9F7P9",
    srcIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1522949124255!2d106.6692163760128!3d10.799645458763031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752991b995125b%3A0x3a953f0017ac6589!2zVsSDbiBQaMOybmcgTmhpIMSQ4buTbmcgMzE1ICgzMTUgTUVESUNBTCk!5e0!3m2!1svi!2s!4v1711696889741!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    latitude: "10.799850965509416",
    longitude: "106.67181275440245",
  },
  {
    title: "Số 169 Đồng Đen",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "169 Đồng Đen, P. 11, Q. Tân Bình, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/1pVbekVTLVARQVJm7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.13633230951!2d106.6430956!3d10.7895405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fd2eae69657%3A0x78fd9548e0263759!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698053042!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.790236084118135",
    longitude: "106.64313851534529"
  },
  {
    title: "Số 885 Nguyễn Ảnh Thủ",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "885 Nguyễn Ảnh Thủ, P. Tân Chánh Hiệp, Q. 12, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/9xtiEKyRMrQP5zA49",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15672.722352064811!2d106.6220362!3d10.8738654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b7bcfc2ba93%3A0x2dea62329432a5c4!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698083800!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.874729366996096",
    longitude: "106.62212203069058"
  },
  {
    title: "Số 37 Huỳnh Tấn Phát",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "37 Huỳnh Tấn Phát, TT. Nhà Bè, H. Nhà Bè, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/Pygqye79d8EhypZE9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15681.701065480549!2d106.7383555!3d10.7016451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31753bf467d929a3%3A0x77ef0cb4b5afb073!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698109081!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.702551730785585",
    longitude: "106.73822675396413"
  },
  {
    title: "Số 10/01 Lý Thường Kiệt",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "10/01 Lý Thường Kiệt, TT. Hóc Môn, H. Hóc Môn, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/FchsN73Qkit8DPKs6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15672.028631022762!2d106.5910885!3d10.8870596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d586632c3bb7%3A0x164be066112a8925!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698133721!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.887965671554774",
    longitude: "106.59078809258301"
  },
  {
    title: "Số 98 Nguyễn Sơn",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "98 Nguyễn Sơn, P. Phú Thọ Hòa, Q. Tân Phú, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/1wd9wc5VSXiLSKth8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.54231304207!2d106.630591!3d10.7817519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ff48f4c792b%3A0xa87fa86475076e78!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698158193!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.782531817432437",
    longitude: "106.63054808465472"
  },
  {
    title: "Số 179 Hiệp Bình",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "179 Hiệp Bình, P. Hiệp Bình, Q. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/2HX9HGnAtDkB4oCC7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.229636584809!2d106.7274229!3d10.845143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175272ead89bd3b%3A0x52701e2aaba76272!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698191584!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.845880603890626",
    longitude: "106.72720832327356"
  },
  {
    title: "Số 373 Phạm Văn Chiêu",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "373 Phạm Văn Chiêu, P. 14, Q. Gò Vấp, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/jjZSHAf2Mc4kihsC6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15673.926553582614!2d106.654222!3d10.8509245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298db39de639%3A0x69a93c968e44d2bc!2zTmhpIMSQ4buTbmcgMzE1!5e0!3m2!1svi!2s!4v1711698215566!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.85178853338095",
    longitude: "106.65422200000002"
  },
  {
    title: "Số 187 Hậu Giang",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "187 Hậu Giang, P. 5, Q. 6, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/9acY6SQgP1BMhzMG7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.222707716024!2d106.6450567!3d10.7494548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f191e26626b%3A0xdfe90e71b616c2a9!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698243942!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.750319125345756",
    longitude: "106.64467046189245"
  },
  {
    title: "Số 87 Lê Văn Việt",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "87 Lê Văn Việt, P. Hiệp Phú, TP. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/f5UFm9bT39oiUhAS8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.13483119618!2d106.7774194!3d10.8469518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752717cc2de18d%3A0x22e33d9e4c76e2db!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698280596!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.847773696390854",
    longitude: "106.77733356930942"
  },
  {
    title: "Số 482 Lê Văn Quới",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "482 Lê Văn Quới, P. Bình Hưng Hoà A, Q. Bình Tân, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/QcirCm55P29h1ovt6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.818461952227!2d106.6062823!3d10.7764509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dd1cfb52cc5%3A0x149759bb2f05da31!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698298986!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.777441623032011",
    longitude: "106.60649687672642"
  },
  {
    title: "Số 180 Hải Thượng Lãn Ông",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "180 Hải Thượng Lãn Ông, P. 10, Q. 5, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/BEbiD47dvZzKNMVu5",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.145615859756!2d106.6594842!3d10.7509386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ffb7f1983b3%3A0x2a6e8246dec08e9e!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698326956!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.751845083037194",
    longitude: "106.65965586138113"
  },
  {
    title: "Số A29/22 Quốc Lộ 50",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "A29/22 Quốc Lộ 50, X. Bình Hưng, H. Bình Chánh, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/tN7DUS3Mt8Q6Ns6f7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.231609776332!2d106.6559241!3d10.7300176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fddbcc0e725%3A0x91484ccf14b0f3ff!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698347978!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.730797651222836",
    longitude: "106.6561815920717"
  },
  {
    title: "Số 234 Đinh Tiên Hoàng",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "234 Đinh Tiên Hoàng, P. Đa Kao, Q. 1, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/E2QRCr8jb4qQGy5N9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698374021!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.793670782032418",
    longitude: "106.69631589207171"
  },
  {
    title: "Số 246B-E Bạch Đằng",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "246B-E Bạch Đằng, P. 24, Q. Bình Thạnh, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/TGwK9zXjGfFaXnU26",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62705.62560894256!2d106.703878!3d10.80353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175296dff70c57d%3A0x3da3fc1c7cd07696!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2sus!4v1711698448955!5m2!1svi!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.807155282239838",
    longitude: "106.70353467723774"
  },
  {
    title: "Số 14-16 Tên Lửa",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "14-16 Tên Lửa, P. An Lạc A, Q. Bình Tân, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/WQBKsd6NqGRb4eAc9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.761334827193!2d106.6149283!3d10.7390821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dd31b14e8fd%3A0x16a49abeaac5d664!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698468420!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.739988618636202",
    longitude: "106.61488538465473"
  },
  {
    title: "Số 10-12 Tên Lửa",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "10-12 Tên Lửa, P. An Lạc A, Q. Bình Tân, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/N5eXBTj1XqUY1vX2A",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.9407411416696!2d106.6149027!3d10.7390507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d84e0d9ebbb%3A0x7ad08ddd2bd557ad!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711698519804!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.739171920685466",
    longitude: "106.61495634418159"
  },
  {
    title: "Số 260F Nguyễn Văn Luông",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "260F Nguyễn Văn Luông, P. 11, Q. 6, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/2RHnTPyzyr9y3vUj7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.32433256543!2d106.6352581!3d10.7474985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8565b40905%3A0x86dc359494685b1b!2zTmhpIMSQ4buTbmcgMzE1!5e0!3m2!1svi!2s!4v1711698546723!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.748573642998998",
    longitude: "106.63512935396416"
  },
  {
    title: "Số 329 Hoàng Diệu",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "329 Hoàng Diệu, P. 6, Q. 4, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/sfNzyJmZes7hoYSbA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.687180829358!2d106.6989323!3d10.759758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc459f35467%3A0x4b388090f78d3d28!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698568821!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.760285009943189",
    longitude: "106.69906104603584"
  },
  {
    title: "Số 17 Âu Cơ",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "17 Âu Cơ, P. 14, Q. 11, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/okem3EpzuqFXiZqC9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.196137666075!2d106.6516161!3d10.7691968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe1b23f33db%3A0x29587a684851e6d0!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711698590986!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.769808112301693",
    longitude: "106.65127277723774"
  },
  {
    title: "Số 167-169 Bình Phú",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "167-169 Bình Phú, P. 11, Q. 6, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/wF5ZwPm3SAQodcJX6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.482569735708!2d106.6304565!3d10.7444517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1f8dae3fe3%3A0xfc35372fb0d0b47!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711698620920!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.744725759188084",
    longitude: "106.63049941534526"
  },
  {
    title: "Số 308 Nguyễn Tri Phương",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "308 Nguyễn Tri Phương, P. 4, Q. 10, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/xsafu7HY1fBRESKHA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.527311291722!2d106.6683581!3d10.7628319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0ddf9ac06d%3A0x46da3b42731b7872!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698640981!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.76344322521493",
    longitude: "106.66822935396416"
  },
  {
    title: "Số 307 Tô Hiến Thành",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "307 Tô Hiến Thành, P. 13, Q. 10, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/FjjGWBCmWTsbWHKc9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.751658829637!2d106.6654885!3d10.7777335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9e364eb787%3A0xec855440267d3e01!2zTmhpIMSQ4buTbmcgMzE1!5e0!3m2!1svi!2s!4v1711698662705!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.778429111420632",
    longitude: "106.6654885"
  },
  {
    title: "Số 98E Phan Đăng Lưu",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "98E Phan Đăng Lưu, P. 3, Q. Phú Nhuận, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/Px5RvaFd4juuqRqaA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.421229796026!2d106.6842099!3d10.803246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752916b72e8bf3%3A0x30a2220b0ae09f28!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711698684342!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.803772933775619",
    longitude: "106.68425281534526"
  },
  {
    title: "Số 558-560 Phạm Thế Hiển",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "558-560 Phạm Thế Hiển, P. 4, Q. 8, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/gNAAC969j9QZNxQy6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.388296508321!2d106.6775989!3d10.746267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe0c7fef957%3A0x1ab834bc9e0bba02!2zTmhpIMSQ4buTbmcgMzE1IC0gVGnDqm0gQ2jhu6duZw!5e0!3m2!1svi!2s!4v1711698706087!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.747047009268655",
    longitude: "106.67772764603585"
  },
  {
    title: "Số 175 Lê Văn Việt",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "175 Lê Văn Việt, P. Hiệp Phú, TP. Thủ Đức, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/qRjofNX5ysgZF4aB8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.255950591463!2d106.7812332!3d10.8446409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527683f58c58b%3A0xf522ac1d60b50342!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711698740210!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.845589249117404",
    longitude: "106.78119028465473"
  },
  {
    title: "Số 472B Trần Hưng Đạo",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "472B Trần Hưng Đạo, P. 2, Q. 5, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/YHhGLh7DVVhFZzQV7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.882251108362!2d106.6825996!3d10.7560061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fca79331357%3A0xc9d6da4284fca966!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711698768085!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.756659600323308",
    longitude: "106.68238502327358"
  },
  {
    title: "Số 289-291 Nguyễn Oanh",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "289-291 Nguyễn Oanh, P. 17, Q. Gò Vấp, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/TYCNNveiHPvtH8Y19",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.376546729813!2d106.6766335!3d10.8423395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d71b5a498f%3A0x12978149d796e2c2!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698804391!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.842908514209318",
    longitude: "106.67667641534527"
  },
  {
    title: "Số 1 Tăng Nhơn Phú",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "1 Tăng Nhơn Phú, P. Phước Long B, TP. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/W2Q3UTJsGq9x4SvFA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.164467279417!2d106.7689517!3d10.8272913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752720fcb02399%3A0xde3f2bc14621f76!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698824306!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.827691737647973",
    longitude: "106.76882295396416"
  },
  {
    title: "Số 1283 Tỉnh Lộ 10",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "1283 Tỉnh Lộ 10, P. Tân Tạo A, Q. Bình Tân, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/V3niJPG6AQYTnJYL7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.866052837016!2d106.591476!3d10.7563177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752da6a513b879%3A0xba2c3454954eb8a!2zUGjDsm5nIGtow6FtIE5oaSDEkOG7k25nIDMxNSBWw6AgVGnDqm0gQ2jhu6duZw!5e0!3m2!1svi!2s!4v1711698854770!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.757055522080242",
    longitude: "106.59151891534528"
  },
  {
    title: "Số 490-492 Trường Chinh",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "490-492 Trường Chinh, P. 13, Q. Tân Bình, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/2y8zce2daGoXEf7t9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.52052797548!2d106.637859!3d10.8013439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290ee4ea759f%3A0xb3549f50b21e9e97!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25nIC0gUGjhu6UgU-G6o24!5e0!3m2!1svi!2s!4v1711698881439!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.802208076380785",
    longitude: "106.63803066138114"
  },
  {
    title: "Số 550 Lê Trọng Tấn",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "550 Lê Trọng Tấn, P. Tây Thạnh, Q. Tân Phú, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/4Dc6dFbH2x9wyP3s6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13181.901284118983!2d106.61090558707984!3d10.811104524005712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bbefee77915%3A0x92100b930a715e72!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698940314!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.812079310545977",
    longitude: "106.61086949971984"
  },
  {
    title: "Số 113 Nguyễn Thị Nhỏ",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "113 Nguyễn Thị Nhỏ, P. 9, Q. Tân Bình, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/PhTXD7PjiXn6K2nc6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.070056776705!2d106.6526431!3d10.771619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f13a4d7d8f7%3A0xa06f0618d44170ea!2zTmhpIMSQ4buTbmcgMzE1!5e0!3m2!1svi!2s!4v1711698960790!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.77244110274796",
    longitude: "106.65260018465472"
  },
  {
    title: "Số 148 Trần Quốc Thảo",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "148 Trần Quốc Thảo, P. Võ Thị Sáu, Q. 3, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/vaF1uvH2guSgX8G48",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.35781083693!2d106.6827966!3d10.7852922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc8c9d63eed%3A0x9bb4fb465fb783fa!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711698978698!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.785692693680137",
    longitude: "106.68279659999999"
  },
  {
    title: "Số 245 Phạm Văn Chiêu",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "245 Phạm Văn Chiêu, P. 14, Q. Gò Vấp, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/Nzb4ZEDvjQpkSWf27",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.012165866916!2d106.649889!3d10.8492917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298dba8f0745%3A0x68f3440cbc0aca65!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711698998775!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.849902849158896",
    longitude: "106.64997483069058"
  },
  {
    title: "Số 374 Tỉnh Lộ 8",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "374 Tỉnh Lộ 8, KP. 4, H. Củ Chi, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/YTaAgKidxnqCWMkPA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15667.276547559723!2d106.5020087!3d10.9770204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b2db93f429631%3A0x6a8c7ee4e375b7f7!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711699026971!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.977715546632242",
    longitude: "106.5020087"
  },
  {
    title: "Số 1242 Huỳnh Tấn Phát",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "1242 Huỳnh Tấn Phát, P. Tân Phú, Q. 7, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/2uwsGNpHbb2uBSFW8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.85713119893!2d106.736616!3d10.717949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752525bd91398b%3A0x2cc79298c35a9a01!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2sus!4v1711699060408!5m2!1svi!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.718982081588798",
    longitude: "106.73687349207171"
  },
  {
    title: "Số 2/83A Lê Thị Hà",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "2/83A Lê Thị Hà, X. Tân Xuân, H. Hóc Môn, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/tGYjZW59vkmBcLxx7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15672.777964322104!2d106.5979789!3d10.872807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752babb9d7020f%3A0xa55b0e1d45ca9a8b!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711699102896!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.87350239073411",
    longitude: "106.59772140792829"
  },
  {
    title: "Số 152 Tô Ký",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "152 Tô Ký, X. Thới Tam Thôn, H. Hóc Môn, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/meAvRxLqGW7CsZud9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15672.629248413716!2d106.6116591!3d10.8756371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ba34fa9f5dd%3A0x5334a5f046e9f821!2zTmhpIMSQ4buTbmcgMzE1!5e0!3m2!1svi!2s!4v1711699121440!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.876458917440438",
    longitude: "106.61148743861887"
  },
  {
    title: "Số C10/3D1 Phạm Hùng",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "C10/3D1 Phạm Hùng, X. Bình Hưng, H. Bình Chánh, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/9WQRgj4GPNauPLea7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.311550413891!2d106.677457!3d10.728476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1ae3a4bff9%3A0xf340245578e75b39!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2sus!4v1711699174346!5m2!1svi!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.729298220288428",
    longitude: "106.67767157672642"
  },
  {
    title: "Số C8/1A1 Phạm Hùng",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "C8/1A1 Phạm Hùng, X. Bình Hưng, H. Bình Chánh, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/Ve2BkSaKbBDsELrX7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.227341738888!2d106.6762815!3d10.7300999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b85af5ced%3A0x9179dfdf2c42c193!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711699194183!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.730711291503074",
    longitude: "106.6762815"
  },
  {
    title: "Số 181-181A Nguyễn Duy Trinh",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "181-181A Nguyễn Duy Trinh, P. Bình Trưng Tây, TP. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/1Qu68zCGM5gTx7iD9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.21577795713!2d106.7609032!3d10.7880168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175273a88e5e749%3A0x4655f47f7f763a51!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711699215364!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.788712387643193",
    longitude: "106.76098903069058"
  },
  {
    title: "Số 699 Nguyễn Duy Trinh",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "699 Nguyễn Duy Trinh, P. Bình Trưng Đông, TP. Thủ Đức, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/mzfgpuwfAU5b6qKj7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d979.8247524253625!2d106.7768688!3d10.7883954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276d6c3d4af3%3A0x5a8ae6fac9b40b94!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711699253483!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.78851264863984",
    longitude: "106.7770163214994"
  },
  {
    title: "Số 106 Nguyễn Thị Thập",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "106 Nguyễn Thị Thập, P. Bình Thuận, Q. 7, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/hkQz3KvigE1JvMgVA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.808621309388!2d106.7210593!3d10.738171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f566edd785f%3A0x270f9731391e097!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711699270822!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.739119685088626",
    longitude: "106.72110221534528"
  },
  {
    title: "Số 105/4A Lê Văn Khương",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "105/4A Lê Văn Khương, P. Hiệp Thành, Q. 12, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/hShcRrFdWEwbPPeT8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15673.290260610183!2d106.6499404!3d10.8630523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290480cb8bcd%3A0x16df08b274ae17a6!2zUGjDsm5nIGtow6FtIE5oaSDEkOG7k25nIDMxNSBWw6AgVGnDqm0gQ2jhu6duZw!5e0!3m2!1svi!2s!4v1711699302211!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.863705567240585",
    longitude: "106.65006914603586"
  },
  {
    title: "Số 34A Lê Thị Hà",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "34A Lê Thị Hà, P. Tân Xuân, H. Hóc Môn, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/AaTHrSTov2V1que4A",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15672.826400005692!2d106.5975069!3d10.8718851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b2c93ba7bf7%3A0x1829d948f79a6168!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700294263!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.872580492883227",
    longitude: "106.59772147672642"
  },
  {
    title: "Số A12/12B Quốc Lộ 50",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "A12/12B Quốc Lộ 50, X. Bình Hưng, H. Bình Chánh, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/pVofoyEUUvKa6KsQ6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.590341110583!2d106.6556618!3d10.723098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fed0861aaa1%3A0x3af6bd3b2636c762!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700313436!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.723498576259852",
    longitude: "106.65557596930942"
  },
  {
    title: "Số 215G-215H Nơ Trang Long",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "215G-215H Nơ Trang Long, P. 12, Q. Bình Thạnh, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/fMKd6kBVsniWGJwb6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.794847876265!2d106.6977583!3d10.815237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529bebbb8dd1f%3A0x35d083a512310654!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711700351263!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.816016830497443",
    longitude: "106.69767246930942"
  },
  {
    title: "Số 28 Lê Văn Khương",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "28 Lê Văn Khương, P. Thới An, Q. 12, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/hShcRrFdWEwbPPeT8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15673.290260610183!2d106.6499404!3d10.8630523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290480cb8bcd%3A0x16df08b274ae17a6!2zUGjDsm5nIGtow6FtIE5oaSDEkOG7k25nIDMxNSBWw6AgVGnDqm0gQ2jhu6duZw!5e0!3m2!1svi!2s!4v1711700380009!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.863747713465074",
    longitude: "106.6499404"
  },
  {
    title: "Số 299 Nguyễn Oanh",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "299 Nguyễn Oanh, P. 17, Q. Gò Vấp, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/iDcZ8JLDVn7a985P6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.332993763746!2d106.6766561!3d10.8431707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752965cd6deb61%3A0x99a991ba0817f37d!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700400553!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.843824010703285",
    longitude: "106.67661318465474"
  },
  {
    title: "Số 1032-1034 Kha Vạn Cân",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "1032-1034 Kha Vạn Cân, P. Trường Thọ, TP. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/eZsBHTGZzjXAaCyG7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15673.93614417576!2d106.754863!3d10.8507416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527ca2854094f%3A0x72dd7c9d0c383578!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711700420474!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.851310598221321",
    longitude: "106.75482008465471"
  },
  {
    title: "Số 147 Nguyễn Xí",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "147 Nguyễn Xí, P. 26, Q. Bình Thạnh, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/knDZXagjKkfRLff48",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.87762648093!2d106.7089174!3d10.8136531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b615dee4f5%3A0xd7a22fab0837b5b8!2zUGjDsm5nIEtow6FtIE5oaSDEkOG7k25nIDMxNSBWw6AgVGnDqm0gQ2jhu6duZw!5e0!3m2!1svi!2s!4v1711700436103!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.814475087780307",
    longitude: "106.70904614603587"
  },
  {
    title: "Số 300 Tân Sơn Nhì",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "300 Tân Sơn Nhì, P. Tân Sơn Nhì, Q. Tân Phú, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/JEyXVyXkkyV4epXGA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.739329114762!2d106.6307203!3d10.7971515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299e3369976f%3A0x464809de490b99d8!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700462953!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.797678444468186",
    longitude: "106.63076321534527"
  },
  {
    title: "Số 490-492 Trường Chinh",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "490-492 Trường Chinh, P. 13, Q. Tân Bình, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/2y8zce2daGoXEf7t9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.52052797548!2d106.637859!3d10.8013439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290ee4ea759f%3A0xb3549f50b21e9e97!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25nIC0gUGjhu6UgU-G6o24!5e0!3m2!1svi!2s!4v1711700480048!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.80212376659944",
    longitude: "106.63803066138114"
  },
  {
    title: "Số 327 Hoàng Diệu",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "327 Hoàng Diệu, P. 6, Q. 4, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/vfu9Pj79JKMGrNkc7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.688600464648!2d106.6989364!3d10.7597307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f67700b0599%3A0x6e579fffdc371a54!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700498320!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.760299870750384",
    longitude: "106.69910806138112"
  },
  {
    title: "Số 384 Tỉnh Lộ 8",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "384 Tỉnh Lộ 8, TT. Củ Chi, H. Củ Chi, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/zdABEezzPzk5PGP86",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15667.267790817365!2d106.5020518!3d10.9771855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b2d27e31bc123%3A0x7d5c87efabf27999!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700516150!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.977627865980727",
    longitude: "106.5020947153453"
  },
  {
    title: "Số 485 Nguyễn Thị Tú",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "485 Nguyễn Thị Tú, P. Bình Hưng Hoà B, Q. Bình Tân, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/KdSF7oNNDP9ewuQw6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.826259060885!2d106.5842065!3d10.814636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b3f08395a41%3A0xe0b857bc4c6a6df9!2zUGjDsm5nIEtow6FtIE5oaSDEkOG7k25nIDMxNSAmIFRpw6ptIENo4bunbmc!5e0!3m2!1svi!2s!4v1711700534546!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.815584444130831",
    longitude: "106.58442107672641"
  },
  {
    title: "Số 459 Nguyễn Thị Tú",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "459 Nguyễn Thị Tú, P. Bình Hưng Hoà B, Q. Bình Tân, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/i22PbEBhrgaG4kuq7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.810454380917!2d106.5854028!3d10.8149384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ba839ea097f%3A0xa7c6230c9162de28!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700554029!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.815760384257915",
    longitude: "106.58535988465471"
  },
  {
    title: "Số 582-584 Lê Văn Quới",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    address: "582-584 Lê Văn Quới, P. Bình Hưng Hoà A, Q. Bình Tân, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/JAfSWNpHrsh8FWte6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.815972471104!2d106.6028173!3d10.7764987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752def244001f3%3A0x8845ee24d13891ae!2zVGltIE3huqFjaCAtIFRp4buDdSDEkMaw4budbmcgMzE1!5e0!3m2!1svi!2s!4v1711700576549!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.777236472663482",
    longitude: "106.60294604603584"
  },
  {
    title: "Số 277 Minh Phụng",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "277 Minh Phụng, P. 2, Q. 11, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/saW68bLExBv7Po8i7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.914776211!2d106.643251!3d10.7553804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9289b07fb7%3A0x70d1f14c9404e8d8!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711700594574!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.756202547043738",
    longitude: "106.64316516930943"
  },
  {
    title: "Số 179 Lê Văn Sỹ",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "179 Lê Văn Sỹ, P. 14, Q. Phú Nhuận, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/2TuW4KpZjptTuLMD8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.996288688399!2d106.6707763!3d10.7922259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1cc2494967%3A0x87e4a42241da2790!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711700616735!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.79283716551678",
    longitude: "106.67090504603586"
  },
  {
    title: "Số 897 Nguyễn Ảnh Thủ",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "897 Nguyễn Ảnh Thủ, P. Tân Chánh Hiệp, Q. 12, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/mAchFzYesiy7D5Bz6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15672.952353712652!2d106.6179626!3d10.8694874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bf485843259%3A0xe988bb3c35750813!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700634192!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.87018279847191",
    longitude: "106.61791968465474"
  },
  {
    title: "Số 184 Đỗ Xuân Hợp",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "184 Đỗ Xuân Hợp, P. Phước Long A, TP. Thủ Đức, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/eNAKZTLo3SMVXuNC9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.105798765488!2d106.7685074!3d10.8284125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175271970f7f9cb%3A0xbaebbde081975b77!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700652101!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.829065842914984",
    longitude: "106.76867906138115"
  },
  {
    title: "Số 120-122 Bàu Cát",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "120-122 Bàu Cát, P. 14, Q. Tân Bình, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/eJPde8JeNSFUuMtr8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.00047161762!2d106.6428247!3d10.7921457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f5fe8598855%3A0xc99fa78a0c4fabb0!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700668867!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.792672653246223",
    longitude: "106.64295344603585"
  },
  {
    title: "Số 129 Nguyễn Thị Thập",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "129 Nguyễn Thị Thập, P. Tân Phú, Q. 7, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/SPzYFw6NbHgUtJmZ6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.824719918164!2d106.7204925!3d10.7378608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbcaaed4653%3A0x9420b82023ff03c3!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700685038!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.738472175803908",
    longitude: "106.72057833069057"
  },
  {
    title: "Số 917-917A Nguyễn Ảnh Thủ",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    address: "917-917A Nguyễn Ảnh Thủ, P. Tân Chánh Hiệp, Q. 12, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/kzyJ4PRp6jh6FcgdA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.198140578708!2d106.61812357601342!3d10.872529157411712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bf36e6c12f7%3A0xe109519a6bbfaf5a!2zVGltIE3huqFjaCAtIFRp4buDdSDEkMaw4budbmcgMzE1!5e0!3m2!1svi!2s!4v1711701617776!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.87341356442502",
    longitude: "106.62142428226927"
  },
  {
    title: "Số 1457 Phan Văn Trị",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "1457 Phan Văn Trị, P. 10, Q. Gò Vấp, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/J7et9z62ZyYFyfyd6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6590.423880686138!2d106.66542601333889!3d10.835057998930687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295d297d5941%3A0xc8dd39fb71ccea25!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711700872796!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.83526180190665",
    longitude: "106.66558840645891"
  },
  {
    title: "Số 199-201 Thống Nhất",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "199-201 Thống Nhất, P. 11, Q. Gò Vấp, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/cvpygcVFV5xkDkdv8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.05653657687!2d106.66223865024975!3d10.836364773397937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529e6dfa70947%3A0xdbc3b74b53225375!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711701706043!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.836587203791932",
    longitude: "106.66473299730926"
  },
  {
    title: "Số 657-657A Quang Trung",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "657-657A Quang Trung, P. 11, Q. Gò Vấp, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/c6nR53UMqNwiuBBN9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.692327522398!2d106.658682!3d10.836311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529963fad4d63%3A0xeafad62b2f216765!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2sus!4v1711701019955!5m2!1svi!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.837132925625069",
    longitude: "106.65906823810757"
  },
  {
    title: "Số 372 Hồ Học Lãm",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "372 Hồ Học Lãm, P. An Lạc, Q. Bình Tân, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/VtgvFHPd7bhSF98E6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.481272538276!2d106.6093559!3d10.7252023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d488ef49f27%3A0xfb891f8932601ec3!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711701116219!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.726024529188395",
    longitude: "106.60944173069058"
  },
  {
    title: "Số 917 Quang Trung",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "917 Quang Trung, P. 14, Q. Gò Vấp, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/cRLEZ3rQAD49ARgX8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.240437998664!2d106.6390364!3d10.8449369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529301944dd81%3A0x89a511327ba645e!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711701135176!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.845548058059757",
    longitude: "106.63895056930944"
  },
  {
    title: "Số 26 Phan Văn Hớn",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "26 Phan Văn Hớn, X. Xuân Thới Thượng, H. Hóc Môn, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/NAHBYpusNbWnBkmx8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15673.81519347871!2d106.58374!3d10.853048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b9fd85f5465%3A0x448262e5f9b2b85a!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2sus!4v1711701170874!5m2!1svi!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.853743436756735",
    longitude: "106.58399749207172"
  },
  {
    title: "Số 60 Bạch Đằng",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "60 Bạch Đằng, P. 24, Q. Bình Thạnh, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/WEwUNyu8H7zdviZs6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.427714122157!2d106.7097148!3d10.8031218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752917f8c679a7%3A0x9c50bfaa698bb8b5!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711701198763!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.80394381662606",
    longitude: "106.70971479999999"
  },
  {
    title: "Số 483 Lê Trọng Tấn",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "483 Lê Trọng Tấn, P. Sơn Kỳ, Q. Tân Phú, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/FkX7WgzY5WGCREvT9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.019251024192!2d106.6110321!3d10.8109427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b69a95501fd%3A0x12381ea630c57835!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711701215119!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.811385313083544",
    longitude: "106.61120376138115"
  },
  {
    title: "Số 740-742 Cách Mạng Tháng Tám",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "740-742 Cách Mạng Tháng Tám, P. 5, Q. Tân Bình, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/Sxw4rNXEU3K7nKgB7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.249811526384!2d106.663748!3d10.787364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6fdc6a676f%3A0x7532b2a53603af4f!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2sus!4v1711701252548!5m2!1svi!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.788186059735569",
    longitude: "106.66370508465471"
  },
  {
    title: "Số 700-702 Cách Mạng Tháng Tám",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "700-702 Cách Mạng Tháng Tám, P. 5, Q. Tân Bình, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/EpuiZfaVJ1cH51Um8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.310878038764!2d106.6586207860882!3d10.787484831575643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7b64dd2d41%3A0x41922668b0bd0c14!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711701322331!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.787669268176213",
    longitude: "106.66345949126895"
  },
  {
    title: "Số 143C Phan Đăng Lưu",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "143C Phan Đăng Lưu, P. 2, Q. Phú Nhuận, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/Q9kyeZePmFBCJSPk6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1201959245072!2d106.6810470760128!3d10.802105258717484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c4bfcbd683%3A0xf17079ac6bb94eec!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711701762749!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.802258070188136",
    longitude: "106.68360053905718"
  },
  {
    title: "Số 634 Nguyễn Thị Định",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "634 Nguyễn Thị Định, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/RAQgRdVJFxtZRqRa8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.452372609164!2d106.76278537601289!3d10.77662315918812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175257580dfeb3f%3A0x89b7c81c3703663e!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711701825864!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.776786523223361",
    longitude: "106.76540321207516"
  },
  {
    title: "Số 566 Lê Quang Định",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "566 Lê Quang Định, P. 1, Q. Gò Vấp, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/Rd8rBkrPwb2kkhJg7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.69101144724!2d106.6890272!3d10.8172235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292b29bb4e37%3A0xd7d115b2e2f42fd0!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711701844931!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.817708256525764",
    longitude: "106.68898428465474"
  },
  {
    title: "Số 605 Huỳnh Tấn Phát",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    address: "605 Huỳnh Tấn Phát, P. Tân Thuận Đông, Q. 7, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/UYjL8dsPVDnG2TzNA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.433246126575!2d106.7327419!3d10.7454015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175251723479ff9%3A0x192b2a33611cf187!2zVGltIE3huqFjaCAtIFRp4buDdSDEkMaw4budbmcgMzE1!5e0!3m2!1svi!2s!4v1711701867065!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.746139348772342",
    longitude: "106.73282773069057"
  },
  {
    title: "Số 601 Dương Bá Trạc",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "601 Dương Bá Trạc, P. 1, Q. 8, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/AT1tMi1PFS4yheeK6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.515293972341!2d106.688972!3d10.7438215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe65c7f0591%3A0x9265217d9705e76d!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25nIC0gUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711701883819!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.744559352633523",
    longitude: "106.68901491534528"
  },
  {
    title: "Số 601 Dương Bá Trạc",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "601 Dương Bá Trạc, P. 1, Q. 8, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/AT1tMi1PFS4yheeK6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.515293972341!2d106.688972!3d10.7438215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe65c7f0591%3A0x9265217d9705e76d!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25nIC0gUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711701883819!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.744559352633523",
    longitude: "106.68901491534528"
  },
  {
    title: "Số 294 Huỳnh Tấn Phát",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "294 Huỳnh Tấn Phát, P. Tân Thuận Tây, Q. 7, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/SsWuhGrfWaCAUojKA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.090905333029!2d106.7283971!3d10.7519915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175258dedd68c33%3A0x568617e704469f96!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711702064954!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.752602847190778",
    longitude: "106.7286116767264"
  },
  {
    title: "Số 463-465 Hồ Học Lãm",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "463-465 Hồ Học Lãm, P. An Lạc, Q. Bình Tân, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/jh8R5KokYSSMEf8g9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.478903613906!2d106.6089723!3d10.725248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752df978b79343%3A0x5b7eeb58422cba9e!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711702083332!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.726028063525511",
    longitude: "106.60901521534528"
  },
  {
    title: "Số 392-394 Tân Sơn Nhì",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "392-394 Tân Sơn Nhì, P. Tân Sơn Nhì, Q. Tân Phú, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/GLuoqFmGuuF76w3R8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.205538587692!2d106.62586482968563!3d10.79556408430515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292b5f9f0d67%3A0xb85a62f2625fff38!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711703202299!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.795453425264766",
    longitude: "106.62952336287105"
  },
  {
    title: "Số 896 Âu Cơ",
    type: "MAT",
    img: SrcLogo.mat,
    name: Name.mat,
    address: "896 Âu Cơ, P. 14, Q. Tân Bình, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/o6VHyBAEqSDeJ22z8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.848870370108!2d106.638613!3d10.795052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529e764f00541%3A0xe11b216a22424fda!2zTeG6r3QgMzE1!5e0!3m2!1svi!2sus!4v1711702313206!5m2!1svi!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.795663259768602",
    longitude: "106.63878466138114"
  },
  {
    title: "Số 15 Lý Thường Kiệt",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "15 Lý Thường Kiệt, P. Dĩ An, TP. Dĩ An, Tỉnh Bình Dương",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/3gKe7KYutD5ZUNLK7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15670.922352515607!2d106.7546335!3d10.9080678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9a44f5dff97%3A0x43adf681201ab3be!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711702332554!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.90876310839926",
    longitude: "106.75450475396414"
  },
  {
    title: "Số 464 Nguyễn An Ninh",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "464 Nguyễn An Ninh, P. Dĩ An, TP. Dĩ An, Tỉnh Bình Dương",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/XQL4TF57MYVNSgV3A",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15670.537277113672!2d106.769379!3d10.915371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9634a3c1311%3A0xdf09d0fd8fe725af!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2sus!4v1711702366383!5m2!1svi!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.916361262893831",
    longitude: "106.76942191534529"
  },
  {
    title: "Số C32Đ Cách Mạng Tháng Tám",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "C32Đ Cách Mạng Tháng Tám, P. Lái Thiêu, TP. Thuận An, Tỉnh Bình Dương",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/tZKquNKyFYRYDe3Z8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15670.8019146379!2d106.7009531!3d10.9103525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7000d1d280d%3A0xa04f228853875579!2zUGjDsm5nIGtow6FtIE5oaSDEkeG7k25nIDMxNSBDTVQ4IFRodeG6rW4gQW4!5e0!3m2!1svi!2s!4v1711702390527!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.910879244888243",
    longitude: "106.70116767672643"
  },
  {
    title: "Số 174A Nguyễn Trãi",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "174A Nguyễn Trãi, P. Dĩ An, TP. Dĩ An, Tỉnh Bình Dương",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/r7iGv6kBPKAPqGjZA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15671.173264199087!2d106.7553503!3d10.9033065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d964b37231b7%3A0xe3a93bf127032378!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711702432699!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.9041282410909",
    longitude: "106.7553503"
  },
  {
    title: "Số 190A Phan Văn Trị",
    type: "MAT",
    img: SrcLogo.mat,
    name: Name.mat,
    address: "190A Phan Văn Trị, P. 12, Q. Bình Thạnh, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/o4JST8HZv8sa2kmp9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.901983759943!2d106.695369!3d10.813187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529be6ef6103d%3A0x1be30d53e8182ce9!2zTeG6r3QgMzE1!5e0!3m2!1svi!2s!4v1711702460876!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.813840376101183",
    longitude: "106.69528316930942"
  },
  {
    title: "Số 228-230 Hoàng Văn Thụ",
    type: "MAT",
    img: SrcLogo.mat,
    name: Name.mat,
    address: "228-230 Hoàng Văn Thụ, P. 4, Q. Tân Bình, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/PrRyZ5rpPZ6xY6jv7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.152084302024!2d106.6599543!3d10.7996616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297c6de9c699%3A0x4aa67e792cc6bfc5!2zTeG6r3QgMzE1!5e0!3m2!1svi!2s!4v1711702496712!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.79984602912792",
    longitude: "106.65994357116368"
  },
  {
    title: "Số 277B-277C Lê Văn Quới",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "277B-277C Lê Văn Quới, P. Bình Trị Đông, Q. Bình Tân, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/ioANTu5LuqMgYsxt8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.860906447104!2d106.6135425!3d10.7756359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752db09578d3b1%3A0xa50066ebeb9162c2!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711702513850!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.776457991780436",
    longitude: "106.61341375396414"
  },
  {
    title: "Số 941 Kha Vạn Cân",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "941 Kha Vạn Cân, P. Linh Tây, TP. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/M1tKKUskxNLtEmoW8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3918.461910356487!2d106.7520176!3d10.8524293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527963db5cac7%3A0x8b2cefb003e1b708!2zOTQxIMSQLiBLaGEgVuG6oW4gQ8OibiwgTGluaCBDaGnhu4N1LCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1711702626983!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.852666381385154",
    longitude: "106.75463543606232"
  },
  {
    title: "Số 427-435 Nguyễn Văn Quá",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "427-435 Nguyễn Văn Quá, P. Đông Hưng Thuận, Q. 12, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/RM9eyC8bVDdN9kQm9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.475942899265!2d106.6347504760132!3d10.851358957805049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298e8d7537cb%3A0x50c070b98b1ebacb!2zNDM1IE5ndXnhu4VuIFbEg24gUXXDoSwgxJDDtG5nIEjGsG5nIFRodeG6rW4sIFF14bqtbiAxMiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1711702717561!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.851585503055034",
    longitude: "106.63734685440285"
  },
  {
    title: "Số 428 Nguyễn Thị Định",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "428 Nguyễn Thị Định, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/9nrZX7jVujLQrChx9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.541703396899!2d106.7610788!3d10.7817636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752504a19a263d%3A0x4fb2eb62e5f0e86b!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711702739722!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.78271214792592",
    longitude: "106.76125046138114"
  },
  {
    title: "Số A19/6 Quốc Lộ 50",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    address: "A19/6 Quốc Lộ 50, X. Bình Hưng, H. Bình Chánh, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/Gg5D6v4s3VVre6Bb9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.134368180941!2d106.65338777601241!3d10.724118060154487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317531b96e5bc3b3%3A0x52a1ee3cd0e1a604!2zVGltIE3huqFjaCAtIFRp4buDdSDEkMaw4budbmcgMzE1!5e0!3m2!1sen!2sus!4v1711702800978!5m2!1sen!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.724313076952885",
    longitude: "106.65600561207471"
  },
  {
    title: "Số 1192-1194 Nguyễn Văn Quá",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "1192-1194 Nguyễn Văn Quá, P. Tân Thới Hiệp, Q. 12, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/F34mj2wDcmXBfzmW9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.418074261887!2d106.63673737601327!3d10.855772257723157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290010399509%3A0xc0e727fd6d27c7af!2zUGjDsm5nIGtow6FtIG5oaSDEkeG7k25nIDMxNSAmIFRpw6ptIENow7luZw!5e0!3m2!1svi!2s!4v1711702891234!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.856030410112082",
    longitude: "106.63922646603973"
  },
  {
    title: "Số 20/7E Phan Văn Hớn",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    address: "20/7E Phan Văn Hớn, X. Bà Điểm, H. Hóc Môn, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/tdvTES99BHPbHmJdA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.550955733364!2d106.58804048609198!3d10.845635530358566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bf19f688509%3A0x7225942278e5be73!2zVGltIE3huqFjaCAtIFRp4buDdSDEkMaw4budbmcgMzE1!5e0!3m2!1svi!2sus!4v1711702937713!5m2!1svi!2sus' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.845809394010326",
    longitude: "106.5928684624364"
  },
  {
    title: "Số 626 Lạc Long Quân",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "626 Lạc Long Quân, P. 9, Q. Tân Bình, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/K6Si86oiyLzbiDEcA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.41577426016!2d106.64704292588043!3d10.779433627409297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb8cdec5d51%3A0x528bc238aa559534!2zUGjDsm5nIGtow6FtIE5oaSDEkOG7k25nIDMxNSBWw6AgVGnDqm0gQ2jhu6duZw!5e0!3m2!1svi!2s!4v1711703053109!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.775180901197704",
    longitude: "106.6482552843847"
  },
  {
    title: "Số 714 Đ. 30 Tháng 4",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "714 Đ. 30 Tháng 4, P. Hưng Lợi, Q. Ninh Kiều, TP. Cần Thơ",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/koBTHv6kQQFjJ4Mg6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44452.09954163292!2d105.75413835014542!3d10.012924752131372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089fabc55bd63%3A0xb4ec541685d4acac!2zUGjDsm5nIEtow6FtIE5oaSDEkOG7k25nIDMxNQ!5e0!3m2!1svi!2s!4v1711703262439!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.014060323944735",
    longitude: "105.75984334769883"
  },
  {
    title: "Số 162-162B Trần Hưng Đạo",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "162-162B Trần Hưng Đạo, P. An Nghiệp, Q. Ninh Kiều, TP. Cần Thơ",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/PmEG5ScogZxf7PTLA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44452.09954163292!2d105.75413835014542!3d10.012924752131372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08941e0316d5f%3A0x5f4af561121d8e53!2zUGjDsm5nIGtow6FtIE5oaSDEkOG7k25nIDMxNQ!5e0!3m2!1svi!2s!4v1711703282725!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.03916142203742",
    longitude: "105.77598727694571"
  },
  {
    title: "Số 40-42 Núi Thành",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "40-42 Núi Thành, P. Hoà Thuận Đông, Q. Hải Châu, TP. Đà Nẵng",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/mKAshuifDkVctxMa6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974856.2792174905!2d104.76123214578908!3d13.369195092930013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142191bc08c369b%3A0xa96fb9a63a58d4dd!2zTmhpIMSR4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711703336121!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "16.336893087409816",
    longitude: "108.24389824625281"
  },
  {
    title: "Số 75-77 Trần Văn Khéo",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "75-77 Trần Văn Khéo, P. Cái Khế, Q. Ninh Kiều, TP. Cần Thơ",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/p1bG33wRftqcZ5359",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15714.645949931682!2d105.7842486!3d10.0447672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0633b216657c1%3A0x604d54ca6723f3f6!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711703356288!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.045422191010985",
    longitude: "105.78411985396416"
  },
  {
    title: "Biệt thự số 11 Điện Biên Phủ",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "Biệt thự số 11 Điện Biên Phủ, P. Điện Biên Phủ, Q. Ba Đình, TP. Hà Nội",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/jPA5LjWJdWgdtwoC9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860411.624534444!2d101.00526527574674!3d15.851781579924893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9faf1ab9a3%3A0xff7a9d5482c726ac!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711703393766!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "21.3777073891178",
    longitude: "105.83924976850399"
  },
  {
    title: "Số 595-597 Cách Mạng Tháng Tám",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "595-597 Cách Mạng Tháng Tám, P. 3, , TP. Tây Ninh",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/3pW6nTYADnS5nDkA9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15649.389138879913!2d106.1065879!3d11.3093071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b6b2fb8a15195%3A0x92da5d3d6fc8ae66!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711703423557!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "11.309875207088698",
    longitude: "106.10663081534526"
  },
  {
    title: "Số 898 Quốc Lộ 22",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "898 Quốc Lộ 22, TT. Củ Chi, H. Củ Chi, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/8Ra2sHkZ1bV4j5dz6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31333.641055420638!2d106.44842424720741!3d10.985614958577466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b2b6f08e60145%3A0xa3c061129a199a7!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711703464936!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.971838479640072",
    longitude: "106.48275652343438"
  },
  {
    title: "Số 50E Tây Lân",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "50E Tây Lân, P. Bình Trị Đông A, Q. Bình Tân, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/R7Xnh1HeKRJpWSwcA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.067641280139!2d106.5865398!3d10.7716654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dc5e474bc85%3A0xd40c0bcc4fe37a13!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25nIC0gUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711703485206!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.772234548207614",
    longitude: "106.58628230792829"
  },
  {
    title: "Số 50E Tây Lân",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "50E Tây Lân, P. Bình Trị Đông A, Q. Bình Tân, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/R7Xnh1HeKRJpWSwcA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.067641280139!2d106.5865398!3d10.7716654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dc5e474bc85%3A0xd40c0bcc4fe37a13!2zTmhpIMSQ4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25nIC0gUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711703485206!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.772234548207614",
    longitude: "106.58628230792829"
  },
  {
    title: "Số 128 Tô Hiến Thành",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    hotline: Hotline315,
    address: "128 Tô Hiến Thành, P. 15, Q. 10, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/NMaPAjXoKf676aUq6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.394513456755!2d106.66691057601268!3d10.78106595910614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed0b9a4be5d%3A0xf7706de11cbeecae!2zMTI4IMSQLiBUw7QgSGnhur9uIFRow6BuaCwgUGjGsOG7nW5nIDE1LCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1711703678501!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.77809553184087",
    longitude: "106.66590716692255"
  },
  {
    title: "Số 592-594 Nguyễn Thị Định",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    address: "592-594 Nguyễn Thị Định, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/qR77gAXismfxap2E6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.44030732387!2d106.76190767601264!3d10.777549759171055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525cc9f3dc425%3A0x6ba8e0d8c486c09!2zVGltIE3huqFjaCAtIFRp4buDdSDEkMaw4budbmcgMzE1!5e0!3m2!1svi!2s!4v1711703736936!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.777713122703414",
    longitude: "106.76448259672965"
  },
  {
    title: "Số 91 Trần Não",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    address: "91 Trần Não, P. An Khánh, TP. Thủ Đức, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/9v3wifWJy3WmY3iz9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.03661939803!2d106.69690716401927!3d10.791452608037234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175271d82585fc5%3A0x5e87c3672b146aed!2zTmhpIMSR4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1711703849321!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.795141269864876",
    longitude: "106.73128235559152"
  },
  {
    title: "Số 71-73 Lý Thường Kiệt",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "71-73 Lý Thường Kiệt, P. 07, Q. 11, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/bXzSJUWzsd7wUFaD7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.67566241144!2d106.6609079!3d10.7599795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa50ad21db5%3A0x70975bd3936aeb0a!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711703865952!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.760422188088953",
    longitude: "106.66082206930943"
  },
  {
    title: "Số 26/2 Phan Văn Hớn",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "26/2 Phan Văn Hớn, X. Xuân Thới Thượng, H. Hóc Môn, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/8XZtkipG7UgiCdn69",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.453728120083!2d106.58116507601322!3d10.85305335777365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b0046023679%3A0xebfb6737aa8b2e30!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711703935762!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.853195606330283",
    longitude: "106.58368635254864"
  },
  {
    title: "Số 996 Lạc Long Quân",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    address: "996 Lạc Long Quân, P. 08, Q. Tân Bình, TP. HCM",
    workingTime: Time.part,
    linkMap: "https://maps.app.goo.gl/CR8PG8xjq7RtNczA6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3699759795245!2d106.64804387601274!3d10.782949559071383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9aa337da11%3A0x7844fa4619aae762!2zUGjhu6UgU-G6o24gMzE1!5e0!3m2!1svi!2s!4v1711703962673!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.783144537842858",
    longitude: "106.65059733905711"
  },
  {
    title: "Số 187 Nguyễn Sơn",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    address: "187 Nguyễn Sơn, P. Phú Thạnh, Q. Tân Phú, TP. HCM",
    workingTime: Time.full,
    linkMap: "https://maps.app.goo.gl/Z11ar6agi52aHgE3A",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3740028862157!2d106.62417027601273!3d10.7826404590771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c02d3df748b%3A0x7659c2a1a70c6a2!2zMTg3IE5ndXnhu4VuIFPGoW4sIFBow7ogVGjhuqFuaCwgVMOibiBQaMO6LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711704083520!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.782603571149307",
    longitude: "106.62673446789346"
  },
  {
    title: "Số 886 Quốc Lộ 22",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "886 Quốc Lộ 22, TT. Củ Chi, H. Củ Chi, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/kta67fkhzNSJfqfu9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.903325495812!2d106.48012757601411!3d10.970669355578819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b2b815a48bf17%3A0xa54925d85679569b!2zODg2IFFMMjIsIFRULiBD4bunIENoaSwgQ-G7pyBDaGksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1711704134180!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.970643023668876",
    longitude: "106.48272395440377"
  },
  {
    title: "Số 292-294 Hoàng Văn Thụ",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "292-294 Hoàng Văn Thụ, P. 4, Q. Tân Bình, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/Lm3z5SwrCWmgHtDE9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1673704974487!2d106.658683!3d10.79849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293134c0fad5%3A0x3acb470a7f6a713c!2zMjk0IMSQLiBIb8OgbmcgVsSDbiBUaOG7pSwgUGjGsOG7nW5nIDQsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1711704167019!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.79853742482868",
    longitude: "106.65869372883633"
  },
  {
    title: "Số 41 Nguyễn Thái Sơn",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "41 Nguyễn Thái Sơn, P. 04, Q. Gò Vấp, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/sJxkcyxWSMbpwc8J9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3918.8752211905644!2d106.68120547504252!3d10.820859889330643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ5JzE1LjEiTiAxMDbCsDQxJzAxLjYiRQ!5e0!3m2!1svi!2s!4v1711704264159!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.820833544164381",
    longitude: "106.68379112459584"
  },
  {
    title: "Số 759 Nguyễn Ảnh Thủ",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    hotline: Hotline315,
    address: "759 Nguyễn Ảnh Thủ, P. Tân Chánh Hiệp, Q. 12, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/sLa1mMAk32k4uwkz7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.152637288222!2d106.623922!3d10.8759929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a014f6c4117%3A0xb6f467e01d27d8ce!2zNzU5IMSQLiBOZ3V54buFbiDhuqJuaCBUaOG7pywgVMOibiBDaMOhbmggSGnhu4dwLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1711704297905!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.87597709581512",
    longitude: "106.623922"
  },
  {
    title: "Số 679-681 Huỳnh Tấn Phát",
    type: "MAT",
    img: SrcLogo.mat,
    name: Name.mat,
    hotline: Hotline315,
    address: "679-681 Huỳnh Tấn Phát, P. Phú Thuận, Q. 7, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/2nCg9uuKWdJASZvN8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3919.9690071181667!2d106.72786707504125!3d10.736872089409465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ0JzEyLjciTiAxMDbCsDQzJzQ5LjYiRQ!5e0!3m2!1svi!2s!4v1711704332180!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.736835195881685",
    longitude: "106.73044199575827"
  },
  {
    title: "Số 8A-8B Lê Trọng Tấn",
    type: "MAT",
    img: SrcLogo.mat,
    name: Name.mat,
    hotline: Hotline315,
    address: "8A-8B Lê Trọng Tấn, P. Tây Thạnh, Q. Tân Phú, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/FU4eqkkGqxxHvYti6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3919.0938485486267!2d106.62963837504232!3d10.804123889346362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ4JzE0LjkiTiAxMDbCsDM3JzU2LjAiRQ!5e0!3m2!1svi!2s!4v1711704362136!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.8041923905892",
    longitude: "106.63222402459567"
  },
  {
    title: "Số 109 Hiệp Bình",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "109 Hiệp Bình, P. Hiệp Bình Chánh, TP. Thủ Đức, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/DCMDRAzhuwNHJdmw7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3918.5845035478774!2d106.72827407504282!3d10.843074889309747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUwJzM1LjEiTiAxMDbCsDQzJzUxLjEiRQ!5e0!3m2!1svi!2s!4v1711704390404!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.843059083382894",
    longitude: "106.73084899575984"
  },
  {
    title: "Số 353 Nguyễn Oanh",
    type: "MAT",
    img: SrcLogo.mat,
    name: Name.mat,
    hotline: Hotline315,
    address: "353 Nguyễn Oanh, P. 17, Q. Gò Vấp, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/HcSA7SPZyejF7WV7A",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3918.579825531026!2d106.67436467504281!3d10.843431989309403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUwJzM2LjQiTiAxMDbCsDQwJzM3LjAiRQ!5e0!3m2!1svi!2s!4v1711704415136!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.843426720673499",
    longitude: "106.67695032459615"
  },
  {
    title: "Số 97-99 Phạm Thái Bường",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    hotline: Hotline315,
    address: "97-99 Phạm Thái Bường, P. 4, TP. Vĩnh Long, Tỉnh Vĩnh Long",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/D1T2fL88cn9GXQ6J7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.210281643689!2d105.97841799999999!3d10.2446175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a9d36da03c383%3A0xc8fe63b22e0fcbdd!2zOTkgUGjhuqFtIFRow6FpIELGsOG7nW5nLCBQaMaw4budbmcgNCwgVsSpbmggTG9uZw!5e0!3m2!1svi!2s!4v1711704440607!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.244622778895163",
    longitude: "105.97843945767261"
  },
  {
    title: "Số 168 Bà Triệu",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    hotline: Hotline315,
    address: "168 Bà Triệu, P. Phú Hội, TP. Huế, Tỉnh Thừa Thiên Huế",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/KhjBnWz27C8Yc4HaA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.2619798356836!2d107.59720167606783!3d16.462267028794447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a115c743ba69%3A0x72f64892245b6bd3!2zMTY4IELDoCBUcmnhu4d1LCBYdcOibiBQaMO6LCBUaMOgbmggcGjhu5EgSHXhur8sIFRo4burYSBUaGnDqm4gSHXhur8sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711704510539!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "16.46224130623258",
    longitude: "107.59977659678484"
  },
  {
    title: "Số 168 Bà Triệu",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "168 Bà Triệu, P. Phú Hội, TP. Huế, Tỉnh Thừa Thiên Huế",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/KhjBnWz27C8Yc4HaA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.2619798356836!2d107.59720167606783!3d16.462267028794447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a115c743ba69%3A0x72f64892245b6bd3!2zMTY4IELDoCBUcmnhu4d1LCBYdcOibiBQaMO6LCBUaMOgbmggcGjhu5EgSHXhur8sIFRo4burYSBUaGnDqm4gSHXhur8sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711704510539!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "16.46224130623258",
    longitude: "107.59977659678484"
  },
  {
    title: "Số 833 Nguyễn Văn Quá",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    hotline: Hotline315,
    address: "833 Nguyễn Văn Quá, P. Đông Hưng Thuận, Q. 12, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/et2P7dxUMQuwSjuK6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6076795766007!2d106.62772807601317!3d10.841305557991712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298c2bbd03f1%3A0x4e0b17433b3c8da!2zTmd1eeG7hW4gVsSDbiBRdcOhLCDEkMO0bmcgSMawbmcgVGh14bqtbiwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711704588106!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.842217037085115",
    longitude: "106.63054975996559"
  },
  {
    title: "Số 833 Nguyễn Văn Quá",
    type: "MAT",
    img: SrcLogo.mat,
    name: Name.mat,
    hotline: Hotline315,
    address: "833 Nguyễn Văn Quá, P. Đông Hưng Thuận, Q. 12, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/et2P7dxUMQuwSjuK6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6076795766007!2d106.62772807601317!3d10.841305557991712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298c2bbd03f1%3A0x4e0b17433b3c8da!2zTmd1eeG7hW4gVsSDbiBRdcOhLCDEkMO0bmcgSMawbmcgVGh14bqtbiwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711704588106!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.842217037085115",
    longitude: "106.63054975996559"
  },
  {
    title: "Số 643 Lê Văn Việt",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    hotline: Hotline315,
    address: "643 Lê Văn Việt, P. Tân Phú, TP. Thủ Đức, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/HPfytHKg87rREFHP7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4963103516043!2d106.80638378609223!3d10.849805230271087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527499298f48d%3A0x158aea7ebb188beb!2zdOG7lSA1LCA2NDMgTMOqIFbEg24gVmnhu4d0LCBLaHUgUGjhu5EgNiwgUXXhuq1uIDksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711704619635!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.849736739456876",
    longitude: "106.81126540661826"
  },
  {
    title: "Số A23/8 Quốc Lộ 50",
    type: "MAT",
    img: SrcLogo.mat,
    name: Name.mat,
    hotline: Hotline315,
    address: "A23/8 Quốc Lộ 50, X. Bình Hưng, H. Bình Chánh, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/fRYvgBXyPgrgUMsDA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d980.0249019458679!2d106.65555626962816!3d10.726800317008937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQzJzM2LjUiTiAxMDbCsDM5JzIyLjMiRQ!5e0!3m2!1svi!2s!4v1711704680512!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.726806905357929",
    longitude: "106.65619999980741"
  },
  {
    title: "Số 20 Trần Hưng Đạo",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    hotline: Hotline315,
    address: "20 Trần Hưng Đạo, P. 5, TP. Cà Mau, Tỉnh Cà Mau",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/1491JauU3iEiQiV97",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7273642976365!2d105.1563118!3d9.1790475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a149a6dc60dbf5%3A0x8c2a4fbac173e76a!2zMjAgxJAuIFRy4bqnbiBIxrBuZyDEkOG6oW8sIFBoxrDhu51uZyA1LCBUaMOgbmggcGjhu5EgQ8OgIE1hdSwgQ8OgIE1hdQ!5e0!3m2!1svi!2s!4v1711704703711!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "9.179084570071392",
    longitude: "105.15630107116367"
  },
  {
    title: "Số 57 Trần Hưng Đạo",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "57 Trần Hưng Đạo, P. 5, TP. Cà Mau, Tỉnh Cà Mau",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/9rpHVvkaRV6YyuHS9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.6643946559234!2d105.16002647600321!3d9.184714486530062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a149afbe7b48c7%3A0x5fe4221748aed155!2zNTcgxJAuIFRy4bqnbiBIxrBuZyDEkOG6oW8sIFBoxrDhu51uZyA1LCBUaMOgbmggcGjhu5EgQ8OgIE1hdSwgQ8OgIE1hdSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1711704722560!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "9.18476214728775",
    longitude: "105.16261212555659"
  },
  {
    title: "Số 28 Quốc Lộ 1",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "28 Quốc Lộ 1, P. 5, TP. Tân An, Tỉnh Long An",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/njVCb6ViGMqWCffR7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3922.5763065842075!2d106.39582037503844!3d10.53399878960041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDMyJzAyLjQiTiAxMDbCsDIzJzU0LjIiRQ!5e0!3m2!1svi!2s!4v1711704762121!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.5340146116277",
    longitude: "106.39837383804341"
  },
  {
    title: "Số 112 Vũ Phạm Hàm",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    hotline: Hotline315,
    address: "112 Vũ Phạm Hàm, P. Yên Hoà, Q. Cầu Giấy, TP. Hà Nội",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/ytv43ggWWcW17pJt5",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d931.087668149621!2d105.79845826963576!3d21.018650250662056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzA3LjEiTiAxMDXCsDQ3JzU2LjgiRQ!5e0!3m2!1svi!2s!4v1711704833793!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "21.01866902874665",
    longitude: "105.79910199981502"
  },
  {
    title: "Số 1212 Lê Đức Thọ",
    type: "LAO",
    img: SrcLogo.lao,
    name: Name.lao,
    hotline: Hotline315,
    address: "1212 Lê Đức Thọ, P. 13, Q. Gò Vấp, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/xNckSsS71fANdmKW8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d979.6148514808466!2d106.6596912696282!3d10.852620316450258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUxJzA5LjQiTiAxMDbCsDM5JzM3LjIiRQ!5e0!3m2!1svi!2s!4v1711704870565!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.85262426780569",
    longitude: "106.66033231759835"
  },
  {
    title: "Số 313-313A Nguyễn Xí",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "313-313A Nguyễn Xí, P. 13, Q. Bình Thạnh, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/cDmtvn89dp4BeCwV9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8645350913557!2d106.70082587601296!3d10.821677258355422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175288d877930f1%3A0x940c69cd145e2c35!2zMzEzIE5ndXnhu4VuIFjDrSwgUGjGsOG7nW5nIDEzLCBCw6xuaCBUaOG6oW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711704896106!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.821661451299047",
    longitude: "106.70340079672997"
  },
  {
    title: "Số 680 Hà Huy Giáp",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "680 Hà Huy Giáp, P. Thạnh Lộc, Q. 12, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/JKKxcyHqFr4KukwR6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1849.0615474888284!2d106.68249374150102!3d10.88570562873103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7d181619c69%3A0x37bccce9ed4c3b72!2zNjgwIEjDoCBIdXkgR2nDoXAsIFRo4bqhbmggTOG7mWMsIFF14bqtbiAxMiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1711704927401!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.885728003746554",
    longitude: "106.68254437486571"
  },
  {
    title: "Số 137-139 Lương Định Của",
    type: "MAT",
    img: SrcLogo.mat,
    name: Name.mat,
    hotline: Hotline315,
    address: "137-139 Lương Định Của, P. An Khánh, TP. Thủ Đức, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/1hadZgQdM9ao947CA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d979.840361380351!2d106.72591026962817!3d10.7836043167575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ3JzAxLjAiTiAxMDbCsDQzJzM1LjYiRQ!5e0!3m2!1svi!2s!4v1711705003951!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.783589825118538",
    longitude: "106.72655399980742"
  },
  {
    title: "Số 561-563 Điện Biên Phủ",
    type: "SAN",
    img: SrcLogo.san,
    name: Name.san,
    hotline: Hotline315,
    address: "561-563 Điện Biên Phủ, P. Hòa Khê, Q. Thanh Khê, TP. Đà Nẵng",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/TRXES8i5dvW9T1HX6",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0061425748236!2d108.1816964760628!3d16.06517103954462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142190227dfe713%3A0xb22108f8719cdf40!2zNTYzIMSQaeG7h24gQmnDqm4gUGjhu6csIFRoYW5oIEtow6ogxJDDtG5nLCBUaGFuaCBLaMOqLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711705024321!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "16.065176194468823",
    longitude: "108.18428212561614"
  },
  {
    title: "Số 896 Hà Huy Giáp",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    hotline: Hotline315,
    address: "896 Hà Huy Giáp, P. Thạnh Lộc, Q. 12, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/rkfnyXDiJYzKVAiJ8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.9273860616136!2d106.68531337601354!3d10.893123157028377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7cf5435500f%3A0xa6665b636ffb12cf!2zODk2IEjDoCBIdXkgR2nDoXAsIFRo4bqhbmggTOG7mWMsIFF14bqtbiAxMiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1711705040688!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.89310735375206",
    longitude: "106.68788829673055"
  },
  {
    title: "Số 40 Đặng Văn Bi",
    type: "BV",
    img: SrcLogo.bv,
    name: Name.bv,
    hotline: Hotline315,
    address: "40 Đặng Văn Bi, P. Bình Thọ, TP. Thủ Đức, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/JGVh4kFW7RSCfJ5b7",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3918.6110085616556!2d106.76256547504276!3d10.841051389311716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUwJzI3LjgiTiAxMDbCsDQ1JzU0LjUiRQ!5e0!3m2!1svi!2s!4v1711705067314!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.841046120633886",
    longitude: "106.76514039572004"
  },
  {
    title: "Số 764 Kha Vạn Cân",
    type: "BV",
    img: SrcLogo.bv,
    name: Name.bv,
    hotline: Hotline315,
    address: "764 Kha Vạn Cân, P. Linh Đông, TP. Thủ Đức, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/MuRznRLLdf7Abm8B9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.7689245692446!2d106.75192078189056!3d10.847428188385521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bea2987dbf%3A0xa780baf0167d92ea!2zNzY0IMSQLiBLaGEgVuG6oW4gQ8OibiwgTGluaCDEkMO0bmcsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1711705106052!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.847469168822409",
    longitude: "106.75231323193064"
  },
  {
    title: "Số 88-90 Tây Thạnh",
    type: "BV",
    img: SrcLogo.bv,
    name: Name.bv,
    hotline: Hotline315,
    address: "88-90 Tây Thạnh, P. Tây Thạnh, Q. Tân Phú, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/PFF6WGMTfrnX4o7SA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3918.9637860825087!2d106.6233056!3d10.8140833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ4JzUwLjciTiAxMDbCsDM3JzIzLjkiRQ!5e0!3m2!1svi!2s!4v1711705124085!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.814078030847853",
    longitude: "106.62332705767228"
  },
  {
    title: "Số 502-504 Lạc Long Quân",
    type: "BV",
    img: SrcLogo.bv,
    name: Name.bv,
    hotline: Hotline315,
    address: "502-504 Lạc Long Quân, TX. Hiệp Tân, TX. Hòa Thành, TP. Tây Ninh",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/mBXiM8Tr9Vd4uEht9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d652.8270803064896!2d106.10974719557639!3d11.295056781322305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDE3JzQyLjQiTiAxMDbCsDA2JzM2LjEiRQ!5e0!3m2!1svi!2s!4v1711705143922!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "11.295092768805553",
    longitude: "106.11003541129594"
  },
  {
    title: "Số 323-297 Quốc Lộ 1",
    type: "BV",
    img: SrcLogo.bv,
    name: Name.bv,
    hotline: Hotline315,
    address: "323-297 Quốc Lộ 1, P. 4, TP. Tân An, Tỉnh Long An",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/ADUXThDLWZqj4m9NA",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d566.4948677563095!2d106.39815337543072!3d10.534012635735714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDMyJzAyLjQiTiAxMDbCsDIzJzU0LjIiRQ!5e0!3m2!1svi!2s!4v1711705159486!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.533993594045882",
    longitude: "106.39839663888196"
  },
  {
    title: "Số 622-624 Cách Mạng Tháng Tám",
    type: "BV",
    img: SrcLogo.bv,
    name: Name.bv,
    hotline: Hotline315,
    address: "622-624 Cách Mạng Tháng Tám, P. Phước Nguyễn, TP. Bà Rịa, Tỉnh Bà Rịa - Vũng Tàu",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/6qWbbcegNwg93D9L9",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.124940559794!2d107.18459347601076!3d10.490815864394877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31757350819acc7d%3A0x180a82a1e3af9ded!2zNjI0IEPDoWNoIE3huqFuZyBUaMOhbmcgVMOhbSwgUGjGsOG7m2MgTmd1eeG7hW4sIELDoCBS4buLYSwgQsOgIFLhu4thIC0gVsWpbmcgVMOgdSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1711705230581!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.49081058964795",
    longitude: "107.18716839672777"
  },
  {
    title: "Số 1184 Huỳnh Tấn Phát",
    type: "NHI",
    img: SrcLogo.nhi,
    name: Name.nhi,
    hotline: Hotline315,
    address: "1184 Huỳnh Tấn Phát, P. Tân Phú, Q. 7, TP. HCM",
    workingTime: Time.comingsoon,
    linkMap: "https://maps.app.goo.gl/yMdZi3gfDZsof9aP8",
    srcIframe: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.1940066798657!2d106.73398947601244!3d10.719514560238919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752542ddc65cf9%3A0x2bce05ea5fe7bd4!2zMTE4NCBIdeG7s25oIFThuqVuIFBow6F0LCBQaMO6IE3hu7ksIFF14bqtbiA3LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711705249426!5m2!1svi!2s' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    latitude: "10.719509289432702",
    longitude: "106.73654293905682"
  }
];

initMap();