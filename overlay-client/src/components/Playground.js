import React from 'react';
import Chat from './Ground/Chat';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import uuidv3 from 'uuid/v3';

// Generate a new playgrondId for every save.



function Playground(props) {
    
    return (
        <div style={{
            // width: '1920px',
            // height: '1080px'        
        }}>

            The id of this Playground is {props.id}
            {/* <DndProvider backend={Backend}>
                <Chat/>
            </DndProvider> */}
        </div>
    );
}

export default Playground;