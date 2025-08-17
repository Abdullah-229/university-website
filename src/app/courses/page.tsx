import { supabase } from "@/lib/supabaseClient";

export default async function Courses() {
  const { data: courses, error } = await supabase.from("courses").select("*");

  if (error) {
    return <p className="p-8 text-red-500">Error: {error.message}</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Courses</h1>
      <ul className="space-y-4">
        {courses?.map((course) => (
          <li key={course.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{course.course_no} - {course.title}</h2>
            <p className="text-sm text-gray-500">Credits: {course.credit}</p>
            <p className="text-xs text-gray-400">Created at: {new Date(course.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
