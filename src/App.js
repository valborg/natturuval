import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Náttúruval</h1>
        <h2>A game of unexpected competition</h2>
      </header>
      <div className="App-video">
        <video width="600" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="App-about">
        <h2>About the Event</h2>
        <p>This is a brief description about the event. Here you can add more details about what attendees can expect, the schedule, and any other relevant information.</p>
      </section>
    <section>
    <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">

    <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Boston_terrier_looking_upwards.png" className="card-img-top" alt="boston terrier"/>
        <div className="card-body">
            <h5 className="card-title">Justin Richer</h5>
            <p className="card-text">The main dog behind the project and when he's not out walking he's on the trail of securty breaches.</p>
            <a href="https://bspk.io" className="btn btn-primary">Go for a walk</a>
        </div>
    </div>

    </div>
    <div className="col">
    <div  className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hairy_dragonfly_%28Brachytron_pratense%29_male_close_up.jpg"  className="card-img-top" alt="hairy dragonfly"/>
        <div  className="card-body">
        <h5  className="card-title">Kate Estrop</h5>
        <p  className="card-text">This bug has been buzzing around the look and feel of the project, and possibly even smell.</p>
        </div>
    </div>

    </div>
    <div className="col">
    <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Randwick_bird_of_paradise_001.jpg"  className="card-img-top" alt="is it a bird?"/>
            <div  className="card-body">
            <h5  className="card-title">Valborg Sturludóttir</h5>
            <p  className="card-text">Between fighting dragons and solving sudokus this bird mama tried to catch them all</p>
            </div>
    </div>  

    </div>
    <div className="col">
    <div  className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Giant_Anteater_Santa_Barbara_Zoo_1.jpg"  className="card-img-top" alt="ant eater"/>
        <div  className="card-body">
        <h5  className="card-title">Rökkvi Þór</h5>
        <p  className="card-text">This young man's favorite scientist is David Attenborogh, and he can't wait to tell you facts about animals you've never heard of.</p>
        </div>
    </div>
    </div>
    </div>
    </section>
</div>
  );
}

export default App;