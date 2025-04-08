import Link from "next/link";

export default function TestPage() {
    return (
      <div>
        <h1>Welcome to the Test Page</h1>
        <p><Link href="/test2">Otvori me</Link>This is a new page in your Next.js app.</p>
        
      </div>
    );
  }