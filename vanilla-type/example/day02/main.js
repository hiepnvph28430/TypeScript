
var arrStr = ["abc", "abcd"];
var arrMix = [123, "abc"];
var project = {
    id: 1,
    name: "Du an mau"
};
// const projectList: { id: number, name: string }[] = [
//     { id: 1, name: "Du an 1" },
//     { id: 2, name: "Du an mau" }
// ]
var projectList1 = [
    { id: 1, name: "Du an 1" },
    { id: 2, name: "Du an mau" }
];
var projects = {
    id: 1,
    name: "du an mau",
    image: "abc.jpg",
    link: "abc",
    status: true
};
var showProjects = function (props) {
    return props;
};
console.log(showProjects(projects));
/* Khai báo 1 mảng projectList
mảng này chứa 2 object, mỗi object có 2 thuộc tính là id và name
Định nghĩa kiểu dữ liệu cho mảng projectList vừa tạo */
var projectList = [
    {
        id: 1,
        name: "du an mau",
        image: "abc.jpg",
        link: "abc",
        status: true
    },
    {
        id: 2,
        name: "du an 1",
        image: "duan1.jpg",
        link: "abc",
        status: false
    }
];
var showProject = function (projects) {
    // tìm tới thẻ div có id app và hiển thị dữ liệu của mảng ra
    // sử dụng map và hiển thị
    document.querySelector("#app").innerHTML = "\n      ".concat(projects.map(function (project) { return ("\n        <tr>\n         <td>".concat(project.id, "</td>\n         <td>").concat(project.name, "</td>\n         <td>").concat(project.image, "</td>\n         <td>").concat(project.link, "</td>\n         <td>").concat(project.status, "</td>\n        </tr>\n      ")); }).join(''), "\n    ");
};
showProject(projectList);
