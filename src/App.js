import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src="/rs_color_logo_512.png" className="App-logo" alt="logo" />
        <h2>roguescience<span className="rogueGreen">.</span>net</h2>
        <div class="down-arrow"></div>
      </header>

      <body className="App-body">
        <h1>All facts, no fiction.</h1>

        <article>
          <h2>Rap</h2>
          <p>Rogue Science is a rap duo consisting of El Jefe and ChefBoyRG. Our passion is lyrically focused boom bap rap - inspired by hip hop, science, anime, fighting games, and various other nerd content.</p>
          <p>Music available on all major streaming platforms, such as <a href="https://open.spotify.com/artist/1iMkfPvX6rUZs7ro6xq23p">Spotify</a> and <a href="https://soundcloud.com/roguescience/albums">SoundCloud</a>.</p> 
          <p>"Freestyle Friday" LP available now!</p>
          <p>"Acoustic Formulas" EP coming soon!</p>
          <p>"Lab Sessions" EP featuring MIL Will M coming soon!</p>
          <p>"Freestyle Friday Volume 2" LP coming soon!</p>
        </article>

        <article>
          <h2>Podcast</h2>
          <p>Rogue Science produces the Freestyle Friday Podcast, live every Friday on Twitch and <a href="https://youtube.com/@RogueScience">Youtube</a>. "The Podcast Where We Learn to Freestyle With Our Friends." A one of a kind show where the hosts and guests rap entirely off the dome, LIVE. </p>
        </article>

        <article>
          <h2>FGC</h2>
          <p>Rogue Science is part of Team Curious, competing and commentating in the South Florida Miami scene. Street Fighter 6, Dragonball FighterZ.</p>
        </article>

        <article>
          <h2>Research</h2>
          <p>Rogue Science conducts amateur research in the fields of psychology, neuroscience, computer science, and electrical engineering.</p>
        </article>
      </body>

      <footer className="App-footer">
        <h2>Contact Us</h2>
        <dl>
          <dt>El Jefe: <a href="mailto:eljefeonthemic@gmail.com">eljefeonthemic@gmail.com</a></dt>
          <dt>ChefBoyRG: <a href="mailto:chefboyrgtherapper@gmail.com">chefboyrgtherapper@gmail.com</a></dt>
        </dl>
      </footer>
    </div>
  );
}

export default App;
