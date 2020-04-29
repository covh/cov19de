# TODO
ideas for the future, possible extensions, etc. - please [open an issue](https://github.com/covh/cov19de/issues), to add more ideas. Thanks a lot.

Anything here is going to happen probably ONLY IF there is feedback, attention, donations, etc. ...

## analysis options
* sort tables by column headers (there is a javascript for that)

## more columns
* incidence - but must be smoothed over the past 5-7 days because of the strong weekend effects 
* coloring prevalence per table column (perhaps implement as additional initial data columns?)

## more rows

### extend regions
* aggregate the numbers of district with all its neighbouring districts <=50km

### Bundesland
* show also the districts AROUND that Bundesland (in table at the top, but still linked to other Bundesland pages?)

### styling, design, responsive
* refactor all used colors into a config file
* create a more beautiful colorscheme
* more responsive design for phone browsers, or small screens

### code safety & beauty
* use 'datacolumns' everywhere (instead of dropping some columns and hoping the remainder is what was expected). Search for TODO.
* 'dates' can be generated easily from 'datacolumns' so drop from all function interfaces; instead generate locally 

### integration
* the googlesheet table (momentary prevalence / mortality) is going to have links too, from each row to each Landkreis