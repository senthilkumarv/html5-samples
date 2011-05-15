function executeCommand(command, value) {
    var editor = document.getElementById('editor');
    editor.focus();
    
    if(value !== undefined && value !== null) {
        document.execCommand(command, false, value);
    } else {
        document.execCommand(command);
    }
}

function display() {
    var display = document.getElementById('display');
    display.innerHTML = 'The selected text is';

    try {
        if(document.queryCommandState("bold")) {
            display.innerHTML = display.innerHTML + ' ' + 'Bold ';
        }

        if(document.queryCommandState("italic")) {
            display.innerHTML = display.innerHTML + 'Italics ';
        }

        if(document.queryCommandState("underline")) {
            display.innerHTML = display.innerHTML + 'Underlined ';
        }

        if(document.queryCommandValue("foreColor")) {
            display.innerHTML = display.innerHTML + ' of color ' + rgbConvert(document.queryCommandValue("foreColor"));
        }
    } catch(e) {
        alert(e);
    }
}

function rgbConvert(str) {
    str = str.replace(/rgb\(|\)/g, "").split(",");
    str[0] = parseInt(str[0], 10).toString(16).toLowerCase();
    str[1] = parseInt(str[1], 10).toString(16).toLowerCase();
    str[2] = parseInt(str[2], 10).toString(16).toLowerCase();
    str[0] = (str[0].length == 1) ? '0' + str[0] : str[0];
    str[1] = (str[1].length == 1) ? '0' + str[1] : str[1];
    str[2] = (str[2].length == 1) ? '0' + str[2] : str[2];
    
    return ('#' + str.join(""));
}
