
export function updatePageMeta(title: string, description: string) {
  document.title = title;
  const metaDesc = document.querySelector("meta[name=\"description\"]");
  if (metaDesc) metaDesc.setAttribute("content", description);
}
