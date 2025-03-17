import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Documentação",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Home",
    href: "https://#",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/danielrocs/superdocs",
}
