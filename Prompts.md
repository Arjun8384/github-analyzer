1. Explain the difference between fetch and axios

2. here are the instruction set, study it carefully and explain it to me in simpler format breaking down the project architecture:
Level 1 (Beginner Requirement)
The app must handle data and errors.
 
The UI: Create a nice Search Bar and a "Profile Card" area.
 
The Logic:
 
User types a username (e.g., "octocat") and hits Enter.
 
Your code calls https://api.github.com/users/octocat.
 
Display: Avatar Image, Name, Bio, Join Date, and Portfolio URL.
 
Error Handling (Crucial):
 
If the user does not exist (404 Error), show a nice "User Not Found" message. Do not let the app crash.
 
Loading State: While the data is fetching, show a "Loading..." text or a spinning icon.
 
Level 2 (Intermediate Requirement)
Everything in Level 1, PLUS:
 
Deep Dive: Fetch the user's repositories using the URL found in the first call (usually repos_url).
 
The List: Display the Top 5 Latest Repositories below the profile card.
 
Data Formatting: The API gives dates like 2023-01-25T12:00:00Z. You must format this to look human-readable (e.g., "25 Jan 2023").
 
Clickable: The repository names must be links that open the actual GitHub repo in a new tab.
 
Level 3 (Advanced Requirement)
Everything in Level 2, PLUS:
 
"Battle Mode": Create a new tab or toggle switch.
 
The Logic: Allow input of TWO usernames. Fetch data for both simultaneously.
 
The Verdict: Compare their Total Stars (you might need to loop through repos to count this) or Follower Counts.
 
UI: Highlight the "Winner" card in Green and the "Loser" in Red. 

3. i want to make it level 3 project. the changes i want are: the background will be a device-stored image and a toggle theme button in the navbar. i already have react.js code for the navbar with toggle theme but i want to change bg image as per light/dark theme. explain the logic for that and the changes

4. give me a suggestion, should i use custom css or bootstrap css for this project. i also need to write some css file from you

5. give me a clean file structure and compare mine for better ui design

6. explain how to change the date format that is fetched from API into the human readable format. also write its js file and tell me where to place the file.

7. what to do with this parse error and why is it here: [PARSE_ERROR] Error: Unexpected token ╭─[ src/utils/formatDate.js:55:5 ] │ 55 │ <div className="container"> │ ┬ │ ╰── ────╯

8. for this project, suggest a better one or two word name instead of "github analyzer"

9. "npm run build" giving error in vercel deployment. here is the error log, study it carefully and tell me the issue:
Running build in Washington, D.C., USA (East) – iad1
Build machine configuration: 2 cores, 8 GB
Cloning github.com/Arjun8384/github-analyzer (Branch: main, Commit: 394a755)
Previous build caches not available.
Cloning completed: 342.000ms
Running "vercel build"
Vercel CLI 50.38.2
Installing dependencies...
added 153 packages in 3s
37 packages are looking for funding
  run `npm fund` for details
Running "npm run build"
> mission3@0.0.0 build
> vite build

10. now as issues resolved, vs code termina cmd for pushing and commiting changes in files
11. 
