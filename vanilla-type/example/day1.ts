function sum(a: number, b: number): any {
    let result = a + b;
    console.log(result);
    return result;
}
sum(4, 6)

// function sum(lab: number, quiz: number, assignment: number, finalExam: number): any {
//     let result = lab + quiz + assignment + finalExam;
//     console.log(result);
//     // return result
//     if (result < 20) {
//         console.log("Bạn đã trượt môn")
//     } else {
//         console.log("Bạn đã qua môn")
//     }
// }
// sum(1, 2, 3, 60)

{
    interface Teacher {
        id: number,
        email: string,
        readonly username: string,
        phone: string,
        contact?: string
    }
    interface Manager extends Teacher {
        role: string,
        gender: string
    }
    const sontv: Teacher = {
        id: 1,
        email: "sontv@gmail.com",
        username: "Tan Van Son",
        phone: "09999999999",

    }
    const thienth: Manager = {
        id: 2,
        email: "thienth@gmail.com",
        username: "ThienTH",
        phone: "0993949",
        contact: "Ha Noi",
        role: "Giang vien",
        gender: "Nam"
    }
    console.log(sontv)
    console.log(thienth)
    // thienth.username = "sontv";
    // console.log(thienth)
    thienth.phone = "0987654321"
    console.log(thienth)
}
//
/* ? : có cũng được không có cũng được
   extends: kế thừa thuộc tính
   readonly: chỉ đọc, không thể thay thế
*/
