export default str => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;

    return textArea.value;
};
