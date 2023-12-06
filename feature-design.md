# Design Document Template
September 4th 20XX

## OBJECTIVE
To give the user the option of updating an existing setlist. 

## BACKGROUND 
Currently, once a setlist is saved, it cannot be changed. Though a new version can be saved, this will make tracking which is the latest version for that date and venue a problem.

This feature would require:
- listing existing setlists
- selecting a setlist to edit
- detecting if given venue and date match an existing setlist and warning the user if it does
- the setlist is only saved if the user clicks saved - the save button can be greyed out if no changes have been made

## TECHNICAL DESIGN

There should be a new component (perhaps a drop-down list) which lists exising setlists in order of date or venue. 

If an existing setlist is selected, it will have an id (automatically added by airtable when the setlist was created). New setlists don't have such an id. That difference can be used to decide whether a `PUT` or a `POST` request is sent when the save button is clicked.

## CAVEATS

Since this is a webapp, it's not impossible for two band members to be editing the same setlist. Only the final save will be available.

