let smallBtn = document.getElementById('small');
let medBtn = document.getElementById('medium');
let largeBtn = document.getElementById('large');
let ExlargeBtn = document.getElementById('exlarge');
let tvboxBtn = document.getElementById('tvbox');
let acboxBtn = document.getElementById('acbox');

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

tvboxBtn.addEventListener('click', () => {
  let selectSize = tvboxBtn.value;
  console.log(selectSize);
  qrcode.makeCode(selectSize);
});

acboxBtn.addEventListener('click', () => {
  let selectSize = acboxBtn.value;
  console.log(selectSize);
  qrcode.makeCode(selectSize);
});

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
