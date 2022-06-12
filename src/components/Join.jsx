import React from 'react';
import './Join.css';

function Join() {
    return (
        <section class="join" id="join">
            <h1 class="join__header">Join Our Community</h1>
            <p class="join__content">A one liner to be given by dhiraj or lurid or anam because i suck</p>
            <div class="row__join">
                <a href="https://twitter.com/cerrituscoders" class="media">
                    <i class="fa-brands fa-twitter fa-2x"></i>
                </a>
                <a href="https://discord.com/invite/fKakn9kk39/" class="media">
                    <i class="fa-brands fa-discord fa-2x"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCwdeEkNRifkL0tZrTPx85Ug" class="media">
                    <i class="fa-brands fa-youtube fa-2x"></i>
                </a>
            </div>
        </section>
    )
}

export default Join;