This is a typescript project

Stpes to setup typscript environment on windows:

1. Install node-js 
2. This would install npm too
3. Verify this by running node or npm in command prompt
4. Install typescript from node by running "npm install typescript -g".
5. The option "-g" installs the typescript globally.
6. Install VSCode for development
7. tsc "ts file" to compile a typescript file
8. This would generate corresponding js file
9. Run this by "node js file"
10. Otherway to run is that run "tsc --init" in command prompt
11. It generates tsconfig.json
12. In scripts sections, Add "start" : tsc & node index.js"
13. Index.js will usually be the starting point of any project in typescript