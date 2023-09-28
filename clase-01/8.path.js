const path = require('node:path')

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.text')
console.log(filePath)

const base = path.basename(
  'C:Users/Renzo/Desktop/Cursos/Midudev/Node/clase-01/cjs/index.js'
)
console.log(base)

const filename = path.basename(
  'C:Users/Renzo/Desktop/Cursos/Midudev/Node/clase-01/cjs/index.js',
  '.js'
)
console.log(filename)

const extension = path.extname('imagen.png')
console.log(extension)
