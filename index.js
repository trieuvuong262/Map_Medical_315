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
    if(property.type ==="PS"){
      content.classList.add("property_ps")
    }else{
       content.classList.add("property")
    }
   
    content.innerHTML = `
    <div class = "addressTitle">
    <p>${property.titleAddress}</p>
    </div>
      <div class="icon">
      <img src="${property.img}" alt="logo Nhi đồng 315"></img>
      </div>
      <div class = "detail">
        <div class = "name">Phòng Khám: <span style="${property.type == "PS"? "color:rgb(239, 89, 162)":"color: #00afef"}">${property.name}</spam></div>
        <div class = "address" > Địa chỉ: <span style="color: black;">${property.address}<span/> <a target="_blank"  href = "${property.linkAddress}" style="${property.type == "PS"? "color:rgb(239, 89, 162)":"color: #00afef"}">Chỉ Đường </a> </div>
        <div class = "clockWork">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1654 7.00065C13.1654 10.406 10.4047 13.1673 6.9987 13.1673C3.59336 13.1673 0.832031 10.406 0.832031 7.00065C0.832031 3.59465 3.59336 0.833984 6.9987 0.833984C10.4047 0.833984 13.1654 3.59465 13.1654 7.00065Z" stroke="#8E9AAB" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.79344 7.51113L6.77344 7.4618V4.23047" stroke="#8E9AAB" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        ${property.timeWork} <span style="${property.type == "PS"? "color:rgb(239, 89, 162)":"color: #00afef"}">Mở cửa</span>
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
    console.log(markerView.content);
  }
}
const dataNhiDong315 = [
  {
    titleAddress: "Số 234 Đinh Tiên Hoàng",
    img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
    titleAddress: "Số 148 Trần Quốc Thảo",
    img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
    img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
    img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
    img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
    img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
    img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
    img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
     img: 'https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png',
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
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
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
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
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
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
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
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "181-181A Đ. Nguyễn Duy Trinh, Phường Bình Trưng Tây, Quận 2, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/EmPeb2PnNvzaFZoN8",
    position: {
      lat:10.7879239,
      lng: 106.7608636,
    },
  },
  {
    titleAddress: "Số 179 Hiệp Bình",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "179 Đ. Hiệp Bình, Hiệp Bình Chánh, Thủ Đức, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/DofBfPUvPTrZacVN6",
    position: {
      lat:10.8450803,
      lng: 106.727517,
    },
  },
  {
    titleAddress: "Số 1032-1034 Kha Vạn Cân",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: " 1032-1034 Đ. Kha Vạn Cân, Trường Thọ, Thủ Đức, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/VLRpdCaZjv3fYT7d7",
    position: {
      lat:10.850712,
      lng: 106.7535763,
    },
  },
  {
    titleAddress: "Số 87 Lê Văn Việt",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "87 Lê Văn Việt, Hiệp Phú, Thủ Đức, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/MATu66DAB8yByFi8A",
    position: {
      lat:10.8469679,
      lng: 106.7774699,
    },
  },
  {
    titleAddress: "Số 1 Đường Tăng Nhơn Phú",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "1 Đường Tăng Nhơn Phú, Phước Long B, Thủ Đức, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/AV4UhTCknX2chwiS9",
    position: {
      lat:10.8270292,
      lng: 106.7691655,
    },
  },
  {
    titleAddress: "Số 373 Phạm Văn Chiêu",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng ",
    address: "373 Phạm Văn Chiêu, Phường 14, Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/yTxTbdntkhehveju9",
    position: {
      lat:10.850925,
      lng:106.654222,
    },
  },
    {
    titleAddress: "Số 291 Nguyễn Oanh",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "291 Nguyễn Oanh, Phường 6, Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/kpySDnBrj7AU3E4U9",
    position: {
      lat:10.8423289,
      lng:106.6766884,
    },
  },
  {
    titleAddress: "Số 199-201 Thống Nhất",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name:"Nhi đồng và Tiêm chủng",
    address: "199-201 Đ. Thống Nhất, Phường 10, Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/kqTaAdfGeD1zLksAA",
    position: {
      lat:10.836481,
      lng:106.6598851,
    },
  },
  {
    titleAddress: "Số 657 Quang Trung",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "657 Quang Trung, Phường 11, Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/tnFSVgi75uNVDyY49",
    position: {
      lat:10.836304,
      lng:106.6580363,
    },
  },
  {
    titleAddress: "Số 37 Huỳnh Tấn Phát",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "37 Huỳnh Tấn Phát, TT. Nhà Bè, Nhà Bè, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/rMcfDvtnGdq1cGFXA",
    position: {
      lat:10.7016495,
      lng:106.7383806,
    },
  },
  {
    titleAddress: "Số 10/01 Lý Thường Kiệt",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "10/01 Lý Thường Kiệt, TT. Hóc Môn, Hóc Môn, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/Uouco89HQEajC4rAA",
    position: {
      lat:10.887076,
      lng:106.5909602,
    },
  },
  {
    titleAddress: "Số 2/83A Lê Thị Hà",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "2/83A Lê Thị Hà, Tân Xuân, Hóc Môn, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/tE5pi18TB1JFh3kg6",
    position: {
      lat:10.8726485,
      lng:106.5978579,
    },
  },
  {
    titleAddress: "Số 152 Tô Ký",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "152 Tô Ký - Ấp Đông, Tân Chánh Hiệp, Hóc Môn, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/h2rgPqB8mPZzxx8W8",
    position: {
      lat:10.8755897,
      lng:106.6115253,
    },
  },
  {
    titleAddress: "Số 26 Phan Văn Hớn",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "26 Phan Văn Hớn, Xuân Thới Thượng, Hóc Môn, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/z9hRTYB7PYGPsLMK6",
    position: {
      lat:10.8529734,
      lng:106.5836764,
    },
  },
  {
    titleAddress: "Số  374 Tỉnh Lộ 8",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: " 374 Tỉnh Lộ 8, khu phố 4, Củ Chi, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/mHfcs6LhY6agaUHC7",
    position: {
      lat:10.9769764,
      lng:106.5018969,
    },
  },
  {
    titleAddress: "Số 566 Lê Quang Định",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "566 Lê Quang Định, Phường 1, Quận Gò Vấp, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/HrnYPNaurJt3K4th8",
    position: {
      lat:10.817345,
      lng:106.6891633,
    },
  },
  {
    titleAddress: "Số 634 Nguyễn Thị Định",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: " 634 Nguyễn Thị Định, Phường Thạnh Mỹ Lợi, Quận 2, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/9RNuHLvoctiDriDKA",
    position: {
      lat:10.776608,
      lng:106.7641573,
    },
  },
  {
    titleAddress: "Số 463-465 Hồ Học Lãm",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: " 463-465 Hồ Học Lãm, Khu Phố 2, Phường An Lạc, Quận Bình Tân, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/i3A418Mrx8cLud6g6",
    position: {
      lat:10.7251142,
      lng:106.6088809,
    },
  },
  {
    titleAddress: "Số 1192 – 1194 Nguyễn Văn Quá",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "1192 – 1194 Nguyễn Văn Quá, phường Tân Thới Hiệp, Quận 12, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/39Uvhq35HnRCNDg18",
    position: {
      lat:10.8554613,
      lng:106.6391135,
    },
  },
  {
    titleAddress: "Số 50E Tây Lân",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "50E Tây Lân , Khu phố 7 phường Bình Trị Đông A, quận Bình Tân, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/6fhjnNPNxZfyeuDX9",
    position: {
      lat:10.7716221,
      lng:106.5864584,
    },
  },
  {
    titleAddress: "Số 626 Lạc Long Quân",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "626 Lạc Long Quân, Phường 9, quận Tân Bình, TP.HCM",
    linkAddress: "https://maps.app.goo.gl/41NhfAMj7idYGzuJ7",
    position: {
      lat:10.7738295,
      lng:106.6475046,
    },
  },
  {
    titleAddress: "Số 66 Bà Triệu",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "66 Bà Triệu, Phường Phú Hội, TP. Huế, tỉnh Thừa Thiên Huế",
    linkAddress: "https://maps.app.goo.gl/DbryfKibAPzSFDhLA",
    position: {
      lat:16.465349,
      lng:107.5986643,
    },
  },
  {
    titleAddress: "Số 15 Đường Lý Thường Kiệt",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "Lô đất B5 – Ô 14, 15 Đường Lý Thường Kiệt, khu phố Thống Nhất 1, phường Dĩ An, thành phố Dĩ An, tỉnh Bình Dương",
    linkAddress: "https://maps.app.goo.gl/JYoxQysoyTZ4spdk6",
    position: {
      lat:10.7760508,
      lng:106.6565976,
    },
  },
  {
    titleAddress: "Số C32Đ Cách Mạng Tháng Tám",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "C32Đ, đường Cách Mạng Tháng Tám (đường ĐT 745 cũ), khu phố Bình Đức 1, phường Lái Thiêu, thành phố Thuận An, Tỉnh Bình Dương",
    linkAddress: "https://maps.app.goo.gl/5b9RbqbbGsNyw9XK6",
    position: {
      lat:10.961902,
      lng:106.6734813,
    },
  },
  {
    titleAddress: "Số 464 Nguyễn An Ninh",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "464 Nguyễn An Ninh, khu phố Đông Tân, phường Dĩ An, Thành phố Dĩ An, tỉnh Bình Dương",
    linkAddress: "https://maps.app.goo.gl/jaR4KUeceeYrzFGq66",
    position: {
      lat:10.9153467,
      lng:106.7693802,
    },
  },
  {
    titleAddress: "Số 11 Phố Điện Biên Phủ",
    img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
    timeWork: "8:00 - 11:30 và 13:30 - 20:30",
    name: "Nhi đồng và Tiêm chủng",
    address: "Biệt thự số 11 Phố Điện Biên Phủ, Phường Điện Biên Phủ, quận Ba Đình, Thành phố Hà Nội",
    linkAddress: "https://maps.app.goo.gl/YNVqtfMMEq3Qsk4v8",
    position: {
      lat:21.0293088,
      lng:105.8420908,
    },
  },
  {
  titleAddress: "Số 77 Trần Văn Khéo",
  img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
  timeWork: "8:00 - 11:30 và 13:30 - 20:30",
  name: "Nhi đồng và Tiêm chủng",
  address: " 75 – 77 Trần Văn Khéo, phường Cái Khế, quận Ninh Kiều, TP. Cần Thơ",
  linkAddress: "https://maps.app.goo.gl/1aovAk4FbQrw344D7",
  position: {
    lat:10.044774,
    lng:105.7830423,
  },
},
{
  titleAddress: "Số 162 – 162 Trần Hưng Đạo",
  img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
  timeWork: "8:00 - 11:30 và 13:30 - 20:30",
  name: "Nhi đồng và Tiêm chủng",
  address: "162 – 162B đường Trần Hưng Đạo, phường An Nghiệp, quận Ninh Kiều, TP.Cần Thơ",
  linkAddress: "https://maps.app.goo.gl/UKSx7uy6hnsMTHcq8",
  position: {
    lat:10.036569,
    lng:105.7745903,
  },
},
{
  titleAddress: "Số 714 30 tháng 4",
  img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
  timeWork: "8:00 - 11:30 và 13:30 - 20:30",
  name: "Nhi đồng và Tiêm chủng",
  address: "714 đường 30 tháng 4, phường Hưng Lợi, quận Ninh Kiều, TP. Cần Thơ",
  linkAddress: "https://maps.app.goo.gl/cuGhxeR769kzQLWx6",
  position: {
    lat:10.01246,
    lng:105.7586793,
  },
},
{
  titleAddress: "Số 40 - 42 Núi Thành",
  img:"https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png",
  timeWork: "8:00 - 11:30 và 13:30 - 20:30",
  name: "Nhi đồng và Tiêm chủng",
  address: "40 - 42 Núi Thành, Phường Hoà Thuận Đông, quận Hải Châu, thành phố Đà Nẵng",
  linkAddress: "https://maps.app.goo.gl/XN3gH8yWf72FTcQ37",
  position: {
    lat:16.0536125,
    lng:108.2198378,
  },
},
// {
//   titleAddress: "Số 327 Hoàng Diệu",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "327 Đ. Hoàng Diệu, Phường 9, Quận 4, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/uCCBjGUD9R4bckRB7",
//   position: {
//     lat:10.7596673,
//     lng:106.6991505,
//   },
// },
// {
//   titleAddress: "Số 472B Trần Hưng Đạo",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "472B Đ. Trần Hưng Đạo, Phường 2, Quận 5, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/YHhGLh7DVVhFZzQV7",
//   position: {
//     lat:10.7560673,
//     lng:106.6828851,
//   },
// },
// {
//   titleAddress: "Số 169 Bình Phú",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "169 Bình Phú, Phường 11, Quận 6, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/Mtum135u6X6BDGVL6",
//   position: {
//     lat:10.7443906,
//     lng:106.6303681,
//   },
// },
// {
//   titleAddress: "Số 1242 Huỳnh Tấn Phát",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "1242 Huỳnh Tấn Phát, Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/ztwbg2ZNsmdhQ3CM6",
//   position: {
//     lat:10.717906,
//     lng:106.7360249,
//   },
// },
// {
//   titleAddress: "Số 129 Nguyễn Thị Thập",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "129 Nguyễn Thị Thập, Bình Thuận, Quận 7, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/cjBqnGxskBFEdsu69",
//   position: {
//     lat:10.737868,
//     lng:106.7198509,
//   },
// },
// {
//   titleAddress: "Số 17 Âu Cơ",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "17 Đ. Âu Cơ, Phường 14, Quận 11, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/2NnoTSYXMgU4hXfW8",
//   position: {
//     lat:10.7691585,
//     lng:106.6515838,
//   },
// },
// {
//   titleAddress: "Số 71 Lý Thường Kiệt",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "71 Lý Thường Kiệt, Phường 7, Quận 11, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/v9dVqZ8WsJF1PYo67",
//   position: {
//     lat:10.759982,
//     lng:106.6602669,
//   },
// },
// {
//   titleAddress: "Số 4A Lê Văn Khương",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "4A Lê Văn Khương, Khu Phố 1, Quận 12, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/szBgbn6nigfJW8XAA",
//   position: {
//     lat:10.8695817,
//     lng:106.649352,
//   },
// },
// {
//   titleAddress: "Số 897 Nguyễn Ảnh Thủ",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "897 Đ. Nguyễn Ảnh Thủ, Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/e2fhbebVieyPr2sg8",
//   position: {
//     lat:10.8694744,
//     lng:106.6179653,
//   },
// },
// {
//   titleAddress: "Số 427 Nguyễn Văn Quá",
//   img:"https://w.ladicdn.com/s550x450/5aa6273ea81f66ca2eacc40b/phu-san-315-20220326030218.png",
//   type:"PS",
//   timeWork: "T2-T6: 17:00-20:30",
//   name: "Phụ Sản ",
//   address: "427 Nguyễn Văn Quá, Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh",
//   linkAddress: "https://maps.app.goo.gl/Nzs1zYjgKLQG9Yfr8",
//   position: {
//     lat:10.839033,
//     lng:106.6289849,
//   },
// },
];
initMap();
