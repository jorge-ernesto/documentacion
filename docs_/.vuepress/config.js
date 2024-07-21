/**
* Para levantar el proyecto, en el elemento "base" debe ir:
* En produccion con el servidor jorgeernestoweb.com: "/documentacion/" ----> Se debe crear la carpeta "documentacion" en "www"
* En produccion con GitHub                         : "/documentacion/"
*/
module.exports = {
  title: 'Documentación',
  description: 'Documentacion para las tecnologías estudiadas',
  base: '/documentacion/',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guía', link: '/' },
      // { text: 'Guia', link: '/docs/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
    ],
    sidebar:[
        '/',
        '/1-git/',
        '/2-php/',
        '/3-laravel/',
        '/4-python/',
        '/5-nodejs/',
        '/6-vuepress/',
        '/7-react/',
        '/8-angular/',
        '/9-mongodb/',
      ]
  }

}