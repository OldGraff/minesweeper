FROM registry.gitlab.com/mcko_prof/frontend/nginx:latest_master

COPY * /var/www/mcko/dist/
EXPOSE 84

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
