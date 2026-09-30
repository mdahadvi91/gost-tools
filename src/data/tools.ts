
import { Tool } from "../types/tool";

export const TOOLS: Tool[] = [
  { id: "jpg-to-png", name: "JPG to PNG", slug: "jpg-to-png", category: "image", description: "Convert JPG images to PNG format instantly." },
  { id: "png-to-jpg", name: "PNG to JPG", slug: "png-to-jpg", category: "image", description: "Convert PNG images to JPG format." },
  { id: "image-compressor", name: "Image Compressor", slug: "image-compressor", category: "image", description: "Compress image file size while keeping visual quality." },
  { id: "pdf-merge", name: "Merge PDF", slug: "merge-pdf", category: "pdf", description: "Combine multiple PDF files into a single document." },
  { id: "qr-generator", name: "QR Code Generator", slug: "qr-generator", category: "qr", description: "Create customized QR codes for URLs, text, and Wi-Fi." },
  { id: "word-counter", name: "Word Counter", slug: "word-counter", category: "text", description: "Count words, characters, sentences, and reading time." },
];
