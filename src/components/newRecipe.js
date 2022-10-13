import {useState} from 'react';
import React from "react";

export function NewRecipe(){
    const [recipe, setRecipe]=useState( {
        title: "",
        ingrediants:"",
        instructions:"",
    });

    function handleSubmit(){
        window.alert(`${recipe.title}`);
    };

    return (
        <main class="d-flex">
            <div class="container">
                <div class="d-flex flex-column flex-sm-shrink-0" id="submitForm" >
                    <div class="container">
                        <div class="border-bottom">
                            <h3>Below enter the new recipe for submission to the collection</h3>
                        </div>
                    </div>
                <div class="card">
                    <form onSubmit={handleSubmit} class="card">
                        <div id="subform" class="col-12">
                            <label>Title</label><br></br>
                            <input value={recipe.title} onChange={(e)=>{setRecipe({...recipe, title: e.target.value})}} placeholder="Title" />
                        </div>
                    <div id="subform">
                        <label>Ingrediants</label><br />
                        <textarea id="ingrediants" placeholder="ingrediants" rows="5" cols="30" class="form-control" value={recipe.ingrediants}
                        onChange={(e)=>{setRecipe({...recipe, ingrediants: e.target.value})}}>
                        </textarea>
                    </div>
                    <div id="subform">
                        <label>Instructions</label><br />
                        <textarea id="instructions" placeholder="instructions" rows="5" cols="30" class="form-control" value={recipe.instructions}
                        onChange={(e)=>{setRecipe({...recipe, instructions: e.target.value})}}>
                        </textarea>
                </div>
                <div id="subform">
                    <br></br>
                    <button class= "w-25 btn btn-primary btn-sm" type="submit">Submit Recipe</button>
                </div>
                    </form>
                </div>
                </div>
            </div>
 </main>

    );

}

export default NewRecipe;
