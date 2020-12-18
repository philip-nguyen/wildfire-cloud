# Wildfire Prediction Platform Cloud Solution

A wildfire prediction software suite that allows a user to view wildfire prediction, detection and analysis features. Implemented using React, Firebase, MySQL and Tableau.

## Wildfire Analysis
The data analysis part of the project has some components communicating to provide the user with the information on wildfire data. This feature is implemented with Tableau and MySQL

![wildfire-analysis](https://user-images.githubusercontent.com/55335418/102584584-9783ee80-40bb-11eb-9c19-c3d142d4c085.png)


## Wildfire Detection
This feature is used to detect wildfires from satellite imagery from the GOES-17 satellite. It makes API calls to a machine learning module from another project. This API returns the image with bounding boxes and a list of information for the entities detected.

Detection Form
![detection-form](https://user-images.githubusercontent.com/55335418/102584769-f2b5e100-40bb-11eb-8bbf-fec348ae791f.png)

Detection Response
![detection-response](https://user-images.githubusercontent.com/55335418/102585165-bc2c9600-40bc-11eb-81ca-ad079ec2b1de.png)

## Wildfire Prediction
This feature is used to view different statistics and data sets using Tableau that lets the user see predicitve factors regarding wildfires.

![wildfire-prediction](https://user-images.githubusercontent.com/55335418/102585310-0ada3000-40bd-11eb-8d58-c5aa26c82d7c.png)


# Git workflow

## Create your own branch

`git pull main`

`git checkout -b name-component_name`

for example `git checkout -b philip-fire_detection`

## After making changes:

`git add .`

`git commit -m 'commit message'`

`git push origin branch-name`

## Merging to main:

`git checkout main`

`git pull origin main`

`git merge branch-name`

`git push origin main`

