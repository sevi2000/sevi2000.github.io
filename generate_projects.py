import requests
import json
import os

# GitHub username
username = "sevi2000"
base_url = "https://api.github.com"

# Get the GitHub token from environment variables
token = os.getenv("GITHUB_TOKEN")
headers = {"Authorization": f"token {token}"}

# List to store the final result
output_data = []

# Get all repositories for the user
response = requests.get(f"{base_url}/users/{username}/repos", headers=headers)
if response.status_code != 200:
    print("Failed to fetch repositories")
    print(f"Response: {response.json()}")
    exit()

repos = response.json()

# Loop through each repository
for repo in repos:
    repo_name = repo["name"]
    repo_owner = repo["owner"]["login"]
    repo_description = repo["description"]
    repo_html_url = repo["html_url"]

    # Construct image URL (assuming icon.png is in the root of the main branch)
    image_url = f"https://raw.githubusercontent.com/{repo_owner}/{repo_name}/main/icon.png"

    # Check if the repo has at least one release
    release_response = requests.get(f"{base_url}/repos/{repo_owner}/{repo_name}/releases/latest", headers=headers)
    
    if release_response.status_code == 200:  # Proceed if there is a release
        release_data = release_response.json()
        latest_release_link = release_data["html_url"]
        
        # Get the first download link from the assets if available
        download_link = release_data["assets"][0]["browser_download_url"] if release_data["assets"] else ""
        
        # Collect topics (tags) if available
        tags_response = requests.get(f"{base_url}/repos/{repo_owner}/{repo_name}/topics", 
                                     headers={**headers, "Accept": "application/vnd.github.mercy-preview+json"})
        tags = tags_response.json().get("names", [])
        
        # Prepare tag objects
        tag_objects = [{"tag_text": tag, "tag_link": f"https://github.com/topics/{tag}"} for tag in tags]
        
        # Add the repo info to the output list
        output_data.append({
            "id": len(output_data) + 1,
            "name": repo_name,
            "description": repo_description,
            "latest_release_link": latest_release_link,
            "download_link": download_link,
            "image": image_url,
            "tags": tag_objects
        })

# Save the output data to a JSON file
with open("projects.json", "w") as f:
    json.dump(output_data, f, indent=4)

print("projects.json generated successfully.")
