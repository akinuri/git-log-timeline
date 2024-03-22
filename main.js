let logInput = qs("#log-input-box");
let parseBtn = qs("#parse-btn");
let outputArea = qs("#output-area");

on(parseBtn, "click", () => {
    let parsed = CommitsParser.parse(logInput.value);
    outputArea.textContent = JSON.stringify(parsed, null, "    ");
});

