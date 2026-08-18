// gltf modelを作成する
function createGltfModel(e, lat, lon, height, scale, color) {
  const gltf = document.createElement("a-gltf-model");
  gltf.setAttribute("src", "#gltf");
  gltf.setAttribute("gps-new-entity-place", {
    latitude: e.detail.position.latitude + lat,
    longitude: e.detail.position.longitude + lon,
  });
  gltf.setAttribute("class", "raycastable");
  gltf.setAttribute('position', {x: 0, y: -100, z: 0});
  gltf.setAttribute("mesh-color", {
    scale: scale,
    color: color,
    height: height
  });
  return gltf;
}
// a-gltf-modelに、a-textとイベントリスナーを追加する
function createObject(e, lat, lon, height, scale, color, colorText) {
  const gltf = createGltfModel(e, lat, lon, height, scale, color);
  const text = createText(scale, colorText);
  gltf.appendChild(text);
  gltf.addEventListener("click", {
    text: text,
    handleEvent: this.onMenuButtonClick,
  });
  document.querySelector("a-scene").appendChild(gltf);
}
function onMenuButtonClick(e) {
  const visible = this.text.getAttribute("visible");
  this.text.setAttribute("visible", !visible);
}
// タップイベント処理（テキスト表示非表示）
function onMenuButtonClick(e) {
  const visible = this.text.getAttribute("visible");
  this.text.setAttribute("visible", !visible);
}
