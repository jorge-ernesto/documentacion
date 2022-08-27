/**
* Para levantar el proyecto, en el elemento "base" debe ir:
* En desarrollo con XAMPP: /dist-vuepress/4-documentacion/
* En producción con GitHub: /4-documentacion/
*/
 module.exports = {
  title: 'Documentación',
  description: 'Documentacion para las tecnologías estudiadas',
  base: '/4-documentacion/',
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
        '/git/',
        '/vuepress/',
        '/php/',    
        '/laravel/',
        '/autenticacion-en-laravel/',
        '/angular/',
        '/node/',
        '/mongodb/',
        '/portafolio/',
      ]
  }
 
}