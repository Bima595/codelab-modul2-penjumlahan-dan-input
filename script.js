function hitung() {
  const inputt1 = parseInt(document.getElementById("input1").value);
  const inputt2 = parseInt(document.getElementById("input2").value);

  var hasil = inputt1 + inputt2;
  alert("Hasil Nya Adalah = " + hasil);

  console.log("Hasilnya Adalah : " + hasil);
}



function Check() {
  const name = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("alamat").value;

  if (name === "" || email === "" || address === "") {
    alert("Wajib Mengisi");
  } else {
    alert("Masuk Bro!!!");
  }
}
