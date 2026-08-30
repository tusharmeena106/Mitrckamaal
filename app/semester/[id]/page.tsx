type Props = {
  params: Promise<{ id: string }>;
};

import { semesters } from "@/data/semesters";
import SubjectCard from "@/components/SubjectCard";
import PracticalFileCard from "@/components/PracticalFileCard";
import AdSlot from "@/components/AdSlot";

export default async function SemesterPage({ params }: Props) {
  const { id } = await params;

  const semester = semesters.find(
    (s) => s.id === Number(id)
  );

  if (!semester) {
    return <h1>Semester Not Found</h1>;
  }

  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-10 text-black animate-fade-in">
        {semester.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {semester.subjects.map((subject) => (
          <SubjectCard key={subject.name} semesterId={semester.id} subject={subject} />
        ))}
      </div>

      <div className="my-10">
        <AdSlot variant="banner" />
      </div>

      <h2 className="text-3xl font-bold text-black mt-10 mb-6">
  Practical Files
</h2>

<div className="grid md:grid-cols-2 gap-6">
  {semester.practicalFiles.map((file) => (
    <PracticalFileCard key={file} semesterId={semester.id} fileName={file} />
  ))}
</div>
    </main>
  );
}
