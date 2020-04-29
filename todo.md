# TODO
ideas for the future, possible extensions, etc. - please [open an issue](https://github.com/covh/cov19de/issues), to add more ideas. Thanks a lot.

Anything here is going to happen probably ONLY IF there is feedback, attention, donations, etc. ...

## more columns
* incidence - but must be smoothed over the past 5-7 days because of the strong weekend effects 
* coloring prevalence per table column (perhaps implement as additional initial data columns?)

## more rows

### extend regions
* aggregate the numbers of district with all its neighbouring districts <=50km

### Bundesland
* show also the districts AROUND that Bundesland (in table at the top, but still linked to other Bundesland pages?)

## more analysis options for tables
* sort tables by column headers (there is a javascript for that)

## more charts
* "Super, war bestimmt ne Menge Arbeit. Was noch ganz toll wäre: eine Linien-Grafik die den Verlauf der täglichen Neuinfektionen für jedes Bundesland zeigt- also mit 16 Kurven."

## styling, design, responsive
* refactor all used colors into a config file
* create a more beautiful colorscheme
* more responsive design for phone browsers, or small screens

## code safety & beauty
* use 'datacolumns' everywhere (instead of dropping some columns and hoping the remainder is what was expected). Search for TODO.
* 'dates' can be generated easily from 'datacolumns' so drop from all function interfaces; instead generate locally 
* refactor & beautify "centerday table" generation code, so it can be recycled by others more easily
* comments and explanations for each Python function (usually I do that but this time it was really fast prototyping; of course will do proper documentation BUT ONLY IF there's feedback & retweeting & public attention; why bother otherwise if I am the only code user --> in short: you please promote this project, thanks.)

## integration
* the googlesheet table (momentary prevalence / mortality) is going to have links too, from each row to each Landkreis

## navigation
* some kind of navigation pane, perhaps floating on the page?
* interlink all the existing pages
* link from Deutschland.html to bundeslaender_plots.html

## logging
* remove base path from files in log