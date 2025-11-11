import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-screen-sm px-4 flex items-center justify-center">
        <Link href="/login" className="text-primary hover:underline hover:font-semibold transition-all">
          Go to the login page
        </Link>
      </div>
    </div>
  );
}
