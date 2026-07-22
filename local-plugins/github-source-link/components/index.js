import { h } from "preact"

const defaultOptions = {
  repo: "Chompy78/PACT_Players",
  branch: "main",
}

export function GithubSourceLink(userOpts) {
  const opts = { ...defaultOptions, ...(userOpts ?? {}) }

  function GithubSourceLink({ fileData }) {
    const relativePath = fileData.relativePath
    if (!relativePath) return null

    const encodedPath = relativePath.split("/").map(encodeURIComponent).join("/")
    const href = `https://github.com/${opts.repo}/blob/${opts.branch}/content/${encodedPath}`

    return h(
      "p",
      { class: "github-source-link" },
      h("a", { href, target: "_blank", rel: "noopener noreferrer" }, "View source on GitHub"),
    )
  }

  GithubSourceLink.displayName = "GithubSourceLink"
  return GithubSourceLink
}
