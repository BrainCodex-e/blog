# DevOps

![DevOpt — the optimistic deploy daemon](../assets/devopt-infinity.svg){ width="720" }

Welcome to the DevOps corner—where we automate the boring parts, document the scary parts, and politely bribe the deploy gremlins with green checkmarks.

## Widgets

<div class="grid cards" markdown>

-   ![Docker](../assets/docs/assets/dcoker-svg.png){ width="160" }
	**[Docker](docker.md)**

-   ![Python venv](../assets/widget-python.svg){ width="160" }
	**[Python venv](venv.md)**

</div>

## DevOpt (our mascot)

**DevOpt** is the optimistic daemon that lives in the CI logs.

- If tests pass: it purrs quietly.
- If tests fail: it whispers “works on my machine” and vanishes.

## Practical checklist

### CI

- Lint + basic checks
- Unit tests
- Build artifacts are reproducible

### CD

- One-command deploy
- Rollback plan you’ve actually tried

### Observability

- Logs you can search
- Metrics you can alert on
