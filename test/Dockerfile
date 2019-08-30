FROM node
COPY test.js /

HEALTHCHECK --interval=20s --timeout=2s --retries=1 CMD curl -sS 127.0.0.1:80 || exit 1

EXPOSE 80 3000
CMD [ "node", "/test.js" ]
