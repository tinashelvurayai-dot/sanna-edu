import { Award } from "lucide-react";
import logo from "@/assets/edusanna-logo.png.asset.json";

export interface CertificateData {
  studentName: string;
  courseName: string;
  level: "certificate" | "diploma";
  date: string;
  certificateId: string;
}

export function CertificatePreview({ data }: { data: CertificateData }) {
  const levelLabel = data.level === "diploma" ? "Diploma" : "Certificate";
  return (
    <div className="cert-print-area bg-white">
      <div className="relative mx-auto w-full max-w-3xl aspect-[1.414/1] border-[10px] border-blue-900 p-2">
        <div className="h-full w-full border-2 border-amber-400 p-6 sm:p-10 flex flex-col items-center text-center bg-gradient-to-br from-white to-blue-50">
          <img src={logo.url} alt="Edusanna" className="w-16 h-16 object-contain mb-2" />
          <h2 className="text-2xl font-black tracking-wide text-blue-900">EDUSANNA</h2>
          <p className="text-[11px] uppercase tracking-[0.3em] text-blue-500 mb-4">Elevate Your Mind</p>

          <p className="text-sm uppercase tracking-[0.25em] text-amber-600 font-semibold">
            {levelLabel} of Completion
          </p>
          <p className="text-xs text-blue-600 mt-3">This is proudly presented to</p>
          <p className="text-3xl sm:text-4xl font-black text-blue-900 my-2 font-serif">
            {data.studentName || "Student Name"}
          </p>
          <p className="text-xs text-blue-600">for successfully completing</p>
          <p className="text-lg sm:text-xl font-bold text-purple-700 mt-1">
            {data.courseName || "Course Name"}
          </p>

          <div className="flex-1" />

          <div className="w-full flex items-end justify-between mt-6">
            <div className="text-left">
              <div className="w-32 border-t border-blue-300 pt-1 text-xs text-blue-600">Date</div>
              <div className="text-sm font-semibold text-blue-900">{data.date}</div>
            </div>
            <Award className="w-12 h-12 text-amber-500" />
            <div className="text-right">
              <div className="w-32 border-t border-blue-300 pt-1 text-xs text-blue-600 ml-auto">Authorized</div>
              <div className="text-sm font-semibold text-blue-900 italic">Edusanna Online Learning</div>
            </div>
          </div>
          <p className="text-[10px] text-blue-400 mt-3">
            Verification ID: <span className="font-mono">{data.certificateId || "EDU-XXXX-XXXX"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
