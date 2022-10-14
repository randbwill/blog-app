import React from 'react';
import recipeLogo from './recipe.jpg';
import catLogo from './cat.jpg';
import techLogo from './tech.jpg';

function home(){
    return (
        <main>
        <section id="top">
            <h1>Your Journey Starts Here</h1>
        </section>
        <section>
            <div class="section">
                <div class="card">
                  <h2> Recipes</h2>
                  <img src={recipeLogo} alt="recipe" width="150 vw"></img>
                </div>
                <div class="card">
                   <h2> Cats</h2>
                   <img src={catLogo} alt="cat" width="150 vw"></img>
                </div>
                <div class="card">
                    <h2>Tech</h2>
                    <img src={techLogo} alt="cat" width="150 vw"></img>
                </div>
            </div>
        </section>
            </main>
    );
};
export default home;