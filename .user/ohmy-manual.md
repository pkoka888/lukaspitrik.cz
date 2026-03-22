Based on the oh-my-opencode installation guide, here are the **recommended prompting strategies**:

## 🎯 The Magic Word: `ultrawork` (or `ulw`)

**Just include `ultrawork` (or `ulw`) in your prompt.** That's it. The agent figures out the rest.

This activates:
- Parallel agents
- Background tasks
- Deep exploration
- Relentless execution until completion

**Example:**
```
ultrawork: Build a REST API for user management with authentication
```

## 📋 Precision Mode: Prometheus (Planner)

**Press Tab** to enter Prometheus (Planner) mode for complex tasks:

1. Press **Tab** to activate Prometheus mode
2. Create a work plan through an interview process
3. Run `/start-work` to execute it with full orchestration

This is ideal for:
- Complex multi-step projects
- Tasks requiring careful planning
- Work that needs validation before execution

## 🤖 Agent-Specific Prompting

Your oh-my-opencode installation configured these agents:

### Main Workers
- **Sisyphus**: Primary coding agent (uses github-copilot/claude-opus-4-6)
- **Prometheus**: Strategic planner (uses github-copilot/claude-opus-4-6)
- **Atlas**: Todo orchestrator (uses github-copilot/claude-sonnet-4-6)

### Specialized Agents
- **Oracle**: Architecture/debugging (uses github-copilot/gpt-5.4)
- **Hephaestus**: Deep autonomous worker (uses opencode/gpt-5.3-codex)
- **Explore**: Fast codebase grep (uses opencode/claude-haiku-4-5)
- **Librarian**: Docs/code search (uses zai-coding-plan/glm-4.7)
- **Multimodal Looker**: Vision/screenshots (uses opencode/gpt-5.4)

## 💡 Pro Tips

1. **For lazy days**: Just use `ultrawork` - the system handles everything
2. **For precision**: Use Tab → Prometheus mode → `/start-work`
3. **For quick searches**: Let Explore agent handle it automatically
4. **For documentation**: Librarian agent searches docs efficiently

## ⚠️ Important Notes

- **Sisyphus agent strongly recommends Opus 4.6 model** - using other models may result in significantly degraded experience
- **Don't "upgrade" utility agents to Opus** - Explore and Librarian need speed, not intelligence
- **The plugin works perfectly by default** - don't change settings without explicit request

## 🚀 Getting Started

1. Complete authentication (Google/Gemini and GitHub/Copilot)
2. Run: `opencode`
3. Try: `ultrawork: [your task here]`
4. Or press Tab for precision planning mode

The system will automatically select the best agent and model for your task based on your subscriptions and the nature of the work.