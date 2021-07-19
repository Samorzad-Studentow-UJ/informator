const pages = [
  {
    path: '/start',
    icon: 'home',
    title: 'Start',
    order: -9999999,
  }
]

export default function builtInPages(locales) {
  const out = []
  pages.forEach(item => {
    locales.forEach(locale => {
      out.push({
        path: `/${locale.code}${item.path}`,
        title: item.title,
        icon: item.icon,
        order: item.order
      })
    })
  })
  return out
}
