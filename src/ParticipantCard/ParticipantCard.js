import React from 'react'

export default function ParticipantCard({participant}) {

    return (
        <div>
            <img alt="profile" src={participant.member.photo ? participant.member.photo.thumb_link : ""} /> 
            <div>
                {participant.member.name}
            </div>
            {participant.member.event_context.host ? <div>Da Host</div> : <div> Member </div>} 

        </div>
    )
}