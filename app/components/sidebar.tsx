"use client";

export default function Sidebar({
  search,
  setSearch,
  activeNoteId,
  setActiveNoteId,
  setIsCreating,
  notes,
}) {
  return (
    <aside className="absolute top-0 left-0 bottom-0 w-1/3 overflow-y-scroll overflow-x-hidden p-2 border-r border-gray-300">
      <button
        onClick={() => setIsCreating(true)}
        className="p-2 text-sm font-bold border border-gray-600 rounded-lg w-full"
      >
        ➕ 새로운 노트
      </button>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="노트를 검색해보세요"
        className="w-full p-2 border rounded-md border-gray-600 mt-2"
      />
      <ul className="mt-2 flex flex-col gap-2">
        {notes.map((note) => (
          <li key={note.id}>
            <button
              className={`${
                activeNoteId === note.id ? "font-bold" : ""
              } overflow-hidden text-ellipsis whitespace-nowrap`}
              onClick={() => {
                setIsCreating(false);
                setActiveNoteId(note.id);
              }}
            >
              {note.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
