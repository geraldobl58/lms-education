import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div>Hello</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
