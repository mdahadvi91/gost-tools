
export async function extractPdfInfo(file: File) {
  return { name: file.name, size: file.size, pages: 1 };
}
