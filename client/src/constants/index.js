export const languages = [
  'Español',
  'English (US)',
  'Français (France)',
  'Português (Brasil)',
  'Italiano',
  'Deutsch',
  'العربية',
  'हिन्दी',
  '中文(简体)',
  '日本語'
]

export const links = [
  {
    to: '/reg/',
    title: 'Regístrate en Facebook',
    children: 'Registrarte'
  },
  {
    to: '/login/',
    title: 'Iniciar sesión en Facebook',
    children: 'Iniciar sesión'
  },
  {
    to: 'https://messenger.com/',
    title: 'Descubre Messenger.',
    children: 'Messenger',
    target: '_blank'
  },
  {
    to: '/lite/',
    title: 'Facebook Lite para Android.',
    children: 'Facebook Lite'
  },
  {
    to: 'https://es-la.facebook.com/watch/',
    title: 'Explora nuestros videos de Watch.',
    children: 'Watch',
    target: '_blank'
  },
  {
    to: '/places/',
    title: 'Descubre lugares populares en Facebook.',
    children: 'Lugares'
  },
  {
    to: '/games/',
    title: 'Descubre juegos en Facebook.',
    children: 'Juegos'
  },
  {
    to: '/marketplace/',
    title: 'Compra y vende artículos en Facebook Marketplace.',
    children: 'Marketplace'
  },
  {
    to: 'https://pay.facebook.com/',
    title: 'Obtén más información sobre Facebook Pay.',
    children: 'Facebook Pay',
    target: '_blank'
  },
  {
    to: '/jobs/',
    title: 'Postúlate para empleos y contrata personas en Facebook.',
    children: 'Empleos'
  },
  {
    to: 'https://www.oculus.com/',
    title: 'Obtén más información sobre Oculus',
    children: 'Oculus',
    target: '_blank'
  },
  {
    to: 'https://portal.facebook.com/',
    title: 'Obtén más información sobre Facebook Portal.',
    children: 'Portal',
    target: '_blank'
  },
  {
    to: 'https://www.instagram.com/',
    title: 'Descubre Instagram',
    children: 'Instagram',
    target: '_blank'
  },
  {
    to: 'https://www.bulletin.com/',
    title: 'Descubre Bulletin Newsletter.',
    children: 'Bulletin',
    target: '_blank'
  },
  {
    to: '/local/lists/245019872666104/',
    title: 'Explora nuestro directorio de listas locales.',
    children: 'Local'
  },
  {
    to: '/fundraisers/',
    title: 'Haz una donación a causas que te importan.',
    children: 'Recaudaciones de fondos'
  },
  {
    to: '/biz/directory/',
    title: 'Explora nuestro directorio de servicios de Facebook.',
    children: 'Servicios'
  },
  {
    to: '/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D',
    title: 'Mira el Centro de información de votación',
    children: 'Centro de información de votación'
  },
  {
    to: '/groups/explore/',
    title: 'Explora nuestros grupos.',
    children: 'Grupos'
  },
  {
    to: 'https://about.facebook.com/',
    title: 'Lee nuestro blog, descubre el centro de recursos y encuentra ofertas de trabajo.',
    children: 'Información',
    target: '_blank'
  },
  {
    to: '/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;nav_source=unknown&amp;extra_1=auto',
    title: 'Anúnciate en Facebook.',
    children: 'Crear anuncio'
  },
  {
    to: '/pages/create/?ref_type=site_footer',
    title: 'Crea una página.',
    children: 'Crear página'
  },
  {
    to: 'https://developers.facebook.com/?ref=pf',
    title: 'Desarrolla en nuestra plataforma.',
    children: 'Desarrolladores',
    target: '_blank'
  },
  {
    to: '/careers/?ref=pf',
    title: 'Únete a nuestra extraordinaria empresa.',
    children: 'Empleo'
  },
  {
    to: '/privacy/explanation/',
    title: 'Infórmate acerca de tu privacidad y Facebook.',
    children: 'Privacidad'
  },
  {
    to: '/policies/cookies/',
    title: 'Infórmate acerca de las cookies y Facebook.',
    children: 'Cookies'
  },
  {
    to: 'https://es-la.facebook.com/help/568137493302217',
    title: 'Conoce las opciones de anuncios.',
    children: 'Opciones de anuncios',
    target: '_blank'
  },
  {
    to: '/policies?ref=pf',
    title: 'Consulta nuestras políticas y condiciones.',
    children: 'Condiciones'
  },
  {
    to: '/help/?ref=pf',
    title: 'Visita nuestro servicio de ayuda.',
    children: 'Ayuda'
  }
]

export const pronouns = [
  { value: '0', children: 'Selecciona tu pronombre', disabled: '1' },
  { value: '1', children: 'Femenino: "Salúdala por su cumpleaños"' },
  { value: '2', children: 'Masculino: "Salúdalo por su cumpleaños"' },
  { value: '3', children: 'Neutro: "Salúdalo(a) por su cumpleaños"' }
]

export const genders = [
  { value: 1, label: 'Mujer' },
  { value: 2, label: 'Hombre' },
  { value: 3, label: 'Personalizado' }
]

export const regexs = {
  user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{5,}$/, // Al menos 6 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  mobile: /^\d{7,14}$/ // 7 a 14 numeros.
}
