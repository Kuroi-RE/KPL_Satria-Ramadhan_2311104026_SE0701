let globalvariable = "satria ramadhan";

function getmyidentity() {
  let localvariable = "2311104026";
  console.log(
    `Nama saya ${globalvariable} dan nim saya adalah ${localvariable}`
  );
}

console.log(globalvariable);

// local variabel cuma bisa di akses sama function yang punya variabel tersebut
console.log(localvariable);

getmyidentity();
