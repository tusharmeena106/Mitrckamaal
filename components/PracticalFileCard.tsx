"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import ResourceList from "@/components/ResourceList";

type Props = {
  semesterId: number;
  fileName: string;
};

export default function PracticalFileCard({ semesterId, fileName }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="animate-slide-up rounded-xl bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:rotate-1 hover:shadow-xl">
      <h3 className="text-xl font-bold text-black">{fileName}</h3>
      <button
        onClick={() => setOpen(true)}
        className="mt-4 rounded bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700 active:scale-95"
      >
        Download File
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title={`${fileName} — Practical File`}>
        <ResourceList semesterId={semesterId} subject={fileName} category="file" />
      </Modal>
    </div>
  );
}
