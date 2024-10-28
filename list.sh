#!/bin/bash

# Directorio donde se encuentran las imágenes
DIRECTORIO="./images" # Cambia esta ruta a la de tu carpeta

# Archivo de salida
SALIDA="imagenes.json"

# Inicia el archivo JSON
echo "[" > "$SALIDA"

# Encuentra imágenes y formatea los nombres
primero=true
for imagen in "$DIRECTORIO"/*.{jpg,jpeg,png,gif}; do
    # Verifica si el archivo existe para evitar errores si no hay coincidencias
    if [[ -f "$imagen" ]]; then
        # Si no es el primer elemento, añade una coma
        if [ "$primero" = false ]; then
            echo "," >> "$SALIDA"
        fi
        # Añade el nombre de la imagen al JSON
        echo "\"$(basename "$imagen")\"" >> "$SALIDA"
        primero=false
    fi
done

# Cierra el arreglo JSON
echo "]" >> "$SALIDA"

echo "Nombres de imágenes guardados en $SALIDA"
