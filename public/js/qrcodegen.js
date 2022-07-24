let smallBtn = document.getElementById('small');
let medBtn = document.getElementById('medium');
let largeBtn = document.getElementById('large');
let ExlargeBtn = document.getElementById('exlarge');

// const Buttons = document.querySelectorAll('button[name="size"]');
let qrcode = new QRCode(document.querySelector('#qrcode'), {
  width: 250,
  height: 250,
  colorDark: '#000000',
  colorLight: '#ffffff',
  correctLevel: QRCode.CorrectLevel.H,
});

smallBtn.addEventListener('click', () => {
  let selectSize = smallBtn.value;
  console.log(selectSize);
  qrcode.makeCode(selectSize);
});

medBtn.addEventListener('click', () => {
  let selectSize = medBtn.value;
  console.log(selectSize);
  qrcode.makeCode(selectSize);
});

largeBtn.addEventListener('click', () => {
  let selectSize = largeBtn.value;
  console.log(selectSize);
  qrcode.makeCode(selectSize);
});

ExlargeBtn.addEventListener('click', () => {
  let selectSize = ExlargeBtn.value;
  console.log(selectSize);
  qrcode.makeCode(selectSize);
});
