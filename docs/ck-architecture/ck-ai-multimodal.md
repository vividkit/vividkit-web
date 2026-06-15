# /ck:ai-multimodal — Media Analysis and Generation

## Authoritative Flow

```text
Step 1: Verify provider keys and dependencies.
Step 2: Detect intent: analyze, transcribe, extract, image, video, speech, music.
Step 3: Choose Gemini, OpenRouter, or MiniMax route.
Step 4: Pick model/provider defaults or honor explicit model/provider.
Step 5: Preflight large media with compression, resize, or chunking.
Step 6: Execute the selected CLI/API path.
Step 7: Save outputs under project assets or requested output.
Step 8: Organize artifacts and return concise result paths.
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ck:ai-multimodal |
| Conditional | ck:project-organization |
| Optional | media optimizer, document converter |

## Sub-agents

No dedicated sub-agent is required. Main agent routes to local scripts and provider APIs.

## Mode Selection

| Mode | Trigger | Behavior |
|------|---------|----------|
| Setup | key/dependency check | Verify provider availability |
| Analyze | files + analyze task | Extract visual/audio/document understanding |
| Transcribe | audio/video | Timestamped transcript |
| Extract | files + structured format | JSON/CSV/markdown extraction |
| Image | generate task | Google, OpenRouter, or MiniMax image route |
| Video | generate-video | Veo or MiniMax video route |
| Speech/Music | MiniMax tasks | Generate audio assets |
| Preflight | large media | Resize/compress/split before API call |

## Complexity Routing

Long audio/video should be chunked. Large files use file upload paths when available. Prompt-only providers cannot edit source images.

## Hard Gate

At least one provider key is required. Non-generation tasks require files. Generation tasks require a prompt. Google free tier does not cover current image/video generation, so do not retry those failures blindly.
