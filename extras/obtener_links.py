import os
import datetime


def modification_date(filename):
    t = os.path.getmtime(filename)
    return str(datetime.datetime.fromtimestamp(t)).split(' ')[0]

# Rutas iniciales.
directorio = os.path.expanduser("~/Dropbox/Public/releases/pilas-engine")
origen = 'app/routes/descargas_template.js'
destino = 'app/routes/descargas.js'

# Obtiene el ultimo numero de version.
listado = os.listdir(directorio)
listado = [l for l in listado if not l.startswith('.')]

from re import compile, split    
dre = compile(r'(\d+)')
listado.sort(key=lambda l: [int(s) if s.isdigit() else s.lower() for s in split(dre, l)])

version = listado[-1]

archivo_origen = open(origen, 'rt')
archivo_destino = open(destino, 'wt')

fecha = modification_date(directorio + '/' + version)

contenido = archivo_origen.read()
contenido = contenido.replace('FECHA', fecha)
contenido = contenido.replace('VERSION', version)

archivo_destino.write(contenido)
archivo_destino.close()
print "Actualizando los links de descarga desde: " + directorio + '/' + version
