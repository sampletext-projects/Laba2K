function changeCSS(cssFile, cssLinkIndex) {
    const oldLink = document.getElementsByTagName("link").item(cssLinkIndex);

    const newLink = document.createElement("link");
    newLink.setAttribute("rel", "stylesheet");
    newLink.setAttribute("type", "text/css");
    newLink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink);
}

var withNewDesign = [1, 3];
var withNewFuture = [2, 5, 6];
var withNoHeader = [4, 7];

window.onload = function () {
    setCheckboxVisibility('hidden');
    handle_checkbox_change();
};

function setCheckboxVisibility(visibility) {
    const groups = document.getElementsByClassName("checkbox-group");
    for (let i = 0; i < groups.length; i++) {
        groups[i].style.visibility = visibility;
    }
}

function show_checkboxes_click() {
    setCheckboxVisibility('visible');
};

function hide_checkboxes_click() {
    setCheckboxVisibility('hidden');
}

function extract_checkboxes(labels) {
    let checkboxes = [];
    for (let i = 0; i < labels.length; i++) {
        checkboxes.push(labels[i].children[0]);
    }
    return checkboxes;
}

function disable_all() {
    let checkboxes = get_checkbox_group(1);
    for (let i = 1; i < checkboxes.length; i++) {
        checkboxes[i].disabled = true;
    }
}

function enable_new_design() {
    let checkboxes = get_checkbox_group(1);
    for (let i = 1; i < checkboxes.length; i++) {
        if (withNewDesign.includes(i)) {
            checkboxes[i].disabled = false;
        }
    }
}

function enable_new_futures() {
    let checkboxes = get_checkbox_group(1);
    for (let i = 1; i < checkboxes.length; i++) {
        if (withNewFuture.includes(i)) {
            checkboxes[i].disabled = false;
        }
    }
}

function enable_no_header() {
    let checkboxes = get_checkbox_group(1);
    for (let i = 1; i < checkboxes.length; i++) {
        if (withNoHeader.includes(i)) {
            checkboxes[i].disabled = false;
        }
    }
}

function uncheck_inactive() {
    let checkboxes = get_checkbox_group(1);
    for (let i = 1; i < checkboxes.length; i++) {
        if (checkboxes[i].disabled) {
            checkboxes[i].checked = false;
        }
    }
}

function handle_checkbox_change() {
    var featureFlags = checkboxes_to_flags(get_checkbox_group(2));

    let useNewDesign = featureFlags[0];
    let useNewFutures = featureFlags[1];
    let useNoHeader = featureFlags[2];

    let checkboxes = get_checkbox_group(1);

    disable_all();
    if (useNewDesign) {
        enable_new_design();
    }
    if (useNewFutures) {
        enable_new_futures();
    }
    if (useNoHeader) {
        enable_no_header();
    }

    uncheck_inactive();

    var flags = checkboxes_to_flags(checkboxes);
    var sections = get_sections();
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = flags[i] ? '' : 'none';
    }
}

function get_checkbox_group(number) {
    let checkboxes = extract_checkboxes(document.getElementById('checkbox-group-' + number).children);
    return checkboxes;
}

function checkboxes_to_flags(checkboxes) {
    let flags = [];
    for (var i = 0; i < checkboxes.length; i++) {
        flags.push(checkboxes[i].checked);
    }
    return flags;
}

function get_sections() {
    let sections = ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6', 'sec7', 'footer'];
    for (var i = 0; i < sections.length; i++) {
        sections[i] = document.getElementById(sections[i]);
    }
    return sections;
}