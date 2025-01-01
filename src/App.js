import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src="/rs_color_logo_512.png" className="App-logo" alt="logo" />
        <h2>roguescience<span className="rogueGreen">.</span>net</h2>
        <p>Rap <span className="rogueLightBlue">|</span> Live Stream <span className="rogueLightBlue">|</span> FGC <span className="rogueLightBlue">|</span> Research</p>
        <div>
          <a href="https://soundcloud.com/roguescience"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Antu_soundcloud.svg" alt="SoundCloud" className="logo"></img></a>
          <a href="https://apple.co/3SlLmEB"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg" alt="Apple Music" className="logo"></img></a>
          <a href="https://open.spotify.com/artist/1iMkfPvX6rUZs7ro6xq23p?si=Ne3MWffiQh61hWQhet56og"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Spotify_1.png" alt="Apple Music" className="logo"></img></a>
          <a href="https://www.instagram.com/rogue.science/"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="logo"></img></a>
          <a href="https://www.youtube.com/@RogueScience?sub_confirmation=1"><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/YouTube_social_white_circle_%282017%29.svg" alt="Youtube" className="logo"></img></a>
          <a href="https://www.twitch.tv/roguesciencelive"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg" alt="Twitch" className="logo"></img></a>
          <a href="https://x.com/roguescience305"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" className="logo"></img></a>
          <a href="https://discord.com/invite/gNmSFxYNMD"><img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/653714c174fc6c8bbea73caf_636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" alt="Discord" className="logo"></img></a>
        </div>
        <div class="down-arrow"></div>
      </header>

      <body className="App-body">
        <h1>All facts, no fiction.</h1>

        <article>
          <h2>Rap</h2>
          <p>"Freestyle Friday Volume 2" LP coming soon!</p>
          <p>"Lab Sessions" EP featuring MIL Will M <a href="https://distrokid.com/hyperfollow/roguescience/lab-sessions">available now!</a></p>
          <p>"Acoustic Formulas" EP <a href="https://distrokid.com/hyperfollow/roguescience/acoustic-formulas">available now!</a></p>
          <p>"Freestyle Friday" LP <a href="https://soundcloud.com/roguescience/sets/freestyle-friday">available now!</a></p>
          <p>Rogue Science is a rap duo consisting of El Jefe and ChefBoyRG. Our passion is lyrically focused boom bap rap - inspired by hip hop, science, anime, fighting games, and various other nerd content. Music available on all major streaming platforms, such as Spotify, Apple Music, and SoundCloud.</p> 
        </article>

        <article>
          <h2>Live Stream</h2>
          <p>"FREESTYLE FRIDAY LIVE" episodes <a href="https://www.youtube.com/playlist?list=PL7U3XCbSdGOVjUUKH9Jn6IdJjiCew1sVb">available now!</a></p>
          <p>Rogue Science presents "FREESTYLE FRIDAY LIVE", live every Friday on Twitch and Youtube. "The Show Where We Learn to Freestyle With Our Friends." A one of a kind show where the hosts and guests rap entirely off the dome, LIVE. </p>
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
