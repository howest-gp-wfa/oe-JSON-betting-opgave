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
/**
 * loads the leagues in list
 */
function LoadLeaguesInList()
{
    
}
/**
 * shows the league logos
 */
function ShowLogos()
{
   
}
/**
 * adds all the events
 */
function AddEvents()
{
    //add button events
    btnOutcome.addEventListener("click",ShowResult);
    btnSave.addEventListener("click", SaveBets);
    //add list event
    slcLeagues.addEventListener("change", ShowGamesInLeague);
    //add to logos
    AddEventsToLogos();
}

/**
 * adds the events to the logos
 */
function AddEventsToLogos()
{
  
}
/**
 * Shows the games by buildong the table
 * and passing to div
 */
function ShowGamesInLeague()
{
   
}

/**
 * builds the game table
 * @param {*} gamesInLeague 
 */
function BuildTableFromGames(gamesInLeague)
{
    
}
/**
 * builds the row for the games table
 * @param {*} game 
 */
function BuildGamesTableRow(game)
{
  
}


/**
 * show the results 
 * from random generation
 * Calculate win 
 */
function ShowResult()
{

}
/**
 * add the bets to the array
 * 
 */
function SaveBets()
{

}


