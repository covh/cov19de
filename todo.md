# TODO
ideas for the future, possible extensions, etc. - please [open an issue](https://github.com/covh/cov19de/issues), to add more ideas. Thanks a lot.

Anything here is going to happen probably ONLY IF there is feedback, attention, donations, etc. ...

## tables

### more columns
* mortality - but for that I need one more dataset. Not available at the moment. Does the RKI provide time series of that? Please find out thanks.
* total number of days when incidence was above 500/week/million ?
* error / confidence intervall for the calculated R_eff
  * How to do that? Suggestions please. (For the currently used Reff_4_7(daily) code, see this tweet https://twitter.com/drandreaskruger/status/1256776383642165253 )
  * My current averaging window size is 7 days. What about this: I could do smoothing by 3 and 5 and 7 and 9 and 11 days, and calculate the 4-days-difference quotient for each of those. That would give 5 different estimates for R_eff (which however are increasingly less "fresh / uptodate"). Perhaps that could help to assess the accuracy of the estimate? [Opinions please](https://github.com/covh/cov19de/issues). Thanks.
* reproduction number experiments:
  * Reff_7_4(cumulative) additional to (or instead of) Reff_4_7(daily) 
    * because the latter has overlapping smoothing windows = so it UNDER-estimates the true Reff !
  * but first try out other variants, and study the differences in smaller districts  
* current 7-days-incidence-versus-prevalence to cancel out the population completely --> that might be called "[transmission rate](https://www.google.com/search?ei=WGO6XvzIHsmZsAfs6JzACw&q=%22incidence+divided+by+prevalence%22+epidemiology)" ?


### existing columns - modifications / extensions
* coloring of the prevalence column
* *perhaps* instead of **expectation day** show "how man days *ago* was expectation day", i.e. max(i) - expectationday[i] ?
 
### more tables
* wider table = will show better the gradient in expectationdays of max-min = 26 days 
* 7-days-incidence-per-million above/below 500, binary observable and without smoothing. Number in cell: weekly-incidence
  * same for 300 and 350
* "top 10" (or rather "bottom 10") for ALL of the measures. Quick overview where are all the "red districts". No need for table sorting. But only show worst cases. 
  
### more rows - Bundesland
* show also the districts 50km AROUND that Bundesland (below the table at the top, but still linked to other Bundesland pages?)


## plots charts graphics

### more charts

Bundesländer (states):

* all 16 R plots in one picture
* all 16 prevalence plots in one picture
* all 16 incidence plots in one picture

OR:

* not absolute but relative case numbers (i.e. divided by population), and: same y-axis range for all 16 plots; helps to better compare the regions in Germany 


Kreise (districts):
 
* all districts' neighbours R plots all in one table
* districts: extend districts = aggregate the numbers of a district with all its neighbouring districts <=50km = new plot
* plot DailyDeaths-versus-TotalDeaths AND DailyCases-versus-totalCases (i.e. incidence versus prevalence, as the population cancels itself), see https://aatishb.com/covidtrends/ and the [source code repo](https://github.com/aatishb/covidtrends/blob/master/vue-definitions.js#L321-L324)
* progression of the expectationday over time


### existing plots
* in Kreise plots, also show the expectationday green bar of Bundesland and of Germany. And in Bundesland also show the Germany expectationday.


## pages

### more pages
* overview table HTML generator, for arbitrary collection of (AGS1, AGS2, AGS3, Bundesland1, Bundesland2) codes, in JavaScript: https://covh.github.io/cov19de/pages/overview.html?loc=5316,5315,5122,5378,5120,Nordrhein-Westfalen&rows=3 

### navigation
* some kind of navigation pane, perhaps floating on the page?
* interlink all the existing pages

## more datasets
* age structure per district, [2011 data](https://www.govdata.de/daten/-/details/stlae-service-12111-21-02-4)
* https://funkeinteraktiv.b-cdn.net/history.v4.csv ?



## usability design UX

### more comfort
* also show the aggregating measures (e.g. R_4_7, 14-days-incidence, ...) at each districts plot. 
  * Idea: Perhaps just repeat the table, but only that one line? 
     * Or perhaps even including all 50km-neighbouring areas perhaps?

### styling, design, responsive
* refactor all used colors into a config file  
* create a more beautiful colorscheme  
* in plots all fonts bigger 
* amazing tables JS modifier script: datatables.net suggested [here](https://www.heise.de/forum/Telepolis/Kommentare/CoronaVirus-Landkreise-brauchen-nun-Aufmerksamkeit/Ergaenzungen/posting-36710135/show/)

### language
* consistency British English <-> American English
  * I am not an expert in that, please YOU make a list of such inconsistencies. OR: fork the repo, directly correct typos, and pull request. Thanks.
* translations into other languages, e.g. German
  * as many people speak English well enough (and e.g. only 2.9% humans speak German), this would happen only if there is good funding for that. See [about.html#support](https://covh.github.io/cov19de/pages/about.html#support).

## code repo collaboration manuals

### code safety & beauty
* use 'datacolumns' everywhere (instead of dropping some columns and hoping the remainder is what was expected). Search for TODO.
* 'dates' can be generated easily from 'datacolumns' so drop from all function interfaces; instead generate locally 
* refactor & beautify "expectationday table" generation code, so it can be recycled by others more easily, and becomes more versatile, and recyclable
* comments and explanations for each Python function (usually I do that but this time it was really fast prototyping; of course will do proper documentation BUT ONLY IF there's feedback & retweeting & public attention; why bother otherwise if I am the only code user --> in short: you please promote this project, thanks.). Once that's done, submit the project to https://coronavirustechhandbook.com/

### documentation, explanation
* Explain how the table coloring is created, more verbose. That the averaging leads to edge days uncolored. 
* move the useful synthetic data [{dummykreis, dummyland}](https://covh.github.io/cov19de/pages/Dummyland.html) out of the dataset into a documentation page


## integration
* Germany map with colored districts.
  * interesting [suggestion](https://twitter.com/LangTobias/status/1264067644086456322): colorcoded Voronoi diagram of district centers
* same as 294/401 table scraping get_wikipedia_landkreise_table() also for Liste_der_kreisfreien_Städte_in_Deutschland 
* a daily report generated automatically, with the current hotspots, and their measures? Perhaps also as spoken language file?

## automation, flow control
* (generous) timeout for downloading the googlesheet - try again an hour later? Early evening it was stuck for many minutes - at night time, it went well again.


## logging
* all done

## how to support the project
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
* integration: link to TU Dortmund project at each district
* integration: Wikipedia pages for most districts. missing probably only "kreisfreie städte"?
* more comfort: fix the table header row - thanks for idea to heise forum
* responsive: more responsive design for phone browsers, or small screens. perhaps wrap all tables in an iframe which limits the width, so that plots get full screen width?  
* how to support the project: [other than](https://www.heise.de/forum/Telepolis/Kommentare/CoronaVirus-Landkreise-brauchen-nun-Aufmerksamkeit/Vielen-Dank-Kann-nicht-oft-genug-gepostet-werden/posting-36638281/show/) cryptocurrencies --> now: [github sponsors](https://github.com/sponsors/covh) with creditcard & paypal
* existing plots: PREVIOUSLY: the green bar is only marking a specific DAY, but the HEIGHT of the bar is unused - it could represent something, e.g. the max value of the 1 week average. Or what else ... any suggestions?  If there is no good idea, better turn the bar into a large DOT - because one user got confused that the green bar also has a height. NOW: green triangle pointing down at the "expectation day"

Much more was done, see e.g. [history.txt](history.txt) and repo commits.


--- 

# Other sites, projects, APIs
Worldwide data - Python coronavirus-tracker-api https://github.com/ExpDev07/coronavirus-tracker-api

    curl https://coronavirus-tracker-api.herokuapp.com/v2/locations | json_pp | grep Germany --after-context 20 --before-context 20
    curl https://coronavirus-tracker-api.herokuapp.com/v2/locations/120?timelines=1 | json_pp
    