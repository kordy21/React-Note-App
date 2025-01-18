import React from 'react'
import NoteCard from './NoteCard'
import Loader from './Loader'

function NoteCardContainer({notes,loading}) {
  return (
    <div className='container'>
        <div className='note-has-grid row'>
            {/* <h4>Note Cart Container</h4> */}
            {loading && <Loader loading={loading}/>}
            {notes.map(note =><NoteCard key={note.id} note={note} />)}
            {/* <NoteCard /> */}
        </div>
    </div>
  )
}

export default NoteCardContainer