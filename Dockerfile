FROM node:alpine
WORKDIR  /home/adolfo/Desktop/automax
COPY . .
EXPOSE 8888
CMD ["node", "app.js"]
