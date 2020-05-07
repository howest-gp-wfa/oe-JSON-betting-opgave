"use strict";

//declare global vars here
var games;
var slcLeagues;
//divs
var divLeagues;
var divGames;
var divBets;
var divResults;
//btns
var btnSave;
var btnOutcome;
//tbls
var tblLeagues;
var tblGames;
var tblBets;
var tblOutcome;

//wait for document load
window.addEventListener('load',Initialize);
/**
 * Main program
 */
function Initialize()
{
    //parse JSON;
    games  = JSON.parse(fixtures);

    BindElements();
    LoadLeaguesInList();
    ShowLogos();
    AddEvents();
}

/**
 * Binds the elements
 */
function BindElements()
{
    slcLeagues  = document.querySelector("#slcleagues");
    //divs
    divLeagues = document.querySelector("#divleagues");
    divGames = document.querySelector("#divgames");
    divBets = document.querySelector("#divbets");
    divResults = document.querySelector("#divresults");
    //btns
    btnSave  = document.querySelector("#btnsave");
    btnOutcome  = document.querySelector("#btnoutcome");
}
