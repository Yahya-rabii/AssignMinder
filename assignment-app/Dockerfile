FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY dist/assignment-app/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80