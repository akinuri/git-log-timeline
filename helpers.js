function groupBy(array, prop) {
    let grouped = {};
    for (const item of array) {
        let key;
        if (typeof prop == "function") {
            key = prop(item);
        }
        if (key) {
            if (!(key in grouped)) {
                grouped[key] = [];
            }
            grouped[key].push(item);
        }
    }
    return grouped;
}