import type { Tool } from "@types/tool";

export const tools: Tool[] = [
  // ============================================================
  // 📷 IMAGE TOOLS (12)
  // ============================================================

  {
    id: "jpg-to-png",
    slug: "jpg-to-png",
    name: "JPG to PNG",
    category: "image",
    path: "/tools/jpg-to-png",
    icon: "/images/icons/image-tools.svg",
    description: "Convert JPG images to PNG format instantly in your browser.",
    longDescription:
      "Convert JPG or JPEG images to PNG format without uploading a single byte to any server. This tool uses modern browser APIs to decode your image and re-encode it as PNG right on your device. Ideal when you need lossless quality, transparency support, or a PNG file for printing, design work, or uploading to a platform that only accepts PNG. There's no file size limit other than your device's memory, no sign-up, and no watermark added. The conversion is fast, private, and completely free — forever.",
    keywords: ["jpg", "jpeg", "png", "convert", "image"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "100% private",
        description: "Files never leave your device. All processing happens locally.",
      },
      {
        title: "Instant conversion",
        description: "Typically converts in under a second, even on mobile.",
      },
      {
        title: "Batch-ready",
        description: "Convert multiple images at once without slowdown.",
      },
      {
        title: "Lossless output",
        description: "PNG gives you crisp quality with no compression artifacts.",
      },
      {
        title: "Works everywhere",
        description: "Any modern browser — Chrome, Safari, Firefox, Edge.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Upload your JPG",
        description: "Click the upload area or drag your JPG file into it.",
      },
      {
        step: 2,
        title: "Wait a moment",
        description: "The conversion runs automatically — usually under a second.",
      },
      {
        step: 3,
        title: "Preview the PNG",
        description: "Check the result is what you expected before saving.",
      },
      {
        step: 4,
        title: "Download",
        description: "Click 'Download' to save the PNG to your device.",
      },
      {
        step: 5,
        title: "Start over (optional)",
        description: "Reset and convert another file — no limit.",
      },
    ],
    faq: [
      {
        question: "Are JPG and JPEG the same?",
        answer:
          "Yes. JPG and JPEG are identical formats — the only difference is historical (older Windows versions shortened '.jpeg' to '.jpg'). This tool handles both.",
      },
      {
        question: "Will I lose quality?",
        answer:
          "No. JPG is already a lossy format, but converting it to PNG preserves the exact pixels. You'll never lose additional quality.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "The only limit is your browser's available memory. Most phones and computers handle files up to 100 MB without trouble.",
      },
      {
        question: "Is my file uploaded?",
        answer:
          "Never. All processing runs locally in your browser. Your file is not sent to any server.",
      },
      {
        question: "Can I convert multiple files at once?",
        answer:
          "Yes. Select multiple files and each one will be converted sequentially. Download them individually.",
      },
      {
        question: "Does it work on mobile?",
        answer:
          "Yes — the tool is fully touch-friendly and works on iOS Safari and Android Chrome.",
      },
    ],
    relatedTools: [
      "png-to-jpg",
      "jpg-to-webp",
      "image-compressor",
      "image-resizer",
      "image-to-pdf",
    ],
    seo: {
      title: "JPG to PNG Converter — Free Online Image Converter | AHADEX Tools",
      description:
        "Convert JPG images to PNG online for free. Fast browser-based conversion with no uploads, no sign-up, and no quality loss. Try it instantly.",
      ogImage: "/images/og/tools/jpg-to-png-og.jpg",
    },
  },

  {
    id: "png-to-jpg",
    slug: "png-to-jpg",
    name: "PNG to JPG",
    category: "image",
    path: "/tools/png-to-jpg",
    icon: "/images/icons/image-tools.svg",
    description: "Convert PNG images to JPG format with smaller file sizes.",
    longDescription:
      "Turn PNG screenshots, logos, or photos into smaller JPG files without leaving your browser. JPG is universally accepted and produces much smaller files than PNG for photographic content, making it ideal for email attachments, website uploads, and sharing. Transparency in PNG files is filled with a solid white background by default (customizable in settings). No uploads, no watermarks, no quality loss beyond what JPG normally applies.",
    keywords: ["png", "jpg", "jpeg", "convert", "compress"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "Smaller file size",
        description: "JPG files are typically 60–80% smaller than PNG for photos.",
      },
      {
        title: "Universal compatibility",
        description: "JPG opens on every device, platform, and app.",
      },
      {
        title: "Adjustable quality",
        description: "Choose the JPG quality level to balance size and detail.",
      },
      {
        title: "Transparency handling",
        description: "Transparent areas get a clean white background.",
      },
      {
        title: "No signup required",
        description: "Just upload, convert, and download. That's it.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Upload PNG file",
        description: "Drag or browse to select the PNG you want to convert.",
      },
      {
        step: 2,
        title: "Set quality (optional)",
        description: "Adjust quality in the settings tab if you need smaller files.",
      },
      {
        step: 3,
        title: "Automatic conversion",
        description: "The tool re-encodes your image as JPG in seconds.",
      },
      {
        step: 4,
        title: "Download",
        description: "Save the resulting JPG to your device with one click.",
      },
      {
        step: 5,
        title: "Convert more",
        description: "Reset and process additional files without limits.",
      },
    ],
    faq: [
      {
        question: "Will the quality drop?",
        answer:
          "JPG uses lossy compression, so some detail may be reduced. Choose quality 90–95 to keep it nearly identical to the original.",
      },
      {
        question: "What happens to transparency?",
        answer:
          "PNG transparency is not supported in JPG. Transparent areas are filled with white by default. Set a custom color in Settings if needed.",
      },
      {
        question: "Is there a size limit?",
        answer:
          "Only your browser's memory limits how large a file you can convert. Files up to 100 MB usually work fine.",
      },
      {
        question: "Can I batch convert?",
        answer:
          "Yes — select multiple PNG files and convert them all at once.",
      },
      {
        question: "Are my files private?",
        answer:
          "Absolutely. Everything runs in your browser. No file ever leaves your device.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. Once the page loads, the tool works even without an internet connection.",
      },
    ],
    relatedTools: [
      "jpg-to-png",
      "png-to-webp",
      "image-compressor",
      "image-resizer",
      "webp-to-jpg",
    ],
    seo: {
      title: "PNG to JPG Converter — Free Online Image Converter | AHADEX Tools",
      description:
        "Convert PNG to JPG online for free. Reduce file size without visible quality loss. Runs entirely in your browser — no uploads, no sign-up.",
      ogImage: "/images/og/tools/png-to-jpg-og.jpg",
    },
  },

  {
    id: "jpg-to-webp",
    slug: "jpg-to-webp",
    name: "JPG to WebP",
    category: "image",
    path: "/tools/jpg-to-webp",
    icon: "/images/icons/image-tools.svg",
    description: "Convert JPG images to the modern WebP format for smaller files.",
    longDescription:
      "WebP is Google's modern image format that produces files 25–35% smaller than JPG at the same visual quality. Convert your JPGs to WebP to speed up your website, reduce bandwidth, and improve SEO. This tool does the conversion entirely in your browser — instantly and privately. Perfect for blog authors, developers, and anyone optimizing images for the web.",
    keywords: ["jpg", "jpeg", "webp", "convert", "optimize"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "25–35% smaller",
        description: "WebP files are significantly smaller than equivalent JPGs.",
      },
      {
        title: "Modern format",
        description: "Supported by all modern browsers and platforms.",
      },
      {
        title: "Quality you control",
        description: "Adjust quality from 0.1 to 1.0 in the settings tab.",
      },
      {
        title: "Lossy or lossless",
        description: "Pick the encoding mode that best fits your use case.",
      },
      {
        title: "Fast & private",
        description: "No uploads, no servers — everything runs on your device.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Add your JPG",
        description: "Drop the file into the upload zone or click to browse.",
      },
      {
        step: 2,
        title: "Adjust quality",
        description: "Set the WebP quality slider (0.8 is a great default).",
      },
      {
        step: 3,
        title: "Convert",
        description: "Click Convert and wait for the browser to encode it.",
      },
      {
        step: 4,
        title: "Preview",
        description: "Compare the WebP output to ensure it looks right.",
      },
      {
        step: 5,
        title: "Download WebP",
        description: "Save the file and use it on your website.",
      },
    ],
    faq: [
      {
        question: "What is WebP?",
        answer:
          "WebP is a modern image format developed by Google that offers better compression than JPG and PNG while maintaining quality.",
      },
      {
        question: "Is WebP supported everywhere?",
        answer:
          "All modern browsers (Chrome, Firefox, Safari, Edge) support WebP. Older browsers may not.",
      },
      {
        question: "Should I use WebP for everything?",
        answer:
          "For websites, yes. For email or platforms that don't support WebP, use JPG or PNG instead.",
      },
      {
        question: "Will it look different?",
        answer:
          "At quality 0.8 or higher, most people cannot tell a JPG from its WebP equivalent.",
      },
      {
        question: "Can I do batch conversion?",
        answer: "Yes — select multiple files and convert them all at once.",
      },
      {
        question: "Is it free?",
        answer: "Completely free, forever. No hidden limits.",
      },
    ],
    relatedTools: [
      "webp-to-jpg",
      "png-to-webp",
      "jpg-to-png",
      "image-compressor",
      "image-resizer",
    ],
    seo: {
      title: "JPG to WebP Converter — Free Online | AHADEX Tools",
      description:
        "Convert JPG to WebP online for free. Smaller files, faster websites, better SEO. Runs entirely in your browser with no uploads.",
      ogImage: "/images/og/tools/jpg-to-webp-og.jpg",
    },
  },

  {
    id: "png-to-webp",
    slug: "png-to-webp",
    name: "PNG to WebP",
    category: "image",
    path: "/tools/png-to-webp",
    icon: "/images/icons/image-tools.svg",
    description: "Convert PNG images to WebP — smaller and faster, with transparency.",
    longDescription:
      "Convert PNG to WebP and keep transparency while cutting file size by up to 60%. WebP is perfect for logos, icons, and website assets where quality matters but bandwidth doesn't. This tool preserves alpha transparency (unlike JPG) and produces incredibly small files. Everything happens in your browser — no uploads, no accounts, no watermarks.",
    keywords: ["png", "webp", "convert", "transparency", "optimize"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Preserves transparency",
        description: "Full alpha channel support — unlike JPG conversions.",
      },
      {
        title: "Up to 60% smaller",
        description: "WebP typically saves 40–60% compared to PNG.",
      },
      {
        title: "Lossless or lossy",
        description: "Choose based on your priority: exact pixels or smallest size.",
      },
      {
        title: "Runs offline",
        description: "Works without internet once the page loads.",
      },
      {
        title: "Batch friendly",
        description: "Convert multiple PNGs at once with no slowdown.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Upload PNG",
        description: "Drag your PNG file into the upload area.",
      },
      {
        step: 2,
        title: "Pick mode",
        description: "Choose lossless (perfect) or lossy (smaller).",
      },
      {
        step: 3,
        title: "Convert",
        description: "The tool encodes your image as WebP instantly.",
      },
      {
        step: 4,
        title: "Verify transparency",
        description: "Preview the result to confirm the alpha channel is intact.",
      },
      {
        step: 5,
        title: "Download",
        description: "Save the WebP file to your device.",
      },
    ],
    faq: [
      {
        question: "Does WebP support transparency?",
        answer:
          "Yes — WebP supports full alpha transparency, just like PNG. This makes it a great PNG replacement for the web.",
      },
      {
        question: "Is WebP lossless?",
        answer:
          "WebP supports both lossless and lossy modes. Pick based on your needs.",
      },
      {
        question: "Should I use WebP instead of PNG?",
        answer:
          "For websites, yes — WebP is smaller. For maximum compatibility with old software, stick with PNG.",
      },
      {
        question: "Are my files uploaded?",
        answer: "Never. All conversion happens locally in your browser.",
      },
      {
        question: "Can I revert WebP back to PNG?",
        answer:
          "Yes — use our WebP to PNG tool for the reverse conversion.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "Only the memory of your device. Up to 100 MB files usually work.",
      },
    ],
    relatedTools: [
      "webp-to-png",
      "jpg-to-webp",
      "png-to-jpg",
      "image-compressor",
      "image-resizer",
    ],
    seo: {
      title: "PNG to WebP Converter — Free Online | AHADEX Tools",
      description:
        "Convert PNG to WebP online for free. Smaller files, transparency preserved, no uploads. Runs entirely in your browser.",
      ogImage: "/images/og/tools/png-to-webp-og.jpg",
    },
  },

  {
    id: "webp-to-jpg",
    slug: "webp-to-jpg",
    name: "WebP to JPG",
    category: "image",
    path: "/tools/webp-to-jpg",
    icon: "/images/icons/image-tools.svg",
    description: "Convert WebP images to JPG format for universal compatibility.",
    longDescription:
      "Need to open a WebP file in software that doesn't support it? Convert it to JPG right now — no installation required. This tool takes your WebP images and re-encodes them as universally-compatible JPG files in your browser. Perfect for opening WebP photos in older image editors, sending them via email, or uploading to platforms that don't accept WebP. Fast, private, and free.",
    keywords: ["webp", "jpg", "jpeg", "convert", "compatibility"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Universal compatibility",
        description: "JPG opens on every device and app, old or new.",
      },
      {
        title: "Instant conversion",
        description: "Typically less than a second per image.",
      },
      {
        title: "Batch mode",
        description: "Convert multiple WebP files in a single session.",
      },
      {
        title: "Quality control",
        description: "Fine-tune the output quality from 0.1 to 1.0.",
      },
      {
        title: "Zero upload",
        description: "Everything runs in your browser — nothing is sent anywhere.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Add WebP file",
        description: "Drag or browse to select your .webp file.",
      },
      {
        step: 2,
        title: "Wait for decode",
        description: "The browser decodes the WebP instantly.",
      },
      {
        step: 3,
        title: "Set quality",
        description: "Adjust quality if you need a smaller output.",
      },
      {
        step: 4,
        title: "Convert to JPG",
        description: "Click Convert — the file is re-encoded as JPG.",
      },
      {
        step: 5,
        title: "Download",
        description: "Save the JPG to your device with one click.",
      },
    ],
    faq: [
      {
        question: "Why convert WebP to JPG?",
        answer:
          "Older software, some printers, and certain platforms don't support WebP. JPG works everywhere.",
      },
      {
        question: "Will quality drop?",
        answer:
          "At quality 0.9+, the change is visually imperceptible for most images.",
      },
      {
        question: "Can I convert many files?",
        answer: "Yes, batch conversion is supported.",
      },
      {
        question: "Do I need to install anything?",
        answer:
          "No. Everything runs in your browser — no extensions, no apps.",
      },
      {
        question: "Is it free?",
        answer: "Yes, 100% free with no limits.",
      },
      {
        question: "Are my files safe?",
        answer: "Your files never leave your device. No uploads ever occur.",
      },
    ],
    relatedTools: [
      "webp-to-png",
      "jpg-to-webp",
      "png-to-jpg",
      "image-compressor",
      "image-resizer",
    ],
    seo: {
      title: "WebP to JPG Converter — Free Online | AHADEX Tools",
      description:
        "Convert WebP to JPG online for free. No uploads, no sign-up, universal compatibility. Runs entirely in your browser.",
      ogImage: "/images/og/tools/webp-to-jpg-og.jpg",
    },
  },

  {
    id: "webp-to-png",
    slug: "webp-to-png",
    name: "WebP to PNG",
    category: "image",
    path: "/tools/webp-to-png",
    icon: "/images/icons/image-tools.svg",
    description: "Convert WebP to PNG, preserving transparency and quality.",
    longDescription:
      "Convert WebP images to PNG format while keeping transparency intact. PNG is the go-to choice for design work, screenshots, and anything that needs to open reliably in image editors. This tool decodes your WebP entirely in the browser, re-encodes it as PNG, and lets you download the result — no upload, no account, no watermark.",
    keywords: ["webp", "png", "convert", "transparency", "lossless"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Preserves transparency",
        description: "PNG keeps every pixel, including alpha channel.",
      },
      {
        title: "Lossless output",
        description: "Exact pixels — perfect for editing or archival.",
      },
      {
        title: "In-browser",
        description: "No upload, no server, complete privacy.",
      },
      {
        title: "Batch ready",
        description: "Convert multiple WebP files at once.",
      },
      {
        title: "Free forever",
        description: "No limits, no accounts, no watermarks.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Upload WebP",
        description: "Drag your .webp file into the drop area.",
      },
      {
        step: 2,
        title: "Automatic decode",
        description: "The browser reads and decodes the WebP file.",
      },
      {
        step: 3,
        title: "Encode as PNG",
        description: "Your image is re-encoded as PNG automatically.",
      },
      {
        step: 4,
        title: "Preview",
        description: "Verify the result including transparency.",
      },
      {
        step: 5,
        title: "Download",
        description: "Save your PNG file to your device.",
      },
    ],
    faq: [
      {
        question: "Does PNG support transparency?",
        answer:
          "Yes, fully. PNG is famous for its lossless alpha channel.",
      },
      {
        question: "Is PNG bigger than WebP?",
        answer:
          "Usually yes — but PNG is more universally supported in editing software.",
      },
      {
        question: "Will I lose quality?",
        answer:
          "No. PNG is lossless, so quality is preserved exactly.",
      },
      {
        question: "Does it work offline?",
        answer: "Yes, once the page has loaded.",
      },
      {
        question: "Can I convert multiple files?",
        answer: "Yes, batch processing is supported.",
      },
      {
        question: "Is there a cost?",
        answer: "No. Free forever, no strings attached.",
      },
    ],
    relatedTools: [
      "webp-to-jpg",
      "jpg-to-png",
      "png-to-webp",
      "image-compressor",
      "image-to-pdf",
    ],
    seo: {
      title: "WebP to PNG Converter — Free Online | AHADEX Tools",
      description:
        "Convert WebP to PNG online for free. Transparency preserved, no uploads, runs entirely in your browser.",
      ogImage: "/images/og/tools/webp-to-png-og.jpg",
    },
  },

  {
    id: "image-compressor",
    slug: "image-compressor",
    name: "Image Compressor",
    category: "image",
    path: "/tools/image-compressor",
    icon: "/images/icons/image-tools.svg",
    description: "Compress JPG, PNG, and WebP images without visible quality loss.",
    longDescription:
      "Shrink your images dramatically — up to 90% smaller — with almost no visible quality loss. This compressor uses modern encoding algorithms right in your browser to make photos email-ready, website-optimized, or storage-friendly. Adjust the target quality or use the automatic preset. Works on JPG, PNG, and WebP. Zero uploads, zero watermarks, zero cost.",
    keywords: ["compress", "optimize", "reduce", "image", "size"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "Up to 90% smaller",
        description: "Dramatically reduce file size with minimal quality loss.",
      },
      {
        title: "Smart quality",
        description: "Automatic settings find the best size-quality balance.",
      },
      {
        title: "Multiple formats",
        description: "Supports JPG, PNG, and WebP in one tool.",
      },
      {
        title: "Batch compression",
        description: "Compress dozens of images in one go.",
      },
      {
        title: "No upload",
        description: "All processing local — your photos stay yours.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Add images",
        description: "Drag multiple files into the drop zone.",
      },
      {
        step: 2,
        title: "Choose quality",
        description: "Pick from Low, Medium, High, or custom.",
      },
      {
        step: 3,
        title: "Compress",
        description: "The tool processes each file in your browser.",
      },
      {
        step: 4,
        title: "Compare",
        description: "See before/after sizes for every image.",
      },
      {
        step: 5,
        title: "Download all",
        description: "Save compressed files individually or as a group.",
      },
    ],
    faq: [
      {
        question: "How much can it reduce?",
        answer:
          "Most images shrink 50–80%. Screenshots and PNGs often reduce by 90% or more.",
      },
      {
        question: "Will it look worse?",
        answer:
          "At quality 70–85, the difference is invisible to most eyes.",
      },
      {
        question: "Which format should I choose?",
        answer:
          "Keep the original format, or convert to WebP for maximum savings.",
      },
      {
        question: "Can I compress dozens of files?",
        answer:
          "Yes — batch mode handles as many as your device's memory allows.",
      },
      {
        question: "Is it really free?",
        answer: "Yes, forever. No limits or watermark.",
      },
      {
        question: "Are my images uploaded?",
        answer:
          "Never. Everything runs in your browser — your photos stay on your device.",
      },
    ],
    relatedTools: [
      "image-resizer",
      "jpg-to-webp",
      "png-to-webp",
      "image-cropper",
      "jpg-to-png",
    ],
    seo: {
      title: "Image Compressor — Compress Images Online Free | AHADEX Tools",
      description:
        "Compress JPG, PNG, and WebP images online for free. Save up to 90% file size with no visible quality loss. Runs entirely in your browser.",
      ogImage: "/images/og/tools/image-compressor-og.jpg",
    },
  },

  {
    id: "image-resizer",
    slug: "image-resizer",
    name: "Image Resizer",
    category: "image",
    path: "/tools/image-resizer",
    icon: "/images/icons/image-tools.svg",
    description: "Resize images to any dimension with aspect ratio control.",
    longDescription:
      "Resize images to exact pixel dimensions — perfect for social media, email signatures, website headers, or print. Keep the original aspect ratio or set a custom width and height. Choose from common presets (Instagram, Facebook, Twitter, YouTube thumbnails) or enter custom values. High-quality resampling keeps your images sharp. No upload, no signup, no watermark.",
    keywords: ["resize", "scale", "dimensions", "image", "width"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "Custom dimensions",
        description: "Enter exact pixel width and height.",
      },
      {
        title: "Preset sizes",
        description: "One-click presets for social media platforms.",
      },
      {
        title: "Aspect ratio lock",
        description: "Keep proportions perfect with a single toggle.",
      },
      {
        title: "Sharp output",
        description: "Uses high-quality interpolation for crisp results.",
      },
      {
        title: "Batch capable",
        description: "Resize many images to the same size at once.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Upload image",
        description: "Drag the image into the drop area.",
      },
      {
        step: 2,
        title: "Enter dimensions",
        description: "Type width/height or pick a preset.",
      },
      {
        step: 3,
        title: "Lock aspect (optional)",
        description: "Keep the ratio to avoid distortion.",
      },
      {
        step: 4,
        title: "Resize",
        description: "The tool resizes your image instantly.",
      },
      {
        step: 5,
        title: "Download",
        description: "Save the resized image to your device.",
      },
    ],
    faq: [
      {
        question: "Can I resize without distortion?",
        answer:
          "Yes — enable 'Lock aspect ratio' and your image keeps its proportions.",
      },
      {
        question: "What's the maximum size?",
        answer:
          "Up to the practical limits of your device's memory. 8000 px wide images usually work fine.",
      },
      {
        question: "Can I resize multiple images?",
        answer: "Yes — batch mode uses the same dimensions for all files.",
      },
      {
        question: "Will quality drop?",
        answer:
          "Downsizing preserves quality. Upsizing may soften the image slightly.",
      },
      {
        question: "Does it work on mobile?",
        answer: "Yes, fully responsive and touch-friendly.",
      },
      {
        question: "Is it private?",
        answer:
          "100%. Your images are processed in the browser and never uploaded.",
      },
    ],
    relatedTools: [
      "image-cropper",
      "image-compressor",
      "jpg-to-png",
      "image-to-pdf",
      "png-to-jpg",
    ],
    seo: {
      title: "Image Resizer — Resize Images Online Free | AHADEX Tools",
      description:
        "Resize images online for free. Custom dimensions, aspect ratio lock, social media presets. Runs entirely in your browser — no uploads.",
      ogImage: "/images/og/tools/image-resizer-og.jpg",
    },
  },

  {
    id: "image-cropper",
    slug: "image-cropper",
    name: "Image Cropper",
    category: "image",
    path: "/tools/image-cropper",
    icon: "/images/icons/image-tools.svg",
    description: "Crop images precisely with custom ratio and live preview.",
    longDescription:
      "Crop photos to any size or shape — square for Instagram, 16:9 for YouTube, circle for avatars, or completely custom. Drag the crop area, lock a ratio, and see a live preview of the final image. Perfect for making profile pictures, thumbnails, and banner images. Everything runs locally in your browser, so your photos never leave your device.",
    keywords: ["crop", "trim", "cut", "image", "ratio"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Free-form crop",
        description: "Drag any region and crop to exact pixels.",
      },
      {
        title: "Ratio lock",
        description: "Square, 16:9, 4:3, 3:2, or custom ratios.",
      },
      {
        title: "Live preview",
        description: "See exactly what the cropped result will look like.",
      },
      {
        title: "High-res output",
        description: "Crop preserves full resolution of the kept area.",
      },
      {
        title: "Private by default",
        description: "Your image never leaves your browser.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Upload image",
        description: "Drag your photo into the drop zone.",
      },
      {
        step: 2,
        title: "Select region",
        description: "Drag the crop rectangle over the area to keep.",
      },
      {
        step: 3,
        title: "Lock ratio (optional)",
        description: "Pick a ratio to keep the shape consistent.",
      },
      {
        step: 4,
        title: "Preview",
        description: "Check the cropped preview before exporting.",
      },
      {
        step: 5,
        title: "Download",
        description: "Save the cropped image with one click.",
      },
    ],
    faq: [
      {
        question: "Can I crop to a circle?",
        answer:
          "You can crop a square, then apply circle masking for avatars. Full circle masking is available in most design tools.",
      },
      {
        question: "Can I undo a crop?",
        answer:
          "Yes — click Reset to go back to the original image and start over.",
      },
      {
        question: "Does it reduce quality?",
        answer:
          "No. The kept pixels are preserved at full resolution.",
      },
      {
        question: "Can I crop multiple images?",
        answer:
          "Currently one image at a time, but you can repeat quickly.",
      },
      {
        question: "Is my photo uploaded?",
        answer: "Never. All cropping happens in your browser.",
      },
      {
        question: "Does it work on mobile?",
        answer: "Yes — pinch and drag to crop on touchscreens.",
      },
    ],
    relatedTools: [
      "image-resizer",
      "image-compressor",
      "jpg-to-png",
      "png-to-jpg",
      "image-to-pdf",
    ],
    seo: {
      title: "Image Cropper — Crop Images Online Free | AHADEX Tools",
      description:
        "Crop images online for free. Custom ratios, live preview, no uploads. Runs entirely in your browser — private and instant.",
      ogImage: "/images/og/tools/image-cropper-og.jpg",
    },
  },

  {
    id: "image-to-pdf",
    slug: "image-to-pdf",
    name: "Image to PDF",
    category: "image",
    path: "/tools/image-to-pdf",
    icon: "/images/icons/image-tools.svg",
    description: "Convert images to a multi-page PDF with custom page sizes.",
    longDescription:
      "Turn any image — JPG, PNG, WebP, or GIF — into a PDF document. Combine multiple images into one PDF, reorder pages, set page size and orientation, and adjust margins. Perfect for scanning receipts, compiling photo albums, or submitting documents. All conversion happens in your browser using PDF technology, so your images never touch a server.",
    keywords: ["image", "pdf", "convert", "jpg", "png"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "Multi-image PDF",
        description: "Combine as many images as you want into a single file.",
      },
      {
        title: "Page size control",
        description: "A4, Letter, or fit-to-image page sizes.",
      },
      {
        title: "Reordering",
        description: "Drag pages to change their order before export.",
      },
      {
        title: "Adjustable margins",
        description: "Set page margins from zero to 2 cm.",
      },
      {
        title: "Universal format",
        description: "PDFs open everywhere — phone, tablet, printer.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Add images",
        description: "Drop single or multiple image files.",
      },
      {
        step: 2,
        title: "Choose page size",
        description: "Select A4, Letter, or Auto (fit to image).",
      },
      {
        step: 3,
        title: "Reorder (optional)",
        description: "Drag thumbnails to reorder pages.",
      },
      {
        step: 4,
        title: "Generate PDF",
        description: "Click Convert — the PDF is built in your browser.",
      },
      {
        step: 5,
        title: "Download",
        description: "Save the PDF to your device.",
      },
    ],
    faq: [
      {
        question: "How many images can I combine?",
        answer:
          "As many as your device's memory allows — usually dozens without issue.",
      },
      {
        question: "Can I set the page size?",
        answer:
          "Yes — A4, Letter, Legal, or Auto (each image becomes a page in its own size).",
      },
      {
        question: "Are image quality settings available?",
        answer:
          "PDF embeds images at their original resolution. To reduce file size, compress images first.",
      },
      {
        question: "Is the PDF searchable?",
        answer:
          "No — images aren't OCR'd. The PDF contains images as pages.",
      },
      {
        question: "Does it work on mobile?",
        answer: "Yes, fully touch-friendly.",
      },
      {
        question: "Is my data private?",
        answer:
          "Always. Everything happens in your browser — no uploads.",
      },
    ],
    relatedTools: [
      "jpg-to-pdf",
      "png-to-pdf",
      "pdf-to-jpg",
      "merge-pdf",
      "image-compressor",
    ],
    seo: {
      title: "Image to PDF Converter — Free Online | AHADEX Tools",
      description:
        "Convert images to PDF online for free. Combine multiple images into one PDF, choose page size, reorder pages. No uploads, no sign-up.",
      ogImage: "/images/og/tools/image-to-pdf-og.jpg",
    },
  },

  {
    id: "image-metadata-viewer",
    slug: "image-metadata-viewer",
    name: "Image Metadata Viewer",
    category: "image",
    path: "/tools/image-metadata-viewer",
    icon: "/images/icons/image-tools.svg",
    description: "View EXIF, GPS, and camera metadata hidden in your photos.",
    longDescription:
      "Every photo from a camera or phone contains hidden information — camera model, lens, exposure settings, date taken, and sometimes GPS coordinates. This tool reads that metadata locally in your browser and shows it in a clean, readable layout. Use it to check what's embedded in a photo before sharing it online, verify location data, or recover shooting settings.",
    keywords: ["exif", "metadata", "gps", "photo", "camera"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Complete EXIF",
        description: "Camera, lens, ISO, aperture, shutter, and more.",
      },
      {
        title: "GPS coordinates",
        description: "See if your photo contains location data.",
      },
      {
        title: "Clean layout",
        description: "Metadata grouped by category for easy reading.",
      },
      {
        title: "Privacy-safe",
        description: "Your photo is read in-browser and never uploaded.",
      },
      {
        title: "Multiple formats",
        description: "Works with JPG, TIFF, PNG, and HEIC.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Upload image",
        description: "Drag a photo into the upload area.",
      },
      {
        step: 2,
        title: "Read automatically",
        description: "The metadata is parsed in your browser.",
      },
      {
        step: 3,
        title: "Browse fields",
        description: "Scroll through grouped sections: Camera, GPS, Date, etc.",
      },
      {
        step: 4,
        title: "Copy values",
        description: "Click any value to copy it to your clipboard.",
      },
      {
        step: 5,
        title: "Check another",
        description: "Reset and inspect another photo.",
      },
    ],
    faq: [
      {
        question: "What is EXIF?",
        answer:
          "EXIF (Exchangeable Image File Format) is metadata stored inside most photos, including camera settings, timestamps, and sometimes GPS.",
      },
      {
        question: "Can I remove metadata?",
        answer:
          "This tool only reads. For removal, re-save the image in a photo editor or use a metadata-stripping tool.",
      },
      {
        question: "Does it show GPS?",
        answer:
          "Yes, if the photo contains GPS data. Many platforms strip GPS when uploading.",
      },
      {
        question: "Is my photo uploaded?",
        answer:
          "Never. Everything is read locally in your browser.",
      },
      {
        question: "Does it work with RAW?",
        answer:
          "Currently supports JPG, PNG, TIFF, and HEIC. RAW support is planned.",
      },
      {
        question: "Is it free?",
        answer: "Yes — free with no limits.",
      },
    ],
    relatedTools: [
      "image-compressor",
      "jpg-to-png",
      "image-resizer",
      "png-to-jpg",
      "image-to-pdf",
    ],
    seo: {
      title: "Image Metadata Viewer — Read EXIF & GPS Online | AHADEX Tools",
      description:
        "View EXIF, GPS, and camera metadata in your photos. Runs locally in your browser — no uploads, no tracking, completely free.",
      ogImage: "/images/og/tools/image-metadata-viewer-og.jpg",
    },
  },

  {
    id: "background-remover",
    slug: "background-remover",
    name: "Background Remover",
    category: "image",
    path: "/tools/background-remover",
    icon: "/images/icons/image-tools.svg",
    description: "Remove image backgrounds automatically with AI — offline.",
    longDescription:
      "Remove the background from any photo automatically using on-device AI. Everything runs in your browser, so your photos are never uploaded. Get clean cutouts of people, products, and objects with transparent backgrounds — perfect for e-commerce listings, profile pictures, presentations, and design work. No account, no watermark, no credit card.",
    keywords: ["background", "remove", "transparent", "cutout", "ai"],
    popular: true,
    newTool: true,
    features: [
      {
        title: "On-device AI",
        description: "The model runs in your browser — no cloud, no uploads.",
      },
      {
        title: "Transparent PNG",
        description: "Output is a PNG with full alpha channel.",
      },
      {
        title: "Fast on modern devices",
        description: "A few seconds per image on typical laptops and phones.",
      },
      {
        title: "Batch ready",
        description: "Process multiple images one after another.",
      },
      {
        title: "No account required",
        description: "Just open, drop, done.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Upload image",
        description: "Drag a photo with a clear subject into the drop area.",
      },
      {
        step: 2,
        title: "Wait for model",
        description: "First load downloads the AI model (~10–30 MB).",
      },
      {
        step: 3,
        title: "Process",
        description: "Click Remove Background and let the AI work.",
      },
      {
        step: 4,
        title: "Preview",
        description: "Check the cutout over a checkerboard background.",
      },
      {
        step: 5,
        title: "Download PNG",
        description: "Save the transparent PNG to your device.",
      },
    ],
    faq: [
      {
        question: "How does it work offline?",
        answer:
          "A lightweight AI model is downloaded once and cached. After that, no internet is required.",
      },
      {
        question: "Is it as accurate as paid tools?",
        answer:
          "For people, products, and simple backgrounds, yes. Very complex hair edges may need manual touch-up.",
      },
      {
        question: "Can I use the output commercially?",
        answer:
          "Yes — the output is yours. The input image must also be yours or properly licensed.",
      },
      {
        question: "What formats are supported?",
        answer: "JPG, PNG, and WebP input; PNG output with transparency.",
      },
      {
        question: "Is there a file limit?",
        answer:
          "Up to ~4000×4000 px works well. Larger images take longer or may fail.",
      },
      {
        question: "Are my photos uploaded?",
        answer:
          "Never. The entire model runs in your browser — your photo stays on your device.",
      },
    ],
    relatedTools: [
      "image-compressor",
      "image-resizer",
      "jpg-to-png",
      "png-to-jpg",
      "image-cropper",
    ],
    seo: {
      title: "Background Remover — AI Cutout Online Free | AHADEX Tools",
      description:
        "Remove image backgrounds automatically with AI. Runs entirely in your browser — no uploads, no account, completely free.",
      ogImage: "/images/og/tools/background-remover-og.jpg",
    },
  },

// ============================================================
// 📄 PDF TOOLS (8)
// ============================================================

{
  id: "jpg-to-pdf",
  slug: "jpg-to-pdf",
  name: "JPG to PDF",
  category: "pdf",
  path: "/tools/jpg-to-pdf",
  icon: "/images/icons/pdf-tools.svg",
  description: "Convert JPG images into a clean PDF document in seconds.",
  longDescription:
    "Convert one or more JPG images into a single PDF document without uploading them anywhere. Perfect for submitting scanned documents, combining receipts, sharing photo albums, or turning screenshots into a report. You can set page size (A4, Letter, Legal, or auto-fit), page orientation, and margins. Each image becomes a page. Combine dozens of images in one PDF — all processed locally in your browser, no server involved, no watermark added.",
  keywords: ["jpg", "jpeg", "pdf", "convert", "document"],
  popular: true,
  newTool: false,
  features: [
    {
      title: "Combine many JPGs",
      description: "Turn dozens of images into one tidy PDF document.",
    },
    {
      title: "Custom page size",
      description: "A4, Letter, Legal, or auto-fit to the image.",
    },
    {
      title: "Portrait or landscape",
      description: "Choose per-document orientation.",
    },
    {
      title: "Adjustable margins",
      description: "From zero to 2 cm around every page.",
    },
    {
      title: "100% private",
      description: "No uploads — your photos stay on your device.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Add JPG files",
      description: "Drag one or more JPG images into the drop area.",
    },
    {
      step: 2,
      title: "Choose settings",
      description: "Pick page size, orientation, and margins.",
    },
    {
      step: 3,
      title: "Reorder (optional)",
      description: "Drag thumbnails to arrange the pages.",
    },
    {
      step: 4,
      title: "Generate PDF",
      description: "Click Convert and wait for the PDF to be built.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save the PDF to your device with one click.",
    },
  ],
  faq: [
    {
      question: "How many JPGs can I combine?",
      answer:
        "As many as your device's memory allows — usually dozens to hundreds of images work fine.",
    },
    {
      question: "Can I control the page size?",
      answer:
        "Yes. Choose A4, Letter, Legal, or Auto (each page fits its image).",
    },
    {
      question: "Will the quality drop?",
      answer:
        "No. The images are embedded at their original resolution.",
    },
    {
      question: "Can I add more files later?",
      answer:
        "Yes — just add more files before generating the PDF.",
    },
    {
      question: "Is the PDF password-protected?",
      answer:
        "Not by default. You can add password protection with a separate PDF tool.",
    },
    {
      question: "Is it really free?",
      answer:
        "Yes — completely free with no watermark and no limits.",
    },
  ],
  relatedTools: [
    "png-to-pdf",
    "image-to-pdf",
    "merge-pdf",
    "split-pdf",
    "compress-pdf",
  ],
  seo: {
    title: "JPG to PDF Converter — Combine Images into PDF | AHADEX Tools",
    description:
      "Convert JPG images to PDF online for free. Combine multiple photos into one PDF with custom page sizes. No uploads, no sign-up.",
    ogImage: "/images/og/tools/jpg-to-pdf-og.jpg",
  },
},

{
  id: "png-to-pdf",
  slug: "png-to-pdf",
  name: "PNG to PDF",
  category: "pdf",
  path: "/tools/png-to-pdf",
  icon: "/images/icons/pdf-tools.svg",
  description: "Convert PNG images into a PDF file with transparency handling.",
  longDescription:
    "Turn PNG images into a clean PDF document in seconds. PNGs often include transparency, which PDF handles differently — you can choose to fill transparent areas with white or a custom color. Ideal for turning screenshots, diagrams, and design exports into a shareable document. Works fully offline in your browser, with no uploads, no account, and no watermark.",
  keywords: ["png", "pdf", "convert", "image", "document"],
  popular: false,
  newTool: false,
  features: [
    {
      title: "Transparency control",
      description: "Fill transparent areas with white or a chosen color.",
    },
    {
      title: "Multi-page support",
      description: "Combine several PNGs into one document.",
    },
    {
      title: "Custom page sizes",
      description: "A4, Letter, Legal, or Auto fit.",
    },
    {
      title: "High-resolution embed",
      description: "PNG pixels preserved at full quality.",
    },
    {
      title: "No uploads",
      description: "Processing happens entirely in your browser.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Upload PNG files",
      description: "Drag one or more PNG images into the drop zone.",
    },
    {
      step: 2,
      title: "Set background",
      description: "Choose white, black, or custom for transparency.",
    },
    {
      step: 3,
      title: "Pick page settings",
      description: "Select page size and orientation.",
    },
    {
      step: 4,
      title: "Generate PDF",
      description: "Click Convert — your PDF builds in the browser.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save the PDF to your device.",
    },
  ],
  faq: [
    {
      question: "What happens to PNG transparency?",
      answer:
        "Choose a background color (white by default) — transparent areas are filled with it.",
    },
    {
      question: "Can I mix PNG and JPG files?",
      answer:
        "Yes. Use our Image to PDF tool to combine mixed formats.",
    },
    {
      question: "Is quality preserved?",
      answer: "Yes — pixels are embedded at their original resolution.",
    },
    {
      question: "Can I reorder pages?",
      answer: "Yes, drag thumbnails before converting.",
    },
    {
      question: "Works on mobile?",
      answer: "Yes, fully responsive.",
    },
    {
      question: "Are my files safe?",
      answer:
        "Yes. Everything stays on your device — no uploads ever.",
    },
  ],
  relatedTools: [
    "jpg-to-pdf",
    "image-to-pdf",
    "merge-pdf",
    "compress-pdf",
    "pdf-to-png",
  ],
  seo: {
    title: "PNG to PDF Converter — Free Online | AHADEX Tools",
    description:
      "Convert PNG images to PDF online for free. Handle transparency, choose page sizes, no uploads. Runs entirely in your browser.",
    ogImage: "/images/og/tools/png-to-pdf-og.jpg",
  },
},

{
  id: "merge-pdf",
  slug: "merge-pdf",
  name: "Merge PDF",
  category: "pdf",
  path: "/tools/merge-pdf",
  icon: "/images/icons/pdf-tools.svg",
  description: "Combine multiple PDF files into one document, in any order.",
  longDescription:
    "Join two or more PDF files into a single document in exactly the order you want. Reorder pages, merge reports, combine chapters, or assemble scanned documents. All work happens in your browser using modern PDF libraries — your files never leave your device. No size limits beyond your device's memory, no account, no watermark, and no cost.",
  keywords: ["merge", "combine", "join", "pdf", "document"],
  popular: true,
  newTool: false,
  features: [
    {
      title: "Unlimited files",
      description: "Merge as many PDFs as your device can handle.",
    },
    {
      title: "Drag to reorder",
      description: "Arrange file order visually before merging.",
    },
    {
      title: "Preserves quality",
      description: "Pages, fonts, and images stay identical.",
    },
    {
      title: "Fast processing",
      description: "Typically completes in a few seconds.",
    },
    {
      title: "Complete privacy",
      description: "Files are processed in-browser and never uploaded.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Add PDF files",
      description: "Drag two or more PDFs into the drop area.",
    },
    {
      step: 2,
      title: "Reorder",
      description: "Drag file thumbnails to set the final order.",
    },
    {
      step: 3,
      title: "Merge",
      description: "Click Merge — the tool combines all files.",
    },
    {
      step: 4,
      title: "Preview page count",
      description: "Check the total pages before downloading.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save the merged PDF to your device.",
    },
  ],
  faq: [
    {
      question: "Is there a file limit?",
      answer:
        "Only your device's memory. Dozens of typical PDFs merge smoothly.",
    },
    {
      question: "Can I merge encrypted PDFs?",
      answer:
        "Encrypted files must be unlocked first — most PDF readers can remove the password.",
    },
    {
      question: "Does it preserve bookmarks?",
      answer:
        "Basic bookmarks may not be preserved. Text and pages remain intact.",
    },
    {
      question: "Can I split a PDF instead?",
      answer: "Yes — use our Split PDF tool.",
    },
    {
      question: "Are my files uploaded?",
      answer: "Never. Everything runs locally in your browser.",
    },
    {
      question: "Is it free?",
      answer: "Yes, completely free with no sign-up.",
    },
  ],
  relatedTools: [
    "split-pdf",
    "compress-pdf",
    "pdf-page-extractor",
    "jpg-to-pdf",
    "png-to-pdf",
  ],
  seo: {
    title: "Merge PDF — Combine PDF Files Online Free | AHADEX Tools",
    description:
      "Merge multiple PDF files into one online for free. Drag to reorder, preserve quality, no uploads. Runs entirely in your browser.",
    ogImage: "/images/og/tools/merge-pdf-og.jpg",
  },
},

{
  id: "split-pdf",
  slug: "split-pdf",
  name: "Split PDF",
  category: "pdf",
  path: "/tools/split-pdf",
  icon: "/images/icons/pdf-tools.svg",
  description: "Split a PDF into separate files by page range or extract pages.",
  longDescription:
    "Break a PDF into smaller files — by page ranges, individual pages, or custom selections. Ideal for extracting a chapter, sharing only a few pages, or reducing a large PDF into manageable pieces. Choose specific pages or a range like 5–12. Everything runs in your browser using client-side PDF parsing, so your documents are never uploaded or stored.",
  keywords: ["split", "pdf", "pages", "extract", "separate"],
  popular: true,
  newTool: false,
  features: [
    {
      title: "Split by range",
      description: "Extract pages 5–12 into a new PDF.",
    },
    {
      title: "Individual pages",
      description: "Save each page as its own file if needed.",
    },
    {
      title: "Custom selection",
      description: "Comma-separated list of pages (e.g. 1,3,7).",
    },
    {
      title: "Preview thumbnails",
      description: "See page previews before splitting.",
    },
    {
      title: "No uploads",
      description: "Files stay on your device.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Upload PDF",
      description: "Drag the PDF you want to split into the drop zone.",
    },
    {
      step: 2,
      title: "Choose mode",
      description: "Range, individual pages, or custom list.",
    },
    {
      step: 3,
      title: "Enter pages",
      description: "Type the range or pages you want to keep.",
    },
    {
      step: 4,
      title: "Split",
      description: "The tool generates the new PDF(s) in your browser.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save the resulting files individually or as a ZIP.",
    },
  ],
  faq: [
    {
      question: "Can I split encrypted PDFs?",
      answer:
        "No — unlock the PDF first using a PDF reader's password feature.",
    },
    {
      question: "What happens to image quality?",
      answer:
        "Nothing changes — pages are copied exactly as-is.",
    },
    {
      question: "Can I extract just one page?",
      answer:
        "Yes — enter a single page number, e.g. 7, to extract just that page.",
    },
    {
      question: "Can I split into many single-page files?",
      answer:
        "Yes — use 'individual pages' mode to produce one file per page.",
    },
    {
      question: "Are my documents private?",
      answer:
        "Always. Nothing is uploaded — everything happens locally.",
    },
    {
      question: "Is it free?",
      answer: "Yes, no sign-up, no watermark, no cost.",
    },
  ],
  relatedTools: [
    "merge-pdf",
    "pdf-page-extractor",
    "compress-pdf",
    "pdf-to-jpg",
    "pdf-to-png",
  ],
  seo: {
    title: "Split PDF — Split or Extract PDF Pages Online Free | AHADEX Tools",
    description:
      "Split PDF files online for free. Extract page ranges or individual pages. Runs entirely in your browser — no uploads, no sign-up.",
    ogImage: "/images/og/tools/split-pdf-og.jpg",
  },
},

{
  id: "compress-pdf",
  slug: "compress-pdf",
  name: "Compress PDF",
  category: "pdf",
  path: "/tools/compress-pdf",
  icon: "/images/icons/pdf-tools.svg",
  description: "Reduce PDF file size while keeping document quality readable.",
  longDescription:
    "Shrink large PDF files so they're easy to email, upload, or share. This tool recompresses images and removes unused objects to reduce file size — often by 50–80%. Choose a compression level that balances size and quality. Perfect for scanned documents, presentations, and any PDF that's too big to attach. All processing happens in your browser — no upload, no account, no watermark.",
  keywords: ["compress", "pdf", "reduce", "size", "optimize"],
  popular: true,
  newTool: false,
  features: [
    {
      title: "Up to 80% smaller",
      description: "Dramatically reduce file size for easy sharing.",
    },
    {
      title: "Three levels",
      description: "Low, Medium, High — pick your trade-off.",
    },
    {
      title: "Keeps text sharp",
      description: "Text stays crisp; images get optimized.",
    },
    {
      title: "Batch capable",
      description: "Compress several PDFs in one session.",
    },
    {
      title: "Fully offline",
      description: "Your files never leave your device.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Upload PDF",
      description: "Drag a PDF file into the drop zone.",
    },
    {
      step: 2,
      title: "Choose level",
      description: "Select compression: Low, Medium, or High.",
    },
    {
      step: 3,
      title: "Compress",
      description: "Click Compress — the tool rebuilds the PDF.",
    },
    {
      step: 4,
      title: "Compare sizes",
      description: "See the before/after size difference.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save the smaller PDF to your device.",
    },
  ],
  faq: [
    {
      question: "Will the document look worse?",
      answer:
        "At Medium, most readers can't tell the difference. High saves more space with slight image softening.",
    },
    {
      question: "Can text become blurry?",
      answer: "No — text is preserved as vector and stays crisp.",
    },
    {
      question: "Does it work with scanned PDFs?",
      answer:
        "Yes — scanned PDFs are essentially images and compress well.",
    },
    {
      question: "Is there a file size limit?",
      answer:
        "Only your device's memory. Files up to ~100 MB usually work.",
    },
    {
      question: "Is my PDF uploaded?",
      answer: "Never. Everything is processed in your browser.",
    },
    {
      question: "Is it free?",
      answer: "Yes, completely free with no limits.",
    },
  ],
  relatedTools: [
    "merge-pdf",
    "split-pdf",
    "pdf-to-jpg",
    "jpg-to-pdf",
    "image-compressor",
  ],
  seo: {
    title: "Compress PDF — Reduce PDF Size Online Free | AHADEX Tools",
    description:
      "Compress PDF files online for free. Reduce file size by up to 80% with no visible quality loss. Runs entirely in your browser.",
    ogImage: "/images/og/tools/compress-pdf-og.jpg",
  },
},

{
  id: "pdf-to-jpg",
  slug: "pdf-to-jpg",
  name: "PDF to JPG",
  category: "pdf",
  path: "/tools/pdf-to-jpg",
  icon: "/images/icons/pdf-tools.svg",
  description: "Convert each PDF page into a high-quality JPG image.",
  longDescription:
    "Turn PDF pages into JPG images you can share anywhere — social media, chat apps, presentations, or websites. Each page is rendered at your chosen resolution (up to 300 DPI) and saved as a JPG. Perfect for previewing PDF content, extracting charts or photos, or embedding pages into other documents. Runs entirely in your browser using modern PDF rendering — no upload.",
  keywords: ["pdf", "jpg", "convert", "render", "image"],
  popular: false,
  newTool: false,
  features: [
    {
      title: "Per-page JPG",
      description: "Each PDF page becomes a separate JPG.",
    },
    {
      title: "Custom DPI",
      description: "From 72 DPI (screen) up to 300 DPI (print).",
    },
    {
      title: "Preview thumbnails",
      description: "See each page before converting.",
    },
    {
      title: "Selective export",
      description: "Convert only the pages you need.",
    },
    {
      title: "No uploads",
      description: "Files stay on your device.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Upload PDF",
      description: "Drag the PDF into the drop area.",
    },
    {
      step: 2,
      title: "Set quality",
      description: "Choose DPI and JPG quality.",
    },
    {
      step: 3,
      title: "Select pages",
      description: "Convert all pages or a subset.",
    },
    {
      step: 4,
      title: "Convert",
      description: "Click Convert — each page renders as JPG.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save images individually or as a ZIP archive.",
    },
  ],
  faq: [
    {
      question: "Will the JPG look like the PDF?",
      answer:
        "Yes — pages are rendered faithfully at the resolution you choose.",
    },
    {
      question: "Can I convert just one page?",
      answer: "Yes, select individual pages or ranges.",
    },
    {
      question: "What DPI should I use?",
      answer:
        "72–150 for screen; 300 for printing or archival.",
    },
    {
      question: "Is the PDF uploaded?",
      answer: "Never — everything happens in your browser.",
    },
    {
      question: "Can I convert many PDFs at once?",
      answer:
        "Currently one PDF at a time, but each PDF can have many pages.",
    },
    {
      question: "Is it free?",
      answer: "Yes, no limits, no sign-up.",
    },
  ],
  relatedTools: [
    "pdf-to-png",
    "split-pdf",
    "compress-pdf",
    "jpg-to-pdf",
    "merge-pdf",
  ],
  seo: {
    title: "PDF to JPG — Convert PDF Pages to Images Free | AHADEX Tools",
    description:
      "Convert PDF to JPG online for free. High-quality page rendering, custom DPI, no uploads. Runs entirely in your browser.",
    ogImage: "/images/og/tools/pdf-to-jpg-og.jpg",
  },
},

{
  id: "pdf-to-png",
  slug: "pdf-to-png",
  name: "PDF to PNG",
  category: "pdf",
  path: "/tools/pdf-to-png",
  icon: "/images/icons/pdf-tools.svg",
  description: "Convert PDF pages into lossless PNG images with transparency.",
  longDescription:
    "Render each PDF page as a PNG image — lossless, sharp, and ideal for screenshots, design work, or further editing. PNG is perfect when you need the highest possible fidelity without JPEG artifacts. Choose the DPI and export every page or a subset. All processing happens locally in your browser — no uploads, no accounts, no watermarks.",
  keywords: ["pdf", "png", "convert", "render", "lossless"],
  popular: false,
  newTool: false,
  features: [
    {
      title: "Lossless output",
      description: "PNG preserves every pixel — no compression artifacts.",
    },
    {
      title: "High DPI",
      description: "Render up to 300 DPI for print or archival.",
    },
    {
      title: "Per-page export",
      description: "Every page becomes its own PNG file.",
    },
    {
      title: "Transparent background",
      description: "Optional transparency for overlay use.",
    },
    {
      title: "Offline & private",
      description: "Your PDF stays on your device.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Upload PDF",
      description: "Drag the PDF you want to convert.",
    },
    {
      step: 2,
      title: "Set DPI & background",
      description: "Pick resolution and choose transparent or colored.",
    },
    {
      step: 3,
      title: "Select pages",
      description: "All pages or a custom range.",
    },
    {
      step: 4,
      title: "Convert",
      description: "The tool renders each page as PNG.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save PNGs individually or in a ZIP.",
    },
  ],
  faq: [
    {
      question: "PNG vs JPG — which to choose?",
      answer:
        "PNG for text, charts, and edits. JPG for photos and smaller files.",
    },
    {
      question: "Can I get transparent backgrounds?",
      answer:
        "Yes — enable transparent background in settings (if the PDF page has no fill).",
    },
    {
      question: "What DPI for print?",
      answer: "300 DPI is a safe print-quality target.",
    },
    {
      question: "Are my files uploaded?",
      answer: "Never — everything runs in your browser.",
    },
    {
      question: "Can I convert only certain pages?",
      answer: "Yes, select individual pages or ranges.",
    },
    {
      question: "Is it free?",
      answer: "Yes, no cost, no sign-up.",
    },
  ],
  relatedTools: [
    "pdf-to-jpg",
    "split-pdf",
    "merge-pdf",
    "compress-pdf",
    "png-to-pdf",
  ],
  seo: {
    title: "PDF to PNG — Convert PDF Pages to PNG Free | AHADEX Tools",
    description:
      "Convert PDF to PNG online for free. Lossless output, custom DPI, no uploads. Runs entirely in your browser.",
    ogImage: "/images/og/tools/pdf-to-png-og.jpg",
  },
},

{
  id: "pdf-page-extractor",
  slug: "pdf-page-extractor",
  name: "PDF Page Extractor",
  category: "pdf",
  path: "/tools/pdf-page-extractor",
  icon: "/images/icons/pdf-tools.svg",
  description: "Extract specific pages from a PDF into a new document.",
  longDescription:
    "Pull out the exact pages you need from any PDF. Choose individual pages (1, 5, 9), a range (10–20), or any combination. Great for sharing only the relevant section of a report, extracting a signed page, or pulling together selected pages from a large document. All extraction happens in your browser — no uploads, no data retention.",
  keywords: ["pdf", "extract", "pages", "select", "new"],
  popular: false,
  newTool: false,
  features: [
    {
      title: "Flexible selection",
      description: "Mix ranges and individual pages (1-3,7,10-12).",
    },
    {
      title: "Preview thumbnails",
      description: "See all pages before choosing.",
    },
    {
      title: "Preserves quality",
      description: "Original page content kept intact.",
    },
    {
      title: "Fast and local",
      description: "No server round-trip — instant results.",
    },
    {
      title: "Privacy-first",
      description: "Nothing is uploaded or stored.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Upload PDF",
      description: "Drag the source PDF into the drop zone.",
    },
    {
      step: 2,
      title: "Select pages",
      description: "Enter pages or ranges (e.g. 1-3,7,10-12).",
    },
    {
      step: 3,
      title: "Preview",
      description: "Confirm your selection with thumbnails.",
    },
    {
      step: 4,
      title: "Extract",
      description: "The tool builds a new PDF with the chosen pages.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save the extracted PDF.",
    },
  ],
  faq: [
    {
      question: "Can I use complex selections?",
      answer:
        "Yes — combine ranges and single pages: 1-3,7,10-12.",
    },
    {
      question: "Does the extracted PDF keep quality?",
      answer:
        "Yes — pages are copied as-is without re-rendering.",
    },
    {
      question: "Can I extract every other page?",
      answer:
        "Yes, list them: 1,3,5,7,... up to any length.",
    },
    {
      question: "Are my files private?",
      answer:
        "Always. Processing is local — nothing is uploaded.",
    },
    {
      question: "Works on mobile?",
      answer: "Yes, fully touch-friendly.",
    },
    {
      question: "Is it free?",
      answer: "Yes, no account, no watermark.",
    },
  ],
  relatedTools: [
    "split-pdf",
    "merge-pdf",
    "compress-pdf",
    "pdf-to-jpg",
    "pdf-to-png",
  ],
  seo: {
    title: "PDF Page Extractor — Extract PDF Pages Free | AHADEX Tools",
    description:
      "Extract specific pages from a PDF online for free. Flexible range selection, no uploads, runs entirely in your browser.",
    ogImage: "/images/og/tools/pdf-page-extractor-og.jpg",
  },
},
// ============================================================
// 📱 QR & BARCODE TOOLS (8)
// ============================================================

{
  id: "qr-code-generator",
  slug: "qr-code-generator",
  name: "QR Code Generator",
  category: "qr",
  path: "/tools/qr-code-generator",
  icon: "/images/icons/qr-tools.svg",
  description: "Generate QR codes for any text, URL, or data — instantly and free.",
  longDescription:
    "Create crisp, high-resolution QR codes for any content — website links, plain text, phone numbers, emails, or payment info. Choose the size, error correction level, and foreground/background colors. Download as PNG or SVG. All QR generation happens in your browser, so nothing you type is ever sent to a server. Perfect for print materials, menus, business cards, and digital campaigns.",
  keywords: ["qr", "code", "generator", "url", "link"],
  popular: true,
  newTool: false,
  features: [
    {
      title: "Any content",
      description: "URLs, text, phone, email, SMS, Wi-Fi — all supported.",
    },
    {
      title: "High resolution",
      description: "Export up to 2000×2000 px for print.",
    },
    {
      title: "Custom colors",
      description: "Match your brand with custom fg/bg colors.",
    },
    {
      title: "PNG or SVG",
      description: "Raster for screen, vector for print.",
    },
    {
      title: "No tracking",
      description: "Your QR content is never sent or logged.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Enter content",
      description: "Type a URL, text, or paste any data.",
    },
    {
      step: 2,
      title: "Customize (optional)",
      description: "Pick colors, size, and error correction.",
    },
    {
      step: 3,
      title: "Preview",
      description: "See the QR code update in real time.",
    },
    {
      step: 4,
      title: "Scan to test",
      description: "Use your phone camera to verify it works.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save as PNG or SVG for any use.",
    },
  ],
  faq: [
    {
      question: "Do QR codes expire?",
      answer:
        "No. The QR codes you generate here are static — they work forever and never expire.",
    },
    {
      question: "What error correction should I use?",
      answer:
        "Level M is a good default. Use H if the code will be printed small or damaged.",
    },
    {
      question: "Can I scan them with any phone?",
      answer:
        "Yes — all modern iOS and Android cameras scan QR codes natively.",
    },
    {
      question: "Is the QR content tracked?",
      answer:
        "Never. Everything is generated locally in your browser.",
    },
    {
      question: "Can I use these commercially?",
      answer:
        "Yes, the generated QR codes are yours to use however you like.",
    },
    {
      question: "How big can I make them?",
      answer:
        "Up to 2000×2000 pixels, which is enough for billboard-scale printing.",
    },
  ],
  relatedTools: [
    "qr-code-with-logo",
    "wifi-qr-generator",
    "email-qr-generator",
    "vcard-qr-generator",
    "barcode-generator",
  ],
  seo: {
    title: "QR Code Generator — Create QR Codes Free | AHADEX Tools",
    description:
      "Generate QR codes online for free. Custom colors, high resolution, PNG and SVG export. Runs entirely in your browser — no tracking.",
    ogImage: "/images/og/tools/qr-code-generator-og.jpg",
  },
},

{
  id: "wifi-qr-generator",
  slug: "wifi-qr-generator",
  name: "WiFi QR Generator",
  category: "qr",
  path: "/tools/wifi-qr-generator",
  icon: "/images/icons/qr-tools.svg",
  description: "Create a QR code that connects guests to your Wi-Fi instantly.",
  longDescription:
    "Let guests join your Wi-Fi by scanning a single QR code — no typing passwords. Enter your network name (SSID), password, and encryption type, and we'll generate a QR code that phones recognize instantly. Ideal for cafés, guest rooms, offices, and events. All generation is client-side; your password is never uploaded or logged anywhere.",
  keywords: ["wifi", "qr", "network", "password", "connect"],
  popular: true,
  newTool: false,
  features: [
    {
      title: "Instant connection",
      description: "Guests scan once — phone joins the network.",
    },
    {
      title: "WPA/WPA2/WPA3",
      description: "Supports all common encryption types.",
    },
    {
      title: "Hidden networks",
      description: "Toggle for hidden SSIDs.",
    },
    {
      title: "Print-ready",
      description: "Download high-res PNG for signage.",
    },
    {
      title: "Private",
      description: "Your Wi-Fi password never leaves your device.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Enter network name",
      description: "Type your Wi-Fi SSID exactly as it appears.",
    },
    {
      step: 2,
      title: "Enter password",
      description: "Type the Wi-Fi password (case-sensitive).",
    },
    {
      step: 3,
      title: "Select encryption",
      description: "Choose WPA/WPA2/WPA3 or None.",
    },
    {
      step: 4,
      title: "Preview & test",
      description: "Scan with your phone to verify it connects.",
    },
    {
      step: 5,
      title: "Download & print",
      description: "Save the QR and place it where guests need it.",
    },
  ],
  faq: [
    {
      question: "Does it work on iPhone?",
      answer:
        "Yes — iOS 11+ reads Wi-Fi QR codes with the native camera.",
    },
    {
      question: "Does it work on Android?",
      answer:
        "Yes — Android 10+ supports Wi-Fi QR codes natively.",
    },
    {
      question: "Is my Wi-Fi password safe?",
      answer:
        "Yes. Everything is generated in your browser — the password is never sent to any server.",
    },
    {
      question: "Can I use this for a business?",
      answer:
        "Yes — perfect for cafés, hotels, offices, and event venues.",
    },
    {
      question: "Does it work with hidden networks?",
      answer:
        "Yes, toggle 'Hidden network' in the settings.",
    },
    {
      question: "Can I add my logo to the QR?",
      answer:
        "Use our QR Code with Logo tool for that.",
    },
  ],
  relatedTools: [
    "qr-code-generator",
    "qr-code-with-logo",
    "email-qr-generator",
    "phone-qr-generator",
    "vcard-qr-generator",
  ],
  seo: {
    title: "WiFi QR Code Generator — Share Wi-Fi Instantly | AHADEX Tools",
    description:
      "Generate a Wi-Fi QR code so guests can connect with one scan. No typing passwords. Runs entirely in your browser — no uploads.",
    ogImage: "/images/og/tools/wifi-qr-generator-og.jpg",
  },
},

{
  id: "email-qr-generator",
  slug: "email-qr-generator",
  name: "Email QR Generator",
  category: "qr",
  path: "/tools/email-qr-generator",
  icon: "/images/icons/qr-tools.svg",
  description: "Create a QR code that opens a new email with prefilled details.",
  longDescription:
    "Let people contact you by simply scanning a QR code. This tool creates a QR code that opens the visitor's email app with your recipient address, subject, and message body already filled in. Perfect for business cards, event flyers, posters, product packaging, and trade shows. No uploads, no tracking — your email details stay on your device.",
  keywords: ["email", "qr", "contact", "mailto", "business"],
  popular: false,
  newTool: false,
  features: [
    {
      title: "Prefilled email",
      description: "To, subject, and body all filled automatically.",
    },
    {
      title: "Works on all phones",
      description: "iOS, Android, and desktop email apps.",
    },
    {
      title: "High-res export",
      description: "Print-ready PNG for cards and posters.",
    },
    {
      title: "Custom colors",
      description: "Match your brand or business card design.",
    },
    {
      title: "No uploads",
      description: "Your email address is never sent to a server.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Enter recipient email",
      description: "Type the email address to open on scan.",
    },
    {
      step: 2,
      title: "Add subject & body",
      description: "Optional — the message will be prefilled.",
    },
    {
      step: 3,
      title: "Preview",
      description: "Check the QR code updates in real time.",
    },
    {
      step: 4,
      title: "Test on your phone",
      description: "Scan to confirm it opens your email app.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save as PNG or SVG.",
    },
  ],
  faq: [
    {
      question: "Does the email send automatically?",
      answer:
        "No — the QR just opens the user's email app with details prefilled. They still choose to send.",
    },
    {
      question: "Can I add a subject line?",
      answer: "Yes — enter any subject text before generating.",
    },
    {
      question: "Can I prefill the message body?",
      answer: "Yes, the message field is customizable too.",
    },
    {
      question: "Is my email private?",
      answer:
        "Yes. Everything is generated locally — the address never leaves your device.",
    },
    {
      question: "Does it work with Gmail?",
      answer: "Yes — Gmail, Outlook, Apple Mail all support it.",
    },
    {
      question: "Is it free?",
      answer: "Yes, no account, no watermark.",
    },
  ],
  relatedTools: [
    "qr-code-generator",
    "phone-qr-generator",
    "vcard-qr-generator",
    "qr-code-with-logo",
    "wifi-qr-generator",
  ],
  seo: {
    title: "Email QR Code Generator — Prefilled Mailto QR | AHADEX Tools",
    description:
      "Create an email QR code with prefilled recipient, subject, and body. Runs entirely in your browser. Free, private, and no sign-up.",
    ogImage: "/images/og/tools/email-qr-generator-og.jpg",
  },
},

{
  id: "phone-qr-generator",
  slug: "phone-qr-generator",
  name: "Phone QR Generator",
  category: "qr",
  path: "/tools/phone-qr-generator",
  icon: "/images/icons/qr-tools.svg",
  description: "Create a QR code that dials a phone number on scan.",
  longDescription:
    "Turn any phone number into a scannable QR code. When someone scans it, their phone opens the dialer with your number preloaded — they just tap to call. Perfect for business cards, restaurant tables, delivery flyers, customer support posters, and any place you want people to reach you without typing. All processing is local — your number never leaves your browser.",
  keywords: ["phone", "qr", "call", "dial", "contact"],
  popular: false,
  newTool: false,
  features: [
    {
      title: "One-tap calling",
      description: "Scan opens dialer with the number loaded.",
    },
    {
      title: "International format",
      description: "Include country code for global calling.",
    },
    {
      title: "High-res PNG",
      description: "Sharp for print at any size.",
    },
    {
      title: "Custom colors",
      description: "Match your brand identity.",
    },
    {
      title: "Complete privacy",
      description: "Number never uploaded or logged.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Enter phone number",
      description: "Include country code (e.g. +880 for Bangladesh).",
    },
    {
      step: 2,
      title: "Optional label",
      description: "Add the contact name for clarity.",
    },
    {
      step: 3,
      title: "Preview",
      description: "See the QR code update live.",
    },
    {
      step: 4,
      title: "Scan to test",
      description: "Verify it opens the dialer with your number.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save as PNG or SVG.",
    },
  ],
  faq: [
    {
      question: "Does it auto-dial?",
      answer:
        "It opens the dialer with the number loaded. The user must tap call.",
    },
    {
      question: "Can I include a country code?",
      answer:
        "Yes, use international format like +8801712345678.",
    },
    {
      question: "Does it work internationally?",
      answer:
        "Yes — as long as the number includes the correct country code.",
    },
    {
      question: "Can I add a WhatsApp link instead?",
      answer:
        "For WhatsApp, use our QR Code Generator with a wa.me URL.",
    },
    {
      question: "Is it private?",
      answer:
        "Yes — everything runs in your browser with no uploads.",
    },
    {
      question: "Is it free?",
      answer: "Yes, no sign-up needed.",
    },
  ],
  relatedTools: [
    "qr-code-generator",
    "email-qr-generator",
    "vcard-qr-generator",
    "qr-code-with-logo",
    "wifi-qr-generator",
  ],
  seo: {
    title: "Phone QR Code Generator — Click-to-Call QR | AHADEX Tools",
    description:
      "Create a QR code that dials your phone number. Free, private, no sign-up. Runs entirely in your browser.",
    ogImage: "/images/og/tools/phone-qr-generator-og.jpg",
  },
},

{
  id: "vcard-qr-generator",
  slug: "vcard-qr-generator",
  name: "vCard QR Generator",
  category: "qr",
  path: "/tools/vcard-qr-generator",
  icon: "/images/icons/qr-tools.svg",
  description: "Create a QR code that saves your contact info to any phone.",
  longDescription:
    "Share your complete contact card with a single scan. This tool generates a QR code containing your name, phone, email, company, website, and address. When someone scans it, they're prompted to add you to their contacts instantly. Perfect for networking events, business cards, email signatures, and conference badges. Everything is generated in your browser — nothing you type leaves your device.",
  keywords: ["vcard", "qr", "contact", "business card", "network"],
  popular: true,
  newTool: false,
  features: [
    {
      title: "Full contact card",
      description: "Name, phone, email, company, website, address.",
    },
    {
      title: "Save to contacts",
      description: "One tap adds you to their phone's address book.",
    },
    {
      title: "No app required",
      description: "Built-in iOS/Android contacts support it.",
    },
    {
      title: "Business-card ready",
      description: "High-res PNG for print.",
    },
    {
      title: "Private",
      description: "Your details are generated locally.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Enter your details",
      description: "Name, phone, email, company, and more.",
    },
    {
      step: 2,
      title: "Add photo (optional)",
      description: "Embed a profile picture in the vCard.",
    },
    {
      step: 3,
      title: "Preview",
      description: "Confirm all fields are correct.",
    },
    {
      step: 4,
      title: "Test on your phone",
      description: "Scan with camera to check contact addition.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save as PNG or SVG.",
    },
  ],
  faq: [
    {
      question: "What is a vCard?",
      answer:
        "vCard is a standard digital business card format understood by all phones and email apps.",
    },
    {
      question: "Does scanning save the contact?",
      answer:
        "It prompts the user to save — they confirm before it's added.",
    },
    {
      question: "Can I include my photo?",
      answer:
        "Yes — embed a small profile image (though it increases QR complexity).",
    },
    {
      question: "Can I add social media links?",
      answer:
        "You can include them in the website or notes field as text.",
    },
    {
      question: "Is it private?",
      answer:
        "100%. Nothing is uploaded — everything is local.",
    },
    {
      question: "Is it free?",
      answer: "Yes, unlimited use, no sign-up.",
    },
  ],
  relatedTools: [
    "qr-code-generator",
    "email-qr-generator",
    "phone-qr-generator",
    "qr-code-with-logo",
    "wifi-qr-generator",
  ],
  seo: {
    title: "vCard QR Generator — Digital Business Card QR | AHADEX Tools",
    description:
      "Create a vCard QR code to share your contact info. Free, private, no sign-up. Runs entirely in your browser.",
    ogImage: "/images/og/tools/vcard-qr-generator-og.jpg",
  },
},

{
  id: "qr-code-scanner",
  slug: "qr-code-scanner",
  name: "QR Code Scanner",
  category: "qr",
  path: "/tools/qr-code-scanner",
  icon: "/images/icons/qr-tools.svg",
  description: "Scan QR codes using your camera or upload an image.",
  longDescription:
    "Scan any QR code using your device's camera, or upload a photo of a QR code to decode it. The tool extracts the content and gives you clear options: open the link, copy the text, or save the data. All scanning happens in your browser using modern camera and image APIs — nothing is uploaded, nothing is tracked, and nothing is stored.",
  keywords: ["qr", "scan", "camera", "read", "decode"],
  popular: false,
  newTool: false,
  features: [
    {
      title: "Live camera scan",
      description: "Point your camera — decode instantly.",
    },
    {
      title: "Image upload",
      description: "Decode a QR from a saved photo.",
    },
    {
      title: "Content detection",
      description: "Auto-opens URLs, shows text, handles contacts.",
    },
    {
      title: "Copy or open",
      description: "Copy text or open links in one tap.",
    },
    {
      title: "Never uploaded",
      description: "Camera feed stays on your device.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Choose method",
      description: "Use camera or upload an image of a QR code.",
    },
    {
      step: 2,
      title: "Allow camera (optional)",
      description: "Grant permission once for live scanning.",
    },
    {
      step: 3,
      title: "Point at QR",
      description: "Hold steady — decode runs automatically.",
    },
    {
      step: 4,
      title: "Review result",
      description: "See what the QR contained.",
    },
    {
      step: 5,
      title: "Act on it",
      description: "Copy text, open URL, or save contact.",
    },
  ],
  faq: [
    {
      question: "Does it save my scans?",
      answer:
        "No. Scans happen in memory only — nothing is stored or sent anywhere.",
    },
    {
      question: "Does it work with image uploads?",
      answer:
        "Yes — upload a photo of any QR code and it will be decoded.",
    },
    {
      question: "Can it scan barcodes too?",
      answer:
        "The current version focuses on QR. Barcode generation is available separately.",
    },
    {
      question: "Is camera permission required?",
      answer:
        "Only for live scanning. You can always upload an image instead.",
    },
    {
      question: "Is it safe?",
      answer:
        "Yes. URLs are shown for you to review before opening.",
    },
    {
      question: "Is it free?",
      answer: "Yes, no limits or sign-up.",
    },
  ],
  relatedTools: [
    "qr-code-generator",
    "barcode-generator",
    "wifi-qr-generator",
    "vcard-qr-generator",
    "qr-code-with-logo",
  ],
  seo: {
    title: "QR Code Scanner — Scan QR Online Free | AHADEX Tools",
    description:
      "Scan QR codes online using your camera or an image upload. Free, private, no sign-up. Runs entirely in your browser.",
    ogImage: "/images/og/tools/qr-code-scanner-og.jpg",
  },
},

{
  id: "barcode-generator",
  slug: "barcode-generator",
  name: "Barcode Generator",
  category: "qr",
  path: "/tools/barcode-generator",
  icon: "/images/icons/qr-tools.svg",
  description: "Generate standard 1D barcodes (Code128, EAN, UPC, and more).",
  longDescription:
    "Create printable barcodes in all major formats — Code128, Code39, EAN-13, EAN-8, UPC-A, UPC-E, ITF, and MSI. Perfect for inventory labels, product packaging, price tags, and asset tracking. Choose size, color, and label text placement. All barcodes are generated locally in your browser, so nothing you type leaves your device.",
  keywords: ["barcode", "code128", "ean", "upc", "label"],
  popular: false,
  newTool: false,
  features: [
    {
      title: "Multiple formats",
      description: "Code128, EAN, UPC, Code39, ITF, MSI.",
    },
    {
      title: "Print-ready",
      description: "Export high-resolution PNG for labels.",
    },
    {
      title: "Show or hide text",
      description: "Toggle the number below the barcode.",
    },
    {
      title: "Custom colors",
      description: "Match your label design.",
    },
    {
      title: "No tracking",
      description: "Values never sent to a server.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Choose format",
      description: "Select Code128, EAN-13, UPC, or others.",
    },
    {
      step: 2,
      title: "Enter value",
      description: "Type the numeric or alphanumeric code.",
    },
    {
      step: 3,
      title: "Preview",
      description: "See the barcode update live.",
    },
    {
      step: 4,
      title: "Adjust size & colors",
      description: "Tune for your label dimensions.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save as PNG for printing.",
    },
  ],
  faq: [
    {
      question: "Which barcode format should I use?",
      answer:
        "Code128 for general use. EAN-13 or UPC for retail products.",
    },
    {
      question: "Can I scan these with any scanner?",
      answer:
        "Yes — any standard 1D barcode scanner will read them.",
    },
    {
      question: "Can I print on labels?",
      answer:
        "Yes — export PNG and place on any label template.",
    },
    {
      question: "Do I need a special font?",
      answer:
        "No — the barcode is generated as an image, not text.",
    },
    {
      question: "Is it free?",
      answer: "Yes, unlimited generation.",
    },
    {
      question: "Is my data private?",
      answer:
        "Yes — everything is generated locally.",
    },
  ],
  relatedTools: [
    "qr-code-generator",
    "qr-code-scanner",
    "qr-code-with-logo",
    "wifi-qr-generator",
    "email-qr-generator",
  ],
  seo: {
    title: "Barcode Generator — Create Code128, EAN, UPC Free | AHADEX Tools",
    description:
      "Generate barcodes online for free. Supports Code128, EAN, UPC, Code39, and more. Runs entirely in your browser — no uploads.",
    ogImage: "/images/og/tools/barcode-generator-og.jpg",
  },
},

{
  id: "qr-code-with-logo",
  slug: "qr-code-with-logo",
  name: "QR Code with Logo",
  category: "qr",
  path: "/tools/qr-code-with-logo",
  icon: "/images/icons/qr-tools.svg",
  description: "Create a branded QR code with your own logo in the center.",
  longDescription:
    "Generate a QR code that features your logo in the center — a great way to make it match your brand and increase scan trust. Upload any image (PNG with transparency works best), position it in the middle, and we'll produce a scan-safe QR code. High error correction ensures reliability even with the logo overlay. Everything happens in your browser — your logo and data stay on your device.",
  keywords: ["qr", "logo", "brand", "custom", "scanner"],
  popular: true,
  newTool: false,
  features: [
    {
      title: "Center logo",
      description: "Overlay any PNG or JPG in the middle.",
    },
    {
      title: "Scan-safe",
      description: "High error correction keeps it reliable.",
    },
    {
      title: "Adjustable size",
      description: "Control logo size to keep the code scannable.",
    },
    {
      title: "PNG & SVG",
      description: "Export for screen or print.",
    },
    {
      title: "No uploads",
      description: "Everything is generated on your device.",
    },
  ],
  howTo: [
    {
      step: 1,
      title: "Enter content",
      description: "Type a URL or any data for the QR code.",
    },
    {
      step: 2,
      title: "Upload logo",
      description: "Choose a square PNG with transparent background.",
    },
    {
      step: 3,
      title: "Adjust size",
      description: "Keep the logo within ~30% of the QR width.",
    },
    {
      step: 4,
      title: "Test scan",
      description: "Scan with a phone before finalizing.",
    },
    {
      step: 5,
      title: "Download",
      description: "Save as PNG or SVG.",
    },
  ],
  faq: [
    {
      question: "Will the QR still scan?",
      answer:
        "Yes — with H-level error correction and a logo under 30% of the area, scanning remains reliable.",
    },
    {
      question: "What logo format works best?",
      answer:
        "Square PNG with transparent background — it sits cleanly over the code.",
    },
    {
      question: "Can the logo be any shape?",
      answer:
        "It will be cropped to fit the center. Square works best.",
    },
    {
      question: "Does the logo hide too much?",
      answer:
        "Keep it small (20–30% width). Test scan to verify.",
    },
    {
      question: "Is my logo uploaded?",
      answer:
        "Never — everything runs locally in your browser.",
    },
    {
      question: "Is it free?",
      answer: "Yes, unlimited use, no watermark.",
    },
  ],
  relatedTools: [
    "qr-code-generator",
    "qr-code-scanner",
    "wifi-qr-generator",
    "vcard-qr-generator",
    "email-qr-generator",
  ],
  seo: {
    title: "QR Code with Logo — Branded QR Generator Free | AHADEX Tools",
    description:
      "Create a branded QR code with your logo in the center. Scan-safe, high-resolution, free. Runs entirely in your browser.",
    ogImage: "/images/og/tools/qr-code-with-logo-og.jpg",
  },
},

  // ============================================================
  // ✏️ TEXT TOOLS (6)
  // ============================================================

  {
    id: "word-counter",
    slug: "word-counter",
    name: "Word Counter",
    category: "text",
    path: "/tools/word-counter",
    icon: "/images/icons/text-tools.svg",
    description: "Count words, characters, sentences, and reading time instantly.",
    longDescription:
      "Paste or type text and get instant counts for words, characters (with and without spaces), sentences, paragraphs, and estimated reading time. Perfect for writers, students, bloggers, marketers, and anyone with a word limit — Twitter, essays, SEO meta descriptions, cover letters. Everything updates live as you type. No upload, no account — your text never leaves your browser.",
    keywords: ["word", "counter", "character", "count", "text"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "Live counting",
        description: "Updates instantly as you type or paste.",
      },
      {
        title: "Multiple metrics",
        description: "Words, characters, sentences, paragraphs, reading time.",
      },
      {
        title: "Social media limits",
        description: "See Twitter/X, meta description, and SMS limits.",
      },
      {
        title: "No upload",
        description: "Your text stays on your device.",
      },
      {
        title: "Free forever",
        description: "No accounts, no limits, no cost.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Paste or type text",
        description: "Enter your content into the editor.",
      },
      {
        step: 2,
        title: "See live counts",
        description: "Metrics update in real time as you type.",
      },
      {
        step: 3,
        title: "Check limits",
        description: "Review social media and SEO character limits.",
      },
      {
        step: 4,
        title: "Edit as needed",
        description: "Trim or expand your text until it fits.",
      },
      {
        step: 5,
        title: "Copy or clear",
        description: "Copy your text or reset the tool.",
      },
    ],
    faq: [
      {
        question: "How is word count calculated?",
        answer:
          "Words are separated by whitespace. Hyphenated terms count as one word.",
      },
      {
        question: "What is 'reading time'?",
        answer:
          "Based on an average reading speed of ~200 words per minute.",
      },
      {
        question: "Does it count characters with spaces?",
        answer:
          "Yes — both with and without spaces are shown.",
      },
      {
        question: "Is my text uploaded?",
        answer:
          "Never. Everything runs in your browser — nothing is sent to a server.",
      },
      {
        question: "Does it work on mobile?",
        answer: "Yes, fully responsive and touch-friendly.",
      },
      {
        question: "Is it free?",
        answer: "Yes, unlimited use with no sign-up.",
      },
    ],
    relatedTools: [
      "case-converter",
      "text-cleaner",
      "json-formatter",
      "base64-tool",
      "json-to-csv",
    ],
    seo: {
      title: "Word Counter — Count Words & Characters Free | AHADEX Tools",
      description:
        "Count words, characters, sentences, and reading time instantly. Free, private, no sign-up. Runs entirely in your browser.",
      ogImage: "/images/og/tools/word-counter-og.jpg",
    },
  },

  {
    id: "case-converter",
    slug: "case-converter",
    name: "Case Converter",
    category: "text",
    path: "/tools/case-converter",
    icon: "/images/icons/text-tools.svg",
    description: "Convert text between UPPERCASE, lowercase, Title Case, and more.",
    longDescription:
      "Change text case instantly — UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case, and CONSTANT_CASE. Great for editing copy, fixing capitalisation from copy-paste, formatting code identifiers, or preparing headlines. Everything updates live in your browser. No uploads, no accounts, and no tracking — your text stays private.",
    keywords: ["case", "converter", "uppercase", "lowercase", "title"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "8+ case styles",
        description: "Upper, lower, title, sentence, camel, snake, kebab, constant.",
      },
      {
        title: "Live conversion",
        description: "Change case with a single click.",
      },
      {
        title: "Preserves structure",
        description: "Line breaks and punctuation kept intact.",
      },
      {
        title: "Copy instantly",
        description: "One-click copy to clipboard.",
      },
      {
        title: "No upload",
        description: "Text stays on your device.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Paste your text",
        description: "Enter or paste the text you want to convert.",
      },
      {
        step: 2,
        title: "Choose a case",
        description: "Click UPPER, lower, Title, camelCase, etc.",
      },
      {
        step: 3,
        title: "Preview",
        description: "See the converted text instantly.",
      },
      {
        step: 4,
        title: "Copy",
        description: "Copy the result with one click.",
      },
      {
        step: 5,
        title: "Start over",
        description: "Clear and paste new text.",
      },
    ],
    faq: [
      {
        question: "What is camelCase?",
        answer:
          "The first word is lowercase; subsequent words start uppercase (e.g. myVariableName).",
      },
      {
        question: "What is snake_case?",
        answer:
          "Words separated by underscores (e.g. my_variable_name).",
      },
      {
        question: "Does it preserve line breaks?",
        answer: "Yes — the structure of your text is maintained.",
      },
      {
        question: "Is my text uploaded?",
        answer:
          "Never. Processing happens entirely in your browser.",
      },
      {
        question: "Does it work on any language?",
        answer:
          "Basic case conversion works best with Latin scripts (English, etc.).",
      },
      {
        question: "Is it free?",
        answer: "Yes, no limits.",
      },
    ],
    relatedTools: [
      "word-counter",
      "text-cleaner",
      "json-formatter",
      "base64-tool",
      "url-encoder",
    ],
    seo: {
      title: "Case Converter — UPPER, lower, Title Case Free | AHADEX Tools",
      description:
        "Convert text case online — UPPERCASE, lowercase, Title Case, camelCase, snake_case, and more. Free, private, no sign-up.",
      ogImage: "/images/og/tools/case-converter-og.jpg",
    },
  },

  {
    id: "text-cleaner",
    slug: "text-cleaner",
    name: "Text Cleaner",
    category: "text",
    path: "/tools/text-cleaner",
    icon: "/images/icons/text-tools.svg",
    description: "Remove extra spaces, line breaks, special characters, and more.",
    longDescription:
      "Clean up messy text in one click. Remove extra spaces, trailing whitespace, blank lines, HTML tags, emojis, or special characters. Normalize line endings, trim spaces, and reformat paragraphs. Perfect for pasting content from Word, PDF, or the web into a CMS, email, or code editor. Everything runs locally in your browser — no uploads, no logs.",
    keywords: ["clean", "text", "spaces", "whitespace", "remove"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Remove extra spaces",
        description: "Collapse multiple spaces into single ones.",
      },
      {
        title: "Strip HTML tags",
        description: "Keep just the plain text from copied content.",
      },
      {
        title: "Remove blank lines",
        description: "Delete or collapse empty lines.",
      },
      {
        title: "Remove emojis & symbols",
        description: "Optional cleaning of non-standard characters.",
      },
      {
        title: "Live preview",
        description: "See changes instantly as you toggle options.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Paste text",
        description: "Paste the messy content you want to clean.",
      },
      {
        step: 2,
        title: "Select options",
        description: "Choose what to clean: spaces, tags, blank lines, etc.",
      },
      {
        step: 3,
        title: "Preview result",
        description: "See the cleaned text update live.",
      },
      {
        step: 4,
        title: "Copy",
        description: "Copy the cleaned result with one click.",
      },
      {
        step: 5,
        title: "Reset",
        description: "Clear and paste new content.",
      },
    ],
    faq: [
      {
        question: "Does it remove HTML tags?",
        answer:
          "Yes — enable 'Remove HTML tags' to strip formatting markup.",
      },
      {
        question: "Can it remove emojis?",
        answer:
          "Yes, there's a toggle for removing emojis and other non-ASCII symbols.",
      },
      {
        question: "Will it break my line breaks?",
        answer:
          "Only if you choose to collapse or remove blank lines.",
      },
      {
        question: "Is it reversible?",
        answer:
          "Not directly — but you can always re-paste the original text.",
      },
      {
        question: "Is my text uploaded?",
        answer:
          "Never. Everything runs in your browser.",
      },
      {
        question: "Is it free?",
        answer: "Yes, no limits.",
      },
    ],
    relatedTools: [
      "word-counter",
      "case-converter",
      "json-formatter",
      "base64-tool",
      "json-to-csv",
    ],
    seo: {
      title: "Text Cleaner — Remove Extra Spaces & HTML Free | AHADEX Tools",
      description:
        "Clean text online — remove extra spaces, blank lines, HTML tags, and more. Free, private, no sign-up. Runs in your browser.",
      ogImage: "/images/og/tools/text-cleaner-og.jpg",
    },
  },

  {
    id: "json-formatter",
    slug: "json-formatter",
    name: "JSON Formatter",
    category: "text",
    path: "/tools/json-formatter",
    icon: "/images/icons/text-tools.svg",
    description: "Format, validate, and beautify JSON with syntax highlighting.",
    longDescription:
      "Paste raw JSON and instantly format it with proper indentation, validate for syntax errors, and inspect it with collapsible tree view. Choose 2-space, 4-space, or tab indentation. Minify when needed. Error messages show the exact line and column where parsing failed. Everything runs locally — perfect for developers who need quick JSON tooling without an internet connection.",
    keywords: ["json", "format", "validate", "beautify", "minify"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "Auto-format",
        description: "Beautify JSON with 2 or 4 space indentation.",
      },
      {
        title: "Validation",
        description: "Errors show the exact line and column.",
      },
      {
        title: "Minify",
        description: "Compress JSON to a single line for production.",
      },
      {
        title: "Tree view",
        description: "Collapsible viewer for exploring large JSON.",
      },
      {
        title: "Offline & private",
        description: "Your JSON never leaves your device.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Paste JSON",
        description: "Paste raw or minified JSON into the input.",
      },
      {
        step: 2,
        title: "Format",
        description: "Click Format to beautify with indentation.",
      },
      {
        step: 3,
        title: "Validate",
        description: "Errors appear if syntax is invalid.",
      },
      {
        step: 4,
        title: "Explore",
        description: "Expand/collapse the tree to inspect values.",
      },
      {
        step: 5,
        title: "Copy or download",
        description: "Copy the formatted JSON or save it to a file.",
      },
    ],
    faq: [
      {
        question: "Can it handle large JSON files?",
        answer:
          "Yes — files up to a few megabytes work well in any modern browser.",
      },
      {
        question: "What if my JSON is invalid?",
        answer:
          "The tool highlights the error line and column so you can fix it quickly.",
      },
      {
        question: "Can I minify?",
        answer:
          "Yes — switch to Minify mode to compress JSON to one line.",
      },
      {
        question: "Does it support JSON5 or JSONC?",
        answer:
          "Only strict JSON is supported. Comments and trailing commas are flagged as errors.",
      },
      {
        question: "Is my data private?",
        answer:
          "Always. Everything runs in your browser — nothing is uploaded.",
      },
      {
        question: "Is it free?",
        answer: "Yes, unlimited use with no sign-up.",
      },
    ],
    relatedTools: [
      "json-to-csv",
      "base64-tool",
      "url-encoder",
      "regex-tester",
      "text-cleaner",
    ],
    seo: {
      title: "JSON Formatter & Validator — Free Online | AHADEX Tools",
      description:
        "Format, validate, and beautify JSON online for free. Syntax highlighting, error detection, and tree view. Runs entirely in your browser.",
      ogImage: "/images/og/tools/json-formatter-og.jpg",
    },
  },

  {
    id: "json-to-csv",
    slug: "json-to-csv",
    name: "JSON to CSV",
    category: "text",
    path: "/tools/json-to-csv",
    icon: "/images/icons/text-tools.svg",
    description: "Convert JSON arrays into clean CSV files for spreadsheets.",
    longDescription:
      "Turn JSON arrays into CSV files that open cleanly in Excel, Google Sheets, or Numbers. Handles nested objects by flattening them into columns. Choose your delimiter (comma, semicolon, tab). Preview the output before downloading. Perfect for exporting API data, converting database dumps, or preparing data for analysis. All conversion happens locally — no upload, no tracking.",
    keywords: ["json", "csv", "convert", "excel", "data"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Array → CSV",
        description: "Convert arrays of objects to CSV rows.",
      },
      {
        title: "Nested flatten",
        description: "Auto-flattens nested objects into dotted columns.",
      },
      {
        title: "Custom delimiter",
        description: "Comma, semicolon, or tab.",
      },
      {
        title: "Live preview",
        description: "See the CSV output before downloading.",
      },
      {
        title: "Local only",
        description: "Your data never leaves your device.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Paste JSON",
        description: "Paste an array of objects (or a single object).",
      },
      {
        step: 2,
        title: "Choose delimiter",
        description: "Pick comma, semicolon, or tab.",
      },
      {
        step: 3,
        title: "Preview",
        description: "See the CSV table render live.",
      },
      {
        step: 4,
        title: "Download",
        description: "Save the CSV file to your device.",
      },
      {
        step: 5,
        title: "Open in spreadsheet",
        description: "Import into Excel, Sheets, or Numbers.",
      },
    ],
    faq: [
      {
        question: "What JSON shape is supported?",
        answer:
          "An array of objects is ideal. A single object becomes one row.",
      },
      {
        question: "How are nested objects handled?",
        answer:
          "They're flattened with dot notation — e.g. address.city.",
      },
      {
        question: "Which delimiter should I use?",
        answer:
          "Comma for most cases. Semicolon for locales where comma is a decimal separator.",
      },
      {
        question: "Does it handle large files?",
        answer:
          "Yes — files up to a few MB work in any modern browser.",
      },
      {
        question: "Is my data uploaded?",
        answer:
          "Never. Everything runs locally in your browser.",
      },
      {
        question: "Is it free?",
        answer: "Yes, unlimited use.",
      },
    ],
    relatedTools: [
      "json-formatter",
      "base64-tool",
      "url-encoder",
      "text-cleaner",
      "word-counter",
    ],
    seo: {
      title: "JSON to CSV Converter — Free Online | AHADEX Tools",
      description:
        "Convert JSON to CSV online for free. Handles nested objects, custom delimiters, live preview. Runs entirely in your browser.",
      ogImage: "/images/og/tools/json-to-csv-og.jpg",
    },
  },

  {
    id: "base64-tool",
    slug: "base64-tool",
    name: "Base64 Encoder / Decoder",
    category: "text",
    path: "/tools/base64-tool",
    icon: "/images/icons/text-tools.svg",
    description: "Encode text or files to Base64, and decode Base64 back to text.",
    longDescription:
      "Convert text or files to Base64 encoding, or decode Base64 back to plain text or binary. Useful for embedding images in HTML/CSS, transmitting data in JSON, working with APIs, or inspecting encoded content. Choose URL-safe encoding when needed for URLs or filenames. All processing happens locally in your browser — no uploads, no logs, no accounts.",
    keywords: ["base64", "encode", "decode", "convert", "data"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Text & files",
        description: "Encode text or binary files to Base64.",
      },
      {
        title: "URL-safe mode",
        description: "Use URL-safe encoding for web use.",
      },
      {
        title: "Instant decode",
        description: "Convert Base64 back to text or files.",
      },
      {
        title: "No upload",
        description: "Everything stays on your device.",
      },
      {
        title: "Copy-friendly",
        description: "One-click copy of the result.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Choose mode",
        description: "Select Encode or Decode.",
      },
      {
        step: 2,
        title: "Paste input",
        description: "Enter text, or upload a file to encode.",
      },
      {
        step: 3,
        title: "Options",
        description: "Enable URL-safe encoding if needed.",
      },
      {
        step: 4,
        title: "Convert",
        description: "The result updates instantly.",
      },
      {
        step: 5,
        title: "Copy",
        description: "Copy the encoded or decoded output.",
      },
    ],
    faq: [
      {
        question: "What is Base64?",
        answer:
          "Base64 is a way to represent binary data as ASCII text — used in email, JSON, URLs, and CSS.",
      },
      {
        question: "Is Base64 encryption?",
        answer:
          "No — Base64 is just encoding, not encryption. Anyone can decode it.",
      },
      {
        question: "What is URL-safe Base64?",
        answer:
          "It replaces + and / with - and _ to be safe inside URLs.",
      },
      {
        question: "Can I encode images?",
        answer:
          "Yes — upload any file to get its Base64 representation.",
      },
      {
        question: "Is it private?",
        answer:
          "Yes — all conversion happens in your browser.",
      },
      {
        question: "Is it free?",
        answer: "Yes, no limits.",
      },
    ],
    relatedTools: [
      "json-formatter",
      "url-encoder",
      "regex-tester",
      "json-to-csv",
      "text-cleaner",
    ],
    seo: {
      title: "Base64 Encoder / Decoder — Free Online | AHADEX Tools",
      description:
        "Encode and decode Base64 online for free. Text or files, URL-safe mode, no uploads. Runs entirely in your browser.",
      ogImage: "/images/og/tools/base64-tool-og.jpg",
    },
  },

  // ============================================================
  // 💻 DEVELOPER TOOLS (3)
  // ============================================================

  {
    id: "url-encoder",
    slug: "url-encoder",
    name: "URL Encoder / Decoder",
    category: "developer",
    path: "/tools/url-encoder",
    icon: "/images/icons/dev-tools.svg",
    description: "Encode or decode URLs and query string parameters instantly.",
    longDescription:
      "Convert text to URL-safe format or decode percent-encoded URLs back to readable text. Handle query parameters, path segments, or entire URLs. Choose between encodeURIComponent (for values) and encodeURI (for whole URLs). Every operation runs locally in your browser — no uploads, no tracking, no accounts. Great for debugging, building query strings, or preparing data for API calls.",
    keywords: ["url", "encode", "decode", "uri", "query"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Component or whole URL",
        description: "Encode just the value, or the entire URL.",
      },
      {
        title: "Instant decode",
        description: "Convert %20 and other escapes back to text.",
      },
      {
        title: "Live conversion",
        description: "Result updates as you type.",
      },
      {
        title: "No upload",
        description: "Everything stays on your device.",
      },
      {
        title: "Copy with one click",
        description: "Fast copy for developer workflows.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Choose mode",
        description: "Encode or Decode.",
      },
      {
        step: 2,
        title: "Paste input",
        description: "Enter the URL, text, or encoded string.",
      },
      {
        step: 3,
        title: "Pick method",
        description: "Component (values) or whole URL.",
      },
      {
        step: 4,
        title: "View result",
        description: "See the encoded/decoded output live.",
      },
      {
        step: 5,
        title: "Copy",
        description: "Copy the output to your clipboard.",
      },
    ],
    faq: [
      {
        question: "What's the difference between encodeURI and encodeURIComponent?",
        answer:
          "encodeURI keeps URL structure characters intact. encodeURIComponent encodes them — use it for values.",
      },
      {
        question: "What is %20?",
        answer:
          "It's the URL-encoded representation of a space character.",
      },
      {
        question: "Does it handle Unicode?",
        answer:
          "Yes — characters like é, 中, or 😀 are properly encoded.",
      },
      {
        question: "Is it private?",
        answer:
          "Yes, everything happens in your browser.",
      },
      {
        question: "Works offline?",
        answer: "Yes — once loaded, no internet is required.",
      },
      {
        question: "Is it free?",
        answer: "Yes, no sign-up.",
      },
    ],
    relatedTools: [
      "base64-tool",
      "uuid-generator",
      "regex-tester",
      "json-formatter",
      "json-to-csv",
    ],
    seo: {
      title: "URL Encoder / Decoder — Free Online | AHADEX Tools",
      description:
        "Encode and decode URLs online for free. Component or full URL, live conversion, no uploads. Runs entirely in your browser.",
      ogImage: "/images/og/tools/url-encoder-og.jpg",
    },
  },

  {
    id: "uuid-generator",
    slug: "uuid-generator",
    name: "UUID Generator",
    category: "developer",
    path: "/tools/uuid-generator",
    icon: "/images/icons/dev-tools.svg",
    description: "Generate v1 and v4 UUIDs in bulk — instant and free.",
    longDescription:
      "Generate cryptographically strong UUIDs (v1 and v4) in any quantity. Perfect for databases, distributed systems, unique file names, session tokens, or test data. Copy individual UUIDs or download the full list as a text file. All generation uses the browser's built-in crypto.randomUUID, so the output is genuinely random — never derived from any external source.",
    keywords: ["uuid", "guid", "generate", "random", "unique"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "v1 and v4",
        description: "Time-based and random UUIDs.",
      },
      {
        title: "Bulk generation",
        description: "Generate up to 1000 at once.",
      },
      {
        title: "Uppercase option",
        description: "Switch case with a single toggle.",
      },
      {
        title: "Download list",
        description: "Save all UUIDs as a .txt file.",
      },
      {
        title: "Cryptographically random",
        description: "Uses crypto.randomUUID under the hood.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Pick version",
        description: "Choose UUID v4 (random) or v1 (time-based).",
      },
      {
        step: 2,
        title: "Set quantity",
        description: "Enter how many UUIDs you need (1–1000).",
      },
      {
        step: 3,
        title: "Generate",
        description: "Click Generate to create the UUIDs.",
      },
      {
        step: 4,
        title: "Copy all",
        description: "Copy the full list to your clipboard.",
      },
      {
        step: 5,
        title: "Download",
        description: "Save as a text file if you prefer.",
      },
    ],
    faq: [
      {
        question: "What's the difference between v1 and v4?",
        answer:
          "v1 is time-based (includes timestamp + MAC); v4 is fully random. For most apps, use v4.",
      },
      {
        question: "Are these truly random?",
        answer:
          "Yes — v4 uses the browser's cryptographic random number generator.",
      },
      {
        question: "Can I generate 1000 at once?",
        answer:
          "Yes, the tool supports bulk generation up to 1000.",
      },
      {
        question: "Can I use them commercially?",
        answer:
          "Yes — UUIDs are not copyrightable. Use them freely.",
      },
      {
        question: "Is my data sent anywhere?",
        answer:
          "Never. Everything is generated in your browser.",
      },
      {
        question: "Is it free?",
        answer: "Yes, unlimited.",
      },
    ],
    relatedTools: [
      "base64-tool",
      "url-encoder",
      "regex-tester",
      "json-formatter",
      "json-to-csv",
    ],
    seo: {
      title: "UUID Generator — Generate v1 & v4 UUIDs Free | AHADEX Tools",
      description:
        "Generate UUIDs online for free. v1 and v4, bulk up to 1000, cryptographically random. Runs entirely in your browser.",
      ogImage: "/images/og/tools/uuid-generator-og.jpg",
    },
  },

  {
    id: "regex-tester",
    slug: "regex-tester",
    name: "Regex Tester",
    category: "developer",
    path: "/tools/regex-tester",
    icon: "/images/icons/dev-tools.svg",
    description: "Test regular expressions live with highlighting and match groups.",
    longDescription:
      "Test JavaScript regular expressions in real time against sample text. See every match highlighted, inspect capture groups, and toggle flags (global, ignore case, multiline, dotall, unicode, sticky). Replace mode shows the result of substitutions. Perfect for validating patterns before using them in code. Runs 100% locally — no uploads, no accounts.",
    keywords: ["regex", "regular", "expression", "test", "match"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Live highlighting",
        description: "Matches are highlighted as you type.",
      },
      {
        title: "Capture groups",
        description: "See every group and named group.",
      },
      {
        title: "All flags",
        description: "g, i, m, s, u, y — toggles for each.",
      },
      {
        title: "Replace mode",
        description: "Preview substitution results live.",
      },
      {
        title: "Local only",
        description: "Your text never leaves the browser.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Enter pattern",
        description: "Type the regex between /slashes/.",
      },
      {
        step: 2,
        title: "Add flags",
        description: "Toggle g, i, m, s, u, y as needed.",
      },
      {
        step: 3,
        title: "Paste test text",
        description: "Provide sample content to test against.",
      },
      {
        step: 4,
        title: "Review matches",
        description: "See matches highlighted and group values.",
      },
      {
        step: 5,
        title: "Try replace",
        description: "Enter a replacement string to preview substitution.",
      },
    ],
    faq: [
      {
        question: "Which regex flavor is used?",
        answer:
          "JavaScript (ECMAScript) regular expressions.",
      },
      {
        question: "Can I use named groups?",
        answer:
          "Yes — (?<name>...) syntax is supported.",
      },
      {
        question: "What does the 'g' flag do?",
        answer:
          "Global — find all matches instead of stopping at the first.",
      },
      {
        question: "Is my data private?",
        answer:
          "Yes — everything runs in your browser. Nothing is uploaded.",
      },
      {
        question: "Can it handle long text?",
        answer:
          "Yes — text up to a few hundred KB works fine.",
      },
      {
        question: "Is it free?",
        answer: "Yes, no sign-up.",
      },
    ],
    relatedTools: [
      "json-formatter",
      "url-encoder",
      "base64-tool",
      "uuid-generator",
      "text-cleaner",
    ],
    seo: {
      title: "Regex Tester — Test Regular Expressions Online Free | AHADEX Tools",
      description:
        "Test regular expressions live with highlighting, capture groups, and replace mode. Free, private, no sign-up. Runs in your browser.",
      ogImage: "/images/og/tools/regex-tester-og.jpg",
    },
  },

  // ============================================================
  // 🧮 CALCULATORS (5)
  // ============================================================

  {
    id: "percentage-calculator",
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    category: "calculators",
    path: "/tools/percentage-calculator",
    icon: "/images/icons/calculator-tools.svg",
    description: "Calculate percentages, increases, decreases, and differences.",
    longDescription:
      "Solve every common percentage problem in seconds. What is X% of Y? What percent is X of Y? What's the percentage increase or decrease? Find the original value after a percent change. Perfect for shopping discounts, tips, taxes, grading, salary changes, and business math. All calculations happen instantly in your browser — no tracking, no sign-up.",
    keywords: ["percentage", "percent", "calculate", "increase", "discount"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "Four modes",
        description: "X% of Y, X is what % of Y, increase/decrease, and more.",
      },
      {
        title: "Live results",
        description: "Answer updates as you type.",
      },
      {
        title: "Copy result",
        description: "One-click copy to clipboard.",
      },
      {
        title: "Shows formula",
        description: "Learn how each answer is calculated.",
      },
      {
        title: "No sign-up",
        description: "Just open and use.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Pick a mode",
        description: "Select the percentage problem you want to solve.",
      },
      {
        step: 2,
        title: "Enter numbers",
        description: "Type the two known values.",
      },
      {
        step: 3,
        title: "See result",
        description: "The answer appears instantly below.",
      },
      {
        step: 4,
        title: "Copy",
        description: "Copy the result with one click.",
      },
      {
        step: 5,
        title: "Try another mode",
        description: "Switch modes to solve a different problem.",
      },
    ],
    faq: [
      {
        question: "How do I calculate X% of Y?",
        answer:
          "Multiply Y by X/100. For example, 15% of 200 = 200 × 0.15 = 30.",
      },
      {
        question: "How do I find percent increase?",
        answer:
          "((new − old) ÷ old) × 100. Negative results mean a decrease.",
      },
      {
        question: "How do I find the original price after a discount?",
        answer:
          "Divide the sale price by (1 − discount/100).",
      },
      {
        question: "Does it round?",
        answer:
          "It shows full precision up to a reasonable number of decimals.",
      },
      {
        question: "Is it private?",
        answer:
          "Yes — everything runs in your browser.",
      },
      {
        question: "Is it free?",
        answer: "Yes, no sign-up or limit.",
      },
    ],
    relatedTools: [
      "age-calculator",
      "date-difference",
      "unit-converter",
      "bmi-calculator",
      "word-counter",
    ],
    seo: {
      title: "Percentage Calculator — Calculate Percentages Free | AHADEX Tools",
      description:
        "Calculate percentages online for free. X% of Y, percent increase/decrease, and more. Runs entirely in your browser.",
      ogImage: "/images/og/tools/percentage-calculator-og.jpg",
    },
  },

  {
    id: "age-calculator",
    slug: "age-calculator",
    name: "Age Calculator",
    category: "calculators",
    path: "/tools/age-calculator",
    icon: "/images/icons/calculator-tools.svg",
    description: "Calculate exact age in years, months, days, hours, and more.",
    longDescription:
      "Enter a birth date and get an exact age — in years, months, days, weeks, hours, minutes, and seconds. Also shows the next birthday countdown and the day of the week you were born. Perfect for filling out forms accurately, checking eligibility (like age-restricted services), or just satisfying curiosity. Runs entirely in your browser — no data is stored or sent.",
    keywords: ["age", "birthday", "calculator", "date", "years"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "Exact age",
        description: "Years, months, and days — precisely.",
      },
      {
        title: "Multiple units",
        description: "Weeks, hours, minutes, seconds.",
      },
      {
        title: "Next birthday",
        description: "Countdown to your next birthday.",
      },
      {
        title: "Day of birth",
        description: "See which day of the week you were born.",
      },
      {
        title: "No upload",
        description: "Your date never leaves your device.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Pick birth date",
        description: "Choose your date of birth.",
      },
      {
        step: 2,
        title: "Set reference date",
        description: "Default is today — change to compare.",
      },
      {
        step: 3,
        title: "See age",
        description: "View exact age across multiple units.",
      },
      {
        step: 4,
        title: "Birthday info",
        description: "Check the countdown to your next birthday.",
      },
      {
        step: 5,
        title: "Reset",
        description: "Try another date.",
      },
    ],
    faq: [
      {
        question: "How is age calculated?",
        answer:
          "The tool counts full years, then full months, then remaining days.",
      },
      {
        question: "Does it account for leap years?",
        answer: "Yes — leap years are handled automatically.",
      },
      {
        question: "Can I calculate age at a past date?",
        answer:
          "Yes — change the reference date to any time in the past.",
      },
      {
        question: "Is my date private?",
        answer:
          "Yes — everything runs locally. Nothing is sent or stored.",
      },
      {
        question: "Does it work for pets?",
        answer:
          "Yes — the math is the same, just choose the pet's birth date.",
      },
      {
        question: "Is it free?",
        answer: "Yes, unlimited use.",
      },
    ],
    relatedTools: [
      "date-difference",
      "percentage-calculator",
      "bmi-calculator",
      "unit-converter",
      "word-counter",
    ],
    seo: {
      title: "Age Calculator — Calculate Your Exact Age Free | AHADEX Tools",
      description:
        "Calculate your exact age in years, months, days, hours, and more. Free, private, no sign-up. Runs entirely in your browser.",
      ogImage: "/images/og/tools/age-calculator-og.jpg",
    },
  },

  {
    id: "date-difference",
    slug: "date-difference",
    name: "Date Difference Calculator",
    category: "calculators",
    path: "/tools/date-difference",
    icon: "/images/icons/calculator-tools.svg",
    description: "Find the exact time between two dates in days, weeks, and more.",
    longDescription:
      "Enter two dates and see exactly how many years, months, days, hours, and minutes separate them. Also shows total days, business days (excluding weekends), and weeks. Ideal for planning events, tracking project durations, calculating deadlines, or working out anniversaries. Everything runs in your browser — no data stored or sent anywhere.",
    keywords: ["date", "difference", "days", "between", "duration"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Full breakdown",
        description: "Years, months, days, hours, minutes.",
      },
      {
        title: "Business days",
        description: "Exclude weekends with one toggle.",
      },
      {
        title: "Total units",
        description: "See total days, weeks, hours, and seconds.",
      },
      {
        title: "Fast and accurate",
        description: "Handles leap years and DST automatically.",
      },
      {
        title: "No upload",
        description: "All processing is local.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Pick start date",
        description: "Choose the first date.",
      },
      {
        step: 2,
        title: "Pick end date",
        description: "Choose the second date.",
      },
      {
        step: 3,
        title: "Toggle business days",
        description: "Enable to exclude weekends.",
      },
      {
        step: 4,
        title: "See breakdown",
        description: "View all units at once.",
      },
      {
        step: 5,
        title: "Reset",
        description: "Try another pair of dates.",
      },
    ],
    faq: [
      {
        question: "Are both dates included?",
        answer:
          "The result is the difference between the two dates — end date minus start date.",
      },
      {
        question: "How are business days counted?",
        answer:
          "Weekends (Saturday and Sunday) are excluded when the toggle is on.",
      },
      {
        question: "Are public holidays excluded?",
        answer:
          "No — only weekends are excluded. Public holidays are region-specific.",
      },
      {
        question: "Does it handle time zones?",
        answer:
          "Dates are compared in your local time zone. For date-only, time zones don't affect the result.",
      },
      {
        question: "Is my data private?",
        answer:
          "Yes — nothing is stored or sent.",
      },
      {
        question: "Is it free?",
        answer: "Yes, no sign-up.",
      },
    ],
    relatedTools: [
      "age-calculator",
      "percentage-calculator",
      "unit-converter",
      "bmi-calculator",
      "word-counter",
    ],
    seo: {
      title: "Date Difference Calculator — Days Between Dates | AHADEX Tools",
      description:
        "Calculate the difference between two dates online. Days, weeks, business days, and more. Free, private, no sign-up.",
      ogImage: "/images/og/tools/date-difference-og.jpg",
    },
  },

  {
    id: "unit-converter",
    slug: "unit-converter",
    name: "Unit Converter",
    category: "calculators",
    path: "/tools/unit-converter",
    icon: "/images/icons/calculator-tools.svg",
    description: "Convert between length, weight, temperature, and more units.",
    longDescription:
      "Convert between dozens of units across categories: length (m, ft, inch, cm), weight (kg, lb, oz), temperature (°C, °F, K), area, volume, speed, time, and data (bytes, KB, MB). Pick a category, enter a value, and see all equivalent units at once. Perfect for cooking, travel, engineering, and everyday calculations. Fully offline — no upload, no tracking, no sign-up.",
    keywords: ["unit", "convert", "length", "weight", "temperature"],
    popular: true,
    newTool: false,
    features: [
      {
        title: "Multiple categories",
        description: "Length, weight, temp, area, volume, speed, time, data.",
      },
      {
        title: "All units at once",
        description: "See the value in every unit simultaneously.",
      },
      {
        title: "Live conversion",
        description: "Result updates as you type.",
      },
      {
        title: "High precision",
        description: "Up to 6 decimal places where relevant.",
      },
      {
        title: "No upload",
        description: "Everything runs in your browser.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Pick a category",
        description: "Choose Length, Weight, Temperature, etc.",
      },
      {
        step: 2,
        title: "Enter value",
        description: "Type the number you want to convert.",
      },
      {
        step: 3,
        title: "Pick source unit",
        description: "Select the unit you're converting from.",
      },
      {
        step: 4,
        title: "See all results",
        description: "Every equivalent unit shows at once.",
      },
      {
        step: 5,
        title: "Copy",
        description: "Click any result to copy it.",
      },
    ],
    faq: [
      {
        question: "Which units are supported?",
        answer:
          "Length, weight, temperature, area, volume, speed, time, and digital data — dozens of units total.",
      },
      {
        question: "Does it handle Celsius to Fahrenheit?",
        answer:
          "Yes — and Kelvin, Rankine, and Réaumur too.",
      },
      {
        question: "Are the conversions accurate?",
        answer:
          "Yes — standard SI and imperial conversion factors are used.",
      },
      {
        question: "Can I convert multiple units at once?",
        answer:
          "Yes — all units in the category update simultaneously.",
      },
      {
        question: "Is it private?",
        answer:
          "Yes, everything is local.",
      },
      {
        question: "Is it free?",
        answer: "Yes, unlimited use.",
      },
    ],
    relatedTools: [
      "percentage-calculator",
      "bmi-calculator",
      "age-calculator",
      "date-difference",
      "word-counter",
    ],
    seo: {
      title: "Unit Converter — Length, Weight, Temperature Free | AHADEX Tools",
      description:
        "Convert units online for free. Length, weight, temperature, area, volume, speed, and data. Runs entirely in your browser.",
      ogImage: "/images/og/tools/unit-converter-og.jpg",
    },
  },

  {
    id: "bmi-calculator",
    slug: "bmi-calculator",
    name: "BMI Calculator",
    category: "calculators",
    path: "/tools/bmi-calculator",
    icon: "/images/icons/calculator-tools.svg",
    description: "Calculate your Body Mass Index (BMI) with metric or imperial units.",
    longDescription:
      "Calculate your Body Mass Index (BMI) using either metric (kg/cm) or imperial (lb/in) units. See your BMI value, category (underweight, normal, overweight, obese), and the healthy weight range for your height. BMI is a rough screening tool — a proper health assessment requires a doctor. All calculations run locally in your browser; nothing is stored or sent anywhere.",
    keywords: ["bmi", "body", "mass", "index", "health"],
    popular: false,
    newTool: false,
    features: [
      {
        title: "Metric & imperial",
        description: "Switch between kg/cm and lb/in freely.",
      },
      {
        title: "Category display",
        description: "See whether your BMI is low, normal, or high.",
      },
      {
        title: "Healthy range",
        description: "Find the healthy weight for your height.",
      },
      {
        title: "Live calculation",
        description: "Result updates as you change values.",
      },
      {
        title: "Private",
        description: "Your data never leaves your browser.",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "Choose units",
        description: "Metric (kg/cm) or imperial (lb/in).",
      },
      {
        step: 2,
        title: "Enter height",
        description: "Type your height in the chosen unit.",
      },
      {
        step: 3,
        title: "Enter weight",
        description: "Type your current weight.",
      },
      {
        step: 4,
        title: "See BMI",
        description: "Your BMI and category appear instantly.",
      },
      {
        step: 5,
        title: "Healthy range",
        description: "Check the recommended weight range for your height.",
      },
    ],
    faq: [
      {
        question: "What is BMI?",
        answer:
          "Body Mass Index — a simple ratio of weight to height used as a rough health indicator.",
      },
      {
        question: "Is BMI accurate for everyone?",
        answer:
          "No. BMI doesn't distinguish muscle from fat. Athletes and children need other assessments.",
      },
      {
        question: "What are the BMI categories?",
        answer:
          "Under 18.5 underweight; 18.5–24.9 normal; 25–29.9 overweight; 30+ obese.",
      },
      {
        question: "Should I use this for medical decisions?",
        answer:
          "No. Always consult a healthcare professional for medical advice.",
      },
      {
        question: "Is my data private?",
        answer:
          "Yes — nothing is uploaded or stored.",
      },
      {
        question: "Is it free?",
        answer: "Yes, no sign-up.",
      },
    ],
    relatedTools: [
      "percentage-calculator",
      "unit-converter",
      "age-calculator",
      "date-difference",
      "word-counter",
    ],
    seo: {
      title: "BMI Calculator — Body Mass Index Free | AHADEX Tools",
      description:
        "Calculate your BMI online for free. Metric and imperial units, healthy weight range, instant results. Runs entirely in your browser.",
      ogImage: "/images/og/tools/bmi-calculator-og.jpg",
    },
  },
];

/* ============================================================
 * LOOKUPS
 * ============================================================ */

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((tool) => tool.category === category);
}

export function getPopularTools(limit = 6): Tool[] {
  return tools.filter((tool) => tool.popular).slice(0, limit);
}

export function getRelatedTools(
  currentId: string,
  relatedIds: string[],
  limit = 6
): Tool[] {
  return relatedIds
    .filter((id) => id !== currentId)
    .map((id) => getToolById(id))
    .filter((t): t is Tool => Boolean(t))
    .slice(0, limit);
}

export function searchTools(query: string): Tool[] {
  const q = query.trim().toLowerCase();
  if (!q) return tools;

  return tools.filter((tool) => {
    const haystack = [
      tool.name,
      tool.description,
      tool.category,
      ...tool.keywords,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export const totalToolCount = tools.length; // 42