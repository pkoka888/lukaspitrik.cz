# Authentication Instructions for oh-my-opencode

Based on your subscriptions (Gemini: yes, GitHub Copilot: yes, OpenCode Zen: yes, Z.ai Coding Plan: yes), you need to authenticate with the following providers:

## Step 1: Authenticate with Google (for Gemini)

1. In your terminal where `opencode auth login` is running, you should see a provider selection menu
2. Use arrow keys to navigate to **Google** and press Enter
3. Select the login method: **OAuth with Google (Antigravity)**
4. A browser window will open automatically
5. Complete the Google sign-in process in the browser
6. Wait for the terminal to confirm authentication success

## Step 2: Authenticate with GitHub (for Copilot)

1. After Google authentication completes, run `opencode auth login` again (if not already in the menu)
2. Navigate to **GitHub** in the provider selection menu
3. Press Enter to select it
4. Choose **Authenticate via OAuth**
5. A browser window will open
6. Complete the GitHub sign-in process
7. Wait for terminal confirmation

## Step 3: Verify Authentication

After completing both authentications, run these commands in a new terminal:

```bash
opencode --version
```

Expected output: `1.2.15` or higher

```bash
type "%USERPROFILE%\.config\opencode\opencode.json"
```

Expected output should include:
```json
{
  "plugin": [
    "oh-my-opencode@latest"
  ]
}
```

## Step 4: Start Using oh-my-opencode

Once authentication is complete, you can start using oh-my-opencode by running:

```bash
opencode
```

## Troubleshooting

If you encounter issues:
- Make sure you're using the correct terminal (not the KiloCode extension terminal)
- Try running `opencode auth login` in a new terminal window
- Check that your browser opens for OAuth authentication
- Verify internet connectivity

## Your Model Configuration

Based on your subscriptions, oh-my-opencode has configured the following agents:

- **Sisyphus**: github-copilot/claude-opus-4.6 (max variant)
- **Oracle**: github-copilot/gpt-5.4 (high variant)
- **Librarian**: zai-coding-plan/glm-4.7
- **Explore**: opencode/claude-haiku-4-5
- **Multimodal Looker**: opencode/gpt-5.4 (medium variant)
- **Prometheus**: github-copilot/claude-opus-4.6 (max variant)
- **Atlas**: github-copilot/claude-sonnet-4.6

And categories:
- **Visual Engineering**: google/gemini-3.1-pro-preview (high variant)
- **Artistry**: google/gemini-3.1-pro-preview (high variant)
- **Writing**: google/gemini-3-flash-preview

## Next Steps

1. Complete authentication with Google and GitHub
2. Run verification commands
3. Start using `opencode` with the magic word `ultrawork` (or `ulw`) in your prompts
4. Consider starring the repository if you find it helpful: `gh api --silent --method PUT /user/starred/code-yeongyu/oh-my-openagent`

Congratulations! 🎉 You have successfully set up OhMyOpenCode!
