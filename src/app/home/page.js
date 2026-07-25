"use client";

import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  async function onLogOutHandler(e) {
    e.preventDefault();

    const res = await fetch("/api/logout", {
      method: "POST",
    });

    if (res.ok) {
      router.push("/login");
      router.refresh();
    } else {
      alert("logout not successful");
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={onLogOutHandler}>Log out</button>
    </div>
  );
}