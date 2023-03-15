{
    var projectList = [
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
            id: 1,
            name: "Du an 3",
            image: "https://picsum.photos/200/300",
            link: "https://picsum.photos/200/300",
            member: 14
        },
    ];
    var listProject = function (projectList) {
        var app = document.querySelector("#app");
        if (app) {
            app.innerHTML = projectList.map(function (project) {
                return "\n            <tr>\n            <td>".concat(project.id, "</td>\n            <td>").concat(project.name, "</td>\n            <td><img src=\"").concat(project.image, "\" width=\"300px\" height=\"200px\"> </td>\n            <td>").concat(project.link, "</td>\n            <td>").concat(project.member, "</td>\n           </tr>\n            ");
            }).join("");
        }
    };
    listProject(projectList);
}
