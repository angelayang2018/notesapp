import "./App.css";
import uuid from "react-uuid";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const [darkMode, setDarkMode] = useState(false);

  const [searchText, setSearchText] = useState("");

  return (
    <div className={`App ${darkMode && 'darkmode-app'}`}>
      <Sidebar
        notes={notes.filter(
          (note) =>
            note.body.toLowerCase().includes(searchText.toLowerCase()) ||
            note.title.toLowerCase().includes(searchText.toLowerCase())
        )}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        darkMode={darkMode}
      />
      <Main
        onSearchText={setSearchText}
        activeNote={getActiveNote()}
        onDeleteNote={onDeleteNote}
        onUpdateNote={onUpdateNote}
        onToggleMode={setDarkMode}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
