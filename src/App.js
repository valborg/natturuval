import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" alt="the leaf" className='col-3'/>
        <p className='col6'>logo name</p>
        <img src="" alt="the leaf" className='col-3'/>
      </header>
      <div className="App-branding">
        <img src="../../assets/NattLockupWithTagline.png"/>
      </div>
      <div className="App-video">
        <video width="600" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="App-about">
        <p><button type="button" className='btn btn-outline-success'>Check it out</button> This is a limited time crowdfunding project so to get your hands on a copy you have to pledge or get someone to do it for you <a href="">here</a></p>
      </section>
    <section>
    <div className="card-group">
    <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Boston_terrier_looking_upwards.png" height="100px" className="card-img-top" alt="boston terrier"/>
        <div className="card-body">
            <h5 className="card-title">Justin Richer</h5>
            <p className="card-text">The main dog behind the project and when he's not out walking he's on the trail of securty breaches.</p>
            <a href="https://bspk.io" className="btn btn-primary">Go safely</a>
        </div>
    </div>
        <div  className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hairy_dragonfly_%28Brachytron_pratense%29_male_close_up.jpg"  className="card-img-top" alt="hairy dragonfly"/>
        <div  className="card-body">
        <h5  className="card-title">Kate Estrop</h5>
        <p  className="card-text">This bug has been buzzing around the look and feel of the project, and possibly even smell.</p>
        <a href="https://kateestrop.com/" className="btn btn-warning">Go bug them</a>
        </div>
        </div>
        <div  className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Randwick_bird_of_paradise_001.jpg"  className="card-img-top" alt="is it a bird?"/>
            <div  className="card-body">
            <h5  className="card-title">Valborg Sturludóttir</h5>
            <p  className="card-text">Between fighting dragons and solving sudokus this bird mama tried to catch them all</p>
            <a href="https://github.com/valborg" className="btn btn-info">Go on a nerdy adventure</a>
            </div>
        </div>  
        <div  className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Giant_Anteater_Santa_Barbara_Zoo_1.jpg"  className="card-img-top" alt="ant eater"/>
            <div  className="card-body">
            <h5  className="card-title">Rökkvi Þór</h5>
            <p  className="card-text">This young man's favorite scientist is David Attenborogh, and he can't wait to tell you facts about animals you've never heard of.</p>
            <a href="" className="btn btn-success">Go on get my game!</a>
            </div>
        </div>
    </div>
    </section>
</div>
  );
}

export default App;