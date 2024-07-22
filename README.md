# git log timeline

Feed the output of the following command to the UI.

```
git log --pretty=format:"%H%n%an <%ae>%n%ad%n%s%n---" --date=iso > commits.txt
```

![screenshot of the UI](ss.png)

