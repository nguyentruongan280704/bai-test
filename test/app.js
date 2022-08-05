// Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
// in ra kết quả. (1đ)
// ● Đầu vào: str
// ● Đầu ra: đảo ngược chuỗi và in ra kết quả
// ● Ví dụ:
// ○ Cho: str = &quot;program&quot;; in ra: &quot;margorp&quot;
// ○ Cho: str = &quot;data&quot;; in ra: &quot;atad&quot;
// ● Lưu ý: không sử dụng hàm reverse()

// let a = prompt("Nhập Hello").split("");
// let b = [];
// for ( let  i = 0; i<a.length; i++){
//     b.unshift(a[i]);
// }console.log(`${b}`);

// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
// chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
// (1đ)
// ● Đầu vào: str
// ● Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// ● Ví dụ
// ○ Cho &quot;this is A Test&quot;; In ra &quot;This Is A Test&quot;
// ○ Cho &quot;hello rikkei academy&quot;; In ra &quot;Hello Rikkei Academy”

// let str = prompt("Nhạp vao day").toLowerCase().split(" ")
// let newStrArr = [];
// for (let i = 0; i <= str.length - 1; i++){
//     a = str[i].split("")
//     a[0] = a[0].toUpperCase();
//     a = a.join("");
//     newStrArr.push(a);
// }
// console.log(newStrArr.join(" "));


// Bài 3 : Viết một chương trình xóa các phần tử trùng của một
// mảng và in ra kết quả. (1đ)
// ● Đầu vào: 1 mảng
// ● Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// ● Ví dụ
// ○ Cho
// Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”fi
// ve”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// ○ Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]
  
let a = [1,2,3,4,5,3,2];
let b = a.reduce
console.log(b)


// Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong
// mảng theo thứ tự tăng dần. (1đ)
// ● Đầu vào: 1 mảng
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// ● Ví dụ
// ○ Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
// ● Lưu ý: Không dùng hàm sort()

// let arr = [1, 8, 55, 99, 77, 66];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let tg = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tg;
//         }
//     }
// }
// console.log(arr);

// Bài 5 : Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên
//     nhân viên). Xây dựng chương trình quản lý nhân viên với các
//     chức năng (Read, Create, Update, Delete).

// let a = ["truong phong", "nhan vien", "quan ly"];
// console.log(a);

// while (true) {
//     let b = prompt("Nhập vào C/R/U/D/")
//     if (b === "C") {
//         let newTodo = prompt("Nhập nội dung mới muốn cho vào list")
//         a.push(newTodo);
//         for (let i = 0; i <= a.length - 1; i = i + 1) {
//             console.log(i + 1, a[i]);
//         }

//     } else if (b === "R") {
//         for (let i = 0; i <= a.length - 1; i = i + 1) {
//             console.log(i + 1, a[i]);
//         }

//     } else if (b === "U") {
//         let c = prompt("Muốn update công việc nào");
//         let d = prompt("Vị trí bạn muốn thay thế")
//         a[d] = `${c}`
//         for (let i = 0; i <= a.length - 1; i = i + 1) {
//             console.log(i + 1, a[i]);
//         }
//     } else if (b === "D") {
//         let e = Number(prompt("Vị trí todo muốn xóa:"));
//         a.splice(e, 1);
//         for (let i = 0; i <= a.length - 1; i = i + 1) {
//             console.log(i + 1, a[i]);
//         }
//     }
// }