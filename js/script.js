const main_content = document.getElementById("main-content");

for (let i = 0; i < 8; i++) {
    const h3 = create_element("h3", null, null, null, "card title " + i, null);
    const p = create_element("p", null, null, null, "card content " + i, null);

    const card_content = create_element("div", null, ["card-content"], null, null, [h3, p]);
    const card_img = create_element("div", null, ["card-img"], null, null, null);

    const a = create_element("a", null, null, "#", null, [card_img, card_content]);

    const card = create_element("div", null, ["card"], null, null, [a]);

    main_content.appendChild(card);
}

console.log("Projects list", projects);

function create_element(tagName, id, classes, href, content, childs) {
    let element = document.createElement(tagName);
    if (id) {
        element.id = id;
    }
    if (href) {
        element.href = href;
    }
    if (classes) {
        classes.forEach((cl) => {
            element.classList.add(cl);
        });
    }
    if (childs) {
        childs.forEach((child) => {
            element.appendChild(child);
        });
    }
    if (content) {
        element.innerText = content;
    }
    return element;
}

