
import './style.css'
import React from 'react';

function Page() {
    return (
        <div>
            <section class="about" id="about">
                <h1 class="about__header">About Us</h1>
                <p class="about__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, dolorum molestias! Neque, beatae fuga.
                    Deleniti, aperiam eum quam dolores doloribus, perspiciatis dicta optio laudantium tempore soluta rerum, nihil
                    vero exercitationem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem in reiciendis placeat eos
                    totam quasi fuga nemo sequi alias iste, reprehenderit quo odio ullam omnis sunt! Omnis, sit recusandae?
                    Qui?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas perferendis laborum, quam, architecto,
                    iusto earum alias laboriosam similique corrupti dicta quasi deserunt! Reiciendis esse dolor delectus harum optio
                    veniam?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur amet mollitia dicta blanditiis?
                    Ratione voluptatum suscipit nesciunt excepturi perferendis doloremque aperiam, neque commodi at impedit iste
                    distinctio nulla ipsam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum numquam dolorum
                    asperiores, consequuntur eveniet dolores quaerat adipisci. Impedit, deserunt id aliquid fugit, doloremque,
                    perspiciatis tempora voluptatibus explicabo provident eos odio!Lorem
                </p>
            </section>
            <section class="resources" id="resources">
                <h1 class="resources__header">Resources</h1>
            </section>
            <section class="events" id="events">
                <h1 class="events__header">Events</h1>
            </section>
            <section class="join" id="join">
                <h1 class="join__header">Join Our Community</h1>
                <p class="join__content">A one liner to be given by dhiraj or lurid or anam because i suck</p>
                <div class="row__join">
                    <a href="#" class="media">
                        <i class="fa-brands fa-twitter fa-2x"></i>
                    </a>
                    <a href="#" class="media">
                        <i class="fa-brands fa-discord fa-2x"></i>
                    </a>
                    <a href="#" class="media">
                        <i class="fa-brands fa-youtube fa-2x"></i>
                    </a>
                </div>
            </section>
        </div>
    )
}
export default Page;