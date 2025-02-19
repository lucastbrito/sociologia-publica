import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      title: "Menu",
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["1_rascunhos", "2_insumos", "3_produtos", "4_indices"])
        return !omit.has(node.name.toLowerCase())
      },
      folderClickBehavior: "link",
      folderDefaultState: "open",
    }),
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      title: "Menu",
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["1_rascunhos", "2_insumos", "3_produtos", "4_indices"])
        return !omit.has(node.name.toLowerCase())
      },
      folderClickBehavior: "link",
      folderDefaultState: "open",
    }),
  ],
  right: [],
}
