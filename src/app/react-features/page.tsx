import Counter from "@/components/counter";
import TodoList from "@/components/todo";
import ProfileForm from "@/components/profileForm";

export default function ReactFeatures() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">React Features Demo</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Counter />
        <TodoList />
        <div className="md:col-span-2">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
