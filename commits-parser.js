let CommitsParser = {

    parse: function (text) {

        let commitSeperator = "---"

        let commits = [];
        let commitsTexts = text.split(commitSeperator);

        for (const commitText of commitsTexts) {
            commits.push(CommitsParser.parseCommit(commitText));
        }

        return commits;
    },

    parseCommit: function (commitText) {
        commitText = commitText.trim();
        return commitText;
    },

};