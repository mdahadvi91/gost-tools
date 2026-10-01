import { useState, useEffect } from "react";
import { ToolPage } from "@components/tool/ToolPage";
import { DownloadButton } from "@components/tool/DownloadButton";
import { generateQRDataURL, buildVCardString } from "@lib/qrUtils";
import { downloadDataURL } from "@lib/downloadUtils";

export default function VCardQrGenerator() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    if (!firstName.trim()) { setDataUrl(""); return; }
    const content = buildVCardString({ firstName, lastName, phone, email, company, title, website, address });
    generateQRDataURL(content, { size: 600, errorCorrectionLevel: "M" })
      .then(setDataUrl).catch(() => setDataUrl(""));
  }, [firstName, lastName, phone, email, company, title, website, address]);

  const input = "w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-textSecondary/60 focus:outline-none focus:border-aha-cyan/50";

  return (
    <ToolPage
      toolId="vcard-qr-generator"
      workspace={
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">First name *</span>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Jane" className={input} />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Last name</span>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" className={input} />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Phone</span>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+8801712345678" className={input} />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" className={input} />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Company</span>
              <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="ACME Inc." className={input} />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Job title</span>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Designer" className={input} />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Website</span>
              <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://example.com" className={input} />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-white mb-2 block">Address</span>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Dhaka, Bangladesh" className={input} />
            </label>
          </div>

          {dataUrl && (
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <img src={dataUrl} alt="vCard QR" className="w-64 h-64 rounded-xl bg-white p-3" />
              <p className="text-xs text-dark-textSecondary">Scan to add contact</p>
            </div>
          )}
        </div>
      }
      downloadPanel={
        dataUrl ? <DownloadButton onDownload={() => downloadDataURL(dataUrl, "contact-qr.png")} label="Download PNG" /> : null
      }
    />
  );
}