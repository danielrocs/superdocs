import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Indrodução",
    href: "/introduction",
    heading: "Começando",
    items: [
      {
        title: "Instalação",
        href: "/installation",
      },
      {
        title: "Configuração",
        href: "/setup",
      },
      {
        title: "Alterações",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navegação",
    href: "/navigation",
    heading: "Documentos",
  },
  // {
  //   title: "Structure",
  //   href: "/structure",
  //   items: [
  //     {
  //       title: "Deep",
  //       href: "/deep",
  //       items: [
  //         {
  //           title: "Deeper",
  //           href: "/deeper",
  //           items: [
  //             {
  //               title: "Even deeper",
  //               href: "/even-deeper",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    spacer: true,
  },
]
