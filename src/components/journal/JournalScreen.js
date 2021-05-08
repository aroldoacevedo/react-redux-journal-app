import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            
            {/* recuadro de la izquierda */}
            <Sidebar />

            <main>
                
                {/*<NothingSelected />*/}

                {/* contenido de la nota  */}
                <NoteScreen />
                
            </main>

        </div>
    )
}
