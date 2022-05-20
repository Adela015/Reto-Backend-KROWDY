1. Para correr el programa en la terminal = yarn app inputvideo.webm outputvideo.mp4
2. Correr el Docker = docker-compose up -d
3. Generar outputs = ffmpeg -f concat -safe 0 -i primerProceso.txt -c copy output.mp4