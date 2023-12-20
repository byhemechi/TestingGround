FROM nginx:alpine
COPY ["index.html", "load_readme.js", "README.md", "/usr/share/nginx/html"]
