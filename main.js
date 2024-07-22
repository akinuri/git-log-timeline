let logInput = qs("#log-input-box");
let parseBtn = qs("#parse-btn");
let outputArea = qs("#output-area");

on(parseBtn, "click", () => {
    let parsed = CommitsParser.parse(logInput.value);
    let groupedByDate = groupBy(parsed, commit => commit.date.split(" ")[0]);
    outputArea.textContent = JSON.stringify(groupedByDate, null, "    ");
});
