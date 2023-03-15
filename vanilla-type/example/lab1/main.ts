{
    interface IProject {
        id: number,
        name: string,
        image: string,
        link: string,
        member: number
    }
    const projectList: Array<IProject> = [
        {
            id: 1,
            name: "Du an 1",
            image: "https://picsum.photos/200/300",
            link: "https://picsum.photos/200/300",
            member: 12
        },
        {
            id: 2,
            name: "Du an 2",
            image: "https://picsum.photos/200/300",
            link: "https://picsum.photos/200/300",
            member: 13
        },
        {
            id: 3,
            name: "Du an 3",
            image: "https://picsum.photos/200/300",
            link: "https://picsum.photos/200/300",
            member: 14
        },
    ]

    const listProject = (projectList: Array<IProject>): void => {
        const app = document.querySelector("#app")
        if (app) {
            app.innerHTML = projectList.map((project) => {
                return `
            <tr>
            <td>${project.id}</td>
            <td>${project.name}</td>
            <td><img src="${project.image}" width="300px" height="200px"> </td>
            <td>${project.link}</td>
            <td>${project.member}</td>
           </tr>
            `
            }).join("")
        }
    }
    listProject(projectList)
}