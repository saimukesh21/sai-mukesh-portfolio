import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-7 font-body text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Cloud infrastructure · security · automation</p>
      </div>
    </footer>
  );
}
