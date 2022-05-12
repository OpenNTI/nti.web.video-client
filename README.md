# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
## Local Setup

Node: 16


## Environment Variables

You can create a `.env` file as a sibling to this readme.

WRIKE_CLIENT_ID
: The ID of the wrike app.

WRIKE_CLIENT_SECRET
: The secret key of the wrike app.

GOOGLE_CLIENT_ID
: The ID of the google app needs `./auth/spreadsheets.readonly` and `./auth/documents.readonly` scopes

GOOGLE_CLIENT_SECRET
: The secret key of the google app
## Development

All of the necessary process for local development will be started by the start script.

```sh
$npm run start
```

Open up [http://localhost:3333](http://localhost:3333) and you should be ready to go!
## Deploying

Before you can deploy, you'll need to do some setup with AWS:

- First [install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- Then [follow the Architect setup instructions](https://arc.codes/docs/en/guides/get-started/detailed-aws-setup).

If you make it through all of that, you're ready to deploy!

1. build the app for production:

   ```sh
   $ npm run build
   ```

2. Deploy with `arc`

   ```sh
   $ arc deploy production
   ```

You're in business!

# Teleprompter Script Generator
Steps for generating teleprompter scripts from a tracking doc.
1. Complete all steps for project setup, then run `npm start`
2. Navigate to `localhost:3333` and login with Google Account
3. You should be redirected to a page titled 'Video Tooling'. Click the button labeled: 'Teleprompter Script Generator.'
4. You are now at `localhost:3333/tsg`. The page contains four text fields:
	- **Spreadsheet URL** - the link to the tracking doc.
	- **Sheet Name (optional)** - the name of the Sheet/Page to collect data from. If a sheet name is not supplied, the value **"Master Review Tracker"** will be used.
	- **Starting Row (optional)** - allows you to start collecting links from a row other than the first. If a starting row is not provided, the script will start collecting data at row **5**.
	- **Data Column (optional)** - allows you to specify the column to collect information from. If a data column is not specified, the script will collect links from column **'I'**.
5. Once you have specified the parameters, click the 'Generate' button. This starts the data collection process, which might take several minutes.
6. Once the script has finished running, you are redirected to a new page containing the results. You can download a specific file by clicking on the file's name in the results page. By clicking the 'Download All' button, you can download a zipped folder containing all generated files, as well two additional files containing metadata for all of the generated scripts.

# Script Asset Inventory
This is a script for creating an inventory report for stock images used in a script. The script takes in a link to a tracking doc, collects all of the scripts in the tracking doc, and then collects the asset links from each script. The function creates a downloadable CSV file containing data about each of the assets.
1. Complete all steps for project setup, then run `npm start`
2. Navigate to `localhost:3333` and login with Google Account
3. You should be redirected to a page titled 'Script Asset Inventory'. Click the button labeled: 'Teleprompter Script Generator.'
4. You are now at `localhost:3333/tasks/script-asset-inventory`. The page contains four text fields:
  - **Spreadsheet URL** - the link to the tracking doc.
  - **Sheet Name (optional)** - the name of the Sheet/Page to collect data from. If a sheet name is not supplied, the value **"Master Review Tracker"** will be used.
  - **Starting Row (optional)** - allows you to start collecting links from a row other than the first. If a starting row is not provided, the script will start collecting data at row **5**.
  - **Data Column (optional)** - allows you to specify the column to collect information from. If a data column is not specified, the script will collect links from column **'I'**.
5. Once you have specified the parameters, click the 'Generate' button. This starts the data collection process, which might take several minutes.
6. Once the script has finished running, you can download the results using the 'Download' button.
