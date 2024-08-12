# A Swedish Club Theme
Built to be consumed by Mantine Provider

# Updating an npm Package in GitHub
Follow these steps to update your npm package and ensure everything is working correctly.

## Step-by-Step Guide
### 1. Make required changes to the theme.
### 2. Manually update the Version in package.json, following semantic versioning.

Example:
{
  "name": "common-theme",
  "version": "1.0.1", // Update this line
  ...
}

then run npm install, which will also update the versions in package-lock.json.

### 3. Commit and Push Changes
Push the changes to the main branch:

### 4. Create a New Release on GitHub
Go to Themes repository on GitHub.
Click on the Releases tab.
Click on "Draft a new release".
In the Tag version field, enter the new version number (e.g., v1.0.1).
In the Release title field, enter a meaningful title for the release (e.g., Version 1.0.1).

Click Publish release.

###5. Monitor Workflow Actions
After publishing the release, go to the Actions tab in your repository.
Look for the workflow that started automatically after your release.
