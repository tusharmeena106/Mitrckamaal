"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import ResourceList from "@/components/ResourceList";
import { CATEGORY_LABEL, FileCategory } from "@/data/resources";

type Subject = {
  name: string;
  file: boolean;
};

type Props = {
  semesterId: number;
  subject: Subject;
};

export default function SubjectCard({ semesterId, subject }: Props) {
  const [active, setActive] = useState<FileCategory | null>(null);

  const buttons: { category: FileCategory; label: string; className: string }[] = [
    { category: "notes", label: "Notes", className: "bg-blue-600 hover:bg-blue-700" },
    { category: "assignment", label: "Assignment", className: "bg-green-600 hover:bg-green-700" },
  ];
  if (subject.file) {
    buttons.push({ category: "file", label: "File", className: "bg-purple-600 hover:bg-purple-700" });
  }
  buttons.push({ category: "pyq", label: "PYQ", className: "bg-red-600 hover:bg-red-700" });

  return (
    <div className="animate-slide-up rounded-xl bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:rotate-1 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-black">{subject.name}</h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {buttons.map((btn) => (
          <button
            key={btn.category}
            onClick={() => setActive(btn.category)}
            className={`rounded px-4 py-2 text-white transition hover:scale-110 active:scale-95 ${btn.className}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        title={active ? `${subject.name} — ${CATEGORY_LABEL[active]}` : subject.name}
      >
        {active && <ResourceList semesterId={semesterId} subject={subject.name} category={active} />}
      </Modal>
    </div>
  );
}
