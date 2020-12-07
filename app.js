function changeCSS(cssFile, cssLinkIndex) {
    const oldLink = document.getElementsByTagName("link").item(cssLinkIndex);

    const newLink = document.createElement("link");
    newLink.setAttribute("rel", "stylesheet");
    newLink.setAttribute("type", "text/css");
    newLink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink);
}

var sectionsData = [
    {
        dom_id: 'sec1',
        dom_element: undefined,
        feature_flags: [true, true, true],
        content_flags: [true, true, true]
    },
    {
        dom_id: 'sec2',
        dom_element: undefined,
        feature_flags: [true, false, false],
        content_flags: [false, false, true]
    },
    {
        dom_id: 'sec3',
        dom_element: undefined,
        feature_flags: [false, true, false],
        content_flags: [false, false, false]
    },
    {
        dom_id: 'sec4',
        dom_element: undefined,
        feature_flags: [true, false, false],
        content_flags: [false, true, true]
    },
    {
        dom_id: 'sec5',
        dom_element: undefined,
        feature_flags: [false, false, true],
        content_flags: [false, false, false]
    },
    {
        dom_id: 'sec6',
        dom_element: undefined,
        feature_flags: [false, true, false],
        content_flags: [false, true, false]
    },
    {
        dom_id: 'sec7',
        dom_element: undefined,
        feature_flags: [false, true, false],
        content_flags: [true, false, false]
    },
    {
        dom_id: 'footer',
        dom_element: undefined,
        feature_flags: [false, false, true],
        content_flags: [true, false, true]
    }
];

function load_sections_dom() {
    for (var i = 0; i < sectionsData.length; i++) {
        sectionsData[i].dom_element = document.getElementById(sectionsData[i].dom_id);
    }
}

window.onload = function () {
    setCheckboxVisibility('hidden');
    load_sections_dom();
    handle_checkbox_change();
    get_all_sections();
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
    const checkboxes = [];
    for (let i = 0; i < labels.length; i++) {
        checkboxes.push(labels[i].children[0]);
    }
    return checkboxes;
}

function handle_checkbox_change() {
    const checkboxGroup1 = get_checkbox_group(1);
    const checkboxGroup2 = get_checkbox_group(2);
    const checkboxGroup3 = get_checkbox_group(3);

    const sectionFlags = checkboxes_to_flags(checkboxGroup1);
    const featureFlags = checkboxes_to_flags(checkboxGroup2);
    const contentFlags = checkboxes_to_flags(checkboxGroup3);

    const anySection = sectionFlags.some(e => e === true);
    const anyFeature = featureFlags.some(e => e === true);
    const anyContent = contentFlags.some(e => e === true);

    if (!anySection) {
        sectionFlags.forEach((f, i) => sectionFlags[i] = true);
    }
    if (!anyFeature) {
        featureFlags.forEach((f, i) => featureFlags[i] = true);
    }
    if (!anyContent) {
        contentFlags.forEach((f, i) => contentFlags[i] = true);
    }

    let selectedSectionsFeatures = [false, false, false];
    let selectedSectionsContents = [false, false, false];

    sectionsData.forEach((section, index) => {
        if (index === 0) return;
        selectedSectionsFeatures[0] |= sectionFlags[index] ? section.feature_flags[0] : false;
        selectedSectionsFeatures[1] |= sectionFlags[index] ? section.feature_flags[1] : false;
        selectedSectionsFeatures[2] |= sectionFlags[index] ? section.feature_flags[2] : false;

        selectedSectionsContents[0] |= sectionFlags[index] ? section.content_flags[0] : false;
        selectedSectionsContents[1] |= sectionFlags[index] ? section.content_flags[1] : false;
        selectedSectionsContents[2] |= sectionFlags[index] ? section.content_flags[2] : false;
    });

    selectedSectionsFeatures = selectedSectionsFeatures.map(f => !f);
    selectedSectionsContents = selectedSectionsContents.map(f => !f);

    checkboxGroup1.forEach((chb, index) => {
        if ((sectionsData[index].feature_flags[0] === selectedSectionsFeatures[0] && selectedSectionsFeatures[0]) ||
            (sectionsData[index].feature_flags[1] === selectedSectionsFeatures[1] && selectedSectionsFeatures[1]) ||
            (sectionsData[index].feature_flags[2] === selectedSectionsFeatures[2] && selectedSectionsFeatures[2])) {
            chb.disabled = false;
        } else {
            chb.disabled = true;
        }
    });

    checkboxGroup2.forEach((chb, index) => {
        if (selectedSectionsFeatures[index]) {
            chb.disabled = false;
        } else {
            chb.disabled = true;
        }
    });

    checkboxGroup3.forEach((chb, index) => {
        if (selectedSectionsFeatures[index]) {
            chb.disabled = false;
        } else {
            chb.disabled = true;
        }
    });

    sectionsData.forEach((section, index) => {
        section.is_active = false;

        if ((section.feature_flags[0] && featureFlags[0]) ||
            (section.feature_flags[1] && featureFlags[1]) ||
            (section.feature_flags[2] && featureFlags[2])
        ) {
            section.is_active = true;
        }

        if ((section.content_flags[0] && contentFlags[0]) ||
            (section.content_flags[1] && contentFlags[1]) ||
            (section.content_flags[2] && contentFlags[2])) {
            section.is_active = true;
        }

        if (anySection && sectionFlags[index]) {
            section.is_active = true;
        }

        if (index === 0) {
            section.is_active = true;
        }
    });

    sectionsData.forEach((section, index) => {
        if (section.is_active) {
            section.dom_element.style.display = '';
        } else {
            section.dom_element.style.display = 'none';
        }
    });

    // sectionsData.forEach((section, i) => {
    //     section.dom_element.style.display = sectionFlags[i] ? '' : 'none';
    // });
}

function get_checkbox_group(number) {
    const checkboxes = extract_checkboxes(document.getElementById('checkbox-group-' + number).children);
    return checkboxes;
}

function checkboxes_to_flags(checkboxes) {
    const flags = [];
    for (let i = 0; i < checkboxes.length; i++) {
        flags.push(checkboxes[i].checked);
    }
    return flags;
}

function get_all_sections() {
    return sectionsData.map(section => section.dom_element);
}