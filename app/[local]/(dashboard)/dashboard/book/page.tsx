"use client";

import BookList from "@/app/components/BookList";
import BookViewer from "@/app/components/BookViewer";
import { fetchBookUsers } from "@/app/lib/popUp";
import { BookUser, ContactMessage } from "@/types";
import { useEffect, useState } from "react";
export default function BookDashboard() {
  const [bookUsers, setBookUsers] = useState<BookUser[]>([]);
  const [selectedBookUser, setSelectedBookUser] = useState<BookUser | null>(
    null
  );

  useEffect(() => {
    async function loadMessages() {
      const data = await fetchBookUsers();
      setBookUsers(data.users || []);
      setSelectedBookUser((data.users && data.users[0]) || null); // Show first message by default
    }

    loadMessages();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 text-gray-800" >
      <h1 className="text-2xl font-bold mb-4">رسائل التواصل</h1>
      <BookViewer bookUser={selectedBookUser} />
      <BookList bookUsers={bookUsers} onSelect={setSelectedBookUser} />
    </div>
  );
}
