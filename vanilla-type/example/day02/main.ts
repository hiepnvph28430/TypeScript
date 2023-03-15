
export
    const arrNumber: number[] = [1, 2, 3, 4]
const arrStr: string[] = ["abc", "abcd"]
const arrMix: Array<number | string> = [123, "abc"]

const project: { id: number, name: string, email?: string } = {
    id: 1,
    name: "Du an mau",

}

// const projectList: { id: number, name: string }[] = [
//     { id: 1, name: "Du an 1" },
//     { id: 2, name: "Du an mau" }
// ]

const projectList1: Array<{ id: number, name: string }> = [
    { id: 1, name: "Du an 1" },
    { id: 2, name: "Du an mau" }
]

// const showProject = (props: { id: number, name: string }): { id: number, name: string } => {
//     return props
// }
// showProject({ id: 1, name: "abc" })


/*
khai báo 1 object tên projects chứa các thuộc tính sau
id
name
image
link
status

tạo 1 hàm nhận vào 1 tham số (tham số nhận vào là 1 object)
hàm thực hiện chức năng hiển thị ra màn hình dữ liệu của object nhận vào
hàm sẽ return về dữ liệu là object nhận vào trong tham số
*/

interface IProject {
    id: number,
    name: string,
    image: string,
    link: string,
    status: boolean
}
const projects: IProject = {
    id: 1,
    name: "du an mau",
    image: "abc.jpg",
    link: "abc",
    status: true
}
const showProjects = (props: IProject): IProject => {
    return props
}
console.log(showProjects(projects))


/* Khai báo 1 mảng projectList 
mảng này chứa 2 object, mỗi object có 2 thuộc tính là id và name
Định nghĩa kiểu dữ liệu cho mảng projectList vừa tạo */


const projectList: Array<IProject> = [
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
]

const showProject = (projects: IProject[]): void => {
    // tìm tới thẻ div có id app và hiển thị dữ liệu của mảng ra
    // sử dụng map và hiển thị

    document.querySelector("#app").innerHTML = `
      ${projects.map(project => (`
        <tr>
         <td>${project.id}</td>
         <td>${project.name}</td>
         <td>${project.image}</td>
         <td>${project.link}</td>
         <td>${project.status}</td>
        </tr>
      `)).join('')}
    `
}
showProject(projectList)