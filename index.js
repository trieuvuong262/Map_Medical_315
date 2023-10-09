const parser = new DOMParser();

async function initMap() {
  // Request needed libraries.

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 10.792596, lng: 106.696058 },
    zoom: 13,
    mapId: "4504f8b37365c3d0",
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
  const buildContent = (property) => {
    const content = document.createElement("div");
    if (property.type === "PS") {
      content.classList.add("property_ps");
    }
    if (property.type === "LK") {
      content.classList.add("property_lk");
    }
    if (property.type === "NK") {
      content.classList.add("property_nk");
    } 
    if (property.type === "IVY") {
      content.classList.add("property_ivy");
    }
    if (property.type === "BV") {
      content.classList.add("property_bv");
    }else {
      content.classList.add("property");
    }

    content.innerHTML = `
    <div class = "addressTitle">
    <p>${property.titleAddress}</p>
    </div>
      <div class="icon">
      <img src="${property.img}" alt="logo Nhi đồng 315"></img>
      </div>
      <div class = "detail">
        <div class = "name">Phòng Khám: <span style="${
          property.type == "PS"
            ? "color:#DF5EA2"
            : property.type == "LK"
            ? "color: #F58220"
            : property.type == "IVY"
            ? "color: #23989C"
            : property.type == "BV"
            ? "color: #1576bd"
            : "color: #00afef"
        }">${property.name}</spam></div>
        <div class = "address" > Địa chỉ: <span style="color: black;">${
          property.address
        }<span/> <a target="_blank"  href = "${property.linkAddress}" style="${
          property.type == "PS"
          ? "color:#DF5EA2"
          : property.type == "LK"
          ? "color: #F58220"
          : property.type == "IVY"
          ? "color: #23989C"
          : property.type == "BV"
          ? "color: #1576bd"
          : "color: #00afef"
    }">Chỉ Đường </a> </div>
        <div class = "clockWork">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1654 7.00065C13.1654 10.406 10.4047 13.1673 6.9987 13.1673C3.59336 13.1673 0.832031 10.406 0.832031 7.00065C0.832031 3.59465 3.59336 0.833984 6.9987 0.833984C10.4047 0.833984 13.1654 3.59465 13.1654 7.00065Z" stroke="#8E9AAB" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.79344 7.51113L6.77344 7.4618V4.23047" stroke="#8E9AAB" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        ${property.timeWork} <span style="${
          property.type == "PS"
          ? "color:#DF5EA2"
          : property.type == "LK"
          ? "color: #F58220"
          : property.type == "IVY"
          ? "color: #23989C"
          : property.type == "BV"
          ? "color: #1576bd"
          : "color: #00afef"
    }">Mở cửa</span>
        </div>
      </div>

   `;
    return content;
  };
  for (const property of dataNhiDong315) {
    const glyphSvgMarkerView = new AdvancedMarkerElement({
      map,
      position: property.position,
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
    // console.log(markerView.content);
  }
}
const dataNhiDong315 = [
  {
    titleAddress: "Số 207B Hoàng Văn Thụ ( OFFICE )",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Văn phòng 315 medical",
    address: "207B Hoàng Văn Thụ, P.8, Q.Phú Nhuận, TP. Hồ Chí Minh",
    timeWork: "8:00 - 12:00 và 13:00 - 5:00",
    linkAddress: "https://maps.app.goo.gl/dajfPh437EgygAfN8",
    position: {
      lat: 10.7996365,
      lng: 106.6717373,
    },
  },
  {
    titleAddress: "Số 234 Đinh Tiên Hoàng",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "234 Đ. Đinh Tiên Hoàng, Đa Kao, Q.1, TP.Hồ Chí Minh",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://goo.gl/maps/gBPJ568fCmpcgiQx8",
    position: {
      lat: 10.7925958,
      lng: 106.6960584,
    },
  },
  {
    titleAddress: "Số 898 Quốc Lộ 22",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "898 Quốc lộ 22, Khu phố 8,Thị trấn Củ Chi, Huyện Củ Chi, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/HhjzkestY7VGiRBF7",
    position: {
      lat: 10.968153,
      lng: 106.48688,
    },
  },
  {
    titleAddress: "Số 148 Trần Quốc Thảo",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "148 Trần Quốc Thảo, Võ Thị Sáu, Q.3, TP.Hồ Chí Minh",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://goo.gl/maps/gBPJ568fCmpcgiQx8",
    position: {
      lat: 10.785292,
      lng: 106.682797,
    },
  },
  {
    titleAddress: "Số 329 Hoàng Diệu",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "329 Đ. Hoàng Diệu, Phường 6, Q.4, TP.Hồ Chí Minh ",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://goo.gl/maps/64UoCWFojh3pws8N8",
    position: {
      lat: 10.759758,
      lng: 106.698932,
    },
  },
  {
    titleAddress: "Số 180 Hải Thượng Lãn Ông",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "180 Đ. Hải Thượng Lãn Ông, P.10, Q.5, TP. Hồ Chí Minh",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/3KgyrxDNJ3gbGNU37",
    position: {
      lat: 10.7505335,
      lng: 106.6594886,
    },
  },
  {
    titleAddress: "Số 472B Trần Hưng Đạo",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 472B Đ. Trần Hưng Đạo, Phường 2, Quận 5, TP.Hồ Chí Minh",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/fxZ3QqnxN7QCLJEj7",
    position: {
      lat: 10.7559531,
      lng: 106.6826805,
    },
  },
  {
    titleAddress: "Số 187 Hậu Giang",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 187 Đ. Hậu Giang, Phường 5, Quận 6, Thành phố Hồ Chí Minh ",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/b9zkTtFTFqLmLT4m9",
    position: {
      lat: 10.749455,
      lng: 106.645057,
    },
  },
  {
    titleAddress: "Số 260F Nguyễn Văn Luông",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "  260F Đ. Nguyễn Văn Luông, Phường 11, Quận 6, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/W9R7pGvKULNNzpUM7",
    position: {
      lat: 10.7461942,
      lng: 106.6355281,
    },
  },
  {
    titleAddress: "Số 106 Nguyễn Thị Thập",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 106 Nguyễn Thị Thập, Bình Thuận, Quận 7, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/TjWyDXCD6Rg3Xotz8",
    position: {
      lat: 10.7381435,
      lng: 106.7211616,
    },
  },
  {
    titleAddress: "Số 294 Huỳnh Tấn Phát",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "294 Huỳnh Tấn Phát, Tân Thuận Tây, Quận 7, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/PWSsqTbZCfQhkbLJ7",
    position: {
      lat: 10.7517313,
      lng: 106.7286047,
    },
  },
  {
    titleAddress: "Số 560 Phạm Thế Hiển",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "560 Phạm Thế Hiển, Phường 4, Quận 8, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/cBj5iy82dgupoqpTA",
    position: {
      lat: 10.7460787,
      lng: 106.6775234,
    },
  },
  {
    titleAddress: "Số 601 Dương Bá Trạc ",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "601 D. Bá Trạc, Phường 1, Quận 8, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/KpQfg3scyyFeW2wZA",
    position: {
      lat: 10.7437657,
      lng: 106.6890276,
    },
  },
  {
    titleAddress: "Số 308 Nguyễn Tri Phương",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 308 Đ. Nguyễn Tri Phương, Phường 4, Quận 10, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/7tKuoyHL7GHvNtE56",
    position: {
      lat: 10.7627528,
      lng: 106.6684028,
    },
  },
  {
    titleAddress: "Số 307 Tô Hiến Thành",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 307 Đ. Tô Hiến Thành, Phường 12, Quận 10, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/jVauFm7anxrwujG96",
    position: {
      lat: 10.7776234,
      lng: 106.6653982,
    },
  },
  {
    titleAddress: "Số 277 Minh Phụng",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 277 Đ. Minh Phụng, Phường 2, Quận 11, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/YaYmH5wqsJSKsy5U7",
    position: {
      lat: 10.7552793,
      lng: 106.6432613,
    },
  },
  {
    titleAddress: "Số 885 Nguyễn Ảnh Thủ",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 885 Đ. Nguyễn Ảnh Thủ, Tân Chánh Hiệp, Quận 12, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/UV3WozutagADv5mY7",
    position: {
      lat: 10.8738278,
      lng: 106.6220669,
    },
  },
  {
    titleAddress: "Số 28 Lê Văn Khương",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "28 Lê Văn Khương, Thới An, Quận 12, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/iyKgbDuKpi3NjU4r8",
    position: {
      lat: 10.863059,
      lng: 106.6450181,
    },
  },
  {
    titleAddress: "Số 482 Lê Văn Quới",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 482 Đ. Lê Văn Quới, Bình Hưng Hoà A, Bình Tân, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/sQcAv2oiWyYB7XQu7",
    position: {
      lat: 10.776446,
      lng: 106.6050663,
    },
  },
  {
    titleAddress: "Số 16 Tên Lửa",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 16 Tên Lửa, An Lạc, Bình Tân, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/rG3JE5pQnbsTq9vR6",
    position: {
      lat: 10.7389733,
      lng: 106.6148287,
    },
  },
  {
    titleAddress: "Số 1283 Tỉnh Lộ 10",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 1283 Tỉnh Lộ 10, Tân Tạo, Bình Tân, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/x6UxVggmhDcKXcrH8",
    position: {
      lat: 10.7564511,
      lng: 106.5913816,
    },
  },
  {
    titleAddress: "Số 485 Nguyễn Thị Tú",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    address: " 485 Nguyễn Thị Tú, Bình Hưng Hoà B, Bình Tân, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/1zVGaoZ1iJNuhYqR8",
    position: {
      lat: 10.8145311,
      lng: 106.5843941,
    },
  },
  {
    titleAddress: "Số 98 Nguyễn Sơn",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 98 Nguyễn Sơn, Phú Thọ Hoà, Tân Phú, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/i1aSX1FhiUCx37m29",
    position: {
      lat: 10.7818772,
      lng: 106.6306327,
    },
  },
  {
    titleAddress: "Số 308 Tân Sơn Nhì",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 308 Đ. Tân Sơn Nhì, Tân Sơn Nhì, Tân Phú, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/7JbQwZwuq2PuqNB29",
    position: {
      lat: 10.796999,
      lng: 106.630628,
    },
  },
  {
    titleAddress: "Số 550 Lê Trọng Tấn",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "  550 Lê Trọng Tấn, Tây Thạnh, Tân Phú, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/mW8WJsrzQCyXJJR5A",
    position: {
      lat: 10.811465,
      lng: 106.610721,
    },
  },
  {
    titleAddress: "Số 394 Tân Sơn Nhì",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 394 Đ. Tân Sơn Nhì, Tân Sơn Nhì, Tân Phú, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/6vE6xSxoAJusagDo8",
    position: {
      lat: 10.7950265,
      lng: 106.6295018,
    },
  },
  {
    titleAddress: "Số 246B-E Bạch Đằng",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 246B-E Đ. Bạch Đằng, Phường 24, Bình Thạnh, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/6gW7wFGD7LCbDk4RA",
    position: {
      lat: 10.80353,
      lng: 106.703878,
    },
  },
  {
    titleAddress: "Số 215G Nơ Trang Long",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "215G Nơ Trang Long, Phường 12, Bình Thạnh, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/5QBdWiZaaWWUgzs16",
    position: {
      lat: 10.815206,
      lng: 106.697762,
    },
  },
  {
    titleAddress: "Số 147 Nguyễn Xí",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "147 Nguyễn Xí, Phường 26, Bình Thạnh, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/ESLBpYfd3UGkXqy38",
    position: {
      lat: 10.813653,
      lng: 106.708917,
    },
  },
  {
    titleAddress: "Số 169 Đồng Đen",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "169 Đồng Đen, Phường 13, Tân Bình, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/F8W2H1QsYmW3towx6",
    position: {
      lat: 10.7894615,
      lng: 106.6424886,
    },
  },
  {
    titleAddress: "Số 492 Trường Chinh",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "492 Trường Chinh, Phường 13, Tân Bình, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/WfVJAvfA9MFUAWZy9",
    position: {
      lat: 10.8013036,
      lng: 106.6378806,
    },
  },
  {
    titleAddress: "Số 113 Nguyễn Thị Nhỏ",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "113 Nguyễn Thị Nhỏ, Phường 9, Tân Bình, TP.HCMM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/YfzdJFtcVntz58nq8",
    position: {
      lat: 10.771684,
      lng: 106.652582,
    },
  },
  {
    titleAddress: "Số 1742 Cách Mạng Tháng 8",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "1742 Đ. Cách Mạng Tháng 8, Phường 6, Tân Bình, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/LCsMMR4ecniWeo7K7",
    position: {
      lat: 10.7873713,
      lng: 106.663745,
    },
  },
  {
    titleAddress: "Số 179 Lê Văn Sỹ",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "179 Đ. Lê Văn Sỹ, Phường 14, Phú Nhuận, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/qMxBc1ihnL9sJKA36",
    position: {
      lat: 10.7921567,
      lng: 106.6707585,
    },
  },
  {
    titleAddress: "Số 143C Phan Đăng Lưu",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: " 143C Phan Đăng Lưu, Phường 2, Phú Nhuận, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/LDkbp1fp8d1fZFuK9",
    position: {
      lat: 10.8019942,
      lng: 106.6834466,
    },
  },
  {
    titleAddress: "Số Quốc Lộ 50",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    address: "A29/22, Tổ 10, Ấp 1, QL50, Bình Hưng, Bình Chánh, TP.HCM",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    linkAddress: "https://maps.app.goo.gl/uNUDr38aYLNEmv7C7",
    position: {
      lat: 10.7299061,
      lng: 106.6558958,
    },
  },
  {
    titleAddress: "Số C10 Phạm Hùng",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    name: "Nhi đồng và Tiêm chủng",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    address: "C10/3D1, Phạm Hùng, Xã Bình Hưng, Huyện Bình Chánh, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/1RxfNgHRHJvwRy9B7",
    position: {
      lat: 10.7285444,
      lng: 106.6773816,
    },
  },
  {
    titleAddress: "Số 181-181A Nguyễn Duy Trinh",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "181-181A Đ. Nguyễn Duy Trinh, Phường Bình Trưng Tây, Quận 2, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/EmPeb2PnNvzaFZoN8",
    position: {
      lat: 10.7879239,
      lng: 106.7608636,
    },
  },
  {
    titleAddress: "Số 179 Hiệp Bình",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "179 Đ. Hiệp Bình, Hiệp Bình Chánh, Thủ Đức, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/DofBfPUvPTrZacVN6",
    position: {
      lat: 10.8450803,
      lng: 106.727517,
    },
  },
  {
    titleAddress: "Số 1032-1034 Kha Vạn Cân",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: " 1032-1034 Đ. Kha Vạn Cân, Trường Thọ, Thủ Đức, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/VLRpdCaZjv3fYT7d7",
    position: {
      lat: 10.850712,
      lng: 106.7535763,
    },
  },
  {
    titleAddress: "Số 87 Lê Văn Việt",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "87 Lê Văn Việt, Hiệp Phú, Thủ Đức, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/MATu66DAB8yByFi8A",
    position: {
      lat: 10.8469679,
      lng: 106.7774699,
    },
  },
  {
    titleAddress: "Số 1 Đường Tăng Nhơn Phú",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "1 Đường Tăng Nhơn Phú, Phước Long B, Thủ Đức, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/AV4UhTCknX2chwiS9",
    position: {
      lat: 10.8270292,
      lng: 106.7691655,
    },
  },
  {
    titleAddress: "Số 373 Phạm Văn Chiêu",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng ",
    address: "373 Phạm Văn Chiêu, Phường 14, Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/yTxTbdntkhehveju9",
    position: {
      lat: 10.850925,
      lng: 106.654222,
    },
  },
  {
    titleAddress: "Số 291 Nguyễn Oanh",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "291 Nguyễn Oanh, Phường 6, Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/kpySDnBrj7AU3E4U9",
    position: {
      lat: 10.8423289,
      lng: 106.6766884,
    },
  },
  {
    titleAddress: "Số 199-201 Thống Nhất",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "199-201 Đ. Thống Nhất, Phường 10, Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/kqTaAdfGeD1zLksAA",
    position: {
      lat: 10.836481,
      lng: 106.6598851,
    },
  },
  {
    titleAddress: "Số 657 Quang Trung",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "657 Quang Trung, Phường 11, Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/tnFSVgi75uNVDyY49",
    position: {
      lat: 10.836304,
      lng: 106.6580363,
    },
  },
  {
    titleAddress: "Số 37 Huỳnh Tấn Phát",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "37 Huỳnh Tấn Phát, TT. Nhà Bè, Nhà Bè, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/rMcfDvtnGdq1cGFXA",
    position: {
      lat: 10.7016495,
      lng: 106.7383806,
    },
  },
  {
    titleAddress: "Số 10/01 Lý Thường Kiệt",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "10/01 Lý Thường Kiệt, TT. Hóc Môn, Hóc Môn, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/Uouco89HQEajC4rAA",
    position: {
      lat: 10.887076,
      lng: 106.5909602,
    },
  },
  {
    titleAddress: "Số 2/83A Lê Thị Hà",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "2/83A Lê Thị Hà, Tân Xuân, Hóc Môn, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/tE5pi18TB1JFh3kg6",
    position: {
      lat: 10.8726485,
      lng: 106.5978579,
    },
  },
  {
    titleAddress: "Số 152 Tô Ký",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "152 Tô Ký - Ấp Đông, Tân Chánh Hiệp, Hóc Môn, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/h2rgPqB8mPZzxx8W8",
    position: {
      lat: 10.8755897,
      lng: 106.6115253,
    },
  },
  {
    titleAddress: "Số 26 Phan Văn Hớn",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "26 Phan Văn Hớn, Xuân Thới Thượng, Hóc Môn, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/z9hRTYB7PYGPsLMK6",
    position: {
      lat: 10.8529734,
      lng: 106.5836764,
    },
  },
  {
    titleAddress: "Số  374 Tỉnh Lộ 8",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: " 374 Tỉnh Lộ 8, khu phố 4, Củ Chi, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/mHfcs6LhY6agaUHC7",
    position: {
      lat: 10.9769764,
      lng: 106.5018969,
    },
  },
  {
    titleAddress: "Số 566 Lê Quang Định",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "566 Lê Quang Định, Phường 1, Quận Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/HrnYPNaurJt3K4th8",
    position: {
      lat: 10.817345,
      lng: 106.6891633,
    },
  },
  {
    titleAddress: "Số 634 Nguyễn Thị Định",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: " 634 Nguyễn Thị Định, Phường Thạnh Mỹ Lợi, Quận 2, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/9RNuHLvoctiDriDKA",
    position: {
      lat: 10.7766034,
      lng: 106.7653338,
    },
  },
  {
    titleAddress: "Số 463-465 Hồ Học Lãm",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      " 463-465 Hồ Học Lãm, Khu Phố 2, Phường An Lạc, Quận Bình Tân, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/i3A418Mrx8cLud6g6",
    position: {
      lat: 10.7251142,
      lng: 106.6088809,
    },
  },
  {
    titleAddress: "Số 1192 – 1194 Nguyễn Văn Quá",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "1192 – 1194 Nguyễn Văn Quá, phường Tân Thới Hiệp, Quận 12, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/39Uvhq35HnRCNDg18",
    position: {
      lat: 10.8554613,
      lng: 106.6391135,
    },
  },
  {
    titleAddress: "Số 50E Tây Lân",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "50E Tây Lân , Khu phố 7 phường Bình Trị Đông A, quận Bình Tân, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/6fhjnNPNxZfyeuDX9",
    position: {
      lat: 10.7716221,
      lng: 106.5864584,
    },
  },
  {
    titleAddress: "Số 626 Lạc Long Quân",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "626 Lạc Long Quân, Phường 9, quận Tân Bình, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/41NhfAMj7idYGzuJ7",
    position: {
      lat: 10.7738295,
      lng: 106.6475046,
    },
  },
  {
    titleAddress: "Số 66 Bà Triệu",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "66 Bà Triệu, Phường Phú Hội, TP. Huế, tỉnh Thừa Thiên Huế",
    linkAddress: "https://maps.app.goo.gl/DbryfKibAPzSFDhLA",
    position: {
      lat: 16.465349,
      lng: 107.5986643,
    },
  },
  {
    titleAddress: "Số 15 Đường Lý Thường Kiệt",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "Lô đất B5 – Ô 14, 15 Đường Lý Thường Kiệt, khu phố Thống Nhất 1, phường Dĩ An, thành phố Dĩ An, tỉnh Bình Dương",
    linkAddress: "https://maps.app.goo.gl/JYoxQysoyTZ4spdk6",
    position: {
      lat: 10.907968,
      lng: 106.7532553,
    },
  },
  {
    titleAddress: "Số C32Đ Cách Mạng Tháng Tám",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "C32Đ, đường Cách Mạng Tháng Tám (đường ĐT 745 cũ), khu phố Bình Đức 1, phường Lái Thiêu, thành phố Thuận An, Tỉnh Bình Dương",
    linkAddress: "https://maps.app.goo.gl/5b9RbqbbGsNyw9XK6",
    position: {
      lat: 10.961902,
      lng: 106.6734813,
    },
  },
  {
    titleAddress: "Số 464 Nguyễn An Ninh",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "464 Nguyễn An Ninh, khu phố Đông Tân, phường Dĩ An, Thành phố Dĩ An, tỉnh Bình Dương",
    linkAddress: "https://maps.app.goo.gl/jaR4KUeceeYrzFGq66",
    position: {
      lat: 10.9153467,
      lng: 106.7693802,
    },
  },
  {
    titleAddress: "Số 11 Phố Điện Biên Phủ",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "Biệt thự số 11 Phố Điện Biên Phủ, Phường Điện Biên Phủ, quận Ba Đình, Thành phố Hà Nội",
    linkAddress: "https://maps.app.goo.gl/YNVqtfMMEq3Qsk4v8",
    position: {
      lat: 21.0293088,
      lng: 105.8420908,
    },
  },
  {
    titleAddress: "Số 77 Trần Văn Khéo",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      " 75 – 77 Trần Văn Khéo, phường Cái Khế, quận Ninh Kiều, TP. Cần Thơ",
    linkAddress: "https://maps.app.goo.gl/1aovAk4FbQrw344D7",
    position: {
      lat: 10.044774,
      lng: 105.7830423,
    },
  },
  {
    titleAddress: "Số 162 – 162 Trần Hưng Đạo",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "162 – 162B đường Trần Hưng Đạo, phường An Nghiệp, quận Ninh Kiều, TP.Cần Thơ",
    linkAddress: "https://maps.app.goo.gl/UKSx7uy6hnsMTHcq8",
    position: {
      lat: 10.036569,
      lng: 105.7745903,
    },
  },
  {
    titleAddress: "Số 714 30 tháng 4",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "714 đường 30 tháng 4, phường Hưng Lợi, quận Ninh Kiều, TP. Cần Thơ",
    linkAddress: "https://maps.app.goo.gl/cuGhxeR769kzQLWx6",
    position: {
      lat: 10.01246,
      lng: 105.7586793,
    },
  },
  {
    titleAddress: "Số 40 - 42 Núi Thành",
    img: "https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address:
      "40 - 42 Núi Thành, Phường Hoà Thuận Đông, quận Hải Châu, thành phố Đà Nẵng",
    linkAddress: "https://maps.app.goo.gl/XN3gH8yWf72FTcQ37",
    position: {
      lat: 16.0536125,
      lng: 108.2198378,
    },
  },
  {
    titleAddress: "Số 764-766 Kha Vạn Cân",
    type:"BV",
    img: "https://png.pngtree.com/png-clipart/20220626/original/pngtree-png-hospital-icon-vector-file-png-image_8186871.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Bệnh Viện Nhi Đồng 315",
    address: "764-766 Kha Vạn Cân, Linh Đông, TP. Thủ Đức",
    linkAddress: "https://maps.app.goo.gl/AQH9svysjdHfzJj29",
    position: {
      lat: 10.8474474,
      lng: 106.7522647,
    },
  },
  {
    titleAddress: "Số 327 Hoàng Diệu",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "327 Đ. Hoàng Diệu, Phường 9, Quận 4, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/uCCBjGUD9R4bckRB7",
    position: {
      lat: 10.7596673,
      lng: 106.6991505,
    },
  },
  {
    titleAddress: "Số 472B Trần Hưng Đạo",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "472B Đ. Trần Hưng Đạo, Phường 2, Quận 5, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/YHhGLh7DVVhFZzQV7",
    position: {
      lat: 10.7560673,
      lng: 106.6828851,
    },
  },
  {
    titleAddress: "Số 169 Bình Phú",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "169 Bình Phú, Phường 11, Quận 6, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/Mtum135u6X6BDGVL6",
    position: {
      lat: 10.7443906,
      lng: 106.6303681,
    },
  },
  {
    titleAddress: "Số 1242 Huỳnh Tấn Phát",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "1242 Huỳnh Tấn Phát, Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/ztwbg2ZNsmdhQ3CM6",
    position: {
      lat: 10.717906,
      lng: 106.7360249,
    },
  },
  {
    titleAddress: "Số 129 Nguyễn Thị Thập",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "129 Nguyễn Thị Thập, Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/cjBqnGxskBFEdsu69",
    position: {
      lat: 10.737868,
      lng: 106.7198509,
    },
  },
  {
    titleAddress: "Số 17 Âu Cơ",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "17 Đ. Âu Cơ, Phường 14, Quận 11, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/2NnoTSYXMgU4hXfW8",
    position: {
      lat: 10.7691585,
      lng: 106.6515838,
    },
  },
  {
    titleAddress: "Số 71 Lý Thường Kiệt",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "71 Lý Thường Kiệt, Phường 7, Quận 11, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/v9dVqZ8WsJF1PYo67",
    position: {
      lat: 10.759982,
      lng: 106.6602669,
    },
  },
  {
    titleAddress: "Số 4A Lê Văn Khương",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "4A Lê Văn Khương, Khu Phố 1, Quận 12, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/szBgbn6nigfJW8XAA",
    position: {
      lat: 10.8695817,
      lng: 106.649352,
    },
  },
  {
    titleAddress: "Số 897 Nguyễn Ảnh Thủ",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "897 Đ. Nguyễn Ảnh Thủ, Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/e2fhbebVieyPr2sg8",
    position: {
      lat: 10.8694744,
      lng: 106.6179653,
    },
  },
  {
    titleAddress: "Số 427 Nguyễn Văn Quá",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "427 Nguyễn Văn Quá, Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/Nzs1zYjgKLQG9Yfr8",
    position: {
      lat: 10.839033,
      lng: 106.6289849,
    },
  },
  {
    titleAddress: "Số 10-12 Tên Lửa",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "10-12 Tên Lửa, An Lạc, Bình Tân, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/mCMYknkc3StT3Yq76",
    position: {
      lat: 10.7390418,
      lng: 106.6149339,
    },
  },
  {
    titleAddress: "Số 482 Lê Văn Quới",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "482 Đ. Lê Văn Quới, Bình Hưng Hoà A, Bình Tân, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/R8PVhrnRSRuw8r7s7",
    position: {
      lat: 10.776457,
      lng: 106.6056373,
    },
  },
  {
    titleAddress: "Số 459 Nguyễn Thị Tú",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "459 Nguyễn Thị Tú, Bình Hưng Hoà B, Bình Tân, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/qvkZWKfU2fN3Ma2z6",
    position: {
      lat: 10.8148338,
      lng: 106.5854126,
    },
  },
  {
    titleAddress: "Số 372 Hồ Học Lãm",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "372 Hồ Học Lãm, An Lạc, Bình Tân, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/eSu79CiJpXAQZQYq7",
    position: {
      lat: 10.7252306,
      lng: 106.6093642,
    },
  },
  {
    titleAddress: "Số 277C Lê Văn Quới",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "277B-277C Đ. Lê Văn Quới, Bình Trị Đông, Bình Tân, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/J4HNXc7BMqrGsSpN6",
    position: {
      lat: 10.7756873,
      lng: 106.6135893,
    },
  },
  {
    titleAddress: "Số 50 Tây Lân",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "50 Đ. Tây Lân, Bình Trị Đông A, Bình Tân, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/QNWMTRqh5BHWPUbf7",
    position: {
      lat: 10.7715576,
      lng: 106.5865926,
    },
  },
  {
    titleAddress: "Số 300 Tân Sơn Nhì",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Phụ Sản 315",
    address: "300 Đ. Tân Sơn Nhì, Tân Sơn Nhì, Tân Phú, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/38TB9NEBxsNKUmK87",
    position: {
      lat: 10.797205,
      lng: 106.6300943,
    },
  },
  {
    titleAddress: "Số 483 Lê Trọng Tấn",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "483 Lê Trọng Tấn, Kp 5, Tân Phú, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/Tdaxgz4584irSveT9",
    position: {
      lat: 10.809137,
      lng: 106.6146383,
    },
  },
  {
    titleAddress: "Số 492 Trường Chinh",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "492 Trường Chinh, Phường 13, Tân Bình, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/8HKHz8j7Lj4AXbM97",
    position: {
      lat: 10.8012801,
      lng: 106.6378817,
    },
  },
  {
    titleAddress: "Số 700 Cách Mạng Tháng 8",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "700 Đ. Cách Mạng Tháng 8, Phường 6, Tân Bình, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/7vqAKi9KtGsfo6uY7",
    position: {
      lat: 10.787478,
      lng: 106.6628533,
    },
  },
  {
    titleAddress: "Số 122 Bàu Cát",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "122 Bàu Cát, Phường 14, Tân Bình, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/3uSDEPWpaP5XvHTy9",
    position: {
      lat: 10.792163,
      lng: 106.6429301,
    },
  },
  {
    titleAddress: "Số C8 Phạm Hùng",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "C8/1A1 Đ. Phạm Hùng, Khu dân cư Him Lam, Bình Chánh, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/3uSDEPWpaP5XvHTy9",
    position: {
      lat: 10.729936,
      lng: 106.6755603,
    },
  },
  {
    titleAddress: "Số 941 Kha Vạn Cân",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "941 Đ. Kha Vạn Cân, Phường Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/1nnfdCjLo99EiaLVA",
    position: {
      lat: 10.8603771,
      lng: 106.7608108,
    },
  },
  {
    titleAddress: "Số 175 Lê Văn Việt",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "175 Lê Văn Việt, Hiệp Phú, Thủ Đức, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/qRjofNX5ysgZF4aB8",
    position: {
      lat: 10.8445325,
      lng: 106.781208,
    },
  },
  {
    titleAddress: "Số 184 Đỗ Xuân Hợp",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "184 Đỗ Xuân Hợp, Phước Long B, Thủ Đức, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/TMTXTDpuD2nZTSSRA",
    position: {
      lat: 10.8261271,
      lng: 106.7691359,
    },
  },
  {
    titleAddress: "Số 699 Nguyễn Duy Trinh",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "699 Đ. Nguyễn Duy Trinh, Bình Trưng Đông, Quận 2, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/HbJwZ6qpMt85eJf67",
    position: {
      lat: 10.7884225,
      lng: 106.7770259,
    },
  },
  {
    titleAddress: "Số 428 Nguyễn Thị Định",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "428 Nguyễn Thị Định, Phường Thạnh Mỹ Lợi, Quận 2, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/Cx6oN8rXAvXvxVqZA",
    position: {
      lat: 10.7818854,
      lng: 106.7610949,
    },
  },
  {
    titleAddress: "Số 98E Phan Đăng Lưu",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "98E Phan Đăng Lưu, Phường 3, Phú Nhuận, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/KhGA1faZXLoS2i649",
    position: {
      lat: 10.8031715,
      lng: 106.6841453,
    },
  },
  {
    titleAddress: "Số 60 Bạch Đằng",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 3135",
    address: "60 Đ. Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/MXrHi1dpRLoeuizr9",
    position: {
      lat: 10.803132,
      lng: 106.7090733,
    },
  },
  {
    titleAddress: "Số 245 Phạm Văn Chiêu",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "245 Phạm Văn Chiêu, Phường 14, Gò Vấp, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/gkHmeDLgySMczEjLA",
    position: {
      lat: 10.8491049,
      lng: 106.6499609,
    },
  },
  {
    titleAddress: "Số 299 Nguyễn Oanh",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "299 Nguyễn Oanh, Phường 17, Gò Vấp, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/esChHfT9M3ZuchBE8",
    position: {
      lat: 10.8430782,
      lng: 106.6767652,
    },
  },
  {
    titleAddress: "Số 1457 Phan Văn Trị",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "1457 Đ. Phan Văn Trị, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/ZMwW4cJNRjjSiJM17",
    position: {
      lat: 10.835038,
      lng: 106.6653194,
    },
  },
  {
    titleAddress: "Số 917 Quang Trung",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "917 Quang Trung, Phường 14, Gò Vấp, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/5CPKNDYfvv63nHwu9",
    position: {
      lat: 10.8448272,
      lng: 106.6390418,
    },
  },
  {
    titleAddress: "Số 34A Lê Thị Hà",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "34A Lê Thị Hà, Tân Xuân, Hóc Môn, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/DgSvsgCzitvc8Zj79",
    position: {
      lat: 10.8717579,
      lng: 106.5975583,
    },
  },
  {
    titleAddress: "Số 26/2 ấp 2 Xuân Thới Thượng",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "26/2 ấp 2, Xuân Thới Thượng, Hóc Môn, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/7XMFPN895RF6y2Em9",
    position: {
      lat: 10.853856,
      lng: 106.5826073,
    },
  },
  {
    titleAddress: "Số 384 Tỉnh Lộ 8",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "384 TL8, TT. Củ Chi, Củ Chi, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/vUMLNrjuTRQnnGrNA",
    position: {
      lat: 10.977272,
      lng: 106.5014243,
    },
  },
  {
    titleAddress: "Số 597 Cách Mạng Tháng 8",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address: "597 Cách Mạng Tháng 8, Phường 3, Tây Ninh",
    linkAddress: "https://maps.app.goo.gl/M22s3gLTfyqFRMJa7",
    position: {
      lat: 11.3091666,
      lng: 106.1065446,
    },
  },
  {
    titleAddress: "Số 88-90 Tây Thạnh",
    img: "https://png.pngtree.com/png-clipart/20220626/original/pngtree-png-hospital-icon-vector-file-png-image_8186871.png",
    type: "BV",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Bệnh Viện Phụ Sản 315",
    address: "88-90 Tây Thạnh, Tân Phú, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/3kNCUTUvH1xGKDDB6",
    position: {
      lat: 10.8142164,
      lng: 106.6234297,
    },
  },
  {
    titleAddress: "Số 174A Nguyễn Trãi",
    img: "https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
    type: "PS",
    timeWork: "T2-T6: 17:00-20:30",
    name: "Phụ Sản 315",
    address:
      "174A Nguyễn Trãi, Khu phố Thống Nhất 1, phường Dĩ An, thành phố Dĩ An, tỉnh Bình Dương",
    linkAddress: "https://maps.app.goo.gl/JNTam9ke5T7RxzC76",
    position: {
      lat: 10.9056175,
      lng: 106.7568245,
    },
  },
  {
    titleAddress: "Số 917 Nguyễn Ảnh Thủ",
    img: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png",
    type: "LK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Tim Mạch Tiểu Đường 315",
    address:
      "917-917A Đ. Nguyễn Ảnh Thủ, Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/18597Njkbqh868Qc8",
    position: {
      lat: 10.8709956,
      lng: 106.6195126,
    },
  },
  {
    titleAddress: "Số 582 Lê Văn Quới",
    img: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png",
    type: "LK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Tim Mạch Tiểu Đường 315",
    address:
      "582 Đ. Lê Văn Quới, Bình Hưng Hoà A, Bình Tân, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/pCSSGzQpRs8wDRhQ9",
    position: {
      lat: 10.776487,
      lng: 106.6021973,
    },
  },
  {
    titleAddress: "Số 605 Huỳnh Tấn Phát",
    img: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png",
    type: "LK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Tim Mạch Tiểu Đường 315",
    address:
      "605 Huỳnh Tấn Phát, Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/WfWhyjzxAVHuxHUE9",
    position: {
      lat: 10.740384,
      lng: 106.7302961,
    },
  },
  {
    titleAddress: "Số 733 Quốc lộ 50",
    img: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png",
    type: "LK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Tim Mạch Tiểu Đường 315",
    address: "733 Quốc lộ 50, Bình Chánh, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/AxaZH7nU9DHSPEc6A",
    position: {
      lat: 10.724189,
      lng: 106.6553803,
    },
  },
  {
    titleAddress: "Số 592 Nguyễn Thị Định",
    img: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png",
    type: "LK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Tim Mạch Tiểu Đường 315",
    address:
      "592 Nguyễn Thị Định, Phường Thạnh Mỹ Lợi, Quận 2, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/vpVAvb7w6tPZVydE6",
    position: {
      lat: 10.7774151,
      lng: 106.7645465,
    },
  },
  {
    titleAddress: "Số 187 Nguyễn Sơn",
    img: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png",
    type: "LK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Tim Mạch Tiểu Đường 315",
    address: "187 Nguyễn Sơn, Phú Thạnh, Tân Phú, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/GRyis8RRYsaYVz3o8",
    position: {
      lat: 10.7826971,
      lng: 106.6270105,
    },
  },
  {
    titleAddress: "Số 20/7B Ấp Tiền Lâm",
    img: "https://w.ladicdn.com/s450x400/5aa6273ea81f66ca2eacc40b/1t-20230612033443-n9-wa.png",
    type: "LK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Tim Mạch Tiểu Đường 315",
    address: "20/7B Ấp Tiền Lân, Bà Điểm, Hóc Môn, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/w7TEfZjEPQDZgFrG9",
    position: {
      lat: 10.8452152,
      lng: 106.5931876,
    },
  },
  {
    titleAddress: "Số 228-230 Hoàng Văn Thụ",
    img: "./img/logoMat.png",
    type: "NK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Mắt 315",
    address: " 228-230 Hoàng Văn Thụ, Phường 4, quận Tân Bình, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/w7TEfZjEPQDZgFrG9",
    position: {
      lat: 10.7995058,
      lng: 106.6598336,
    },
  },
  {
    titleAddress: "Số 896 Âu Cơ",
    img: "./img/logoMat.png",
    type: "NK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Mắt 315",
    address: " 896 Âu Cơ, Phường 14, quận Tân Bình, TP. Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/LaFG5Hu8anEmzip97",
    position: {
      lat: 10.795082,
      lng: 106.6374253,
    },
  },
  {
    titleAddress: "Số 190A Phan Văn Trị",
    img: "./img/logoMat.png",
    type: "NK",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Mắt 315",
    address: "190A Phan Văn Trị, Phường 12, Quận Bình Thạnh, Tp. Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/YqgRbdFHT5pEb35N8",
    position: {
      lat: 10.813107,
      lng: 106.6952941,
    },
  },
  {
    titleAddress: "Số 120 Nguyễn Trãi",
    img: "./img/IVY.png",
    type: "IVY",
    timeWork: "8:00-11:30 và 13:30-20:30",
    name: "Đa Khoa Quốc Tê IVY",
    address:
      "120 Đ. Nguyễn Trãi, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
    linkAddress: "https://maps.app.goo.gl/fEHFK39yLx8rLGx37",
    position: {
      lat: 10.7698019,
      lng: 106.6908475,
    },
  },
];
initMap();
