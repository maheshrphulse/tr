import { create } from "xmlbuilder2";

export function transFormatter(value, flag) {
    if (value) {
        localStorage.setItem("userInputDataFromLS", value);
        const outputTextarea = document.getElementById("output-textarea");
        let isXml = String(value).trim().startsWith("<");
        switch (flag) {
            case "format":
                try {                    
                    outputTextarea.value = isXml ? formatXML(value) : JSON.stringify(JSON.parse(value), null, 2);
                } catch (error) {
                    outputTextarea.value = "Invalid XML/JSON";
                }
                break;
            case "convert":
                try {                    
                    outputTextarea.value = isXml ? XML2JSON(value) : JSON2XML(value);
                } catch (error) {
                    outputTextarea.value = "Invalid XML/JSON";
                }
                break;
            default:
                break;
        }
    }
};

export const copyContent = () => {
    navigator.clipboard.writeText(document.getElementById("output-textarea").value);
    displayToolTip();
};

const displayToolTip = () => {
    const tooltipEle = document.querySelector(".active");
    tooltipEle.classList.toggle("tool-tip");

    setTimeout(() => {
      tooltipEle.classList.toggle("tool-tip");
    }, 1000);
};


export const clearInput= () => {
    document.getElementById("input-textarea").value = "";
    document.getElementById("output-textarea").value = "";
    localStorage.removeItem("userInputDataFromLS");
};

function JSON2XML(json) {
    return formatXML(json);
}

function XML2JSON(xml) {
    return JSON.stringify(create(xml).toObject(), null, 2);
}

function formatXML(xml) {
    return create(xml).end({ prettyPrint: true });
}
