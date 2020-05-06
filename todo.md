# TODO
ideas for the future, possible extensions, etc. - please [open an issue](https://github.com/covh/cov19de/issues), to add more ideas. Thanks a lot.

Anything here is going to happen probably ONLY IF there is feedback, attention, donations, etc. ...

## more columns
* coloring of the prevalence column
* mortality - but for that I need one more dataset. Already asked.
* error / confidence intervall for the calculated R_eff
  * How to do that? Suggestions please. (For the currently used Reff_4_7(daily) code, see this tweet https://twitter.com/drandreaskruger/status/1256776383642165253 )
  * My current averaging window size is 7 days. What about this: I could do smoothing by 3 and 5 and 7 and 9 and 11 days, and calculate the 4-days-difference quotient for each of those. That would give 5 different estimates for R_eff (which however are increasingly less "fresh / uptodate"). Perhaps that could help to assess the accuracy of the estimate? [Opinions please](https://github.com/covh/cov19de/issues). Thanks.

## more rows - Bundesland
* show also the districts 50km AROUND that Bundesland (below the table at the top, but still linked to other Bundesland pages?)

## more comfort
* also show the aggregating measures (e.g. R_4_7, 14-days-incidence, ...) at each districts plot. 
  * Idea: Perhaps just repeat the table, but only that one line? 
     * Or perhaps even including all 50km-neighbouring areas perhaps?

## more charts
* all 16 prevalence plots in one picture
* all 16 R plots in one picture
* all districts' neighbours R plots all in one table
* districts: extend districts = aggregate the numbers of a district with all its neighbouring districts <=50km = new plot

## more pages
* overview table HTML generator, for arbitrary collection of (AGS1, AGS2, AGS3, Bundesland1, Bundesland2) codes, in JavaScript: https://covh.github.io/cov19de/pages/overview.html?loc=5316,5315,5122,5378,5120,Nordrhein-Westfalen&rows=3   

## styling, design, responsive
* refactor all used colors into a config file  
* create a more beautiful colorscheme  
* more responsive design for phone browsers, or small screens  
  * perhaps wrap all tables in an iframe which limits the width, so that plots get full screen width?  
  * in plots all fonts bigger 

## code safety & beauty
* use 'datacolumns' everywhere (instead of dropping some columns and hoping the remainder is what was expected). Search for TODO.
* 'dates' can be generated easily from 'datacolumns' so drop from all function interfaces; instead generate locally 
* refactor & beautify "centerday table" generation code, so it can be recycled by others more easily
* comments and explanations for each Python function (usually I do that but this time it was really fast prototyping; of course will do proper documentation BUT ONLY IF there's feedback & retweeting & public attention; why bother otherwise if I am the only code user --> in short: you please promote this project, thanks.)

## integration
* link to TU Dortmund project at each district and Bundesland.

## navigation
* some kind of navigation pane, perhaps floating on the page?
* interlink all the existing pages

## logging
* all done

---

# Done
what I moved from the above to here:  

* more columns: incidence - but must be smoothed over the past 5-7 days because of the strong weekend effects 
* more columns: R
* more analysis options for tables: sort tables by column headers (there is a javascript for that)
* more charts: "Was noch ganz toll wäre: eine Linien-Grafik die den Verlauf der täglichen Neuinfektionen für jedes Bundesland zeigt- also mit 16 Kurven." 
* link from Deutschland.html to bundeslaender_plots.html - solved now by integrating the whole table into Deutschland.html instead.
* the googlesheet table (momentary mortality / prevalence) = links from each row to each Landkreis in cov19de
* logging: remove base path from files in log

Much more was done, see e.g. [history.txt](history.txt) and repo commits.


