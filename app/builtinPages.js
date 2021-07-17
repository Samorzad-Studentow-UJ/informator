const pages = [
  {
    path: '/start',
    icon: 'mdi-home',
    title: 'Start'
  }
]

export default function builtInPages(locales) {
  const out = []
  pages.forEach(item => {
    locales.forEach(locale => {
      out.push({
        path: `/${locale.code}${item.path}`,
        title: item.title,
        icon: item.icon
      })
    })
  })
  return out
}
