var row1 = document.getElementById("container2"); 
function MatchDetails(match, matchNo, date, team1, team1Score, team2, team2Score, result){
    this.match = match;
    this.matchNo = matchNo;
    this.date = date;
    this.team1 = team1;
    this.team1Score = team1Score;
    this.team2 = team2;
    this.team2Score = team2Score;
    this.result = result;
}

final = new MatchDetails("Final", 55, "29 Jun 2024", "India", "176/7 (20)", "South Africa", "169/8 (20)", "IND Win by 7 runs");
semiFinal2 = new MatchDetails("Semi-final", 54, "27 Jun 2024", "India", "171/7 (20)", "England", "103 (16.4)", "IND Win by 68 runs");
semiFinal1 = new MatchDetails("Semi-final", 53, "27 Jun 2024", "Afghanistan", "56 (11.5)", "South Africa", "60/1 (8.5)", "SA Win by 9 Wickets (67 balls left)");
superEight12 = new MatchDetails("Super-Eight", 52, "25 Jun 2024", "Afghanistan", "115/5 (20)", "Bangladesh", "105 (17.5 / 19)", "AFG Win by 8 runs (Target 114 DLS Method)");
superEight11 = new MatchDetails("Super-Eight", 51, "24 Jun 2024", "India", "205/5 (20)", "Australia", "181/7 (20)", "IND Win by 24 runs");
superEight10 = new MatchDetails("Super-Eight", 50, "24 Jun 2024", "West Indies", "135/8 (20)", "South Africa", "124/7 (16.1 / 17)", "SA Win by 3 wickets (5 balls left) (Target 123 DLS Method)");
superEight9 = new MatchDetails("Super-Eight", 49, "23 Jun 2024", "United States", "115 (18.5)", "England", "117/0 (9.4)", "ENG Win by 10 wickets (62 balls left)");
superEight8 = new MatchDetails("Super-Eight", 48, "23 Jun 2024", "Afghanistan", "148/6 (20)", "Australia", "127 (19.2)", "AFG Win by 21 runs");
superEight7 = new MatchDetails("Super-Eight", 47, "22 Jun 2024", "India", "196/5 (20)", "Bangladesh", "146/8 (20)", "IND Win by 50 runs");
superEight6 = new MatchDetails("Super-Eight", 46, "22 Jun 2024", "United States", "128 (19.5)", "West Indies", "130/1 (10.5)", "WI Win by 9 wickets (55 balls left)");
superEight5 = new MatchDetails("Super-Eight", 45, "21 Jun 2024", "South Africa", "163/6 (20)", "England", "156/6 (20)", "SA Win by 7 runs");
superEight4 = new MatchDetails("Super-Eight", 44, "21 Jun 2024", "Bangladesh", "140/8 (20)", "Australia", "100/2 (11.2)", "AUS Win by 28 runs (Target 73 DLS Method)");
superEight3 = new MatchDetails("Super-Eight", 43, "20 Jun 2024", "India", "181/8 (20)", "Afghanistan", "134 (20)", "IND Win by 47 runs");
superEight2 = new MatchDetails("Super-Eight", 42, "20 Jun 2024", "West Indies", "180/4 (20)", "England", "181/2 (17.3)", "ENG Win by 8 wickets (15 balls left)");
superEight1 = new MatchDetails("Super-Eight", 41, "19 Jun 2024", "South Africa", "194/4 (20)", "United States", "176/6 (20)", "SA Win by 18 runs");

row1.innerHTML += `<div class="container3">
                    <div class="left">
                    <div class="div1"><p class="left_para">${final.match}: T20 ${final.matchNo} of 55</p><p class="right_para">${final.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/india.png" width="30px" height="30px"><span style="margin-right: 200px;">${final.team1}</span></p><p class="right_para">${final.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/south_africa.png" width="30px" height="30px"><span style="margin-right: 150px;">${final.team2}</span></p><p class="right_para">${final.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${final.result}</div>
                    </div>
                    <div class="right">
                    <div class="div1"><p class="left_para">${semiFinal2.match}: T20 ${semiFinal2.matchNo} of 55</p><p class="right_para">${semiFinal2.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/india.png" width="30px" height="30px"><span style="margin-right: 200px;">${semiFinal2.team1}</span></p><p class="right_para">${semiFinal2.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/england.png" width="30px" height="30px"><span style="margin-right: 180px;">${semiFinal2.team2}</span></p><p class="right_para">${semiFinal2.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${semiFinal2.result}</div>
                    </div>
                   </div>
                   <div class="container3">
                    <div class="left">
                    <div class="div1"><p class="left_para">${semiFinal1.match}: T20 ${semiFinal1.matchNo} of 55</p><p class="right_para">${semiFinal1.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/afghanistan.png" width="30px" height="30px"><span style="margin-right: 155px;">${semiFinal1.team1}</span></p><p class="right_para">${semiFinal1.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/south_africa.png" width="30px" height="30px"><span style="margin-right: 150px;">${semiFinal1.team2}</span></p><p class="right_para">${semiFinal1.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${semiFinal1.result}</div>
                    </div>
                    <div class="right">
                    <div class="div1"><p class="left_para">${superEight12.match}: T20 ${superEight12.matchNo} of 55</p><p class="right_para">${superEight12.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/afghanistan.png" width="30px" height="30px"><span style="margin-right: 155px;">${superEight12.team1}</span></p><p class="right_para">${superEight12.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/bangladesh.png" width="30px" height="30px"><span style="margin-right: 150px;">${superEight12.team2}</span></p><p class="right_para">${superEight12.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight12.result}</div>
                    </div>
                   </div>
                   <div class="container3">
                    <div class="left">
                    <div class="div1"><p class="left_para">${superEight11.match}: T20 ${superEight11.matchNo} of 55</p><p class="right_para">${superEight11.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/india.png" width="30px" height="30px"><span style="margin-right: 200px;">${superEight11.team1}</span></p><p class="right_para">${superEight11.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/australia.png" width="30px" height="30px"><span style="margin-right: 175px;">${superEight11.team2}</span></p><p class="right_para">${superEight11.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight11.result}</div>
                    </div>
                    <div class="right">
                    <div class="div1"><p class="left_para">${superEight10.match}: T20 ${superEight10.matchNo} of 55</p><p class="right_para">${superEight10.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/west_indies.png" width="30px" height="30px"><span style="margin-right: 155px;">${superEight10.team1}</span></p><p class="right_para">${superEight10.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/south_africa.png" width="30px" height="30px"><span style="margin-right: 135px;">${superEight10.team2}</span></p><p class="right_para">${superEight10.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight10.result}</div>
                    </div>
                   </div>
                   <div class="container3">
                    <div class="left">
                    <div class="div1"><p class="left_para">${superEight9.match}: T20 ${superEight9.matchNo} of 55</p><p class="right_para">${superEight9.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/usa.png" width="30px" height="30px"><span style="margin-right: 140px;">${superEight9.team1}</span></p><p class="right_para">${superEight9.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/england.png" width="30px" height="30px"><span style="margin-right: 170px;">${superEight9.team2}</span></p><p class="right_para">${superEight9.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight9.result}</div>
                    </div>
                    <div class="right">
                    <div class="div1"><p class="left_para">${superEight8.match}: T20 ${superEight8.matchNo} of 55</p><p class="right_para">${superEight8.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/afghanistan.png" width="30px" height="30px"><span style="margin-right: 145px;">${superEight8.team1}</span></p><p class="right_para">${superEight8.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/australia.png" width="30px" height="30px"><span style="margin-right: 170px;">${superEight8.team2}</span></p><p class="right_para">${superEight8.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight8.result}</div>
                    </div>
                   </div>
                   <div class="container3">
                    <div class="left">
                    <div class="div1"><p class="left_para">${superEight7.match}: T20 ${superEight7.matchNo} of 55</p><p class="right_para">${superEight7.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/india.png" width="30px" height="30px"><span style="margin-right: 200px;">${superEight7.team1}</span></p><p class="right_para">${superEight7.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/bangladesh.png" width="30px" height="30px"><span style="margin-right: 155px;">${superEight7.team2}</span></p><p class="right_para">${superEight7.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight7.result}</div>
                    </div>
                    <div class="right">
                    <div class="div1"><p class="left_para">${superEight6.match}: T20 ${superEight6.matchNo} of 55</p><p class="right_para">${superEight6.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/usa.png" width="30px" height="30px"><span style="margin-right: 145px;">${superEight6.team1}</span></p><p class="right_para">${superEight6.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/west_indies.png" width="30px" height="30px"><span style="margin-right: 155px;">${superEight6.team2}</span></p><p class="right_para">${superEight6.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight6.result}</div>
                    </div>
                   </div>
                   <div class="container3">
                    <div class="left">
                    <div class="div1"><p class="left_para">${superEight5.match}: T20 ${superEight5.matchNo} of 55</p><p class="right_para">${superEight5.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/south_africa.png" width="30px" height="30px"><span style="margin-right: 150px;">${superEight5.team1}</span></p><p class="right_para">${superEight5.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/england.png" width="30px" height="30px"><span style="margin-right: 175px;">${superEight5.team2}</span></p><p class="right_para">${superEight5.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight5.result}</div>
                    </div>
                    <div class="right">
                    <div class="div1"><p class="left_para">${superEight4.match}: T20 ${superEight4.matchNo} of 55</p><p class="right_para">${superEight4.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/bangladesh.png" width="30px" height="30px"><span style="margin-right: 155px;">${superEight4.team1}</span></p><p class="right_para">${superEight4.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/australia.png" width="30px" height="30px"><span style="margin-right: 165px;">${superEight4.team2}</span></p><p class="right_para">${superEight4.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight4.result}</div>
                    </div>
                   </div>
                   <div class="container3">
                    <div class="left">
                    <div class="div1"><p class="left_para">${superEight3.match}: T20 ${superEight3.matchNo} of 55</p><p class="right_para">${superEight3.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/india.png" width="30px" height="30px"><span style="margin-right: 200px;">${superEight3.team1}</span></p><p class="right_para">${superEight3.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/afghanistan.png" width="30px" height="30px"><span style="margin-right: 155px;">${superEight3.team2}</span></p><p class="right_para">${superEight3.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight3.result}</div>
                    </div>
                    <div class="right">
                    <div class="div1"><p class="left_para">${superEight2.match}: T20 ${superEight2.matchNo} of 55</p><p class="right_para">${superEight2.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/west_indies.png" width="30px" height="30px"><span style="margin-right: 150px;">${superEight2.team1}</span></p><p class="right_para">${superEight2.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/england.png" width="30px" height="30px"><span style="margin-right: 165px;">${superEight2.team2}</span></p><p class="right_para">${superEight2.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight2.result}</div>
                    </div>
                   </div>
                   <div class="container3">
                    <div class="left">
                    <div class="div1"><p class="left_para">${superEight1.match}: T20 ${superEight1.matchNo} of 55</p><p class="right_para">${superEight1.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/south_africa.png" width="30px" height="30px"><span style="margin-right: 150px;">${superEight1.team1}</span></p><p class="right_para">${superEight1.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/usa.png" width="30px" height="30px"><span style="margin-right: 145px;">${superEight1.team2}</span></p><p class="right_para">${superEight1.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight1.result}</div>
                    </div>
                    <div class="right">
                    <div class="div1"><p class="left_para">${superEight8.match}: T20 ${superEight8.matchNo} of 55</p><p class="right_para">${superEight8.date}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/west_indies.png" width="30px" height="30px"><span style="margin-right: 155px;">${superEight8.team1}</span></p><p class="right_para">${superEight8.team1Score}</p></div>
                    <div class="div2"><p class="left_para"><img src="images/south_africa.png" width="30px" height="30px"><span style="margin-right: 135px;">${superEight8.team2}</span></p><p class="right_para">${superEight8.team2Score}</p></div>
                    <div class="div3" style="font-weight: bold">${superEight8.result}</div>
                    </div>
                   </div>`;
// row1.innerHTML += `<div class="left"><div><p>${final.match} : T20 ${final.no} of 55</p><p><img src="images/india.png"> India</p><p><img src="images/south_africa.png"> South Africa</p><p>${final.result}</p></div><div><p>${final.date}</p><p>${final.team1Score}</p><p>${final.team2Score}</p></div></div>`
// row1.innerHTML += `<div class="right"><div><p>${final.match} : T20 ${final.no} of 55</p><p><img src="images/india.png"> India</p><p><img src="images/south_africa.png"> South Africa</p><p>${final.result}</p></div><div><p>${final.date}</p><p>${final.team1Score}</p><p>${final.team2Score}</p></div></div>`