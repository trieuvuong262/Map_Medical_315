const parser = new DOMParser();

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 10.792596, lng: 106.696058 },
    zoom: 16,
    mapId: "4504f8b37365c3d0",
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
  const buildContent = (property) => {
    const content = document.createElement("div");
    content.classList.add("property");
    content.innerHTML = `
    <div class = "addressTitle">
    <p>${property.titleAddress}</p>
    </div>
      <div class="icon">
      <img src="https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png" alt="logo Nhi đồng 315">
      </div>
      <div class = "detail">
        <div class = "name">Phòng Khám: <span style="color: #00afef;">${property.name}</spam></div>
        <div class = "address" > Địa chỉ: <span style="color: black;">${property.address}<span/> <a target="_blank"  href = "${property.linkAddress}" style="color: #00afef;">Chỉ Đường </a> </div>
        <div class = "clockWork">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1654 7.00065C13.1654 10.406 10.4047 13.1673 6.9987 13.1673C3.59336 13.1673 0.832031 10.406 0.832031 7.00065C0.832031 3.59465 3.59336 0.833984 6.9987 0.833984C10.4047 0.833984 13.1654 3.59465 13.1654 7.00065Z" stroke="#8E9AAB" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.79344 7.51113L6.77344 7.4618V4.23047" stroke="#8E9AAB" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        ${property.timeWork} <span style="color: #00afef">Mở cửa</span>
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
    titleAddress:'Số 234 Đinh Tiên Hoàng',
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
    titleAddress:'Số 148 Trần Quốc Thảo',
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
      titleAddress:'Số 329 Hoàng Diệu',
      name: "Nhi đồng và Tiêm chủng",
      address: "329 Đ. Hoàng Diệu, Phường 6, Q.4, TP.Hồ Chí Minh ",
      timeWork: "8:00 - 11:30 và 13:30 - 20:30",
      linkAddress: "https://goo.gl/maps/64UoCWFojh3pws8N8",
      position: {
        lat: 10.759758,
        lng: 106.698932,
      },
  },
];
initMap();
