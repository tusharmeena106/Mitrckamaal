"use client";

import { useMemo, useState } from "react";
import { semesters } from "@/data/semesters";
import { FileCategory } from "@/data/resources";
import ResourceList from "@/components/ResourceList";
import AdSlot from "@/components/AdSlot";

type Props = {
  category: FileCategory;
  emoji: string;
  title: string;
  description: string;
};

export default function CategoryPageContent({ category, emoji, title, description }: Props) {
  const [semesterId, setSemesterId] = useState(semesters[0]?.id ?? 1);
  const [subject, setSubject] = useState("General");

  const currentSemester = useMemo(
    () => semesters.find((s) => s.id === semesterId),
    [semesterId]
  );

  const subjectOptions = useMemo(() => {
    if (!currentSemester) return ["General"];
    const names =
      category === "file"
        ? currentSemester.practicalFiles
        : currentSemester.subjects.map((s) => s.name);
    return ["General", ...names];
  }, [currentSemester, category]);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 md:px-10">
      <div className="mx-auto max-w-3xl animate-fade-in">
        <h1 className="text-4xl font-bold text-blue-700">
          {emoji} {title}
        </h1>
        <p className="mt-2 text-gray-700">{description}</p>

        <AdSlot variant="banner" className="my-6" />

        <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-lg sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-600">Semester</label>
            <select
              value={semesterId}
              onChange={(e) => {
                setSemesterId(Number(e.target.value));
                setSubject("General");
              }}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-black outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              {semesters.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-600">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-black outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              {subjectOptions.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">
          <ResourceList semesterId={semesterId} subject={subject} category={category} />
        </div>
      </div>
    </div>
  );
}
