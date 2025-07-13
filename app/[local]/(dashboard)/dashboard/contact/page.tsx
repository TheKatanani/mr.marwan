'use client';

import QuickAnswersEditor from "@/app/components/contact/QuickAnswersEditor";
import MessageList from "@/app/components/MessageList";
import MessageViewer from "@/app/components/MessageViewer";
import { fetchContactMessages } from "@/app/lib/contact";
import { ContactMessage } from "@/types"; 
import { useEffect, useState } from "react"; 
export default function MessagesDashboard() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  
  useEffect(() => {
    async function loadMessages() {
      const data = await fetchContactMessages();
      setMessages(data);
      setSelectedMessage(data[0] || null); // Show first message by default
    }

    loadMessages();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 text-gray-800" >
      <QuickAnswersEditor/>
      <h1 className="text-2xl font-bold mb-4">رسائل التواصل</h1>
      <MessageViewer message={selectedMessage} />
      <MessageList messages={messages} onSelect={setSelectedMessage} />
    </div>
  );
}
