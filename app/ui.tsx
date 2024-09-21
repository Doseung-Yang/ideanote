"use client";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import NewNote from "./components/new-note";
import { useEffect, useState } from "react";
import NoteViewer from "./components/note-viewer";
import EmptyNote from "./components/empty-note";
import { Database } from "@/types_db";
import { supabase } from "@/utils/supabase";

export default function UI() {
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [notes, setNotes] = useState<
    Database["public"]["Tables"]["note"]["Row"][]
  >([]);
  const [search, setSearch] = useState("");

  const fetchNotes = async () => {
    const { data, error } = await supabase
      .from("note")
      .select("*")
      .ilike("title", `%${search}%`);
    if (error) {
      alert(error.message);
      return;
    }
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [search]);

  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <Sidebar
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
          setIsCreating={setIsCreating}
          search={search}
          setSearch={setSearch}
          notes={notes}
        />
        {isCreating ? (
          <NewNote
            fetchNotes={fetchNotes}
            setActiveNoteId={setActiveNoteId}
            setIsCreating={setIsCreating}
          />
        ) : activeNoteId ? (
          <NoteViewer
            note={notes.find((note) => note.id === activeNoteId)}
            setActiveNoteId={setActiveNoteId}
            fetchNotes={fetchNotes}
          />
        ) : (
          <EmptyNote />
        )}
      </div>
    </main>
  );
}
