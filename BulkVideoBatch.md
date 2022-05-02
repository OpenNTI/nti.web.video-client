# Bulk Video Batch

From Josh you get:

1. The template task
2. The batch task
3. The tracking doc
4. Which batch of videos to use from the tracking doc

## Step 1: Setup the template

Josh will normally setup the template task as a subtask of the batch task. For the bulk upload it will need to be in the [templates](https://www.wrike.com/open.htm?id=853031086) folder. To do this, you'll need to manually re-create the template task and all its subtasks. You can do this by copy/pasting the body of all the tasks. The title of the template task will be replaced with the video title, and the sub task titles will be prefixed with the video title.

**Make sure and copy status in the appropriate workflow to the template tasks.**

## Step 2: Doctor the tracking doc

Export the tracking doc as a CSV and import it into another spread sheet. Edit the sheet down to just the header row, and the rows for the videos you need to create tasks for. There only needs to be a `title` and a `template` column. The `title` can either be an existing column or a combination of other columns. The `template` column is just the name of the template created in step 1.

## Step 3: Run the batch creation

Enter the permalink to the [templates folder](https://www.wrike.com/open.htm?id=853031086), the task for this batch of videos, the permalink to the [video sales folder](https://www.wrike.com/open.htm?id=177088220), and the CSV from step2. Then hit enter and rush over to wrike to see the tasks being created.
